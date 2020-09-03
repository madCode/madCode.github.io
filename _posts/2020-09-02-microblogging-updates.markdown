---
layout: post
title: microblogging updates
tagline: The latest additions to my experiment: * A cron jo...
tags: microblog
category: microblog
maintag: microblog
---
The latest additions to my experiment:
* A cron job that uploads my posts twice a day
* Publishing script now ignores posts with "DRAFT" in the title

Latest ambitions:
* create a template so I can add additional tags, etc
* add the date the post was created to the jekyll header

Right now I have the publishing script automatically add Jekyll info to the post before pushing to master.

I noticed markor (the markdown editor I use on my phone) has a hardcoded template for Jekyll posts that I could start using. It would allow the timestamps on the posts to match when the post was actually created instead of whenever it was pushed to master. (Though I could probably do this myself also via the script). And I can add my own tags, customize blog titles and taglines further, etc. But you can't currently update templates or create new ones. So I'd have to repeatedly type the same stuff over and over again. Probably not worth it. But might be worth rolling my sleeves up in an open source library?
