---
layout: default
title: Episodes
permalink: /episodes/
descriptions: "Common Vibes Episodes: Watch the released promos and episodes of the series."
---

<h1><span class="pink">Common</span><span class="blue">Vibes</span> Episodes</h1>

<div class="season-bar">
    <ul>
        <li class="nav-btn active-selection" id="s1" onclick="switchTab('s1','t1')">
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
        <li class="nav-btn inactive-selection" id="s5" onclick="switchTab('s5','t5')">
            Extras
        </li>
    </ul>
</div>


<div class="season active-tab" id="t1">
    <h2>Season 1</h2>
 <div class="episode-player">
    <div class="episode border-yellow bg-blue active-player" id="s1e1-player">
        <h5 class="episode-number bg-yellow blue">Episode 1: QUINN</h5>
        <p class="episode-number bg-yellow pa-0 "><br/></p>
        <div class="episode-video">
            <iframe src="" data-src="https://www.youtube.com/embed/HEs_4VIBeAs" width="100%" height="400px" style="overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-yellow"></iframe>
        </div>
        <div class="episode-description">
            <p class="yellow">
            Meet Quinn, the first of our four roommates! 
Boisterous, unabashed, and up for anything, watch Quinn wade her way through modern hookup culture.</p>
        </div>
    </div><!-- end of current episode player1.1-->
<div class="episode border-purple bg-lightblue inactive-player" id="s1e2-player">
        <h5 class="episode-number bg-purple lightblue">Episode 2: ROBYN</h5>
        <p class="episode-number bg-purple pa-0 "><br/></p>
        <div class="episode-video">
            <iframe src="" data-src="https://www.youtube.com/embed/1gReWj722O8" width="100%" height="400px" style="overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-purple"></iframe>
        </div>
        <div class="episode-description">
            <p class="purple">
            Meet Robyn, the second of our four roommates! Goofy, loud, and ambitious, watch Robyn meet the struggles of a clashing relationship.</p>
        </div>
    </div><!-- end of current episode player 1.2-->

 <div class="episode-bar">
    <ul>
        <li class="nav-btn active-episode" id="s1e1" onclick="switchPlayer('s1e1','s1e1-player',0)">
            Episode 1
        </li>
        <li class="nav-btn inactive-episode" id="s1e2" onclick="switchPlayer('s1e2','s1e2-player',1)">
            Episode 2
        </li>
        <li class="nav-btn inactive-episode" id="s1e3" onclick="">
            Episode 3
        </li>
        <li class="nav-btn inactive-episode" id="s1e4" onclick="">
            Episode 4
        </li>
    </ul>
</div>

 </div><!-- end of episode player -->
 <h3>All Season 1 Episodes</h3>
<div class="episode-list">
    <div class="promo border-yellow bg-blue">
        <h5 class="episode-number bg-yellow blue">1.1: Quinn</h5>
        <div class="episode-video">
            <iframe src="" data-src="https://www.youtube.com/embed/HEs_4VIBeAs" width="350" height="250" style="overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-yellow"></iframe>
        </div>
        <div class="episode-description">
            <p class="yellow">
            Meet Quinn, the first of our four roommates! 
Boisterous, unabashed, and up for anything, watch Quinn wade her way through modern hookup culture.</p>
        </div>
    </div><!-- end of episode -->

 <div class="promo border-purple bg-lightblue">
        <h5 class="episode-number bg-purple lightblue">1.2: Robyn</h5>
        <div class="episode-video">
            <iframe src="" data-src="https://www.youtube.com/embed/1gReWj722O8" width="350" height="250" style="overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-purple"></iframe>
        </div>
        <div class="episode-description ">
            <p class="purple">Meet Robyn, the second of our four roommates! Goofy, loud, and ambitious, watch Robyn meet the struggles of a clashing relationship.</p>
        </div>
    </div><!-- end of episode -->

<div class="promo border-lightblue bg-red">
        <h5 class="episode-number bg-lightblue red">1.3: Harper</h5>
        <div class="episode-video">
           <img src="../assets/images/comingsooncovers/s1e3.png" class="partial-border-lightblue" style="width:100%;"/>
        </div>
        <div class="episode-description">
            <p class="lightblue">Episode coming soon!</p>
        </div>
    </div><!-- end of episode -->

<div class="promo border-pink bg-yellow">
        <h5 class="episode-number bg-pink yellow">1.4: Marley</h5>
        <div class="episode-video">
           <img src="../assets/images/comingsooncovers/s1e4.png" class="partial-border-pink" style="width:100%;"/>
        </div>
        <div class="episode-description">
            <p class="pink">Episode coming soon!</p>
        </div>
    </div><!-- end of episode -->

</div><!-- end of episode list -->

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

<div class="season inactive-tab" id="t5">
    <h2>Extras</h2>
    <div class="episode-list">
        <div class="promo border-blue pink bg-yellow">
        <h5 class="episode-number bg-blue yellow">Promo #1: How to Use a Condom!</h5>
        <div class="episode-video">
            <iframe src="" data-src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCommonVibesSeries%2Fvideos%2F139522734042085%2F&show_text=0&width=350" width="350" height="250" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-blue"></iframe>
        </div>
        <div class="episode-description">
            <p class="blue">
            Meet Quinn as she gives a mini sex ed lesson on condoms! </p>

<p class="blue credit">
            Music: bensound.com; Perfect Blue - Running From the Hills
            </p>
        </div>
    </div>

<div class="promo border-lightblue bg-purple">
        <h5 class="episode-number bg-lightblue purple">Promo #2: Tight or Loose?</h5>
        <div class="episode-video">
            <iframe src="" data-src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCommonVibesSeries%2Fvideos%2F553634041932436%2F&show_text=0&width=350" width="350" height="250" style="overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-lightblue"></iframe>
        </div>
        <div class="episode-description">
            <p class="lightblue">
            Meet Robyn as she clears up a common myth and gives some.. helpful.. tips!</p>

<p class="lightblue credit">
            Music: bensound.com; Sunday Cruise - Philophobia
            </p>
        </div>
    </div>


<div class="promo border-red bg-lightblue">
        <h5 class="episode-number bg-red lightblue">Promo #3: (The Concept of) Virginity</h5>
        <div class="episode-video">
            <iframe src="" data-src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCommonVibesSeries%2Fvideos%2F237320487660994%2F&show_text=0&width=350" width="350" height="250" style="overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-red"></iframe>
        </div>
        <div class="episode-description">
            <p class="red">
            Meet Harper as she downplays the outdated idea of virginity!</p>

<p class="red credit">
            Music: bensound.com; Sunday Cruise - Sad Boi
            </p>
        </div>
    </div>

<div class="promo border-yellow bg-pink">
        <h5 class="episode-number bg-yellow pink">Promo #4: TOUCH YASELF!</h5>
        <p class="episode-number bg-yellow pa-0 "><br/></p>
        <div class="episode-video">
            <iframe src="" data-src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCommonVibesSeries%2Fvideos%2F210812473702287%2F&show_text=0&width=350" width="350" height="250" style="overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-yellow"></iframe>
        </div>
        <div class="episode-description">
            <p class="yellow">
            Meet Marley as she banishes shame from the act most people take part in but don't talk about...</p>

<p class="yellow credit">
            Music: bensound.com; Sunday Drive - That One Song
            </p>
        </div>
    </div><!-- end of episode -->

<div class="promo border-lightblue bg-blue">
        <h5 class="episode-number bg-lightblue blue">Promo #5: The Guys! (& Tips for tha Ladies)</h5>
        <div class="episode-video">
            <iframe src="" data-src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCommonVibesSeries%2Fvideos%2F272457780436536%2F&show_text=0&width=350" width="350" height="250" style="overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" class="partial-border-lightblue"></iframe>
        </div>
        <div class="episode-description">
            <p class="lightblue">
            The guys from Common Vibes have some advice for you ladies- find out what they're all about!</p>

<p class="lightblue credit">
            Music: bensound.com; Sunday Cruise - Philophobia
            </p>
        </div>
    </div><!-- end of episode -->

</div> <!-- end of episode list -->
</div> <!-- end of season? -->