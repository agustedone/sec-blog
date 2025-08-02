---
layout: default
title: "Security Advisories"
permalink: /advisories/
---

# Security Advisories

Nuestros security advisories oficiales para vulnerabilidades descubiertas por el equipo de SecBlog.

<div class="advisories-list">
{% for advisory in site.advisories %}
  <article class="advisory-preview">
    <h3><a href="{{ advisory.url | relative_url }}">{{ advisory.title | escape }}</a></h3>
    <div class="advisory-meta">
      <span class="advisory-date">{{ advisory.date | date: "%B %d, %Y" }}</span>
      {% if advisory.cve %}
        <span class="post-cve">{{ advisory.cve }}</span>
      {% endif %}
      {% if advisory.severity %}
        <span class="severity-{{ advisory.severity | downcase }}">{{ advisory.severity }}</span>
      {% endif %}
      {% if advisory.cvss_score %}
        <span class="cvss-score">CVSS: {{ advisory.cvss_score }}</span>
      {% endif %}
    </div>
    
    {% if advisory.vendor %}
    <div class="advisory-details">
      <strong>Vendor:</strong> {{ advisory.vendor }}<br>
      {% if advisory.affected_versions %}
        <strong>Affected Versions:</strong> {{ advisory.affected_versions }}<br>
      {% endif %}
      {% if advisory.fixed_version %}
        <strong>Fixed Version:</strong> {{ advisory.fixed_version }}
      {% endif %}
    </div>
    {% endif %}
    
    <div class="advisory-excerpt">
      {{ advisory.excerpt | strip_html | truncatewords: 40 }}
    </div>
    <a href="{{ advisory.url | relative_url }}" class="read-more">Ver Advisory →</a>
  </article>
{% endfor %}
</div>

{% if site.advisories.size == 0 %}
<div class="no-advisories">
  <p>Aún no hay security advisories publicados. Los advisories aparecerán aquí cuando identifiquemos vulnerabilidades que requieran divulgación pública.</p>
</div>
{% endif %}

## ¿Qué es un Security Advisory?

Los security advisories son informes técnicos detallados sobre vulnerabilidades de seguridad descubiertas por nuestro equipo de investigación. Cada advisory incluye:

- **Descripción técnica** de la vulnerabilidad
- **Proof of concept** para demostrar el impacto
- **Pasos de mitigación** y recomendaciones
- **Timeline de divulgación** responsable
- **Referencias** y recursos adicionales

## Proceso de Divulgación Responsable

Seguimos un estricto proceso de divulgación responsable:

1. **Descubrimiento** → Identificación y verificación de la vulnerabilidad
2. **Notificación** → Contacto inmediato con el vendor afectado
3. **Colaboración** → Trabajo conjunto para desarrollar una solución
4. **Parche** → El vendor publica la corrección
5. **Divulgación** → Publicación pública del advisory (típicamente 90 días después)

## Contacto para Divulgación

Si tienes información sobre una vulnerabilidad o quieres reportar un problema de seguridad:

- **Email**: security@secblog.com
- **PGP Key**: [Descargar clave pública](/assets/pgp-key.asc)

Respetamos la divulgación responsable y trabajamos constructivamente con vendors para mejorar la seguridad. 