# SecBlog - Blog de Investigación en Ciberseguridad

Un blog profesional dedicado a la investigación y divulgación responsable de vulnerabilidades en ciberseguridad, desarrollado con Jekyll y alojado en GitHub Pages.

## 🚀 Características

- **Diseño limpio y profesional** inspirado en Project Zero de Google
- **Optimizado para contenido técnico** con sintaxis highlighting
- **Responsive design** adaptable a todos los dispositivos
- **SEO optimizado** con meta tags y structured data
- **Categorización de contenido** (Vulnerabilidades, Herramientas, Investigación)
- **Sistema de tags** para clasificación avanzada
- **Soporte para CVE y severity levels**
- **Navegación intuitiva** entre posts
- **Feed RSS** para suscriptores

## 📁 Estructura del Proyecto

```
sec-blog/
├── _config.yml          # Configuración principal de Jekyll
├── _layouts/            # Plantillas HTML
│   ├── default.html     # Layout principal
│   └── post.html        # Layout para posts
├── _posts/              # Artículos del blog
├── _advisories/         # Colección de security advisories
├── assets/              # Recursos estáticos
│   ├── css/
│   │   └── style.css    # Estilos principales
│   └── js/
├── about.md             # Página "Acerca de"
├── index.md             # Página principal
└── posts.md             # Lista de todos los posts
```

## 🛠️ Tecnologías Utilizadas

- **Jekyll** - Generador de sitios estáticos
- **GitHub Pages** - Hosting gratuito
- **Kramdown** - Procesador de Markdown
- **Rouge** - Syntax highlighting
- **CSS Grid/Flexbox** - Layout responsive

## 📝 Cómo Escribir Posts

### 1. Crear un nuevo post

Los posts se crean en la carpeta `_posts/` con el formato:
```
YYYY-MM-DD-titulo-del-post.md
```

### 2. Front Matter

Cada post debe incluir metadata en el front matter:

```yaml
---
layout: post
title: "Título del Post"
date: 2024-01-15 10:00:00 -0500
category: "Categoría"
author: "Autor"
cve: "CVE-2024-XXXX"  # Opcional
severity: "Critical"   # Critical/High/Medium/Low
tags: [tag1, tag2, tag3]
---
```

### 3. Categorías Disponibles

- **Análisis de Vulnerabilidades** - Investigación de CVEs y 0-days
- **Herramientas** - Reviews y tutoriales de herramientas de seguridad  
- **Investigación** - Papers y estudios originales
- **Informes de Seguridad** - Análisis de incidentes y tendencias

### 4. Ejemplos de Contenido

#### Post de Vulnerabilidad
```markdown
## Resumen Ejecutivo
- **CVE**: CVE-2024-XXXX
- **Severidad**: Crítica (CVSS 9.8)
- **Producto Afectado**: Software v1.0-v2.0
- **Impacto**: Remote Code Execution

## Descripción Técnica
[Análisis detallado...]

## Proof of Concept
```bash
# Exploit code
```

## Mitigación
[Recomendaciones...]
```

## 🚀 Desarrollo Local

### Prerequisitos

- Ruby 2.7+
- Bundler

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/sec-blog.git
cd sec-blog

# Instalar dependencias
bundle install

# Servir localmente
bundle exec jekyll serve

# Visitar http://localhost:4000
```

### Comandos Útiles

```bash
# Desarrollo con auto-reload
bundle exec jekyll serve --livereload

# Generar sitio para producción
bundle exec jekyll build

# Verificar links rotos
bundle exec jekyll doctor
```

## 📈 SEO y Analytics

El sitio incluye:
- Meta tags optimizados
- Open Graph tags para redes sociales
- Schema.org structured data
- XML sitemap automático
- Feed RSS/Atom
- Canonical URLs

## 🔒 Política de Divulgación Responsable

Seguimos un estricto proceso de divulgación responsable:

1. **Investigación ética** - No dañamos sistemas en producción
2. **Notificación previa** - Contactamos vendors antes de publicar
3. **Período de gracia** - 90 días para desarrollar parches
4. **Divulgación coordinada** - Colaboramos con vendors

## 📞 Contacto

- **General**: info@secblog.com
- **Security**: security@secblog.com
- **PGP**: [Clave pública](/assets/pgp-key.asc)

## 📄 Licencia

El contenido está licenciado bajo [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
El código del sitio está bajo licencia MIT.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el repositorio
2. Crea una branch para tu feature
3. Commit tus cambios
4. Push a la branch
5. Crea un Pull Request

---

**SecBlog** - Contribuyendo a la seguridad digital global mediante investigación ética y divulgación responsable. 