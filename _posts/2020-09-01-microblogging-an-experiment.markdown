---
layout: post
title: microblogging an experiment
tagline: I've recently started following Dave Winer's blog...
tags: microblog
category: microblog
maintag: microblog
date: 2020-09-01 10:50:17
---
# Microblogging: An Experiment
I've recently started following [Dave Winer's blog](http://scripting.com/), which I find fascinating predominantly in format. Much like Tumblr or Twitter, Dave microblogs. Each entry in his blog is a tiny thought or idea with its own anchor tag (and published as an individual item in his rss feed).

I've been thinking a lot lately about ideas and how people share and discuss ideas. I enjoy discussing ideas with friends, but I have a harder time sharing ideas on the internet. The idea of attempting microblogging just as a way to practice sharing ideas and take the pressure out of "blogging" is intriguing to me. So I decided to give it a go. My goal is to share one new thing I learned each week.

The hard part? This website is clearly not built for easy blogging.

My website isn't super fancy under the hood: it uses Jekyll as a static site generator. Which allows me to do some fancy templating with markdown to create blog posts and the like...but it isn't a "blogging platform" in the same way WordPress is. If I want to make a blog post, I have to create a markdown file, have Jekyll generate the blog post in html form, and then push a commit up to the master branch.

The solution? A combination of scripts and open source tools.

I created a script that would take any markdown file in my newly created "blogPosts" folder, update some headings on it, and create a new markdown file in my blog repo folder.

Then I used [Syncthing](https://syncthing.net/) to share the blogPosts folder between my computer and my phone. This means I am, at this moment, typing up this blog post on my phone. It'll automatically sync to my laptop, and then at my leisure I can run the script and merge all new blog posts to my website.

Obviously, there's more that can be automated here. Next steps:
1. A cron job that will automatically run the script _and_ commit the new blog posts to master
2. Think harder about drafts. Right now, there's no way to denote a file as being a draft. Maybe I gotta make a way...
