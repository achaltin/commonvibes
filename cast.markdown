---
layout: default
title: Cast
permalink: /cast/
page-width: "extra-wide"
---

<h1>Common Vibes Cast</h1>
<ul class="cast">
{% for castmember in site.cast %}
    <li class="cast-block {{ castmember.border }}">
        <img src="{{ castmember.headshot }}" alt="{{ castmember.name }} Headshot" class="cast-profile"/>
        <div class="cast-info">
            <h2 class="pt-0">{{ castmember.name }}</h2>
            <h3 class="pt-0  {{ castmember.text }}">{{ castmember.role }}</h3>
            <p class="pt-0">{{ castmember.about }}</p>
        </div>
            <img src="../assets/images/profile-icons.jpg" alt="dating profile icons: no, info, yes" class="dating-icons"/>
    </li>
{% endfor %}
</ul>

<!-- Cast members are listed in the order of the files in the cast folder (alphabetically) -->