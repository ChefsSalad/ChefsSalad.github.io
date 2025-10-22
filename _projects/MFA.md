---
layout: page
title: "Multi-Agent Financial Model"
description: "A novel multi-agent framework for quantitative trading."
img: assets/img/MFA/frame.jpg
importance: 2
category: research
---

#### **🧠 Motivation & Core Idea**

Financial factor systems are inherently complex, diverse, and noisy. These signals exhibit vastly different efficacy and stability across various market regimes and time scales. Traditional methods often employ a "one-size-fits-all" approach, attempting to capture all data states with a single, complex model. This limits their ability to adapt to local structures, often failing to capture nuanced details while struggling with robust generalization.

Inspired by the **Mixture of Experts (MoE)** strategy, widely successful in Large Language Models, we propose a multi-agent system. This approach enables sparse computation and effective model scaling, allowing individual agents to focus on specific local signals for enhanced representation, and collaborate efficiently through an adaptive, collective modeling strategy.

---

#### **🏗️ Framework Architecture**

Our multi-agent system is composed of a group of heterogeneous models. For example, a momentum factor group might include distinct agents specializing in short, medium, and long-term trend signals respectively. As illustrated in our MAA structure, we feed signals with different characteristics—such as short-term volatility alongside medium and long-term trends—into different generators (agents). These specialized agents then work in synergy to form a comprehensive forecast.

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3">
    {% include figure.liquid path="assets/img/MFA/frame.png" title="MAA-TSF Framework Architecture" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 1. The overall architecture of the Multi-Agent Adversarial framework.</div>
  </div>
</div>

---

#### **📊 Experimental Results**

#### **✅ Quantitative Investment Backtesting**

The framework's specialized, adaptive design translates into strong empirical performance. Backtesting across 12 different commodity futures shows that MAA-TSF consistently outperforms other baseline models in generating cumulative returns, demonstrating its practical value in financial markets.

<div class="row justify-content-center">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/MFA/return.png" title="Cumulative Return Backtesting" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 2. Cumulative return backtesting across 12 different commodity futures.</div>
  </div>
</div>

---

#### **📈 Model-Driven Trading Decisions**

The framework provides a complete, interpretable decision-making process with clear buy and sell signals. The visualization below illustrates the model's actions, the resulting equity curve, and the net profit generated during a specific trading period.

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3">
    {% include figure.liquid path="assets/img/MFA/backtest.png" title="Model Decision Process" class="img-fluid rounded z-depth-1" %}
    <div class="caption text-center">Figure 3. Visualization of the model's decision-making, including trade signals and profit curve.</div>
  </div>
</div>