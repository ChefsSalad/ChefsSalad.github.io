---
layout: page
title: "Manifold Stepping Alpha"
description: "Research on cross-asset dependency and signal evolution via Latent-domain Diffusion, Prefix-Tuning, and Manifold-constrained Autoencoders."
img: assets/img/tsld/new.png
importance: 1
category: research
---

#### **🧠 Motivation & Core Idea**

Capturing non-linear transitions between global market regimes and high-dimensional dependencies of heterogeneous assets remains a fundamental challenge in quantitative modeling.

- **The Regime Shift Challenge:** Market dynamics are inherently non-stationary; models often collapse when transitioning from stable periods to anomalous events like liquidity tantrums or geopolitical crises.
- **Latent Manifold Hypothesis:** We hypothesize that asset returns reside on a low-dimensional manifold governed by a potential energy function $U(z) = \log p(z)$. By modeling the **Restoring Force Magnitude** within this latent space, we can quantify market tension and predict regime transitions before they manifest in price space.

**Core Idea:** We propose a unified framework that integrates a **Spatial Autoencoder** for cross-sectional dependency extraction and a **Denoising Diffusion Probabilistic Model (DDPM)** to evolve signals along the latent manifold, effectively decoupling alpha residuals from market noise.

---

#### **🏗️ Framework Architecture (Spatial Autoencoder & Conditioning)**

Our architecture utilizes a sophisticated conditioning mechanism to handle missing assets and dynamic market environments.

{% include figure.liquid path="assets/img/tsld/ae.png" title="Spatial Autoencoder Architecture featuring Latent-domain Prefix-Tuning and Asset-Embedding Queries" class="img-fluid rounded z-depth-1" %}

- **Latent-domain Prefix-Tuning:** Instead of full-parameter fine-tuning, we employ a **Prefix Block** to inject regime-specific information into the Transformer backbone, allowing the model to adapt to shifting global contexts without catastrophic forgetting.
- **Dynamic Conditioning via FiLM:** We integrate **Feature-wise Linear Modulation (FiLM)** to dynamically scale and shift the latent representation $z$ based on global latent operators (GLO), capturing complex cross-asset dependencies.
- **Asset-Embedding Queries:** A query-based mechanism is used to infer representations for missing assets at time $t$ by projecting them into a shared geometric space.

---

#### **📊 Phase Space Topology & Regime Analysis**

The learned latent space allows for the clustering and visualization of distinct market states through phase space topology.

<div class="row">
  <div class="col-md-7">
    {% include figure.liquid path="assets/img/tsld/new.png" title="Phase Space Topology and Potential Energy Profile" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-5">
    <blockquote>
      <strong>Regime Classification:</strong> The model successfully identifies four distinct states: 
      <ul>
        <li><strong>Regime 0:</strong> Anomalous/Crisis states.</li>
        <li><strong>Regime 1:</strong> Stable expansion.</li>
        <li><strong>Regime 2:</strong> Unstable/High-volatility.</li>
        <li><strong>Regime 3:</strong> Transition phases.</li>
      </ul>
    </blockquote>
  </div>
</div>

The **Potential Energy Profile** reveals that "Stable" regimes occupy deep local minima, while "Anomalies" are characterized by high-energy states with steep gradients, providing a physical interpretation of market instability.

---

#### **📈 Signal Evolution & Market Tension**

By applying **Manifold Stepping**, we extract non-linear Alpha residuals from state-transition gradients.

- **Temporal Evolution:** The latent trajectories (2016–2024) demonstrate how the system migrates through phase space, with the "Flow Trajectory" capturing the momentum and direction of market regimes.
- **Market Tension Index:** We derive a **Restoring Force Magnitude** that acts as a leading indicator for systemic risk.

{% include figure.liquid path="assets/img/tsld/market_energy_index_annotated.png" title="Market Tension Index vs. Historical Events (OPEC Rumors, Soleimani Crisis, China Reopening)" class="img-fluid rounded z-depth-1" %}

The **Market Tension (10D MA)** consistently breaches the **95% Risk Threshold** prior to major volatility events, such as the "Liquidity Tantrum," "Trade War Escalation," and the "Soleimani Crisis".

---

#### **🌍 Practical Application & Portfolio Impact**

The application of **Symmetric Orthogonalization** to the diffusion-denoised outputs ensures that predicted alpha is uncorrelated with known risk factors:

* **Alpha Residual Extraction:** Enables the precise quantification of residual predictive power to eliminate portfolio redundancy.
* **Marginal IC Enhancement:** Significant improvement in predictive power across heterogeneous asset classes by capturing non-linear state transitions.