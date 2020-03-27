---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: "Home"
---
  
<h1><span class="pink">Common</span><span class="blue">Vibes</span></h1>

{% include logline.html %}

<h3>Newsfeed</h3>



<ul>
{% for post in site.announcements %}
<li>
    <div class="post {{ post.border }} {{ post.background }}">
        <div class="post-description">
            <h4 class="{{ post.color }}">{{ post.title }}</h4>
            <p class="post-date {{ post.color }}">{{ post.datestamp }}</p>
            <p class="{{ post.color }}">{{ post.description }} </p>
        </div>
        <div class="post-content">
            {{ post.media }}
        </div>
    </div>
</li>
{% endfor %}
</ul>