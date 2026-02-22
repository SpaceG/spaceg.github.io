---
layout: default
title: Home
---

# Blog

{% for post in site.posts %}
<article style="margin-bottom:2rem;">
<h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
<small>{{ post.date | date: "%d.%m.%Y" }}</small>
<p>{{ post.excerpt }}</p>
</article>
{% endfor %}
