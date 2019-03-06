all: generate

generate: custom.less
	npx lessc custom.less public_html/custom.css
