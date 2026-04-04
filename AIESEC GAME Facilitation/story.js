const STORY = {
    prologue: [
        { bg: 'meeting', cL: 'none', cR: 'none', spk: 'Narrator', bgm: 'calm', txt: "AIESEC in UTAR office. Evening. Loong Jie stands alone in the meeting room, looking at a whiteboard that reads 'iMYV Department — 26.27.'" },
        { cL: 'lj', spk: 'Narrator', txt: "Loong Jie had dreamed of this moment. After weeks of applications, interviews, and sleepless nights preparing his vision presentation, he finally received the news." },
        { spk: 'Loong Jie', txt: "I can't believe I actually got it. Director. Me." },
        { spk: 'Loong Jie', txt: "I've never led anything before — not a club, not a project, not even a group assignment where I was actually in charge." },
        { spk: 'Loong Jie', txt: "But I applied because I believe in what AIESEC does. I want Malaysian youth to experience volunteering that changes their lives." },
        { spk: 'Narrator', txt: "He looks at the whiteboard and writes: 'Goal: Open a project. Get 40 volunteers. Get AUTAR an award.'" },
        { spk: 'Loong Jie', txt: "The timeline is tight. We have only a few months to plan everything — school partnerships, project agenda, budget, volunteer interviews... the whole thing." },
        { spk: 'Loong Jie', txt: "And I'm about to meet my team for the first time. People I'll be leading. People who are counting on me." },
        { cL: 'lj_sweat', spk: 'Loong Jie', sfx: 'tension', txt: "...I have no idea what I'm doing." },
        { cL: 'lj', spk: 'Narrator', txt: "And so begins Loong Jie's journey — not just to deliver a project, but to discover what it truly means to lead." },
        { spk: 'Narrator', act: 'ROUND', target: 1, title: 'Round 1: The First Team Meeting', txt: "Chapter 1 — The First Team Meeting" }
    ],
    rounds: {
        1: {
            title: "Round 1: The First Team Meeting",
            scenes: [
                { bg: 'meeting', cL: 'lj', cR: 'none', spk: 'Narrator', txt: "AIESEC meeting room. Loong Jie stands at the front. Four people sit around the table — Mei Ling, Arjun, Siti, and Wei Jie. They look at Loong Jie expectantly." },
                { spk: 'Loong Jie', txt: "Hey everyone! Thanks for coming. I'm Loong Jie, and I'll be your Director for the iMYV department this term. I'm really excited to work with all of you!" },
                { spk: 'Narrator', sfx: 'tension', txt: "Polite smiles. Awkward silence." },
                { spk: 'Loong Jie', txt: "So... let me start by—" },
                { cR: 'arjun', spk: 'Arjun', txt: "So what exactly are we going to be doing? Like, what's the project? How are we finding school partners?" },
                { cR: 'meiling', spk: 'Mei Ling', txt: "Yeah, I'm... I'm also not very sure what iMYV is about. What does the agenda planning involve?" },
                { cR: 'weijie', spk: 'Wei Jie', txt: "I read the description, but it was pretty vague. What's our actual scope and budget?" },
                { cR: 'siti', spk: 'Siti', txt: "Maybe we can do introductions first? I'd love to know everyone." },
                { cR: 'none', cL: 'lj_sweat', spk: 'Loong Jie', sfx: 'gasp', txt: "(I feel the pull in two directions — the team wants connection, but also clarity. How do I start this?)" },
                { cL: 'lj', spk: 'Narrator', txt: "This is Loong Jie's first moment as a leader. How he opens this meeting will set the tone for everything that follows." }
            ],
            choices: [
                {
                    pts: 3, txt: "\"Great question, Siti! Let's start with intros — why you joined and what you hope to experience. I'll go first. Including the fact that this is my first time leading.\"",
                    con: [
                        { bg: 'meeting', cL: 'lj', cR: 'siti', spk: 'Loong Jie', txt: "Great question, Siti! Before we talk about the project, let's start with something more important — us." },
                        { spk: 'Loong Jie', txt: "I want each of you to share your name, why you joined AIESEC, and what you hope to experience this term. I'll go first." },
                        { spk: 'Loong Jie', txt: "I'll be honest — this is my first time leading a team. I don't have all the answers. But I really believe in what we're going to do." },
                        { spk: 'Loong Jie', txt: "I want us to figure it out together. I'm here to learn alongside you." },
                        { cR: 'meiling', spk: 'Mei Ling', sfx: 'relief', txt: "That... actually makes me feel better. I thought I was the only one who was nervous." },
                        { cR: 'arjun', spk: 'Arjun', txt: "I joined because I want real social impact. Not just theory — I want to DO something." },
                        { cR: 'siti', spk: 'Siti', txt: "I joined because I wanted a family in university. Somewhere I belong." },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "I want to develop real-world skills. Practical experience that matters." },
                        { cL: 'lj', cR: 'none', spk: 'Narrator', sfx: 'warm', txt: "The meeting runs long, but everyone leaves feeling connected. Team Trust established. Members feel psychologically safe." }
                    ]
                },
                {
                    pts: 1, txt: "\"Let me walk through the project plan first so everyone knows what we're doing. Then quick intros — name and role.\"",
                    con: [
                        { bg: 'meeting', cL: 'lj', cR: 'weijie', spk: 'Loong Jie', txt: "Let me walk you through the project plan first so everyone's on the same page." },
                        { spk: 'Narrator', txt: "Loong Jie gives a clear overview. Introductions are rushed — just names and roles." },
                        { spk: 'Wei Jie', txt: "At least we know what we're working with. That's good." },
                        { cR: 'siti', spk: 'Siti', txt: "(I hope we get to actually know each other soon...)" },
                        { cR: 'none', spk: 'Narrator', txt: "Task clarity established, but emotional connection is weak." }
                    ]
                },
                {
                    pts: -1, txt: "\"We don't have a lot of time, so let me jump into the project overview and task assignments right now.\"",
                    con: [
                        { bg: 'meeting', cL: 'lj', cR: 'none', spk: 'Narrator', txt: "Loong Jie dives straight into a 45-minute project breakdown and assigns tasks immediately. No introductions. No check-in." },
                        { cR: 'arjun', spk: 'Arjun', txt: "(Is this what AIESEC is like? Feels like a job interview that never ended...)" },
                        { cR: 'siti', spk: 'Siti', txt: "(I thought it would be more... human.)" },
                        { cR: 'none', spk: 'Narrator', txt: "The team feels like task-executors, not team members." }
                    ]
                }
            ],
            insight: { title: "Psychological Safety", text: "People perform best when they feel safe to be themselves. A leader sets this tone from Day 1 by being vulnerable and creating space for others." }
        },
        2: {
            title: "Round 2: The Silent Team",
            scenes: [
                { bg: 'cafeteria', cL: 'lj', cR: 'none', spk: 'Narrator', bgm: 'tense', txt: "Two weeks into the term. Loong Jie is reviewing the team's Telegram group. He scrolls through the chat history." },
                { spk: 'Narrator', txt: "The group is eerily quiet. Messages from Loong Jie get reactions — thumbs up, 'noted' — but no real responses. Only Wei Jie replies." },
                { spk: 'Loong Jie', txt: "Everyone's doing their tasks... but it feels like four people working alone, not a team working together." },
                { spk: 'Loong Jie', txt: "Mei Ling hasn't said a word in the group. Arjun only posts his own updates about school contacts. Siti sends heart emojis but no substance." },
                { spk: 'Loong Jie', txt: "And Wei Jie just replies with budget data. Nobody's talking TO each other. They're only reporting TO me." },
                { cL: 'lj_sweat', spk: 'Loong Jie', txt: "I could just push through. Assign more tasks. Set deadlines. But something doesn't feel right..." }
            ],
            choices: [
                {
                    pts: 3, txt: "Schedule a team check-in call — not about tasks, but about how everyone is FEELING. Ask: \"How's it going? Is there anything you want to share? What do you need from me?\"",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'meiling', spk: 'Narrator', txt: "During the call, the truth comes out." },
                        { spk: 'Mei Ling', txt: "I didn't want to ask stupid questions... but honestly, I don't know what I'm supposed to do with the agenda document." },
                        { spk: 'Loong Jie', txt: "There are no stupid questions, Mei Ling. And I'm sorry I didn't check in sooner. Let's figure this out together." },
                        { cR: 'arjun', spk: 'Arjun', txt: "I've been doing things my own way because I didn't know who to coordinate with about school outreach." },
                        { cR: 'siti', spk: 'Siti', txt: "I feel like the team doesn't really know each other yet." },
                        { cR: 'none', spk: 'Narrator', sfx: 'warm', txt: "Loong Jie learns the silence wasn't apathy — it was uncertainty. He needs to CREATE the space for communication." }
                    ]
                },
                {
                    pts: 1, txt: "Send a friendly message: \"Hey team! Group's been quiet. Feel free to share updates, questions, or memes 😄 Let's keep the energy up!\"",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'none', spk: 'Narrator', txt: "Arjun responds with a meme. Siti sends a heart emoji. Wei Jie sends a brief update. Mei Ling stays quiet." },
                        { cR: 'arjun', spk: 'Arjun', txt: "Nice one lol 😂" },
                        { cR: 'siti', spk: 'Siti', txt: "Love this energy! ❤️" },
                        { cR: 'none', spk: 'Narrator', txt: "The group is slightly more active for a few days, then goes quiet again. The root cause — uncertainty and disconnection — remains." },
                        { cL: 'lj_sweat', spk: 'Loong Jie', txt: "(Why does it keep going silent? Maybe a text message isn't enough...)" }
                    ]
                },
                {
                    pts: -1, txt: "Silence is fine — tasks are getting done. Send a detailed task list with stricter deadlines to keep things moving.",
                    con: [
                        { bg: 'cafeteria', cL: 'none', cR: 'arjun', spk: 'Arjun', txt: "(I thought AIESEC was about growth and experience... not being treated like an employee.)" },
                        { cR: 'meiling', spk: 'Narrator', txt: "Mei Ling reads the detailed task list. She feels even more lost but too afraid to say anything." },
                        { cR: 'siti', spk: 'Siti', txt: "(He didn't even ask how we're doing... just more tasks.)" },
                        { cR: 'none', spk: 'Narrator', txt: "Tasks get done, but resentment builds silently. Compliance without commitment. The team operates like strangers sharing a to-do list." }
                    ]
                }
            ],
            insight: { title: "Proactive Communication", text: "Silence is not always golden. Leaders must CREATE communication structures and check in regularly, not just wait for people to speak up." }
        },
        3: {
            title: "Round 3: Arjun's Big Idea",
            scenes: [
                { bg: 'meeting', cL: 'arjun', cR: 'none', spk: 'Narrator', bgm: 'calm', txt: "Arjun sends a long, excited message in the group chat, pitching a completely new outreach concept." },
                { spk: 'Arjun', txt: "Yo team! I had this CRAZY idea. What if we don't just send formal proposals to schools?" },
                { spk: 'Arjun', txt: "What if we create a whole TikTok-style video pitch series — like a mini drama about volunteering? Schools can show it to students. It'll go VIRAL." },
                { cR: 'weijie', spk: 'Wei Jie', txt: "That sounds like a lot of effort for uncertain results. Do we even have the budget or timeline for video production?" },
                { cL: 'arjun', spk: 'Arjun', txt: "Bro, trust the process. Formal letters are dead. Nobody reads those." },
                { spk: 'Wei Jie', txt: "I'm not your 'bro,' and I'm just being realistic.", sfx: 'argue' },
                { cL: 'none', cR: 'none', spk: 'Narrator', sfx: 'tension', txt: "Tension rises. Mei Ling and Siti go silent." },
                { cL: 'lj_sweat', spk: 'Loong Jie', txt: "(Arjun's idea is creative, but not aligned with our plan. Wei Jie shut it down hard. But Arjun put thought into this.)" },
                { cL: 'lj', spk: 'Loong Jie', txt: "(If I dismiss it, he might disengage. If I just say yes, we go off-track. What do I do?)" }
            ],
            choices: [
                {
                    pts: 3, txt: "Privately call Arjun first to acknowledge his creativity. Then facilitate a team discussion to find a middle ground that uses BOTH perspectives.",
                    con: [
                        { bg: 'meeting', cL: 'lj', cR: 'arjun', spk: 'Loong Jie', txt: "Arjun, I love that you're thinking big! Can we explore how this might fit within our current approach?" },
                        { spk: 'Arjun', txt: "You know what, you're right — a full video series is too much. But ONE killer teaser video? I can do that in two days." },
                        { spk: 'Arjun', txt: "And it actually supports the formal proposals — schools can watch the video before reading the letter!" },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "...That's actually a reasonable compromise. A short video is doable within budget." },
                        { cR: 'none', spk: 'Loong Jie', txt: "See? When we put our heads together, we get the best of both worlds." },
                        { spk: 'Narrator', sfx: 'warm', txt: "Both feel heard. The team learns that ideas are welcome AND that the leader can guide discussions constructively." }
                    ]
                },
                {
                    pts: 1, txt: "Respond in group: \"Cool idea Arjun! But Wei Jie has a point — we're short on time. Let's stick to the plan. Maybe next cycle?\"",
                    con: [
                        { bg: 'meeting', cL: 'none', cR: 'none', spk: 'Narrator', txt: "Arjun is mildly disappointed but accepts it. He continues working but with less enthusiasm." },
                        { cR: 'arjun', spk: 'Arjun', txt: "Yeah. Sure. Maybe next cycle." },
                        { cR: 'none', spk: 'Narrator', txt: "He goes back to sending formal letters. His messages in the group get shorter. The spark dims." },
                        { spk: 'Narrator', txt: "(Arjun starts doing what's asked — nothing more. The creative energy he brought is gone.)" }
                    ]
                },
                {
                    pts: -1, txt: "Respond in group: \"Arjun, we already have a plan. Please focus on what's been assigned. We can't afford distractions.\"",
                    con: [
                        { bg: 'meeting', cL: 'none', cR: 'arjun', spk: 'Arjun', sfx: 'shock', txt: "(Why did I even join this? He asked for ideas in the first meeting, and now he shuts them down.)" },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "(At least someone's keeping things disciplined... but that was harsh.)" },
                        { cR: 'none', spk: 'Narrator', txt: "Arjun starts doing the bare minimum. No more creative input. The team's innovation dies — replaced by quiet obedience." }
                    ]
                }
            ],
            insight: { title: "Facilitative Questioning", text: "Instead of saying 'no' or 'yes,' ask questions that help the person refine their own thinking. Guide them to a solution rather than provide one." }
        },
        4: {
            title: "Round 4: Mei Ling Disappears",
            scenes: [
                { bg: 'cafeteria', cL: 'lj', cR: 'none', spk: 'Narrator', bgm: 'emotional', txt: "Week 4. Mei Ling has stopped responding entirely. Her agenda planning document is missing. She missed the last virtual meeting without explanation." },
                { cR: 'siti', spk: 'Siti', txt: "Hey Loong Jie... I'm worried about Mei Ling. She told me she's been feeling overwhelmed." },
                { spk: 'Siti', txt: "She didn't want to tell you because she's scared you'll think she's not capable. I think she's struggling but doesn't know how to ask for help." },
                { cR: 'none', spk: 'Loong Jie', txt: "(Mei Ling is struggling? Why didn't she tell me?)" },
                { cL: 'lj_sweat', spk: 'Loong Jie', sfx: 'shock', txt: "(...Wait, did I ever create a space where she COULD tell me? Have I ever checked in with her one-on-one?)" }
            ],
            choices: [
                {
                    pts: 3, txt: "Send a warm private message: \"Hey, I want to check in on YOU — not tasks, just you. How are you doing?\" Then schedule a 1-on-1 to listen and co-create a plan.",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'meiling_sad', spk: 'Narrator', txt: "On the call, Mei Ling opens up. She's been struggling with understanding expectations and feels everyone else is more capable." },
                        { spk: 'Mei Ling', sfx: 'cry', txt: "(crying) Thank you for not being mad. I thought you'd think I was useless." },
                        { spk: 'Loong Jie', txt: "Mei Ling, you're NOT useless. The fact that you care enough to be worried shows how much you want to do well." },
                        { spk: 'Loong Jie', txt: "I should have checked in with you sooner. That's on me. Let's break this work into smaller pieces together." },
                        { cR: 'meiling', spk: 'Narrator', sfx: 'warm', txt: "Together, they break the document into smaller tasks. Loong Jie pairs her with Siti for support. A turning point for Mei Ling." }
                    ]
                },
                {
                    pts: 1, txt: "Message her: \"Hey Mei Ling, is everything okay? The agenda doc is due soon, just wanted to check if you need help with it.\"",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'meiling', spk: 'Mei Ling', txt: "I'm okay. Sorry, I'll send the doc soon." },
                        { cR: 'none', spk: 'Narrator', txt: "She submits a half-completed document. Loong Jie doesn't know the real issue. The problem is delayed, not solved." }
                    ]
                },
                {
                    pts: -1, txt: "Send a group message: \"Team, all deliverables must be submitted by Friday. Accountability is important.\" (Indirectly calling out Mei Ling.)",
                    con: [
                        { bg: 'cafeteria', cL: 'none', cR: 'meiling_sad', spk: 'Narrator', txt: "Mei Ling reads the group message and feels publicly shamed. She submits a rushed, low-quality document." },
                        { spk: 'Mei Ling', sfx: 'sad', txt: "(He doesn't care about me. He only cares about the document. Maybe I should just leave...)" },
                        { cR: 'none', spk: 'Narrator', txt: "Siti is upset at Loong Jie for handling it this way." }
                    ]
                }
            ],
            insight: { title: "One-on-One Coaching", text: "Individual attention shows care. Check in on the PERSON, not just the TASK. Create safety for people to be honest about their struggles." }
        },
        5: {
            title: "Round 5: The Burnout Conversation",
            scenes: [
                { bg: 'cafeteria', cL: 'lj_sweat', cR: 'thea', spk: 'Thea', bgm: 'emotional', txt: "Loong Jie. You look terrible." },
                { cL: 'lj', spk: 'Loong Jie', txt: "Thanks, that's very encouraging." },
                { spk: 'Thea', txt: "I'm serious. How are you holding up?" },
                { spk: 'Loong Jie', txt: "Honestly? I'm doing everything. The school proposals, the venue research, the budget, reviewing every document..." },
                { spk: 'Loong Jie', txt: "I'm reviewing every single deliverable before it goes out because I want everything to be perfect. The team submits stuff, but it's never quite right, so I redo it." },
                { spk: 'Thea', sfx: 'slam', txt: "Let me ask you something. Are you leading your team, or are you doing your team's work FOR them?" },
                { cL: 'lj_sweat', spk: 'Narrator', txt: "Long silence." },
                { spk: 'Thea', txt: "When you redo their work instead of coaching them on how to improve it, what do they learn?" },
                { cL: 'lj', spk: 'Loong Jie', txt: "...Nothing. They learn nothing." },
                { spk: 'Thea', txt: "And what happens to you?" },
                { spk: 'Loong Jie', txt: "I burn out." },
                { spk: 'Thea', txt: "So what are you going to do about it?" }
            ],
            choices: [
                {
                    pts: 3, txt: "Change approach: give constructive feedback and GUIDE members to improve their own work. Accept 'imperfect' because it will be THEIRS.",
                    con: [
                        { bg: 'meeting', cL: 'lj', cR: 'arjun', spk: 'Narrator', txt: "Loong Jie sets up feedback sessions. For the first time, members understand not just WHAT to fix, but WHY and HOW." },
                        { spk: 'Arjun', txt: "Oh wait, so THAT'S why the school pitch needed a different opening. That actually makes sense." },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "This is the first time someone explained why my approach wasn't working instead of just changing it. I respect that." },
                        { cR: 'meiling', spk: 'Mei Ling', txt: "You actually highlighted what I did well too... that means a lot." },
                        { cR: 'none', spk: 'Narrator', sfx: 'warm', txt: "Loong Jie is tired after the coaching sessions but feels lighter — the team is growing." }
                    ]
                },
                {
                    pts: 1, txt: "Agree with Thea and start delegating more, but secretly re-edit documents before they go out.",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'none', spk: 'Narrator', txt: "The team sees polished work go out. They assume they're doing well. They don't know Loong Jie rewrote everything." },
                        { spk: 'Loong Jie', txt: "(It's 2 AM. Again. But at least the documents look good...)" },
                        { cR: 'thea', spk: 'Thea', txt: "(Checking in a week later) How's the delegating going?" },
                        { cL: 'lj_sweat', spk: 'Loong Jie', txt: "Great! The team is... handling things." },
                        { cR: 'none', spk: 'Narrator', txt: "Thea knows he's lying. His burnout continues, just slightly slower. The team doesn't learn." }
                    ]
                },
                {
                    pts: -1, txt: "\"If I don't do it myself, it won't be good enough. The project's reputation is at stake. I'll rest after it's done.\"",
                    con: [
                        { bg: 'cafeteria', cL: 'lj_sweat', cR: 'none', spk: 'Narrator', txt: "Loong Jie continues the solo grind. He becomes irritable and short with the team." },
                        { cR: 'siti', spk: 'Siti', txt: "Hey Loong Jie, I finished the draft. Want me to—" },
                        { cL: 'lj_sweat', spk: 'Loong Jie', txt: "Just send it. I'll fix it later." },
                        { cR: 'none', spk: 'Siti', sfx: 'sad', txt: "(...fix it? Was it that bad?)" },
                        { spk: 'Narrator', txt: "The team feels useless and disconnected. They stop trying their best — why bother, when Loong Jie will redo it anyway?" },
                        { cR: 'thea', spk: 'Thea', txt: "(watching from afar) He's going to crash. And he'll take the team with him." }
                    ]
                }
            ],
            insight: { title: "Developing Others Over Doing It Yourself", text: "A leader's job is to grow capacity in others, not to be the most capable person in the room. Coach, don't control." }
        },
        6: {
            title: "Round 6: The Conflict",
            scenes: [
                { bg: 'meeting', cL: 'arjun', cR: 'weijie', spk: 'Narrator', bgm: 'conflict', txt: "During a virtual meeting, Arjun and Wei Jie get into a heated argument about the project budget." },
                { spk: 'Arjun', txt: "We need to allocate more budget for school partnership gifts and events! If we look cheap, no school will take us seriously!" },
                { spk: 'Wei Jie', txt: "The budget is already tight. Your proposal has unnecessary expenses. We need to be realistic." },
                { spk: 'Arjun', sfx: 'slam', txt: "Unnecessary?! You think building relationships with schools is UNNECESSARY?" },
                { spk: 'Wei Jie', txt: "I didn't say partnerships are unnecessary. I said YOUR spending plan has waste. Learn to listen." },
                { spk: 'Arjun', sfx: 'argue', txt: "Oh, I'M the one who needs to listen? You shut down every single idea I have!" },
                { cL: 'none', cR: 'none', spk: 'Narrator', txt: "Mei Ling turns off her camera. Siti looks distressed." },
                { cR: 'siti', spk: 'Siti', txt: "Guys, can we please—" },
                { cL: 'arjun', spk: 'Arjun', txt: "No, I'm tired of this. Every meeting, Wei Jie acts like he's the director, not Loong Jie." },
                { cR: 'weijie', spk: 'Wei Jie', txt: "Maybe because someone needs to bring logic to this team." },
                { cL: 'none', cR: 'none', spk: 'Narrator', sfx: 'tension', txt: "Silence. Everyone looks at Loong Jie." }
            ],
            choices: [
                {
                    pts: 3, txt: "Calmly intervene. Ask BOTH to state their perspective without interruption. Summarize both viewpoints. Ask: \"What's the shared goal? How do we address BOTH concerns?\" Follow up privately.",
                    con: [
                        { bg: 'meeting', cL: 'lj', cR: 'arjun', spk: 'Loong Jie', txt: "Okay, time out. I can see you both care about this project — that's why this is heated. Let's structure this." },
                        { spk: 'Narrator', txt: "Through facilitated dialogue, they realize they agree on the goal — maximizing volunteer signups — but disagree on methods." },
                        { spk: 'Arjun', txt: "Thanks for not picking sides, Loong Jie. I respect that." },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "I... may have been too harsh. I'll work on how I communicate." },
                        { cR: 'none', spk: 'Narrator', sfx: 'warm', txt: "In private follow-ups, both express appreciation. A turning point in team trust." }
                    ]
                },
                {
                    pts: 1, txt: "Step in and make the final budget decision yourself to end the argument quickly.",
                    con: [
                        { bg: 'meeting', cL: 'lj', cR: 'none', spk: 'Loong Jie', txt: "Alright, enough. Here's what we're going to do — we'll allocate 60% to formal outreach and 40% to creative materials." },
                        { spk: 'Narrator', txt: "The argument stops, but neither side is satisfied." },
                        { cR: 'arjun', spk: 'Arjun', txt: "(He just decided for us. I thought this was a team...)" },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "(At least it's resolved. But I wanted to be heard, not overruled.)" },
                        { cR: 'none', spk: 'Narrator', txt: "The underlying tension remains. The team sees Loong Jie as a decision-maker, not a facilitator." }
                    ]
                },
                {
                    pts: -1, txt: "Get frustrated: \"Can you both stop? This is embarrassing. I'll handle the budget myself.\"",
                    con: [
                        { bg: 'meeting', cL: 'lj_sweat', cR: 'none', spk: 'Loong Jie', sfx: 'slam', txt: "Can you both stop? This is embarrassing. I'll handle the budget myself." },
                        { cR: 'arjun', spk: 'Narrator', txt: "Arjun mutes himself. Wei Jie stares at the screen." },
                        { cR: 'siti', spk: 'Siti', txt: "(...That was really uncomfortable.)" },
                        { cR: 'none', spk: 'Narrator', sfx: 'tension', txt: "Both feel dismissed and embarrassed. Trust plummets. The team meeting ends in awkward silence. Nobody speaks for 3 days." }
                    ]
                }
            ],
            insight: { title: "Conflict Facilitation", text: "Conflict is not bad. Unmanaged conflict is. A facilitator stays neutral, structures dialogue, and seeks shared goals." }
        },
        7: {
            title: "Round 7: Siti Misses a Deadline",
            scenes: [
                { bg: 'cafeteria', cL: 'lj', cR: 'siti', spk: 'Loong Jie', bgm: 'calm', txt: "Hey Siti, the school partnership proposal was due yesterday. What happened?" },
                { spk: 'Siti', sfx: 'gasp', txt: "Oh my god, Loong Jie, I'm SO sorry. I completely lost track of time." },
                { spk: 'Siti', txt: "I had two assignments due this week and my roommate was sick and I was taking care of her and I just... I'm so sorry. I feel terrible." },
                { cR: 'none', spk: 'Loong Jie', txt: "(Siti is one of the most caring people on the team. She's not lazy — she's overwhelmed and bad at time management.)" },
                { spk: 'Loong Jie', txt: "(If I come down hard, she'll crumble. But if I just say 'it's fine,' she won't learn to manage her time.)" }
            ],
            choices: [
                {
                    pts: 3, txt: "Empathize first, then coach: \"Thank you for being honest. Can we do a quick call? I want to help you build a system so this doesn't happen again.\"",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'siti', spk: 'Narrator', txt: "On the call, Loong Jie helps Siti create a priority matrix and teaches her to say 'I need help' BEFORE a deadline passes." },
                        { spk: 'Siti', sfx: 'cry', txt: "Loong Jie... no one's ever actually HELPED me with this before. They just get frustrated. Thank you." },
                        { spk: 'Siti', txt: "I promise I'll speak up earlier next time." },
                        { cR: 'none', spk: 'Narrator', txt: "She submits the proposal the next morning — and it's excellent because she didn't rush it." }
                    ]
                },
                {
                    pts: 1, txt: "\"It's okay, Siti. Life happens. Just make sure it's done by tonight? The school partner is waiting.\"",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'siti', spk: 'Siti', txt: "Okay! I'll get it done tonight. Promise!" },
                        { spk: 'Narrator', txt: "Siti submits a rushed proposal that evening. It's passable but not great." },
                        { cR: 'none', spk: 'Loong Jie', txt: "(It's... okay. But I can tell she rushed it. At least it's done.)" },
                        { spk: 'Narrator', txt: "No time management skills gained. No system built. Two weeks later, she misses another deadline. The pattern repeats." }
                    ]
                },
                {
                    pts: -1, txt: "\"Siti, this is a critical deliverable. We can't miss deadlines. Please submit it in the next 3 hours.\"",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'siti', spk: 'Siti', sfx: 'gasp', txt: "Oh... okay. I'll... I'll do it now." },
                        { spk: 'Narrator', txt: "Siti panics and submits a low-quality proposal in 2 hours. Full of errors." },
                        { cR: 'none', spk: 'Siti', sfx: 'cry', txt: "(He doesn't care about me at all. I'm just a deadline to him.)" },
                        { spk: 'Narrator', txt: "She messages Mei Ling privately: 'Do you ever feel like we're just... machines to him?' Mei Ling responds: 'Yes. All the time.'" }
                    ]
                }
            ],
            insight: { title: "Coaching Through Capability Gaps", text: "When someone fails, ask 'what support do they need?' not 'why didn't they deliver?' Teach tools and systems, not just expectations." }
        },
        8: {
            title: "Round 8: The Team is Falling Apart",
            scenes: [
                { bg: 'cafeteria', cL: 'lj_sweat', cR: 'thea', spk: 'Narrator', bgm: 'tense', txt: "Week 8. Everything is going wrong. Project launch is in 4 weeks. Only 8 volunteers signed up out of 40." },
                { spk: 'Narrator', txt: "The school partner hasn't confirmed. Arjun and Wei Jie barely speak. Mei Ling does the minimum. Siti missed another deadline." },
                { spk: 'Loong Jie', txt: "Terrible. We have 8 sign-ups out of 40. The team is disconnected. I'm exhausted." },
                { spk: 'Thea', txt: "What do you think the core problem is?" },
                { spk: 'Loong Jie', txt: "Maybe the team isn't good enough? Maybe I'm not good enough?" },
                { spk: 'Thea', txt: "Let me reframe that. Have you, at any point, sat down with your team to talk about how you're working TOGETHER as a unit?" },
                { spk: 'Thea', txt: "Not tasks. But team dynamics, roles, expectations, what you need from each other?" },
                { cL: 'lj', spk: 'Thea', sfx: 'slam', txt: "You've been managing tasks, Loong Jie. But have you been leading people?" }
            ],
            choices: [
                {
                    pts: 3, txt: "Call emergency team meeting. Open with radical honesty: \"I owe you an apology. I forgot the most important thing — US.\" Facilitate a Start/Stop/Continue retrospective.",
                    con: [
                        { bg: 'meeting', cL: 'none', cR: 'meiling', spk: 'Mei Ling', txt: "I've been afraid to speak up because I didn't want to slow the team down. But I actually have ideas." },
                        { cR: 'arjun', spk: 'Arjun', txt: "I've been frustrated because my ideas get shut down. But I also realize I push too hard without listening." },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "I know I can be blunt. Logic without empathy doesn't work in a team. I see that now." },
                        { cR: 'siti', spk: 'Siti', txt: "I love this team. I just need more structure and support. And I need to learn to ask for help before it's too late." },
                        { cL: 'lj', cR: 'none', spk: 'Loong Jie', txt: "I want you to know — I didn't become a Director because I knew how to lead. I became one because I wanted to learn. You've been my greatest teachers." },
                        { spk: 'Narrator', sfx: 'warm', txt: "They establish team norms: Weekly check-ins. Disagree respectfully, then commit. Ask for help early. Celebrate small wins. Something shifts." }
                    ]
                },
                {
                    pts: 1, txt: "Call a meeting to regroup on the project plan with clearer roles and deadlines. Briefly mention communication.",
                    con: [
                        { bg: 'meeting', cL: 'lj', cR: 'none', spk: 'Narrator', txt: "The meeting provides some task clarity. Roles are re-assigned. Deadlines updated." },
                        { spk: 'Loong Jie', txt: "And let's try to communicate more, okay?" },
                        { cR: 'arjun', spk: 'Arjun', txt: "Sure." },
                        { cR: 'none', spk: 'Narrator', txt: "The emotional undercurrents remain unaddressed. Organized but not connected. It's a band-aid, not a cure." }
                    ]
                },
                {
                    pts: -1, txt: "Send a long message: \"This is crunch time. Here's everything that's behind schedule. Step up.\"",
                    con: [
                        { bg: 'cafeteria', cL: 'none', cR: 'meiling_sad', spk: 'Narrator', txt: "The message lands like a bomb. Everyone reads it. Nobody replies for hours." },
                        { cR: 'arjun', spk: 'Arjun', txt: "(Step up? WE'VE been stepping up. Maybe HE should step up as a leader.)" },
                        { cR: 'meiling_sad', spk: 'Mei Ling', sfx: 'sad', txt: "(I can't do this anymore. I'm going to quit.)" },
                        { cR: 'none', spk: 'Narrator', txt: "Morale hits rock bottom. The team works out of guilt, not purpose. Two members consider leaving." }
                    ]
                }
            ],
            insight: { title: "Team Reflection", text: "Regular reflection on HOW the team works (not just WHAT they deliver) is essential for growth. Start/Stop/Continue is a powerful format." }
        },
        9: {
            title: "Round 9: A Member Wants to Quit",
            scenes: [
                { bg: 'cafeteria', cL: 'lj', cR: 'none', spk: 'Narrator', bgm: 'emotional', txt: "Week 9. Loong Jie receives a private message from Mei Ling." },
                { cR: 'meiling_sad', spk: 'Mei Ling', txt: "Hi Loong Jie. I've been thinking about this for a while. I want to be honest with you." },
                { spk: 'Mei Ling', txt: "I'm thinking of leaving the team. I don't think I'm contributing enough. I feel like I'm just a burden. I'm sorry." },
                { cR: 'none', spk: 'Narrator', sfx: 'shock', txt: "Loong Jie reads the message three times. His heart sinks." },
                { cL: 'lj_sweat', spk: 'Loong Jie', txt: "(No. Not Mei Ling. She's been quiet, but she's been trying. I've seen glance of her potential.)" },
                { cL: 'lj', spk: 'Loong Jie', txt: "(But she doesn't see it in herself. If I just say 'okay,' I lose her. If I guilt-trip her, that's worse. I need to...)" }
            ],
            choices: [
                {
                    pts: 3, txt: "Meet her 1-on-1. Don't convince — LISTEN first. Then share specific observations about her strengths she can't see. Ask what would need to change for her to stay.",
                    con: [
                        { bg: 'cafeteria', cL: 'lj', cR: 'meiling_sad', spk: 'Loong Jie', txt: "Mei Ling, do you remember the agenda plan you restructured last week? That organizational thinking — that's a SKILL." },
                        { spk: 'Loong Jie', txt: "When you shared that idea about the project schedule format, Siti told me it was the best suggestion anyone had made." },
                        { cR: 'meiling', spk: 'Mei Ling', txt: "You... you actually noticed those things? I didn't think anyone paid attention." },
                        { spk: 'Mei Ling', sfx: 'cry', txt: "(crying) No one's ever told me I had strengths before. Not like that. Not with specific examples." },
                        { spk: 'Mei Ling', txt: "I... I want to stay. But I want to get better. Can you help me?" },
                        { spk: 'Loong Jie', txt: "That's literally what I'm here for." },
                        { cR: 'none', spk: 'Narrator', sfx: 'warm', txt: "This becomes the moment Mei Ling starts to transform. She decides to stay because she feels SEEN." }
                    ]
                },
                {
                    pts: 1, txt: "\"Mei Ling, please don't leave! You're important to the team. We need you. Can we talk about this?\"",
                    con: [
                        { bg: 'cafeteria', cL: 'none', cR: 'none', spk: 'Narrator', txt: "Mei Ling stays out of guilt, not inspiration. She continues but doesn't fully engage. The underlying self-doubt remains." }
                    ]
                },
                {
                    pts: -1, txt: "\"I understand. If you feel that way, I respect your decision. I'll redistribute your tasks.\"",
                    setFlags: { meilingLeft: true },
                    con: [
                        { bg: 'cafeteria', cL: 'none', cR: 'meiling_sad', spk: 'Narrator', txt: "Mei Ling is devastated. She expected Loong Jie to fight for her, even a little. His easy acceptance confirms her fear: she's not valuable." },
                        { cR: 'siti', spk: 'Siti', txt: "Loong Jie... she needed you to say she mattered. And you just let her go." },
                        { cR: 'none', spk: 'Narrator', sfx: 'sad', txt: "Mei Ling leaves the team. Morale drops further." }
                    ]
                }
            ],
            insight: { title: "Empowering Through Affirmation", text: "Specific, genuine recognition can change someone's self-perception and unlock potential. Don't just say 'you're great' — say WHY with real examples." }
        },
        10: {
            title: "Round 10: The 48-Hour Crisis",
            scenes: [
                { bg: 'meeting', cL: 'lj_sweat', cR: 'none', spk: 'Narrator', bgm: 'tense', sfx: 'tension', txt: "Week 10. The project launch is in 2 weeks. Volunteer count: 18 out of 40." },
                { spk: 'Narrator', txt: "The school partner finally confirms — but they want a detailed project execution plan within 48 HOURS that the team hasn't prepared." },
                { spk: 'Loong Jie', txt: "48 hours. A full execution plan — schedule, logistics, facilitator guide, risk management, budget breakdown." },
                { spk: 'Loong Jie', txt: "This is 1 week's workload. And we have 48 hours. I can't do this alone." },
                { cL: 'lj', spk: 'Loong Jie', txt: "(But can the team handle this?)" }
            ],
            choices: [
                {
                    pts: 3, txt: "Call team IMMEDIATELY. Be transparent. Ask each member: \"Based on your strengths, which part can YOU own?\" Trust them to know their capacity.",
                    con: [
                        { bg: 'meeting', cL: 'arjun', cR: 'weijie', spk: 'Narrator', txt: "The team rallies. Each member steps up in their area of strength." },
                        {
                            spk: 'Narrator', txt: "Arjun creates a compelling outreach section. Siti writes the partnership overview. Wei Jie handles budget and risk.",
                            altIf: { flag: 'meilingLeft', txt: "With Mei Ling gone, the remaining three split her logistics work. The workload is heavier, but they push through. Arjun creates the outreach section. Siti handles logistics AND partnership. Wei Jie handles budget and risk." }
                        },
                        { spk: 'Narrator', txt: "Mei Ling takes logistics — delivers the most detailed document yet.", skipIf: 'meilingLeft' },
                        {
                            spk: 'Narrator', txt: "At 3 AM, Arjun plays music. Siti sends food emojis. Wei Jie says 'good work' to Arjun — a first.",
                            altIf: { flag: 'meilingLeft', txt: "At 3 AM, Arjun plays music. Siti sends food emojis. Wei Jie says 'good work' to Arjun — a first. The absence of Mei Ling hangs heavy." }
                        },
                        { spk: 'Wei Jie', txt: "I have to admit... Arjun's agenda section was really good." },
                        { spk: 'Arjun', txt: "Did Wei Jie just compliment me?! Screenshot that." },
                        {
                            cL: 'none', cR: 'siti', spk: 'Siti', txt: "(laughing) I'm screenshotting everything.",
                            altIf: { flag: 'meilingLeft', cR: 'siti', spk: 'Siti', txt: "(laughing, then pausing) ...Mei Ling would have loved this moment." }
                        },
                        { cR: 'none', spk: 'Narrator', sfx: 'cheer', txt: "The plan is submitted on time. It's excellent. The school partner is impressed." }
                    ]
                },
                {
                    pts: 1, txt: "Create a task breakdown and assign each section by role. Send it in the group: \"Here's who's doing what. Questions? Go.\"",
                    con: [
                        { bg: 'meeting', cL: 'none', cR: 'none', spk: 'Narrator', txt: "Tasks are assigned and completed in isolation. The final document is functional but lacks cohesion. Loong Jie spends extra hours stitching it together." }
                    ]
                },
                {
                    pts: -1, txt: "\"The team will slow things down. Faster if I do it myself.\"",
                    con: [
                        { bg: 'meeting', cL: 'none', cR: 'siti', spk: 'Siti', txt: "Why didn't you ask us? We're supposed to be a team..." },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "Faster, maybe. Better? No." },
                        { cR: 'none', spk: 'Narrator', txt: "The team discovers he did it alone. They feel untrusted and demoralized." }
                    ]
                }
            ],
            insight: { title: "Strength-Based Delegation", text: "Let people choose tasks based on their strengths. Trust breeds ownership. The best results come when people feel trusted." }
        },
        11: {
            title: "Round 11: The Recruitment Push",
            scenes: [
                { bg: 'meeting', cL: 'arjun', cR: 'weijie', spk: 'Narrator', bgm: 'calm', txt: "One week before launch. Volunteer count: 24. Target: 40. They need 16 more in 7 days." },
                { spk: 'Wei Jie', txt: "Let's be honest. 16 volunteers in 7 days is a stretch. Maybe we should lower the target." },
                { cL: 'arjun', spk: 'Arjun', txt: "No way! We set 40, we HIT 40. We just need a final outreach push." },
                { cL: 'none', cR: 'siti', spk: 'Siti', txt: "What if we each personally reach out to people we know? Like personal messages, not just posters?" },
                { cR: 'meiling', spk: 'Mei Ling', txt: "I... I actually had an idea.", skipIf: 'meilingLeft' },
                { spk: 'Narrator', txt: "Everyone looks at Mei Ling, surprised. This is the most proactive she's ever been.", skipIf: 'meilingLeft' },
                { spk: 'Mei Ling', txt: "What if we do a short online sharing session — like a live Instagram Q&A where past volunteers share their experience? It could help people who are on the fence.", skipIf: 'meilingLeft' },
                { cR: 'siti', spk: 'Siti', txt: "What about a live Instagram Q&A where past volunteers share their stories? It might convince people who are on the fence.", showIf: 'meilingLeft' },
                { cR: 'none', spk: 'Narrator', sfx: 'gasp', txt: "Everyone is surprised. This is brilliant." }
            ],
            choices: [
                {
                    pts: 3, txt: "\"That is BRILLIANT! Let's explore this — and YOU should lead it. This is your project within the project. I've got your back.\"",
                    con: [
                        {
                            bg: 'meeting', cL: 'lj', cR: 'meiling', spk: 'Narrator', txt: "Mei Ling leads the Instagram Live Q&A. She's nervous at first, but the team hypes her up.",
                            altIf: { flag: 'meilingLeft', cR: 'siti', spk: 'Narrator', txt: "Siti leads the Instagram Live Q&A. She's nervous at first, but Arjun hypes her up." }
                        },
                        { spk: 'Narrator', sfx: 'cheer', txt: "The session gets 200+ views. 12 new volunteers sign up in 3 days. Combined with team outreach, they hit 42 by day 7 — EXCEEDING the target." },
                        { spk: 'Mei Ling', txt: "I can't believe I actually did that. ME. Leading a live session.", skipIf: 'meilingLeft' },
                        { spk: 'Mei Ling', txt: "Two months ago I couldn't even speak in our team meeting.", skipIf: 'meilingLeft' },
                        { spk: 'Siti', txt: "I can't believe I actually led that! I've never done anything like it before.", showIf: 'meilingLeft' },
                        { cR: 'none', spk: 'Loong Jie', txt: "That's growth. And it came from YOU." }
                    ]
                },
                {
                    pts: 1, txt: "\"Cool idea! Let me design how it should work and I'll let you know.\" (Take ownership of the idea.)",
                    con: [
                        { bg: 'meeting', cL: 'none', cR: 'none', spk: 'Narrator', txt: "Loong Jie implements the idea his way. The session is okay. 7 new signups. Total reaches 31." }
                    ]
                },
                {
                    pts: -1, txt: "\"I'm not sure we have time for that. Let's just double down on what we're already doing. More outreach, more shares.\"",
                    con: [
                        { bg: 'meeting', cL: 'none', cR: 'none', spk: 'Narrator', txt: "More posters that people scroll past. 3 new signups. Total reaches 27." }
                    ]
                }
            ],
            insight: { title: "Giving Ownership", text: "The ultimate coaching act is letting someone else lead. Step back so they can step up. Ownership transforms people." }
        },
        12: {
            title: "Round 12: The Night Before the Project",
            scenes: [
                { bg: 'venue', cL: 'lj', cR: 'none', spk: 'Narrator', bgm: 'emotional', txt: "The night before the iMYV project officially launches. Everything is set — logistics, venue, facilitator guides, volunteer kits." },
                { spk: 'Narrator', txt: "The team has a final virtual call. Everyone looks tired but there's energy — anticipation, nervousness, pride." },
                { cR: 'arjun', spk: 'Arjun', txt: "I can't believe tomorrow is the day. Remember when we were arguing about video pitches vs. formal letters? Feels like a lifetime ago." },
                { cR: 'weijie', spk: 'Wei Jie', txt: "We've come a long way. All of us." },
                { cR: 'siti', spk: 'Siti', sfx: 'cry', txt: "I'm going to cry. I can already tell." },
                { cR: 'meiling', spk: 'Mei Ling', txt: "...Me too.", skipIf: 'meilingLeft' },
                { cR: 'arjun', spk: 'Arjun', txt: "So, Director. Any final words?" }
            ],
            choices: [
                {
                    pts: 3, txt: "Speak from the heart. Share vulnerability. Apologize for mistakes. Then specifically tell each member what you LEARNED from them.",
                    con: [
                        { bg: 'venue', cL: 'lj', cR: 'none', spk: 'Loong Jie', txt: "When I started this term, I was terrified. I made mistakes — a lot of them. There were moments I focused too much on the project and forgot about you. I'm sorry." },
                        { spk: 'Loong Jie', txt: "But here's what I learned: a project isn't about the outcome. It's about the people who make it happen. And YOU are the reason this project exists." },
                        { spk: 'Loong Jie', txt: "Mei Ling, you taught me that quiet people have the loudest ideas — if you give them space to speak.", skipIf: 'meilingLeft' },
                        { spk: 'Loong Jie', txt: "I think about Mei Ling. She left because I didn't fight for her. That's a regret I'll carry — and a lesson I'll never forget.", showIf: 'meilingLeft', sfx: 'sad' },
                        { spk: 'Loong Jie', txt: "Arjun, you taught me that creativity isn't chaos — it's passion that needs the right direction." },
                        { spk: 'Loong Jie', txt: "Siti, you taught me that caring about people is a STRENGTH, not a weakness." },
                        { spk: 'Loong Jie', txt: "Wei Jie, you taught me that honesty — even when it's uncomfortable — is how teams get better." },
                        { spk: 'Loong Jie', sfx: 'warm', txt: "Tomorrow isn't just about 40 volunteers. It's about US. We built this together. I'm proud of this team." },
                        { cR: 'arjun', spk: 'Arjun', sfx: 'cry', txt: "(voice cracking) Bro, I'm not crying. My eyes are just... sweating." },
                        { cR: 'weijie', spk: 'Wei Jie', txt: "This is the best team I've ever been part of." },
                        { cR: 'siti', spk: 'Siti', txt: "I joined AIESEC to find a family. I found one." },
                        { cR: 'meiling_sad', spk: 'Mei Ling', sfx: 'cry', txt: "(crying) Thank you... for not giving up on me when I wanted to give up on myself.", skipIf: 'meilingLeft' }
                    ]
                },
                {
                    pts: 1, txt: "\"Team, tomorrow is the big day! Let's give it our best. I believe in all of you. Get some rest tonight — we've got this! 😁\"",
                    con: [
                        { bg: 'venue', cL: 'none', cR: 'none', spk: 'Narrator', txt: "The team feels pumped. It's a good pep talk. But it lacks the personal depth that would make it unforgettable." }
                    ]
                },
                {
                    pts: -1, txt: "\"Alright team, final checklist. Arrival 7:30 AM. Arjun — registration. Siti — welcome sponsor 8:15. Any questions? See you tomorrow.\"",
                    con: [
                        { bg: 'venue', cL: 'none', cR: 'none', spk: 'Narrator', txt: "The call ends in 5 minutes. It feels like a task briefing, not a team moment. They go to bed feeling like workers, not family." }
                    ]
                }
            ],
            insight: { title: "Recognition & Reflection", text: "Great leaders close chapters with gratitude, reflection, and personal acknowledgment. Tell people what they mean to you — with specifics." }
        }
    },
    endings: {
        happy: {
            title: "🌟 THE LEADER WHO LEARNED TO LEAD", cls: "end-happy",
            desc: "Loong Jie didn't start as a great leader. He started as a scared, passionate young man who cared too much about tasks and not enough about people. But through every mistake, every hard conversation, every moment of doubt — he learned. Not from a textbook. From his team. And in the end, he didn't just deliver a project. He built a team that believed in each other.",
            quote: "\"Leadership is not about being in charge. It is about taking care of those in your charge.\" — Simon Sinek",
            scenes: [
                { bg: 'venue', cL: 'lj', cR: 'arjun', spk: 'Narrator', bgm: 'victory', sfx: 'cheer', txt: "Project Day. The venue is buzzing. 42 volunteers have arrived. The registration desk is overflowing. The school partner is smiling." },
                { spk: 'Arjun', txt: "WE ACTUALLY DID IT!" },
                { cR: 'weijie', spk: 'Wei Jie', txt: "We did. As a team." },
                { cR: 'meiling', spk: 'Mei Ling', txt: "When I wanted to quit, you told me I had strengths I couldn't see. Today, I led a whole logistics operation by myself.", skipIf: 'meilingLeft' },
                { cR: 'siti', spk: 'Siti', txt: "This wasn't just a project. This was one of the most meaningful experiences of my university life." },
                { cR: 'none', spk: 'Loong Jie', sfx: 'warm', txt: "(Leadership isn't about you. It's about the people you serve. It's about coaching them through doubt, facilitating them through conflict, and believing in them when they don't believe in themselves.)" },
                { spk: 'Narrator', txt: "🌟 HAPPY ENDING ACHIEVED 🌟" }
            ]
        },
        neutral: {
            title: "😐 THE PROJECT THAT ALMOST WAS", cls: "end-neutral",
            desc: "Loong Jie's project was completed. The numbers were acceptable. But something was missing — the spark, the unity, the transformation. Leadership isn't just about delivery. It's about development. The tasks don't matter if the people are left behind.",
            quote: "\"You can manage tasks. But you must lead people.\"",
            scenes: [
                { bg: 'venue', cL: 'lj', cR: 'none', spk: 'Narrator', bgm: 'emotional', txt: "Project Day. 28 volunteers show up. The project runs, but there are hiccups. The sponsor is lukewarm." },
                { cR: 'arjun', spk: 'Arjun', txt: "I wish we'd been more connected as a team." },
                { cR: 'meiling', spk: 'Mei Ling', txt: "I wonder what it would have been like if I'd spoken up more." },
                { cR: 'none', spk: 'Loong Jie', txt: "(The tasks got done, but the people... I could have done more.)" },
                { spk: 'Narrator', sfx: 'relief', txt: "😐 NEUTRAL ENDING — ROOM TO GROW" }
            ]
        },
        bad: {
            title: "💔 THE DIRECTOR WHO STOOD ALONE", cls: "end-bad",
            desc: "Loong Jie learned the painful lesson that hard work without human connection is just labor. Efficiency without empathy is cold. The greatest lesson in leadership is realizing it was never about you.",
            quote: "\"The greatest lesson in leadership is realizing it was never about you.\"",
            scenes: [
                { bg: 'venue', cL: 'lj_sweat', cR: 'none', spk: 'Narrator', bgm: 'tense', sfx: 'tension', txt: "Only 15 volunteers show up. Mei Ling quit weeks ago. Arjun does the bare minimum. The venue decorations are half-used." },
                { spk: 'Loong Jie', txt: "How did it come to this? I worked so hard. I did everything I could..." },
                { spk: 'Loong Jie', txt: "I did everything... except lead. I managed tasks. I set deadlines. But I never really SAW them." },
                { cR: 'thea', spk: 'Thea', sfx: 'slam', txt: "You didn't fail because the project underperformed. You failed because you forgot AIESEC isn't about projects — it's about people." },
                { cR: 'none', spk: 'Narrator', sfx: 'sad', txt: "💔 BAD ENDING — A PAINFUL LESSON LEARNED" }
            ]
        }
    }
};
