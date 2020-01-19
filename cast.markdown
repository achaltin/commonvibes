---
layout: default
title: Cast
permalink: /cast/
---

<h1>Common Vibes Cast</h1>
<ul>
{% for castmember in site.cast %}
    <li class="cast">
        <h2>{{ castmember.name }}</h2>
        <h3>{{ castmember.role }}</h3>
        <img src="{{ castmember.headshot }}" alt="{{ castmember.name }} Headshot"/>
        <p>{{ castmember.content | markdownify }}</p>
    </li>
{% endfor %}
</ul>