$ = require("jquery");
window.jQuery = $;
require("jquery-text-counter");

jQuery( document ).ready(function() {
	var $limit_regex = /Please limit your response to ([0-9]+) words maximum/;
	var $limited_textareas = $( "textarea" ).filter(function () {
		$limit_regex.test($this.attr("placeholder"));
	});
	$limited_textareas.each(function (index, element) {
		var $max_words = ($limit_regex.exec($element.attr("placeholder")))[1];
		$max_words = Number($max_words);
		$this.textcounter({
			type: "word",
			max: $max_words,
			stopInputAtMaximum: true
		});
	});
});
