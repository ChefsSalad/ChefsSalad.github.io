---
layout: page
title: "Cell Detection"
description: "Domain-adaptive and deformable convolution-based cervical cell detection with medical LLM fine-tuning"
img: assets/img/medical/domain_adapt_arch.png
importance: 4
category: research
---

#### **🏆 Honors & Recognition**

This project was awarded **National-Level Recognition** in the **China College Students Innovation and Entrepreneurship Competition**,  
highlighting its innovation, technical rigor, and potential impact on intelligent medical diagnostics.

---

#### **🧠 Motivation & Core Idea**

Accurate cervical cell detection is critical for early diagnosis of cervical cancer. Traditional object detection models often struggle with **irregular cell contours**, **class imbalance**, and **domain shift** between medical institutions.

To address these challenges, this work proposes an integrated framework that combines **deformable convolution-based contour feature extraction**, **spatial attention-based foreground feature enhancement**, and **domain-adaptive alignment** for improved accuracy in single-domain and cross-domain medical scenarios.

---

#### **🏗️ Framework Architecture**

The detection network consists of two primary innovations:

1. **Deformable Convolution for Irregular Contour Extraction**  
   * Deformable convolution dynamically adjusts sampling positions to better fit irregular cervical cell boundaries.  
   * This enhances feature precision for cells with varying morphology or partial occlusion.

2. **Spatial Attention Mechanism for Foreground Enhancement**  
   * A spatial attention module focuses the model on diagnostically relevant cell regions, suppressing background noise.  
   * It improves detection robustness, particularly in cluttered smear images.

---

#### **💡 Domain Adaptation via Adversarial Learning**

To handle variations between datasets from different hospitals or acquisition devices, a **domain-adaptive network** is integrated at the image level.

* The system aligns the **global image feature distributions** between the source and target domains through adversarial training.  
* Multi-scale global features from the backbone are fed into a **domain discriminator**, encouraging domain-invariant representations.

{% include figure.liquid path="assets/img/medical/domain_adapt_arch.png" title="Architecture of the image-level domain-adaptive network with adversarial learning for feature alignment" class="img-fluid rounded z-depth-1" %}

---

#### **🧬 LLaMA-based Medical Language Model Fine-Tuning**

To further integrate medical reasoning and reporting capability:

* The base **LLaMA model** was extended with a **Chinese vocabulary** and **continued pre-training** on general Chinese corpora.  
* Subsequently, **LoRA fine-tuning** was applied using bilingual medical datasets (Chinese-English).  
* The fine-tuned model was **deployed to the website**, enabling clinical text understanding and human-AI interaction for pathology report generation.

---

#### **📊 Experimental Results**

* The proposed detection framework significantly improves **cell boundary localization** and **classification precision** in the cervical cell domain.  
* Domain adaptation reduces performance gaps across different hospital datasets.

{% include figure.liquid path="assets/img/medical/etection_result.png" title="Visual results of cervical cell detection after domain adaptation" class="img-fluid rounded z-depth-1" %}

---

#### **🌍 Key Contributions**

* Deformable convolution enhances irregular contour representation.  
* Spatial attention improves feature discrimination for relevant foreground areas.  
* Domain-adaptive adversarial alignment mitigates inter-institutional domain bias.  
* LLaMA-based medical LLM fine-tuned for bilingual diagnostic text understanding and online deployment.

---

#### **🚀 Future Work**

Future directions include:
* Integrating **semi-supervised domain adaptation** for unlabeled target datasets.  
* Extending the system to **multi-modal cytopathology**, incorporating both morphological and textual features.
