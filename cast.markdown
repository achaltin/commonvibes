---
layout: default
title: Cast
permalink: /cast/
page-width: "extra-wide"
---

<h1>Common Vibes Cast and Crew</h1>

<div class="season-bar">
    <ul class="center-bar">
        <li class="nav-btn active-selection" id="cast-btn" onclick="switchTab('cast-btn','cast-tab')">
            Cast
        </li>
        <li class="nav-btn inactive-selection" id="crew-btn" onclick="switchTab('crew-btn','crew-tab')">
            Crew
        </li>
    </ul>
</div>


<div id="cast-tab" class="active-tab">
    <ul class="cast">
    {% for castmember in site.cast %}
        <li class="cast-block {{ castmember.border }}">
            <img src="{{ castmember.headshot }}" alt="{{ castmember.name }} Headshot" class="cast-profile"/>
            <div class="cast-info">
                <h2 class="pt-0 cast-name">{{ castmember.name }}</h2>
                <h3 class="pt-0 cast-role {{ castmember.text }}">{{ castmember.role }}</h3>
                <p class="pt-0">{{ castmember.about }}</p>
                {{ castmember.content | markdownify }}
            </div>
                <img src="../assets/images/profile-icons.jpg" alt="dating profile icons: no, info, yes" class="dating-icons"/>
        </li>
    {% endfor %}
    </ul>
</div>

<div id="crew-tab" class="inactive-tab">
    <ul class="cast">
    {% for crewmember in site.crew %}
        <li class="cast-block {{ crewmember.border }}">
            <img src="{{ crewmember.headshot }}" alt="{{ crewmember.name }} Headshot" class="cast-profile"/>
            <div class="cast-info">
                <h2 class="pt-0 cast-name">{{ crewmember.name }}</h2>
                <h3 class="pt-0 cast-role {{ crewmember.text }}">{{ crewmember.role }}</h3>
                <p class="pt-0">{{ crewmember.about }}</p>
                {{ crewmember.content | markdownify }}
            </div>
                <img src="../assets/images/profile-icons.jpg" alt="dating profile icons: no, info, yes" class="dating-icons"/>
        </li>
    {% endfor %}
    </ul>
</div>

<!-- Cast members are listed in the order of the files in the cast folder (alphabetically) -->