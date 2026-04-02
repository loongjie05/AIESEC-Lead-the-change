import os
from PIL import Image

src_dir = r"C:\Users\loong\.gemini\antigravity\brain\2ac05fad-897a-4def-ac82-2170e6668815"
dest_dir = r"c:\Users\loong\OneDrive\Desktop\AIESEC\AIESEC GAME Facilitation\assets"

# Map the generated file prefixes to the target asset names
file_map = {
    "pixel_eugene_neutral": "eugene_neutral.png",
    "pixel_meiling_neutral": "meiling_neutral.png",
    "pixel_arjun_neutral": "arjun_neutral.png",
    "pixel_siti_neutral": "siti_neutral.png",
    "pixel_weijie_neutral": "weijie_neutral.png",
    "pixel_kavi_neutral": "kavi_neutral.png",
    "pixel_eugene_sweat": "eugene_sweat.png",
    "pixel_meiling_sad": "meiling_sad.png"
}

os.makedirs(dest_dir, exist_ok=True)

def remove_green(img_path, target_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check for pure green #00ff00 roughly
            if item[0] < 50 and item[1] > 200 and item[2] < 50:
                newData.append((255, 255, 255, 0)) # Transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(target_path, "PNG")
        print(f"Processed: {target_path}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

# Find the latest generated files in src_dir matching the prefixes
for f in os.listdir(src_dir):
    for prefix, target_name in file_map.items():
        if f.startswith(prefix) and f.endswith(".png"):
            src_path = os.path.join(src_dir, f)
            dest_path = os.path.join(dest_dir, target_name)
            remove_green(src_path, dest_path)
