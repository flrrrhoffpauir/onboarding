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