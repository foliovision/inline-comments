!function(t,n,o){var i,e="incom-active";t.init=function(t){a(t),c(),r()};var a=function(t){i=n.extend({selectors:"p",position:"left"},t)},c=function(){0===n("#incom_wrapper").length&&n('<div id="incom_wrapper"></div>').appendTo(n("body"))},r=function(){var t=m(i.selectors);n(t).each(function(o){n(t[o]).each(function(t){var o=n(this);p(t,o),f(o)})})},p=function(t,n){var o=n.prop("tagName").substr(0,1);if(!n.attr("data-incom")){var i=o+t;n.attr("data-incom",i)}},f=function(t){var o=t.offset(),e=n("<a/>",{href:"","class":"incom-bubble-link"}).text("+").wrap('<div class="incom-bubble" />').parent().appendTo("#incom_wrapper");e.css({top:o.top,left:"right"===i.position?o.left+t.outerWidth():o.left-e.outerWidth()}),s(t,e),u(e)},s=function(t,n){t.add(n).hover(function(){n.stop(!0,!0).fadeIn()},function(){n.stop(!0,!0).fadeOut(2e3)})},u=function(t){t.on("click",function(n){n.preventDefault(),d(),t.addClass(e),l(t)})},l=function(t){var o=t.offset(),e=n("<div/>",{"class":"incom-comments-wrapper"}).text("INSERT WP COMMENT SYSTEM HERE").appendTo("#incom_wrapper");e.css({top:o.top,left:"right"===i.position?o.left+t.outerWidth():o.left-e.outerWidth()}),n("html").click(function(t){0===n(t.target).parents("#incom_wrapper").length&&d(!0)})},d=function(t){var o=n(".incom-bubble"),i=n(".incom-comments-wrapper");o.hasClass(e)&&(o.removeClass(e),t===!0?i.fadeOut("fast"):i.remove())},m=function(t){var n=t.split(",");return n}}(window.incom=window.incom||{},jQuery);