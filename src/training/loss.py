# loss.py
import torch.nn as nn

class MultiTaskLoss(nn.Module):
    def __init__(self):
        super().__init__()
        self.ce = nn.CrossEntropyLoss()
        self.mse = nn.MSELoss()

    def forward(self, pred, target):
        fruit_p, ripeness_p, quality_p = pred
        fruit_t, ripeness_t, quality_t = target

        loss_fruit = self.ce(fruit_p, fruit_t)
        loss_ripeness = self.ce(ripeness_p, ripeness_t)
        loss_quality = self.mse(quality_p.squeeze(), quality_t)

        return loss_fruit + loss_ripeness + loss_quality