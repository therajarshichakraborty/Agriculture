import torch
from PIL import Image
from torchvision import transforms
from src.models.multitask_model import MultiTaskModel
from src.config.config import *

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor()
])

model = MultiTaskModel(NUM_FRUITS, NUM_RIPENESS)
model.load_state_dict(torch.load(f"{MODEL_DIR}/best_model.pth", map_location=device))
model.to(device)
model.eval()

def predict(image_path):
    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        fruit, ripeness, quality = model(image)

    return {
        "fruit": int(torch.argmax(fruit)),
        "ripeness": int(torch.argmax(ripeness)),
        "quality": float(quality.item())
    }