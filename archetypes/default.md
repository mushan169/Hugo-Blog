+++
{{ $section := .Section }}
type = "{{ if $section }}{{ $section }}{{ else }}post{{ end }}"
date = '{{ time.Now.Format "2006-01-02T15:04:05-07:00" }}'
draft = true
title = "{{ replace .File.ContentBaseName "-" " " | title }}"
description = ""
category = ""
cover = ""
show_image_in_list = false
+++

Write your post content here.
