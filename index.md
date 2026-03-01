---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">iPaul Blog.</h1>
    <p class="hero-description">
      A veteran's second chapter — exploring tech, sharing opinions on the world,
      and documenting the journey through retirement.
    </p>
    <p class="hero-tagline">
      Still learning. Still building. Still got something to say.
    </p>
    <a class="hero-cta" href="#recent-posts">Read Latest</a>
  </div>
</section>

<!-- Recent Posts -->
<section id="recent-posts" class="recent-posts-section">
  <div class="container">
    <h2 class="section-title">Recent Posts</h2>
    <div class="posts-grid">
      {% for post in site.posts limit:6 %}
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
              {% if post.categories.size > 0 %} &bull; {{ post.categories | first }}{% endif %}
            </p>
            <p class="blog-card-excerpt">
              {{ post.excerpt | strip_html | truncate: 120 }}
            </p>
            <a href="{{ post.url | relative_url }}" class="blog-card-link">Read More &rarr;</a>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
