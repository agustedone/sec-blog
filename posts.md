---
layout: default
title: "Todos los Posts"
permalink: /posts/
---

# Todos los Posts

Explora nuestro archivo completo de artículos sobre ciberseguridad, organizados cronológicamente.

<div class="posts-archive">
{% for post in site.posts %}
  <article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
    <div class="post-meta">
      <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
      {% if post.category %}
        <span class="post-category">{{ post.category }}</span>
      {% endif %}
      {% if post.cve %}
        <span class="post-cve">CVE: {{ post.cve }}</span>
      {% endif %}
      {% if post.severity %}
        <span class="severity-{{ post.severity | downcase }}">{{ post.severity }}</span>
      {% endif %}
    </div>
    <div class="post-excerpt">
      {{ post.excerpt | strip_html | truncatewords: 30 }}
    </div>
    <a href="{{ post.url | relative_url }}" class="read-more">Leer más →</a>
  </article>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="no-posts">
  <p>Aún no hay posts publicados. ¡Vuelve pronto para ver nuestro contenido!</p>
</div>
{% endif %} 