import torch
from torch.utils.data import DataLoader
from src.config.config import *
from src.data.loader import FruitDataset
from src.data.transforms import get_transforms
from src.models.multitask_model import MultiTaskModel
from src.training.loss import MultiTaskLoss

def train():
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    transform = get_transforms(IMG_SIZE)

    dataset = FruitDataset(
        csv_file=f"{ANNOTATION_DIR}/train_labels.csv",
        img_dir=f"{DATA_SPLIT_DIR}/train",
        transform=transform
    )

    loader = DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True)

    model = MultiTaskModel(NUM_FRUITS, NUM_RIPENESS).to(device)

    optimizer = torch.optim.Adam(model.parameters(), lr=LR)
    criterion = MultiTaskLoss()

    for epoch in range(EPOCHS):
        total_loss = 0
        model.train()

        for images, fruit, ripeness, quality in loader:
            images = images.to(device)
            fruit = fruit.to(device)
            ripeness = ripeness.to(device)
            quality = quality.to(device)

            optimizer.zero_grad()

            outputs = model(images)
            loss = criterion(outputs, (fruit, ripeness, quality))

            loss.backward()
            optimizer.step()

            total_loss += loss.item()

        print(f"Epoch {epoch+1}: {total_loss/len(loader):.4f}")

    torch.save(model.state_dict(), f"{MODEL_DIR}/best_model.pth")

if __name__ == "__main__":
    train()