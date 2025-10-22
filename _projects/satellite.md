---
layout: page
title: "Remote sensing data Research"
description: "Research on satellite AI application, including large Visual-Language Model, Image-Text Matching, Super-Resolution, Object Detection, Segmentation, Edge Enhancement and so on."
img: assets/img/satellite/redsr.png
importance: 3
category: research
---

#### **🧠 Motivation & Core Idea**

Achieving ultra-high resolution (UHR) satellite imagery through traditional optical methods faces fundamental physical limitations.

* **Physical Scale Challenge:** To visually capture a $5\text{cm}$ long locust with $38\times 22$ pixels, a ground resolution of at least $0.13\text{cm}/\text{pixel}$ is necessary.

* **Sensor Constraints:** Assuming a satellite distance of $H=500\text{km}$ and an equivalent focal length of $1\text{m}$, achieving the required resolution would necessitate a sensor unit pixel size of $26\text{nm}$. This is far smaller than the current minimum pixel sizes for digital image sensors like CMOS and CCD.
* **Optical Constraints (Rayleigh Criterion):** Based on the Rayleigh criterion, a remote sensing satellite observing at $550\text{nm}$ from $500\text{km}$ distance would require a camera aperture of $258\text{m}$. This significantly exceeds the diameter constraints of most rockets, which are often limited to below $3.35\text{m}$, even large vehicles like the "Long March 5" series ($5\text{m}$).


**Core Idea:** The proposal is to combine effective Super-Resolution (SR) enhancement algorithms with smaller, lower-cost satellites that capture images at a coarser resolution. This approach can substantially reduce launch costs, expand the satellite's field of view, decrease the number of in-orbit satellites, and boost the downlink speed to ground stations.

---

#### **🏗️ Framework Architecture (Focus on Multi-Image Super-Resolution)**

Our core signal enhancement is based on **Multi-Image Super-Resolution (MISR)** technology.

* **Advantages of MISR:**

  * High-frequency information (e.g., texture, edges) is complementary across multiple frames, which helps avoid artifacts or unnatural textures.
  * Multi-frame input, through fusion, enhances the signal-to-noise ratio, even if individual images suffer from noise or quality issues.
* **Disadvantages of MISR:**

  * Higher computational complexity and hardware requirements.
  * Potential for high-frequency information aliasing due to different phase offsets during sampling.

Our architecture integrates a sophisticated **Transformer-based Fusion Module** for multi-image processing.

* **Fusion Mechanism:** The fusion module introduces a **learnable embedding vector** to help the model align information between different image regions in the multiple input frames.


---

#### **📊 Experimental Results**

#### **✅ Quantitative Performance**

The MISR approach demonstrates strong performance metrics:

* Average cPSNR: $49.5625$
* Average cSSIM: $0.9967$

<div class="row">
  <div class="col-md-6">
    {% include figure.liquid path="assets/img/satellite/redsr.png" title="RED band SR" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6">
    {% include figure.liquid path="assets/img/satellite/nirsr.png" title="NIR band SR" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

#### **📈 Impact on Downstream Applications**

High-resolution images enhance the efficacy of downstream applications:

* **Tasks Benefited:** Such as object detection, semantic segmentation, land cover classification, and visual language model (VLM) question answering.


* **Visual Language Models (VLMs):** VLMs, which rely on components like an Image Encoder (ViT), a Text Encoder (Bert), and a **Multimodal Gated Adapter (MGA)** for representation alignment, also benefit significantly.

{% include figure.liquid path="assets/img/satellite/arch.png" title="Architecture of a Vision Language Model, showing the MGA component" class="img-fluid rounded z-depth-1" %}

---

#### **🌍 Practical Application Scenarios**

The high-resolution imaging capability is critical for several high-impact applications:

* **Agricultural Insurance:** Real-time monitoring of crop growth and pest outbreaks to precisely assess disaster losses.
* **Disaster Relief:** Providing instant, clear images of affected areas to accurately pinpoint the core disaster zones.
* **Rare Animal Protection:** Offering timely and clear imagery for monitoring.

