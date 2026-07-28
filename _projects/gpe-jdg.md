---
layout: page
title: "GPE-JDG"
description: "Cross-sectional structural tension in commodity futures: trading signals from latent-space diffusion gradients."
img: assets/img/tsld/new.png
importance: 1
category: research
---

#### **🧠 Motivation & Core Idea**

Most quantitative models treat each asset as an independent temporal trajectory. **GPE-JDG** instead models the cross-sectional state of the commodity futures market as a **joint distribution over assets and factors**, and asks a structural question: *how far is today's market from its learned equilibrium, and in which direction would it adjust?*

- **Cross-Sectional Snapshot:** Each trading day is encoded as a single snapshot of multi-asset factor states, capturing the co-movement structure that per-asset time-series models discard.
- **Score-Based Structural Signal:** A latent diffusion model learns the **score field** of this distribution — the gradient of the log-density. Its magnitude quantifies structural deviation; its direction encodes the implied adjustment of each asset relative to the learned cross-sectional distribution.

---

#### **📈 Latent Score Field & Market Tension Index**

The score field is estimated with **Denoising Score Matching (DSM)** on the latent manifold, with a **reach-guided calibration** of the diffusion step $\tau^*$ that matches perturbation variance to the manifold's local geometry. Rather than running iterative reverse sampling, the diffusion backbone is repurposed as a **continuous gradient estimator**, evaluated deterministically in a single forward pass:

$$
\mathbf{g}(\mathbf{z}_t)
\triangleq
\nabla_{\mathbf{z}} \log p_{\theta}^{(\tau^*)}(\mathbf{z}) \big|_{\mathbf{z}=\mathbf{z}_t}
\approx
-\frac{\boldsymbol{\epsilon}_{\theta}(\mathbf{z}_t, \tau^*)}{\sigma_{\tau^*}},
\qquad
\mathrm{MTI}_t \triangleq \left\| \mathbf{g}(\mathbf{z}_t) \right\|_2 .
$$

Economically, $\mathbf{g}(\mathbf{z}_t)$ points toward the locally most probable market-state region — a **structural displacement signal** — and its norm quantifies how far the current cross-section sits from equilibrium.

<div class="row justify-content-center">
  <div class="col-md-10">
    {% include figure.liquid path="assets/img/tsld/fig_mti_regime.png" title="Market Tension Index (MTI) as a market-state indicator partitioning alpha- and beta-dominant regimes" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- **Market Tension Index (MTI):** The score magnitude, operationalized as a scalar measure of structural deviation.
- **Alpha-Dominant Regimes:** Elevated tension concentrates alpha asymmetrically on the short side (short-leg SR = 4.67, $p = 0.021$).
- **Beta-Dominant Regimes:** Depressed tension coincides with significantly higher average pairwise return correlation (MWU $p = 0.002$) — systematic co-movement suppresses cross-sectional relative-value opportunities.

---

#### **🧭 Jacobian-Diffusion Gradient (JDG)**

**Tweedie Posterior Displacement Bound.** To map the latent displacement back to the observation space without out-of-distribution hallucinations, the step size $\gamma$ must be rigorously bounded. Tweedie's formula gives the posterior expectation of the clean state $\mathbf{z}_0$ given the noisy observation $\tilde{\mathbf{z}}_{\tau^*} = \sqrt{\bar{\alpha}_{\tau^*}}\,\mathbf{z}_0 + \sigma_{\tau^*}\boldsymbol{\varepsilon}$:

$$
\mathbb{E}[\mathbf{z}_0 \mid \tilde{\mathbf{z}}_{\tau^*}]
=
\frac{1}{\sqrt{\bar{\alpha}_{\tau^*}}}
\left(
\tilde{\mathbf{z}}_{\tau^*}
+
\sigma_{\tau^*}^2\,
\nabla_{\mathbf{z}} \log p_{\tau^*}(\tilde{\mathbf{z}}_{\tau^*})
\right).
$$

At the reach-calibrated step, $\sigma_{\tau^*}^2 = 1 - \bar{\alpha}_{\tau^*} \approx \sigma_{\mathrm{reach}}^2$ by construction; in this small-noise regime $\sqrt{\bar{\alpha}_{\tau^*}} \approx 1$ and $\tilde{\mathbf{z}}_{\tau^*} \approx \mathbf{z}_t$, so the implied displacement toward the posterior mean collapses to a **single deterministic step** — no Markov-chain iteration required:

$$
\mathbb{E}[\mathbf{z}_0 \mid \tilde{\mathbf{z}}_{\tau^*}] - \mathbf{z}_t
\;\approx\;
\sigma_{\mathrm{reach}}^2\,\mathbf{g}(\mathbf{z}_t)
\quad\Longrightarrow\quad
\Delta \mathbf{z}_t = \gamma^{*}\,\mathbf{g}(\mathbf{z}_t),
\qquad
\gamma^{*} = \sigma_{\mathrm{reach}}^2 .
$$

This establishes $\sigma_{\mathrm{reach}}^2$ as the theoretically maximal admissible step size toward the posterior mean — maximizing extractable signal while remaining geometrically safe.

**From Latent Displacement to Factor Signal.** The displacement is projected to the observation space through an **implicit Jacobian-vector product** with the decoder $\mathcal{D}$. The JDG is defined as the exact nonlinear finite-difference, which cancels the decoder's static reconstruction bias shared by both terms:

$$
\Delta \mathbf{X}_t
\triangleq
\mathcal{D}\!\left(\mathbf{z}_t + \gamma^{*}\mathbf{g}(\mathbf{z}_t)\right)
-
\mathcal{D}(\mathbf{z}_t)
\;\approx\;
\gamma^{*}\,\mathbf{J}_t\,\mathbf{g}(\mathbf{z}_t),
\qquad
\mathbf{J}_t = \frac{\partial \mathcal{D}(\mathbf{z})}{\partial \mathbf{z}}\Big|_{\mathbf{z}=\mathbf{z}_t}.
$$

Two decoder forward passes evaluate this implicitly at $\mathcal{O}(1)$ cost — the dense Jacobian $\mathbf{J}_t \in \mathbb{R}^{N \times F \times d}$ is never materialized — while the nonlinear evaluation absorbs the higher-order remainder, capturing the true cross-sectional correction rather than a tangent-space approximation.

<div class="row align-items-center">
  <div class="col-md-5">
    <blockquote>
      <strong>Signal Synthesis:</strong>
      <ul>
        <li>Implicit decoder JVP — no explicit Jacobian materialization.</li>
        <li>IC-weighted aggregation across factors.</li>
        <li>Cross-sectional long-short portfolio construction.</li>
      </ul>
    </blockquote>
  </div>
  <div class="col-md-7">
    {% include figure.liquid path="assets/img/tsld/fig_attractor_drift_multiday.png" title="Inward drift in latent phase space toward the learned attractor" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

#### **🏗️ Architecture: Global-Phase Encoder & Prefix-FiLM Decoder**

<div class="row justify-content-center">
  <div class="col-md-10">
    {% include figure.liquid path="assets/img/tsld/fig_GPE_arch.png" title="GPE–PFD encoder–decoder architecture with masked self-attention over active contracts" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- **Global-Phase Encoder (GPE):** Maps the daily cross-sectional panel into a compact latent representation via **masked self-attention** over active contracts, with **dynamic validity masking** to handle a changing contract universe.
- **Prefix-FiLM Decoder (PFD):** Reconstructs per-factor states from the latent phase point, anchoring the latent space to a standard-unit observation domain.

---

#### **📊 Phase Space Topology & Regime Analysis**

The learned latent space allows for the clustering and visualization of distinct market states through phase space topology.

<div class="row align-items-center">
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

#### **📊 Out-of-Sample Performance**

Evaluated under an **expanding-window walk-forward protocol** on 36 Chinese commodity futures (2022–2024), with transaction costs of 2.7 bps per side.

<div class="row align-items-center">
  <div class="col-md-6">
    {% include figure.liquid path="assets/img/tsld/fig_oos_cumret_ls.png" title="Out-of-sample cumulative returns of the GPE-JDG long-short portfolio vs. baselines" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6">
    <blockquote>
      <strong>Headline Results:</strong>
      <ul>
        <li>Concatenated OOS <strong>Sharpe = 2.02</strong> (net of costs).</li>
        <li>Circular block-bootstrap SR = 2.08, 95% CI [1.13, 3.04].</li>
        <li>All four encoder baselines and the untransformed factor benchmark fail to achieve statistically significant OOS performance.</li>
      </ul>
    </blockquote>
  </div>
</div>

GPE-JDG is the only model with positive SR in **every** half-year period, and the only one to remain positive throughout 2024 H1.

---

#### **🛡️ Generative Stress Testing: Counterfactual Risk Propagation**

Conditional rejection sampling from the learned distribution synthesizes counterfactual market states under canonical macro narratives — **Energy Crash, Industrial Boom, Agri Supply Shock, Infrastructure Expansion** — while preserving cross-asset dependence.

<div class="row align-items-center">
  <div class="col-md-7">
    {% include figure.liquid path="assets/img/tsld/fig_stress_radar.png" title="Sector-organized cross-asset transmission profiles under four stress scenarios" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-5">
    <blockquote>
      <strong>Transmission Analysis:</strong> The radar profiles reveal within- and cross-sector transmission patterns, validated out-of-sample and compared across encoders — a more structure-aware alternative to traditional Monte Carlo stress tests.
    </blockquote>
  </div>
</div>

<div class="row align-items-center">
  <div class="col-md-5">
    {% include figure.liquid path="assets/img/tsld/stress_test_combined.png" title="Generative Stress Testing: Synthetic Scenario Projection vs. Historical Tail Events" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-7">
    <ul>
      <li><strong>Stochastic Scenario Projection:</strong> Sampling from the learned score-based gradient field synthesizes "shadow" market snapshots that maintain complex cross-asset correlations, even in non-linear tail-risk regimes.</li>
      <li><strong>Tail-Risk Resilience:</strong> Simulated shocks respect the underlying latent manifold constraints, yielding a more granular stress test than traditional Monte Carlo methods.</li>
    </ul>
  </div>
</div>
