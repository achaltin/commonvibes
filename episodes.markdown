---
layout: default
title: Episodes
permalink: /episodes/
---

<h1>Common Vibes Episodes</h1>

<h2>Season 1</h2>
<ul>
{% for episode in site.episodes %}
    {% if episode.season == 1 %}
        <li>
            <h3>{{ episode.season }}.{{ episode.episode }} : {{ episode.episode-title }}</h3>
            <iframe width="560" height="315" src="{{ episode.video-link }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </li>
    {% endif %}
{% endfor %}
</ul>

<h2>Season 2</h2>
<ul>
{% for episode in site.episodes %}
    {% if episode.season == 2 %}
        <li>
            <h3>{{ episode.season }}.{{ episode.episode }} : {{ episode.episode-title }}</h3>
            <iframe width="560" height="315" src="{{ episode.video-link }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe/>        
        </li>
    {% endif %}
{% endfor %}
</ul>

<h2>Season 3</h2>
<ul>
{% for episode in site.episodes %}
    {% if episode.season == 3 %}
        <li>
            <h3>{{ episode.season }}.{{ episode.episode }} : {{ episode.episode-title }}</h3>
            <iframe width="560" height="315" src="{{ episode.video-link }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe/>        
        </li>
    {% endif %}
{% endfor %}
</ul>

<h2>Season 4</h2>
<ul>
{% for episode in site.episodes %}
    {% if episode.season == 4 %}
        <li>
            <h3>{{ episode.season }}.{{ episode.episode }} : {{ episode.episode-title }}</h3>
            <iframe width="560" height="315" src="{{ episode.video-link }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe/>        
        </li>
    {% endif %}
{% endfor %}
</ul>