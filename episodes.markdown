---
layout: default
title: Episodes
permalink: /episodes/
---

<h1><span class="pink">Common</span><span class="blue">Vibes</span> Episodes</h1>

<div class="season-bar">
    <ul>
        <li class="nav-btn inactive-selection" id="s1" onclick="switchTab('s1','t1')">
            Season 1
        </li>
        <li class="nav-btn inactive-selection" id="s2" onclick="switchTab('s2','t2')">
            Season 2
        </li>
        <li class="nav-btn inactive-selection" id="s3" onclick="switchTab('s3','t3')">
            Season 3
        </li>
        <li class="nav-btn inactive-selection" id="s4" onclick="switchTab('s4','t4')">
            Season 4
        </li>
        <li class="nav-btn active-selection" id="s5" onclick="switchTab('s5','t5')">
            Extras
        </li>
    </ul>
</div>


<div class="season inactive-tab" id="t1">
    <h2>Season 1</h2>
    <!-- <ul>
    {% for episode in site.episodes %}
        {% if episode.season == 1 %}
            <li>
                <h3>{{ episode.season }}.{{ episode.episode }} : {{ episode.episode-title }}</h3>
                <iframe width="560" height="315" src="{{ episode.video-link }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                <p>{{ episode.description }}</p>
            </li>
        {% endif %}
    {% endfor %}
    </ul> -->
    <div class="comingsoon border-pink bg-yellow">
        <h1 class="pink">Cumming Soon</h1>
    </div>
</div>
<p class="pa-0"></p>


<div class="season inactive-tab" id="t2">
    <h2>Season 2</h2>
 <!--     <ul>
  {% for episode in site.episodes %}
        {% if episode.season == 2 %}
            <li>
                <h3>{{ episode.season }}.{{ episode.episode }} : {{ episode.episode-title }}</h3>
                <iframe width="560" height="315" src="{{ episode.video-link }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe/>        
            </li>
        {% endif %}
    {% endfor %}
    </ul> -->
    <div class="comingsoon border-pink bg-yellow">
        <h1 class="pink">Cumming Soon</h1>
    </div>
</div>


<div class="season inactive-tab" id="t3">
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
    <div class="comingsoon border-pink bg-yellow">
        <h1 class="pink">Cumming Soon</h1>
    </div>
</div>

<div class="season inactive-tab" id="t4">
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
    <div class="comingsoon border-pink bg-yellow">
        <h1 class="pink">Cumming Soon</h1>
    </div>
</div>

<div class="season active-tab" id="t5">
    <h2>Extras</h2>
</div>