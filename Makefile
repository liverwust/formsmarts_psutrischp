all: custom embed_page

custom: custom.less
	npx lessc custom.less public_html/custom.css

embed_page: embed_page.less
	npx lessc embed_page.less public_html/embed_page.css
