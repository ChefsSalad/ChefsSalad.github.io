---
layout: page
title: "Edu Platform"
description: "AI-powered educational system with Text2SQL & RAG & Chatbot"
img: assets/img/edu/award1.JPG
importance: 6
category: research
---

#### **🏆 Honors & Recognition**

Received **National 6th Place** in the *China College Student Computer Design Competition (4C)*  
and **First Prize** in the *Shanghai Collegiate Application Technology Competition (Enterprise Cooperation Track)*.

---

#### **🧠 Motivation & Core Idea**

This project develops an **AI-powered educational data analysis and dialogue system** that integrates **large language models**, **retrieval-augmented generation (RAG)**, and **big data frameworks** to enhance educational resource management and classroom intelligence.

It enables efficient natural language interaction with educational databases, automatic classroom transcript generation, and reliable AI-assisted analysis.

---

#### **🧩 System Components**

1. **Text2SQL for Natural Language Data Querying**  
   * A **Text2SQL large model** converts user natural language queries into structured SQL statements.  
   * Queries are executed via automated scripts, returning results as **interactive visualization charts**.  
   * Few-shot prompting ensures logical completion and prompt engineering safeguards output reliability.

---

2. **RAG-based Classroom Knowledge Retrieval**  
   * Extracts **audio streams from teaching videos** and transcribes them using **OpenAI’s Whisper** model.  
   * Builds a **vectorized classroom knowledge base** for retrieval-augmented generation (RAG).  
   * The system retrieves relevant segments, returns the **source paragraphs as references**,  
     and uses a secondary model to **validate relevance**, mitigating model hallucinations and improving reliability.

---

3. **ChatGLM3-6B Assistant Integration**  
   * Fine-tuned and deployed **ChatGLM3-6B** as a conversational assistant for teachers and students.  
   * Supports multi-turn, context-aware question answering and resource recommendations.

---

4. **Big Data Infrastructure (Hadoop + Spark)**  
   * Utilizes **Hadoop** and **Apache Spark** for large-scale educational data processing, aggregation, and real-time analytics.  
   * Enhances institutional **resource allocation**, **performance monitoring**, and **decision-making efficiency**.

---

#### **📊 Awards & Competition Showcase**

<div class="row justify-content-center">
  <div class="col-md-6 mt-3">
    {% include figure.liquid path="assets/img/edu/award1.png" title="National Computer Design Competition – Closing Ceremony" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3">
    {% include figure.liquid path="assets/img/edu/award2.png" title="Shanghai Collegiate Application Technology Competition – Award Ceremony" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

#### **🌍 Key Contributions**

* Unified **natural language + SQL** interaction for complex educational data queries.  
* Established a **Whisper + RAG** pipeline for classroom content retrieval and reasoning.  
* Integrated **ChatGLM3-6B** for educational dialogue and task assistance.  
* Leveraged **Hadoop and Spark** for large-scale educational analytics.  
* Achieved **national and provincial awards** for innovation and real-world impact.

---

#### **🚀 Future Work**

* Expand to **multi-institution educational data federation** using privacy-preserving computation.  
* Integrate **speech emotion analysis** to enhance feedback from recorded lectures.  
* Develop a **dashboard for cross-institution data visualization and AI report generation**.
