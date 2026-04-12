import os
import pandas as pd
from PIL import Image
import torch
from torch.utils.data import Dataset

class FruitDataset(Dataset):
    def __init__(self, csv_file, img_dir, transform=None):
        self.df = pd.read_csv(csv_file)
        self.img_dir = img_dir
        self.transform = transform

    def __len__(self):
        return len(self.df)

    def __getitem__(self, idx):
        row = self.df.iloc[idx]

        img_path = os.path.join(self.img_dir, row["image"])
        image = Image.open(img_path).convert("RGB")

        fruit = torch.tensor(int(row["fruit"]), dtype=torch.long)
        ripeness = torch.tensor(int(row["ripeness"]), dtype=torch.long)
        quality = torch.tensor(float(row["quality"]), dtype=torch.float32)

        if self.transform:
            image = self.transform(image)

        return image, fruit, ripeness, quality