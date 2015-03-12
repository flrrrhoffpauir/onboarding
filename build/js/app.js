(function(e,t){function c(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;n.innerHTML="x<style>"+t+"</style>";return r.insertBefore(n.lastChild,r.firstChild)}function h(){var e=b.elements;return typeof e=="string"?e.split(" "):e}function p(e,t){var n=b.elements;if(typeof n!="string"){n=n.join(" ")}if(typeof e!="string"){e=e.join(" ")}b.elements=n+" "+e;y(t)}function d(e){var t=f[e[u]];if(!t){t={};a++;e[u]=a;f[a]=t}return t}function v(e,n,r){if(!n){n=t}if(l){return n.createElement(e)}if(!r){r=d(n)}var o;if(r.cache[e]){o=r.cache[e].cloneNode()}else if(s.test(e)){o=(r.cache[e]=r.createElem(e)).cloneNode()}else{o=r.createElem(e)}return o.canHaveChildren&&!i.test(e)&&!o.tagUrn?r.frag.appendChild(o):o}function m(e,n){if(!e){e=t}if(l){return e.createDocumentFragment()}n=n||d(e);var r=n.frag.cloneNode(),i=0,s=h(),o=s.length;for(;i<o;i++){r.createElement(s[i])}return r}function g(e,t){if(!t.cache){t.cache={};t.createElem=e.createElement;t.createFrag=e.createDocumentFragment;t.frag=t.createFrag()}e.createElement=function(n){if(!b.shivMethods){return t.createElem(n)}return v(n,e,t)};e.createDocumentFragment=Function("h,f","return function(){"+"var n=f.cloneNode(),c=n.createElement;"+"h.shivMethods&&("+h().join().replace(/[\w\-:]+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(b,t.frag)}function y(e){if(!e){e=t}var n=d(e);if(b.shivCSS&&!o&&!n.hasCSS){n.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}"+"mark{background:#FF0;color:#000}"+"template{display:none}")}if(!l){g(e,n)}return e}var n="3.7.2";var r=e.html5||{};var i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var o;var u="_html5shiv";var a=0;var f={};var l;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";o="hidden"in e;l=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){o=true;l=true}})();var b={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:n,shivCSS:r.shivCSS!==false,supportsUnknownElements:l,shivMethods:r.shivMethods!==false,type:"default",shivDocument:y,createElement:v,createDocumentFragment:m,addElements:p};e.html5=b;y(t)})(this,document)
/*
 Sticky-kit v1.0.4 | WTFPL | Leaf Corcoran 2014 | http://leafo.net
*/
(function(){var b,m;b=this.jQuery;m=b(window);b.fn.stick_in_parent=function(e){var u,n,f,s,B,l,C;null==e&&(e={});s=e.sticky_class;u=e.inner_scrolling;f=e.parent;n=e.offset_top;null==n&&(n=0);null==f&&(f=void 0);null==u&&(u=!0);null==s&&(s="is_stuck");B=function(a,e,l,v,y,p,t){var q,z,k,w,c,d,A,x,g,h;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);d=a.parent();null!=f&&(d=d.closest(f));if(!d.length)throw"failed to find stick parent";q=k=!1;g=b("<div />");g.css("position",a.css("position"));A=function(){var c,
b;c=parseInt(d.css("border-top-width"),10);b=parseInt(d.css("padding-top"),10);e=parseInt(d.css("padding-bottom"),10);l=d.offset().top+c+b;v=d.height();c=k?(k=!1,q=!1,a.insertAfter(g).css({position:"",top:"",width:"",bottom:""}),g.detach(),!0):void 0;y=a.offset().top-parseInt(a.css("margin-top"),10)-n;p=a.outerHeight(!0);t=a.css("float");g.css({width:a.outerWidth(!0),height:p,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":t});if(c)return h()};A();if(p!==v)return w=void 0,
c=n,h=function(){var b,h,r,f;r=m.scrollTop();null!=w&&(h=r-w);w=r;k?(f=r+p+c>v+l,q&&!f&&(q=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom")),r<y&&(k=!1,c=n,"left"!==t&&"right"!==t||a.insertAfter(g),g.detach(),b={position:"",width:"",top:""},a.css(b).removeClass(s).trigger("sticky_kit:unstick")),u&&(b=m.height(),p>b&&!q&&(c-=h,c=Math.max(b-p,c),c=Math.min(n,c),k&&a.css({top:c+"px"})))):r>y&&(k=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+
"px":a.width()+"px",a.css(b).addClass(s).after(g),"left"!==t&&"right"!==t||g.append(a),a.trigger("sticky_kit:stick"));if(k&&(null==f&&(f=r+p+c>v+l),!q&&f))return q=!0,"static"===d.css("position")&&d.css({position:"relative"}),a.css({position:"absolute",bottom:e,top:"auto"}).trigger("sticky_kit:bottom")},x=function(){A();return h()},z=function(){m.off("scroll",h);b(document.body).off("sticky_kit:recalc",x);a.off("sticky_kit:detach",z);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:""});
d.position("position","");if(k)return a.insertAfter(g).removeClass(s),g.remove()},m.on("touchmove",h),m.on("scroll",h),m.on("resize",x),b(document.body).on("sticky_kit:recalc",x),a.on("sticky_kit:detach",z),setTimeout(h,0)}};l=0;for(C=this.length;l<C;l++)e=this[l],B(b(e));return this}}).call(this);
$(function($) {
	
	function initModal() {

		/** variables */
		var overlay 	= $(".modal-overlay");
		var trigger 	= $(".modal-trigger");
		var show_class 	= "modal-show";

		/** Show modal window based on trigger's data-modal attr */
		trigger.each(function() {
			var modal = $("#" + $(this).attr("data-modal"));
			
			/** listeners */
			$(this).click(showModal);
			overlay.click(closeModal);
			$("i", modal).click(closeModal);

			/** handlers */
			function showModal() {
				if(!modal.hasClass(show_class))
					modal.addClass(show_class);
			};

			function closeModal() {
				if(modal.hasClass(show_class))
					modal.removeClass(show_class);
			};
		});
	};

	initModal();
});
$(function($) {

    /** set .equal-heights to same height so .guide can be sticky in column */
    $(window).load(function() {
        $.fn.setEqualHeights = function() {
            var tallest = this.map(function(i, e) {
                return $(e).height();
            });
            return this.height(Math.max.apply(this, tallest));
        };

        setTimeout(function() {
            if(!$("body").hasClass("page-results")) {
                $(".equal-heights").setEqualHeights();
            
                // sticky-kit.js
                $(".guide").stick_in_parent({"offset_top": 20});
            }
        }, 500);


        /** animate .bubble when it reaches an .animation-target */
        function initNavigator(items, trigger) {

            items.each( function() {
            
                var ngElement = $(this),
                    ngAnimationClass = ngElement.attr('data-ng-animation'),
                    ngAnimationDelay = ngElement.attr('data-ng-animation-delay');
                  
                    ngElement.css({
                        '-webkit-animation-delay':  ngAnimationDelay,
                        '-moz-animation-delay':     ngAnimationDelay,
                        'animation-delay':          ngAnimationDelay
                    });

                    var ngTrigger = ( trigger ) ? trigger : ngElement;
                    
                    ngTrigger.waypoint(function() {
                        ngElement.addClass('animation-target').addClass(ngAnimationClass);
                    }, {
                        triggerOnce: false,
                        offset: '160'
                });
            });
        };
        initNavigator($('.bubble'), $('.ng-animation'));

    });
});
/** FOUC PREVENTION
	add this class to the HTML element with JS because it
	has the property display: none; so that non-js enabled
	users can view the page properly */
	
document.documentElement.className = "preload";
$(function($) {

	$(window).load(function() {

		//*
		/** remove all of the sg styles */
		$("body").find("link").remove();
		$("body").find("style").remove();
		//*/

		/** show the page and remove some random script */
		$("html").addClass("done");
		$("html").children("script").remove();

		/** disable submit button until the user answers the first question */
		$("input[type=submit]").addClass("pointers-no");

		/** remove sg-hide classes */
		$(".sg-hide").removeClass("sg-hide");


		/** change the default wording of drop downs */
		function updateSelectListText() {
			$(".sg-question-options select").each(function() {

				// get label and question title for select list
				var question_title = $(this).parent().prev();
				var label = question_title.find("label");

				// remove "this field is required" text
				if(label.has($("strong"))) {
					$("strong", label).remove();
				}

				// if the parent is not another form element, remove the title
				if(!question_title.parent().hasClass("sg-type-group")) {
					question_title.remove();
				}

				// always remove the label
				label.remove();

				// set the option text
				var label_text = $.trim(label.text());
				$("option:nth-child(1)", this).text(label_text);
			});
		}
		updateSelectListText();


		/** toggle the g-personal-info-theirs div from showing based on
			the answer to q-determine-user, show q-personal-info-yours */
		function initFirstQuestion() {
			var form_has_changed = false;

			$(".q-determine-user :radio").change(function() {
				var val = $(this).val();
				var elm_theirs = $(".q-personal-info-theirs");
				var elm_yours = $(".q-personal-info-yours");

				// remove show-by-default classes
				$(".show-by-default").removeClass("show-by-default");

				// myself
				if(val == "10061" && !elm_yours.hasClass("pointers-no")) {
					if(!elm_theirs.hasClass("do-display"))
						elm_theirs.addClass("do-display");
					elm_theirs.show().slideUp(function() {
						elm_theirs.removeClass("do-display");
					});
				}
				// on behalf of
				else if(val == "10062") {
					if(!elm_theirs.find($(".sg-question")).hasClass("do-display"))
						elm_theirs.find($(".sg-question")).addClass("do-display");
					elm_theirs.hide().slideDown(function() {
						// 
					});
				}

				// fade in q-person-info-yours and allow pointer events
				if(elm_yours.hasClass("pointers-no")) {
					elm_yours.removeClass("pointers-no").addClass("pointers-yes");
				}

				if(!form_has_changed) {
					$(".pointers-no").removeClass("pointers-no").addClass("pointers-yes");
					form_has_changed = true;
				}
			});
			
			// trigger the change listener if there are errors when the form is submitted
			if($(".sg-error-message").hasClass("sg-error-display")) {
				$(".q-determine-user :radio:checked").trigger("change");
			}
			
		}
		initFirstQuestion();
		

		/** add skip buttons next to section titles that don't have required fields */
		function addSkipButtons() {
			var skip_button = '<button class="button-skip" type="button">Skip</button>';
			$("h1", ".q-is-skippable").append(skip_button);
		}
		addSkipButtons();


		/** change title of q-essay, hide textarea, and make it show on click of title */
		function initEssayToggle() {
			var i = 0;

			$(".q-essay").each(function() {
				var toggle_class = "toggle-q-essay";
				var target_essay = $(".q-essay-" + i);
				var label_text = $(".sg-question-title label", this).text();
				var anchor_tag = '<a href="javascript:void(0);" class="' + toggle_class + '">' + label_text + '</a>';

				// hide textarea
				$(".sg-question-options", this).hide();

				// wrap label in anchor tag
				$(".sg-question-title label", this).html(anchor_tag);

				// toggle visibility of textarea
				$("." + toggle_class, this).click(function() {
					$(".sg-question-options", target_essay).slideToggle();
				});

				i++;
			});
		}
		initEssayToggle();


		/** results page functionality */
		function initResultsPage() {
			// add class to body if we are on the results page
			// otherwise exit function
			if($(".sg-body").hasClass("page-results")) {
				$("body").addClass("page-results");
			} else {
				return;
			}

			// display first name near personal navigator
			var fn = $("span[data-fn]").parent().parent().find("div").text();
			$("span[data-fn-here]").text(fn);					

			// hide all question group titles, so we just have questions and answers
			$(".question-response-group").each(function() {
				if($(this).prev($("question-title"))) {
					$(this).prev().remove();
				}
			});

			// if an unanswered question is in a question group, we need to hide it
			$(".question-answers").each(function() {
				if($(this).text() === "" && $(this).parent($("question-response"))) {
					$(this).parent().remove();
				}
			});

			// replace question-title text with data-result-title attribute
			$(".question-response span").each(function() {
				var new_title = $(this).attr("data-result-title");
				if(typeof new_title !== typeof undefined && new_title !== false) {
					$(this).text(new_title);	
				}
			});
			
			// remove last question from the response-box because it is the privacy policy
			$(".response-box > .question-response:last-child").remove();


			// add dots to make it look more like a receipt
			/*
			$(".question-response").each(function() {
				formatWithDots($(".question-title", this), $(".question-answers div", this));
			});
			//*/
		}
		initResultsPage();


		/** for fun */
		/** ------------------------------------------------------ */
		function formatWithDots(e1, e2) {
			var total = 58;
			var count = e1.text().length + e2.text().length;
			var num_dots = total - count;
			var string_dots = generateDots(num_dots);
			e1.append(string_dots);
		}

		function generateDots(num) {
			var dots = "";
			for(var i = 0; i < num; i++) {
				dots += ".";
			}

			return dots;
		}
		/** ------------------------------------------------------ */
		
		
	});
});
// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);