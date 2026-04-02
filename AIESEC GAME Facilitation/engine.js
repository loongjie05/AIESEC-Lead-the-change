/* ===== ASSET MAP ===== */
const A = {
    bg: { meeting: 'assets/bg_meeting_room.png', cafeteria: 'assets/bg_cafeteria.png', venue: 'assets/bg_event_venue.png' },
    ch: {
        lj: 'assets/lj_neutral.png', lj_sweat: 'assets/lj_sweat.png', lj_happy: 'assets/lj_happy.png',
        meiling: 'assets/meiling_neutral.png', meiling_sad: 'assets/meiling_sad.png',
        arjun: 'assets/arjun_neutral.png',
        siti: 'assets/siti_neutral.png',
        weijie: 'assets/weijie_neutral.png',
        thea: 'assets/Thea_neutral.png',
        none: ''
    }
};

/* ===== STATE ===== */
let S = { ttp: 0, round: null, scenes: [], si: 0, typing: false, timer: null, ctx: null, phase: 'title', flags: {} };

/* ===== AUDIO ===== */
function initAudio() { if (!S.ctx) S.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
function blip() {
    try {
        if (!S.ctx) return;
        if (S.ctx.state === 'suspended') S.ctx.resume();
        let o = S.ctx.createOscillator(), g = S.ctx.createGain();
        o.type = 'square'; o.frequency.value = 420 + Math.random() * 60;
        g.gain.setValueAtTime(0.035, S.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, S.ctx.currentTime + 0.04);
        o.connect(g); g.connect(S.ctx.destination); o.start(); o.stop(S.ctx.currentTime + 0.04);
    } catch (e) { }
}
function boom() {
    try {
        if (!S.ctx) return;
        let o = S.ctx.createOscillator(), g = S.ctx.createGain();
        o.type = 'sawtooth'; o.frequency.setValueAtTime(220, S.ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(10, S.ctx.currentTime + 0.35);
        g.gain.setValueAtTime(0.25, S.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, S.ctx.currentTime + 0.35);
        o.connect(g); g.connect(S.ctx.destination); o.start(); o.stop(S.ctx.currentTime + 0.35);
    } catch (e) { }
}

/* ===== RENDER ===== */
function $(id) { return document.getElementById(id); }

function go() {
    initAudio(); $('title').classList.remove('on'); $('gs').classList.add('on');
    $('hud').style.display = 'block'; S.ttp = 0; updHud();
    load('prologue', STORY.prologue);
}

function load(id, scenes, phase) {
    S.round = id; S.scenes = scenes; S.si = 0; S.phase = phase || 'dialogue'; render();
}

function render() {
    // Skip scenes based on flags
    while (S.si < S.scenes.length) {
        let s = S.scenes[S.si];
        // skipIf: skip this scene when the flag IS set
        if (s.skipIf && S.flags[s.skipIf]) { S.si++; continue; }
        // showIf: skip this scene when the flag is NOT set
        if (s.showIf && !S.flags[s.showIf]) { S.si++; continue; }
        break;
    }
    if (S.si >= S.scenes.length) { onEnd(); return; }
    let sc = S.scenes[S.si];

    // If scene has an alternate version when a flag is set, use it
    if (sc.altIf && S.flags[sc.altIf.flag]) {
        sc = Object.assign({}, sc, sc.altIf);
    }

    // Actions
    if (sc.act === 'ROUND') { showBanner(sc.title); load(sc.target, STORY.rounds[sc.target].scenes); return; }

    // Background
    if (sc.bg) $('gs').style.backgroundImage = "url('" + A.bg[sc.bg] + "')";

    // Characters
    let cL = $('cL'), cR = $('cR');
    if (sc.cL !== undefined) {
        if (sc.cL === 'none') { cL.classList.remove('on'); }
        else { cL.src = A.ch[sc.cL] || A.ch.lj; cL.classList.add('on'); }
    }
    if (sc.cR !== undefined) {
        if (sc.cR === 'none') { cR.classList.remove('on'); }
        else { cR.src = A.ch[sc.cR] || A.ch.lj; cR.classList.add('on'); }
    }

    // Highlight speaker
    cL.classList.remove('talk', 'dim'); cR.classList.remove('talk', 'dim');
    if (sc.spk && sc.spk !== 'Narrator') {
        let lKey = sc.cL || ''; let rKey = sc.cR || '';
        let spkLow = sc.spk.toLowerCase().replace(/[\s_]/g, '');
        if (lKey.toLowerCase().replace(/[\s_]/g, '').includes(spkLow)) { cL.classList.add('talk'); if (cR.classList.contains('on')) cR.classList.add('dim'); }
        else if (rKey.toLowerCase().replace(/[\s_]/g, '').includes(spkLow)) { cR.classList.add('talk'); if (cL.classList.contains('on')) cL.classList.add('dim'); }
    } else { if (cL.classList.contains('on')) cL.classList.add('dim'); if (cR.classList.contains('on')) cR.classList.add('dim'); }

    // Text
    $('spk').textContent = sc.spk || 'Narrator';
    $('dtxt').textContent = '';
    $('nxt').style.display = 'none';
    typeIt(sc.txt, 0);
}

function typeIt(txt, i) {
    S.typing = true;
    if (i < txt.length) {
        $('dtxt').textContent += txt[i];
        if (txt[i] !== ' ') blip();
        S.timer = setTimeout(() => typeIt(txt, i + 1), 28);
    } else {
        S.typing = false;
        $('nxt').style.display = 'block';
    }
}

function adv() {
    if (S.typing) { clearTimeout(S.timer); $('dtxt').textContent = S.scenes[S.si].txt; S.typing = false; $('nxt').style.display = 'block'; return; }
    if ($('chs').classList.contains('on') || $('ins').classList.contains('on')) return;
    S.si++; render();
}

function onEnd() {
    if (S.phase === 'consequence') { showInsight(); return; }
    if (S.phase === 'ending') { showEndScreen(); return; }
    showChoices();
}

/* ===== CHOICES ===== */
function showChoices() {
    let rd = STORY.rounds[S.round];
    S.phase = 'choice';
    for (let i = 0; i < 3; i++) $('c' + i).textContent = rd.choices[i].txt;
    $('chs').classList.add('on');
}

function pick(i) {
    if (!$('chs').classList.contains('on')) return;
    $('chs').classList.remove('on');
    let rd = STORY.rounds[S.round], ch = rd.choices[i];
    S.ttp += ch.pts; updHud();
    // Apply any flags from this choice
    if (ch.setFlags) { Object.assign(S.flags, ch.setFlags); }
    load(S.round, ch.con, 'consequence');
}

/* ===== INSIGHT ===== */
function showInsight() {
    boom(); flash(); shake();
    let rd = STORY.rounds[S.round];
    $('ins-p').textContent = rd.insight.title;
    $('ins-d').textContent = rd.insight.text;
    $('ins').classList.add('on');
}

function nextAfterInsight() {
    $('ins').classList.remove('on');
    let next = parseInt(S.round) + 1;
    if (next <= 12) { showBanner(STORY.rounds[next].title); load(next, STORY.rounds[next].scenes); }
    else { showFinalEnding(); }
}

/* ===== ENDING ===== */
function showFinalEnding() {
    let e;
    if (S.ttp >= 28) e = STORY.endings.happy;
    else if (S.ttp >= 16) e = STORY.endings.neutral;
    else e = STORY.endings.bad;
    load('ending', e.scenes, 'ending');
}

function showEndScreen() {
    $('gs').classList.remove('on'); $('hud').style.display = 'none';
    let e;
    if (S.ttp >= 28) e = STORY.endings.happy;
    else if (S.ttp >= 16) e = STORY.endings.neutral;
    else e = STORY.endings.bad;
    $('end-t').textContent = e.title; $('end-t').className = e.cls;
    $('end-s').textContent = S.ttp;
    $('end-txt').textContent = e.desc;
    $('end-quote').textContent = e.quote;
    $('end').classList.add('on');
}

/* ===== FX ===== */
function flash() { let f = $('flash'); f.classList.remove('fla'); void f.offsetWidth; f.classList.add('fla'); }
function shake() { let g = $('game'); g.classList.remove('shk'); void g.offsetWidth; g.classList.add('shk'); }
function updHud() { $('ttp-val').textContent = S.ttp; }
function showBanner(t) { let b = $('round-banner'); b.textContent = t; b.classList.add('show'); setTimeout(() => b.classList.remove('show'), 3000); }

/* ===== INIT (SLOW COMPUTER SAFE) ===== */
function init() {
    document.addEventListener('keydown', e => {
        if (e.key === ' ' || e.key === 'Enter') adv();
        if (e.key === '1') pick(0); if (e.key === '2') pick(1); if (e.key === '3') pick(2);
    });
}
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', init);
setTimeout(init, 1000);
setTimeout(init, 3000);
setTimeout(init, 5000);
