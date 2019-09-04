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
  * **custom.css**: CSS overrides on a per-section basis, primarily to have
                    multiple related elements (semesters, financial aid
		    entries) on one line -- generated from custom.less
  * **disable.html**: Replace *index.html* with this page when the
                      period for collecting apps has ended.
  * **embed_page.css**: CSS styles for the embed page itself, primarily for
                        coloration and layout -- generated from embed_page.less
  * **index.html**: Contains the "embed link" from FormSmarts
  * **syronex.html**: HTML file named by FormSmarts to do domain-name
                      verification, a la SSL/TLS cert "Domain Validation"
* **custom.less**: Preprocessed CSS overrides using [Less][2] which generates
                   the **custom.css** file
* **embed_page.less**: Preprocessed page layout styles
* **Makefile**: Run *make* to generate **custom.css** (see Instructions below)
* **package.json**: [Node.JS][3] config file containing various dependencies
* **package-lock.json**: [Node.JS][3] boilerplate config file

[2]: http://lesscss.org/
[3]: https://nodejs.org/en/

Instructions
------------

1. [Install Node.JS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Clone this repository to a local directory using Git
3. Run "npm install --only=dev"
4. Run "make" to generate **custom.css** from **custom.less**
