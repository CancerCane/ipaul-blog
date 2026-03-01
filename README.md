# iPaul Blog

A personal blog built with Jekyll and hosted on GitHub Pages.

Tech, opinions, and life after service — by iPaul.

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000/ipaul-blog/`

## Adding a New Post

Create a file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
author: iPaul
categories: [Tech, Opinion, Life]
excerpt: "A brief description of the post."
featured_image: "/assets/img/your-image.jpg"
---

Your content here...
```

## Built With

- [Jekyll](https://jekyllrb.com/)
- [MDB Bootstrap](https://mdbootstrap.com/) (dark theme)
- [Font Awesome](https://fontawesome.com/)
- [GitHub Pages](https://pages.github.com/)
