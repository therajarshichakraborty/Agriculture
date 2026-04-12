# routes.py
from fastapi import APIRouter, UploadFile, File
import shutil
from src.inference.predict import predict

router = APIRouter()

@router.post("/predict")
async def predict_route(file: UploadFile = File(...)):
    path = f"temp_{file.filename}"

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return predict(path)