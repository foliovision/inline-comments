!function(n,$,t){var i,o="incom_wrapper",e="#"+o,a="html",r="comments-and-form",c="#"+r,s="incom-commentform",u="data-incom",l=u+"-comment",f=[],d=u+"-bubble",m=u+"-ref",p="incom-active",v="."+p,h="incom-visible-comment",b="."+h,g="incom-position-",y="incom-bubble",k="."+y,w=y+"-style",S=y+"-static",C="."+S,T=y+"-dynamic",x=y+"-active",A=y+"-link",I="incom-comments-wrapper",O="."+I,D="incom-reply",W="."+D,j="incom-cancel",q="."+j,z="incom-info-icon",B="."+z,E="incom-scrolled-to",F=c+" .comment",H="data_incom",N=0,_=$(window).width(),L,Q,X;n.init=function(n){Y(n),G(),J(),qt(),It(),$(W).find(".comment-reply-link").on("click",function(){$(c).find(" #commentform").attr("id",s)}),Dt.init()};var Y=function(n){i=$.extend({selectors:"p",moveSiteSelector:a,countStatic:!0,alwaysStatic:!1,defaultBubbleText:"+",bubbleStyle:"bubble",bubbleAnimationIn:"default",bubbleAnimationOut:"default",position:"left",background:"white",backgroundOpacity:"1",animation:!1},n)},G=function(){0===$(e).length&&$('<div id="'+o+'"></div>').appendTo($(a)).addClass(g+i.position)},J=function(){$(i.selectors).each(function(){var n=$(this);K(n),M.createFromElement(n)})},K=function(n,t){if(t=t||0,!n.attr(u)){var i=P(n);t=R(t,i);var o=i+t;n.attr(u,o)}},M={set:function(n){var i=$.extend({posX:t,posY:t,id:t,visible:!1},n)},createFromElement:function(n){U(n)}},P=function(n){var t=n.prop("tagName").substr(0,5);return t},R=function(n,t){var i=t+n;if(-1!==$.inArray(i,f))for(;-1!==$.inArray(i,f);)n++,i=t+n;return f.push(i),n},U=function(n){var t=V(n),i=nt(n),o=$("<a/>",{href:"","class":A}).text(t).wrap(i).parent();ot(o),mt(n,o),vt(o)?(et(n,o),at(n,o)):o.hide(),o.appendTo(e)},V=function(n){var t;return t=it(n)?Z(n):i.defaultBubbleText},Z=function(n){var t=n.attr(u),i="["+l+"="+t+"]",o=$(c).find(i).length;return o+=$(c).find(i).find(".children").find("li").length},nt=function(n){var t=n.attr(u),i='<div class="'+tt(n)+'" '+d+'="'+t+'" />';return i},tt=function(n){var t=y,o=" ";return(i.alwaysStatic||it(n)&&i.countStatic)&&(t+=o+S),t+=it(n)||!it(n)&&"bubble"===i.bubbleStyle?o+w:o+T},it=function(n){var t=Z(n);return $.isNumeric(t)&&t>0?!0:!1},ot=function(n){n.hasClass(S)&&n.css("display","block")},et=function(n,t){t.hasClass(S)||n.add(t).hover(function(){$(e).find(k+":not("+C+")").hide(),"fadein"===i.bubbleAnimationIn?t.stop(!0,!0).fadeIn():t.stop(!0,!0).show(),vt(t)||t.hide()},function(){"fadeout"===i.bubbleAnimationOut?t.stop(!0,!0).fadeOut():t.stop(!0,!0).delay(700).hide(0)})},at=function(n,t){t.on("click",function(i){i.preventDefault(),$(this).hasClass(x)?(wt(!0),$(this).removeClass(x)):(jt(p),n.addClass(p),wt(),t.addClass(x),ct(t))})},rt=function(){var n;return n=0===$(O).length?$("<div/>",{"class":I}).css("background-color","rgba("+Bt(i.background)+","+i.backgroundOpacity+")").appendTo(e):$(O)},ct=function(n){var t=rt();ft(),ut(),mt(n,t),ht(t),yt(),st()},st=function(){$(document).ready(kt()).ajaxStop(function(){kt()})},ut=function(){$(c).appendTo(O).show(),lt()},lt=function(){var n=$("<input>").attr("type","hidden").attr("name",H).val(dt);$(c).find(".form-submit").append($(n))},ft=function(){var n="["+l+"="+dt()+"]";$(F).hide(),$(F+n).addClass(h).show(),$(b).find(".children").find("li").show()},dt=function(){var n=$(v).attr(u);return n},mt=function(n,t){var i=n.offset();t.css({top:i.top,left:At()?i.left+n.outerWidth():i.left-t.outerWidth()})},pt=function(n){L=n.outerWidth(),Q=n.offset().left,X=Q+L},vt=function(n){return pt(n),X>_||0>Q?!1:!0},ht=function(n){pt(n),At()&&X>_?(bt(X-_),St("in")):!At()&&0>Q&&(bt(-Q),St("in"))},bt=function(n){N=n},gt=function(){return N},yt=function(){$("html").click(function(n){0===$(n.target).parents(e).length&&wt(!0)})},kt=function(){$(q).click(function(n){n.preventDefault(),wt(!0)})},wt=function(n){var t=$(k),i=$(O);$(c).appendTo(e).hide(),$(b).removeClass(h),t.hasClass(x)&&(t.removeClass(x),n?(i.remove(),jt(p),St("out")):i.remove())},St=function(n){var t=$(i.moveSiteSelector);t.css({position:"relative"}),Ct(t,n),i.moveSiteSelector!==a&&(Tt($(k),n),Tt($(O),n))},Ct=function(n,t){var o;if("in"===t?o=gt():"out"===t&&(o="0"),i.animation===!1){var e={};e[i.position]=o,n.css(e)}else Tt(n,t)},Tt=function(n,t){var i,o=At()?"-":"";"in"===t?i=o+gt():"out"===t&&(i="0"),xt(n,i)},xt=function(n,t){n.transition({x:t},400,i.animation)},At=function(){return"right"===i.position?!0:!1},It=function(){var n=m,t=u;Ot(n,t),Wt(n,t)},Ot=function(n,t){$("["+n+"]").each(function(){var i=$(this),o=i.attr(n),e=$("["+t+'="'+o+'"]');e.length||i.parent().remove()})},Dt={init:function(){this.permalinksHandler()},permalinksHandler:function(){$(c).on("click","a.incom-permalink",function(){var n=$(this.hash);if(n.length){Ht(n);var t=$(this).attr("href");return Ft(t),!1}})}},Wt=function(n,t){$("["+n+"]").click(function(){var i=$(this).attr(n),o=$("["+t+'="'+i+'"]');o.length&&(Ht(o),jt(E),o.addClass(E))})},jt=function(n){var t=$("."+n);0!==t.length&&(t.removeClass(n),0===t.prop("class").length&&t.removeAttr("class"))},qt=function(){var n=$(B);if(n.length){n.css({display:"block",visibility:"visible"}),(n.css("opacity")<.2||zt(n)<.2)&&n.css({color:"rgba(0,0,0,1)"}).fadeTo("fast",.5);var t=n.css("font-size").replace(/\D/g,"");6>t&&n.css({"font-size":"13px"});var i=n.css("color");/\s/g.test(i)&&(i=i.replace(/\s/g,"")),i=i.toLowerCase(),("rgb(255,255,255)"===i||"white"===i||"rgba(255,255,255,0)"===i)&&n.css("cssText","color: black!important;")}},zt=function(n){var t=1,i=n.css("color");return/rgba/i.test(i)&&(t=i.replace(/^.*,(.+)\)/,"$1")),t},Bt=function(n){var t=parseInt(Et(n).substring(0,2),16),i=parseInt(Et(n).substring(2,4),16),o=parseInt(Et(n).substring(4,6),16);return t+","+i+","+o},Et=function(n){return"#"===n.charAt(0)?n.substring(1,7):n};$.easing.quart=function(n,t,i,o,e){return-o*((t=t/e-1)*t*t*t-1)+i};var Ft=function(n){history.pushState(null,null,n),history.pushState?history.pushState(null,null,n):location.hash=n},Ht=function(n){var t=$("html, body"),i=n.offset().top-30;t.animate({scrollTop:i},1200,"quart")}}(window.incom=window.incom||{},jQuery);