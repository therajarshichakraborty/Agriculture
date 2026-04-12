# preprocessing.py
import os
import random
import shutil
import pandas as pd

RAW_DIR = "data/raw"
SPLIT_DIR = "data/splits"
ANNOTATION_DIR = "data/annotations"

TRAIN_RATIO = 0.7
VAL_RATIO = 0.15

FRUIT_MAP = {}
data = []

def prepare_dirs():
    for split in ["train", "val", "test"]:
        os.makedirs(os.path.join(SPLIT_DIR, split), exist_ok=True)
    os.makedirs(ANNOTATION_DIR, exist_ok=True)

def process():
    classes = sorted(os.listdir(RAW_DIR))
    
    for idx, cls in enumerate(classes):
        FRUIT_MAP[cls] = idx
        class_path = os.path.join(RAW_DIR, cls)

        images = os.listdir(class_path)

        for img in images:
            data.append((img, idx, class_path))

def split_and_copy():
    random.shuffle(data)

    total = len(data)
    train_end = int(total * TRAIN_RATIO)
    val_end = int(total * (TRAIN_RATIO + VAL_RATIO))

    splits = {
        "train": data[:train_end],
        "val": data[train_end:val_end],
        "test": data[val_end:]
    }

    for split, items in splits.items():
        records = []

        for img, label, path in items:
            src = os.path.join(path, img)
            dst = os.path.join(SPLIT_DIR, split, img)

            shutil.copy(src, dst)

            records.append({
                "image": img,
                "fruit": label,
                "ripeness": random.randint(0, 3),
                "quality": round(random.uniform(0.5, 1.0), 2)
            })

        df = pd.DataFrame(records)
        df.to_csv(f"{ANNOTATION_DIR}/{split}_labels.csv", index=False)

if __name__ == "__main__":
    prepare_dirs()
    process()
    split_and_copy()