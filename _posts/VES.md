---
layout: post
title: Visual Perception: A Lightweight 2.5D Approach to Enhance Medical Image Segmentation
date: 2024-10-13 12:00:00 +0800
description: Achieving 1st place in a major medical competition by introducing a novel 2.5D attention mechanism and a collaborative dual-branch perception module for accurate CT tumor segmentation.
tags: [Medical AI, Segmentation, Attention]
categories: [Research, Deep Learning]
thumbnail: assets/img/VES/medical_segmentation_thumbnail.jpg
featured: true 
---

### 💡 The Motivation: Finding Efficiency in 3D Medical Data

CT (Computed Tomography) scans offer critical 3D context, yet segmenting tumors often demands computationally expensive 3D Convolutional Neural Networks (CNNs). Our goal was to devise a **lightweight, perception-enhanced framework** capable of maintaining high accuracy by efficiently integrating spatial context across slices, ultimately leading to a **1st place** finish in the AI medical image segmentation track co-organized by **Shanghai AI Laboratory** and **Ruijin Hospital, Shanghai Jiao Tong University School of Medicine**.

---

### 1. 🧼 The Input Challenge: Robust Preprocessing

Medical image quality is inherently variable. We first established a robust, two-step preprocessing pipeline based on analyzing the **Hounsfield Unit (HU)** distribution—the core metric for CT intensity:

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VES/preprocessing.png" title="Data Preprocessing Pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1. The pipeline combines **HU-based intensity truncation** to normalize tissue density and **noise cropping** using object detection to stabilize the input and remove non-essential border noise.
</div>

The HU calculation anchors our methodology:
$$HU=1000\times\frac{\mu-\mu_{water}}{\mu_{water}}$$

Where $\mu$ is the attenuation coefficient of the tissue, and $\mu_{water}$ is the attenuation coefficient of water.

---

### 2. 🧠 The Efficiency Solution: Lightweight 2.5D Attention

To avoid the computational burden of full 3D convolutions, we utilized an innovative **2.5D data structure** where adjacent slices are stacked as input channels. This is combined with a **Slice-Wise Attention Module** to dynamically prioritize the most informative slices.

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VES/sliceattention.png" title="Slice Attention Mechanism" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VES/SAH.png" title="Channel Attention Effects" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Figure 2 & 3. The attention module learns to assign higher weights (brighter areas) to slices that contain crucial tumor boundaries, effectively focusing the network's processing power.
</div>

---

### 3. 🧩 The Perception Core: Dual-Branch Co-Attention

Medical image segmentation demands high structural fidelity. We designed an **Enhanced Visual Perception Module** featuring a **dual-branch co-attention mechanism**.

This module's strength lies in its ability to **collaboratively fuse** two essential feature types:
1.  **Global Context:** Captures long-range spatial dependencies (the overall structure of the tumor).
2.  **Local Texture:** Focuses on multi-scale texture details (the exact boundary and internal properties).

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VES/MBCA.png" title="Dual-branch Co-attention" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Figure 4. The dual-branch module ensures the model is robust to both large-scale anatomical variations and fine-grained texture complexity.
</div>

---

### 📊 Results & Quantitative Validation

The combination of lightweight efficiency and perception enhancement resulted in **top-tier performance**, confirmed by both visual overlay analysis and rigorous quantitative metrics.

#### Visual Segmentation Reliability

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VES/results.png" title="Segmentation Overlay" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Figure 5. Prediction overlay visualization. True Positives (yellow) dominate, indicating high accuracy, while False Negatives (green) and False Positives (red) are minimized.
</div>

#### Metric Comparison and Stability

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/VES/radar.png" title="Radar Plot" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/VES/box.png" title="Box Plot" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Figure 6 & 7. Top: Radar plot demonstrating superior performance across multiple evaluation metrics. Bottom: Box plot illustrating the stable distribution of the Dice coefficient across all test samples, validating the model's reliability.
</div>

---

### 🔭 Conclusion

By prioritizing perceptual efficiency through a **2.5D attention structure** and collaborative **dual-branch fusion**, our framework successfully achieved state-of-the-art results in the challenging task of 3D medical image segmentation. This work demonstrates that intelligent architectural design can be as impactful as raw model size in demanding domains like medical AI.