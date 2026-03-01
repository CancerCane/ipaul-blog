---
layout: default
title: Blog
---

<section class="blog-section">
  <div class="container">
    <div class="text-center mb-5">
      <h1 class="blog-title">All Posts</h1>
      <p class="blog-subtitle">Tech takes, world opinions, and life along the way</p>
    </div>

    <div class="posts-grid">
      {% for post in site.posts %}
        <article class="blog-card">
          {% if post.featured_image %}
            <img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}" class="blog-card-image">
          {% else %}
            <div class="blog-card-placeholder">
              <i class="fas fa-pen-nib"></i>
            </div>
          {% endif %}

          <div class="blog-card-content">
            <h3 class="blog-card-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>

            <p class="blog-card-meta">
              {{ post.date | date: "%B %d, %Y" }}
              {% if post.author %} &bull; {{ post.author }}{% endif %}
              {% if post.categories.size > 0 %} &bull; {{ post.categories | join: ', ' }}{% endif %}
            </p>

            <p class="blog-card-excerpt">
              {{ post.excerpt | strip_html | truncate: 150 }}
            </p>

            <a href="{{ post.url | relative_url }}" class="blog-card-link">Read More &rarr;</a>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
