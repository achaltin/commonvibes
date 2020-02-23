---
layout: default
title: Cast
permalink: /cast/
---

<h1>Common Vibes Cast</h1>
<ul>
{% for castmember in site.cast %}
    <li class="cast cast-block">
    <img src="{{ castmember.headshot }}" alt="{{ castmember.name }} Headshot"/>
    <div class="cast-info">
        <h2 class="pt-0 cast-name">{{ castmember.name }}</h2>
        <h3 class="pt-0 cast-role">{{ castmember.role }}</h3>
        <p class="pt-0">{{ castmember.about }}</p>
    </div>
    
    </li>
{% endfor %}
</ul>