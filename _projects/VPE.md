---
layout: page
title: "VPE Seg"
description: "First-place solution in a national AI medical competition.Invited by 2023 Health China Sinan Summit."
img: assets/img/VES/sliceattention.png
importance: 1
category: research
---

#### 🏆 **Competition & Recognition**

This project achieved **1st place** in the AI medical image segmentation track co-organized by **Shanghai AI Laboratory** and **Ruijin Hospital, Shanghai Jiao Tong University School of Medicine**.  
It was subsequently invited for presentation at the **2023 Healthy China Sinan Summit** and the **Frontiers of Digital Medicine Forum**.

---

#### 🧠 **Project Overview**

This project introduces a novel **Visual Perception-Enhanced Segmentation (VPES)** framework designed for lightweight and accurate medical image segmentation.  
It focuses on preprocessing, slice-wise attention, and collaborative dual-branch perception to enhance robustness and precision.

---

#### 🔧 **Contributions Overview**

##### 1. 🧼 **Effective Data Preprocessing**

This method analyzes the Hounsfield Unit (HU) distribution from a colorectal tumor CT dataset and designs a two-step preprocessing pipeline:

- **HU-based intensity truncation**
- **Noise cropping using object detection**

<div class="row justify-content-center">
  <div class="col-sm-8 mt-3">
    {% include figure.liquid path="assets/img/VES/preprocessing.png" title="Data Preprocessing Pipeline" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 1. Data preprocessing pipeline for HU clipping and noise removal.</div>
  </div>
</div>

---

##### 2. 🧠 **Lightweight 2.5D Slice-Wise Attention**

We propose a 2.5D data structure where adjacent slices are stacked as channels.  
A slice-wise attention module dynamically reweights each channel to focus on informative regions.

<div class="row justify-content-center">
  <div class="col-sm-8 mt-3">
    {% include figure.liquid path="assets/img/VES/sliceattention.png" title="Slice Attention Mechanism" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 2. Slice-wise attention mechanism highlights important slices.</div>
  </div>
  <div class="col-sm-8 mt-3">
    {% include figure.liquid path="assets/img/VES/SAH.png" title="Channel Attention Effects" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 3. Visualization of slice-level attention weights.</div>
  </div>
</div>

---

##### 3. 🧩 **Enhanced Visual Perception Module**

We design a **dual-branch co-attention mechanism** to fuse global context and multi-scale local texture features, enabling strong segmentation under complex conditions.

<div class="row justify-content-center">
  <div class="col-sm-8 mt-3">
    {% include figure.liquid path="assets/img/VES/MBCA.png" title="Dual-branch Co-attention" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 4. Visual perception module combining long-range and local texture cues.</div>
  </div>
</div>

---

#### 🧮 **Mathematical Notations**

##### Hounsfield Unit (HU):

$$
HU = 1000 \times \frac{\mu - \mu_{water}}{\mu_{water}}
$$

Where:
- $\mu$: Attenuation coefficient of tissue  
- $\mu_{water}$: Attenuation coefficient of water

##### Normalization:

$$
x_{norm} = \frac{clip(x, HU_{min}, HU_{max}) - HU_{min}}{HU_{max} - HU_{min}}
$$

Where $HU_{min}$ and $HU_{max}$ are clipped based on the 0.05% percentile tails.

---

#### 📊 **Experimental Results**

##### ✅ **Visual Segmentation Results**

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3">
    {% include figure.liquid path="assets/img/VES/results.png" title="Segmentation Overlay" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 5. Prediction overlay: green (FN), red (FP), yellow (TP).</div>
  </div>
</div>

---

##### 📈 **Quantitative Comparisons**

<div class="row justify-content-center">
  <div class="col-sm-8 mt-3">
    {% include figure.liquid path="assets/img/VES/radar.png" title="Radar Plot" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 6. Radar plot comparing evaluation metrics across methods.</div>
  </div>
  <div class="col-sm-8 mt-3">
    {% include figure.liquid path="assets/img/VES/box.png" title="Box Plot" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 7. Dice coefficient distribution across test samples.</div>
  </div>
</div>
