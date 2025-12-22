import os
from PIL import Image
from pdf2image import convert_from_path

# Target directory
target_dir = "/Users/cc325/IsaacHub/Github/ChefsSalad.github.io/assets/img/tsld"

def convert_to_png():
    for filename in os.listdir(target_dir):
        file_path = os.path.join(target_dir, filename)
        name, ext = os.path.splitext(filename)
        ext = ext.lower()

        try:
            # Handle JPG/JPEG
            if ext in ['.jpg', '.jpeg']:
                with Image.open(file_path) as img:
                    img.save(os.path.join(target_dir, f"{name}.png"), "PNG")
                print(f"Converted: {filename} -> {name}.png")

            # Handle PDF (takes the first page)
            elif ext == '.pdf':
                pages = convert_from_path(file_path)
                if pages:
                    pages[0].save(os.path.join(target_dir, f"{name}.png"), "PNG")
                print(f"Converted PDF: {filename} -> {name}.png")
        
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    convert_to_png()