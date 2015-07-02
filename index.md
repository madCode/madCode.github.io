---
layout: default
title: Home
tagline: 
displaycategory: portfolio
---
{% include JB/setup %}
<h1>Portfolio</h1>
<hr>
<section id="portfolio">
        {% for post in site.posts %}
        {% if post.categories contains page.displaycategory %}
            <a href="{{ BASE_PATH }}{{ post.url }}" class="col-md-4 col-sm-6">
                    <img src="{{post.teaser}}" class="img-responsive" alt="{{post.title}} header image">
                <div class="portfolio-caption">
                    <h4>{{ post.title }}</h4>
                    <p class="text-muted">{{ post.tagline }}</p>
                </div>
            </a>
            {% endif %}
        {% endfor %}
</section>

<section id="blog posts" class="col-sm-12">
<h1>Blog</h1>
<hr>
<ul>
{% for post in site.posts %}
{% unless post.categories contains 'portfolio' %}
<li><a href="{{post.url}}">{{post.title}}</a></li>
{% endunless %}
{% endfor %}
</ul>
</section>

<!-- Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:
    
    title : My Blog =)
    
    author :
      name : Name Lastname
      email : blah@email.test
      github : username
      twitter : username

The theme should reference these variables whenever needed.
    
## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

This theme is still unfinished. If you'd like to be added as a contributor, [please fork](http://github.com/plusjade/jekyll-bootstrap)!
We need to clean up the themes, make theme usage guides with theme-specific markup examples. -->


