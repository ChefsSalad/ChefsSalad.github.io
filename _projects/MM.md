---
layout: page
title: "Multimodal Detection"
description: "A collaborative project with CMU on multimodal deepfake detection and biometric authentication"
img: assets/img/MM/arch.png
importance: 3
category: research
---

#### **👨‍🏫 Advisor & Collaboration**

Guided by **Professor David Woodruff**, *Carnegie Mellon University, School of Computer Science*.

This project was collaboratively developed to address the growing threat of high-fidelity deepfake media through a **multimodal deepfake detection and identity verification framework**.  

---

#### **🧠 Motivation & Core Idea**

With the rapid progress of generative AI, deepfake videos have become increasingly realistic, posing severe risks to identity security and public trust.  

To tackle this, we designed a **multimodal detection system** that integrates **visual, audio, and textual cues**, enabling robust detection of synthetic or tampered media.

---

#### **🏗️ Framework Overview**

The proposed framework combines three complementary modalities:

1. **Visual Stream:**  
   Utilizes state-of-the-art face detection and recognition algorithms to extract subtle inconsistencies in facial dynamics, eye movement, and lip synchronization.

2. **Audio Stream:**  
   Employs advanced audio feature engineering (MFCC, spectrogram-based embeddings) to detect micro-level temporal inconsistencies and voice cloning artifacts.

3. **Textual Stream:**  
   Incorporates a fine-tuned language model for semantic coherence analysis between the speech transcript and visual context.

These modalities are fused through a **contextual inter-modal attention mechanism**, inspired by the paper *“Contextual Inter-modal Attention for Multi-modal Sentiment Analysis”*, enabling the network to focus adaptively on the most discriminative cross-modal cues.

<div class="row justify-content-center">
  <div class="col-md-6 mt-3">
    {% include figure.liquid path="assets/img/MM/arch.png" title="Overall architecture of the multimodal deepfake detection and identity verification framework" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3">
    {% include figure.liquid path="assets/img/MM/attention.png" title="MMMU-BAVT attention computation for multimodal alignment" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

#### **📊 Experimental Results**

* Significantly improves detection accuracy on multiple benchmark datasets (FaceForensics++, DFDC, and our curated dataset).  
* Demonstrates high robustness under compression, resolution variation, and partial occlusion conditions.  
* Outperforms unimodal baselines by a large margin in both AUC and F1 metrics.

---

#### **🌍 Key Contributions**

* Proposes a **three-stream multimodal deepfake detection and identity verification** system.  
* Integrates **visual, audio, and textual** modalities through a **contextual inter-modal attention** mechanism.  
* Substantially enhances accuracy and robustness against advanced synthetic media attacks.  
* Establishes a strong baseline for multimodal integrity verification research.

---

