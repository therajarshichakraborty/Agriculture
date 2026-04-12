import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

DATA_SPLIT_DIR = os.path.join(BASE_DIR, "data", "splits")
ANNOTATION_DIR = os.path.join(BASE_DIR, "data", "annotations")
MODEL_DIR = os.path.join(BASE_DIR, "models")

BATCH_SIZE = 16
LR = 1e-3
EPOCHS = 5
IMG_SIZE = 224

NUM_FRUITS = 5
NUM_RIPENESS = 4