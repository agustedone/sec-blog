---
layout: default
title: "SecBlog - Investigación en Ciberseguridad"
---

# SecBlog

Bienvenido a nuestro blog de investigación en ciberseguridad. Aquí encontrarás análisis detallados de vulnerabilidades, informes técnicos, y las últimas investigaciones en seguridad informática.

## Últimos Posts

<div class="posts-list">
{% for post in site.posts limit:5 %}
  <article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
    <div class="post-meta">
      <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
      {% if post.category %}
        <span class="post-category">{{ post.category }}</span>
      {% endif %}
    </div>
    <div class="post-excerpt">
      {{ post.excerpt | strip_html | truncatewords: 50 }}
    </div>
    <a href="{{ post.url | relative_url }}" class="read-more">Leer más →</a>
  </article>
{% endfor %}
</div>

## Categorías

- **[Análisis de Vulnerabilidades](/category/vulnerabilities/)**
- **[Informes de Seguridad](/category/reports/)**
- **[Investigación](/category/research/)**
- **[Herramientas](/category/tools/)**

## Sobre este Blog

Este blog está dedicado a la investigación y divulgación responsable de vulnerabilidades de seguridad. Nuestro objetivo es contribuir a la mejora de la seguridad en el ecosistema digital mediante análisis técnicos detallados y informes de calidad. 