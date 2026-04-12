# multitask_model.py
import torch.nn as nn
import torchvision.models as models

class MultiTaskModel(nn.Module):
    def __init__(self, num_fruits, num_ripeness):
        super().__init__()

        self.backbone = models.resnet18(pretrained=True)
        in_features = self.backbone.fc.in_features
        self.backbone.fc = nn.Identity()

        self.fruit_head = nn.Linear(in_features, num_fruits)
        self.ripeness_head = nn.Linear(in_features, num_ripeness)
        self.quality_head = nn.Linear(in_features, 1)

    def forward(self, x):
        features = self.backbone(x)

        fruit = self.fruit_head(features)
        ripeness = self.ripeness_head(features)
        quality = self.quality_head(features)

        return fruit, ripeness, quality