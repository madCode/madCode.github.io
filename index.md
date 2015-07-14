---
layout: page
description: This is who I am.<div class="row-fluid" style="padding-top:1rem;"><ul class="list-inline text-center"><li><a href="http://github.com/madCode/"><img id="social-button" class="img-responsive social-button" src="/images/icons/github.png" alt="github profile"></a></li><li><a href="https://www.linkedin.com/pub/madeeha-ghori/40/6b8/65b"><img id="social-button" class="img-responsive social-button" src="/images/icons/linkedin.png" alt="linkedin profile"></a></li><li><a href="https://www.hackster.io/madcode"><img id="social-button" class="img-responsive social-button" src="/images/icons/hackster.png" alt="linkedin profile"></a></li></ul></div>
displaycategory: portfolio
---
<!-- <h1>This is who I am.</h1>
<p>Ahhhhhhhh</p>
<hr/> -->
<h1>This is what I do.</h1>
<hr/>
<div id="portfolio">
{% for post in site.posts %}
{% if post.categories contains page.displaycategory %}
<a href="{{ BASE_PATH }}{{ post.url }}" class="col-sm-6">
    <img src="{{post.teaser}}" class="img-responsive" alt="{{post.title}} header image">
    <div class="portfolio-caption">
        <h4>{{ post.title }}</h4>
        <div class="text-muted">{{ post.tagline }}</div>
        <br>
    </div>
</a>
{% endif %}
{% endfor %}
</div>
<!-- <br>
<h1>Blog Posts</h1>
<hr/>
<section id="blog">
{% for post in paginator.posts %}
<div class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl }}">
        <h2>
            {{ post.title }}
        </h2>
        {% if post.subtitle %}
        <h3 class="post-subtitle">
            {{ post.subtitle }}
        </h3>
        {% endif %}
    </a>
    <p class="post-meta">Posted {% if post.author != "by Madeeha Ghori"%}{{ post.author }}{% else %}{{ site.title }}{% endif %} on {{ post.date | date: "%B %-d, %Y" }}</p>
</div>
<hr>
{% endfor %}

<!-- Pager 
{% if paginator.total_pages > 1 %}
<ul class="pager">
    {% if paginator.previous_page %}
    <li class="previous">
        <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Newer Posts</a>
    </li>
    {% endif %}
    {% if paginator.next_page %}
    <li class="next">
        <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older Posts &rarr;</a>
    </li>
    {% endif %}
</ul>
{% endif %}
</section>
 -->



 <!-- <div style="padding-top:1rem"><a id="social-button" href="http://github.com/madCode/" style="padding-left:0rem"><i class="fa fa-github-square fa-2x" alt="github profile"></i></a><a id="social-button" href="https://www.linkedin.com/pub/madeeha-ghori/40/6b8/65b"><i class="fa fa-linkedin-square fa-2x social-button" alt="linkedin profile"></i></a><a id="social-button" href="https://www.hackster.io/madcode"><i class="fa fa-h-square fa-2x social-button" alt="linkedin profile"></i></a></div> -->

<!-- <br><ul class="list-inline center-block"><li><a href="https://github.com/madCode"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-github fa-stack-2x"></i></span></a></li><li><a href="https://github.com/madCode"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a></li><li><a href="https://www.hackster.io/madcode"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-header fa-stack-1x fa-inverse"></i></span></a></li></ul> -->