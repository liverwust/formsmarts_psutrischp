Embedded Site Container for Penn State Triangle Scholarship App
===============================================================

The bulk of the Penn State Triangle Scholarship Application website is hosted
by [FormSmarts](https://formsmarts.com/), a commercial SaaS provider of web-
based surveys. This repository contains CSS styling which enhances the
embedded version of the survey webpage.

Background
----------

Google Forms is lacking in a few key features (particularly, rich input
controls for financial aid information) and developing a custom web app was
far too much work for this project. FormSmarts is reasonably priced and has
many compelling features.

The purpose for this repository can be more easily understood by referencing
[this blog post][1] on the developer's website.

[1]: https://formsmarts.com/weblog/form-builder/online-form-customize-style-css

Contents
--------

* **public_html**: mirror of the directory structure on DreamHost's server
  * **syronex.html**: HTML file named by FormSmarts to do domain-name
                      verification, a la SSL/TLS cert "Domain Validation"
