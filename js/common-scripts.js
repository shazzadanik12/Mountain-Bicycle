
(function($){
	$(function(){
        
        /*  Header */
        if($(".main-header-section").length){
            var $header = $(".main-header-section"),
                $clone = $header.before($header.clone().addClass("fixedTop")),
                $fixedHeader = $('.fixedTop'),
                $mainHeaderHeight = $header.outerHeight(),
                $headerHeight = $fixedHeader.outerHeight(),
                lastPos = 0;
            if ($(window).width() > 767) {
                $fixedHeader.css({
                    top: - $headerHeight
                });
                $(window).resize(function () {
                    $headerHeight = $fixedHeader.outerHeight();
                });

                $(window).on("scroll resize", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {

                        //$fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").addClass("started");

                        if (fromTop > lastPos) {
                            $fixedHeader.css({
                                top: 0
                            });
                        }
                        lastPos = fromTop;


                    } else {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").removeClass("started");

                    }
                });


            } else{
                $(window).on("scroll", function(){
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {
                        $("body").addClass("over-header");
                    }else{
                        $("body").removeClass("over-header");
                    }
                })
            }
        }
        /*  Header */
        
        $('.hero-info-inner').click(function(){
            $('.booking-modal-wrap').css({'transform' : 'translateY(0)'})
        }) 
        $('.back-btn').click(function(){
            $('.booking-modal-wrap').css({'transform' : 'translateY(-100%)'})
        })
        
        
        /*  modal */

        $('.phone-nav').click(function (e) {
            e.preventDefault();
            $(".nav-modal-wrap").fadeIn();
            $("body").addClass("navExpanded");
        })
        $(".back-btn").click(function (e) {
            e.preventDefault();
            $(".nav-modal-wrap").fadeOut()
            $("body").removeClass("navExpanded");
        })

        $(".nav-modal-wrap").click(function(e){
            e.stopPropagation();

        })
        
        /*  Accordion */
        
        $("div.accordion-item").eq(0).addClass('active')
        $("div.accordion-item > h2").eq(0).addClass('active')
        $("div.accordion-thumb-inner > div.accordion-thumb-item").eq(0).addClass('info-show')

        $("div.accordion-item").each(function(i){
            var $this = $(this);
            $this.find(" > h2").on("click touch", function(){
                if( $(this).hasClass('active') ) return false
                else{
                    $("div .accordion-item").removeClass("active")
                    $this.addClass("active")
                    $("div .accordion-item h2").removeClass("active")
                    $(this).addClass('active')

                    $(".accordion-info").slideUp();
                    $this.find(" > .accordion-info").slideDown();
                    $("div.accordion-thumb-inner > div.accordion-thumb-item").removeClass('info-show')
                    $("div.accordion-thumb-inner > div.accordion-thumb-item").eq(i).addClass('info-show')

                }


            })

        }) 

      /*  Accordion */
        
        /*  home page */

        if($('.slider-item-wrap').length){
            $('.slider-item-wrap').slick({
                dots: false,
                arrows:true,
                autoplay:false,
                autoplaySpeed:500,
                infinite: false,
                navigation:true,
                speed: 900,
                slidesToShow:1,
                slidesToScroll: 1,
            })
        }

        $("#tab-slider-1 .tab-triger > ul > li").eq(0).addClass('active')
        $("#tab-slider-1 .tab-triger > ul > li > h3").eq(0).addClass('active')
        $("#tab-slider-1 div.slider-wrap > div.slider-item-wrap").eq(0).addClass('thumb-show')

        $("#tab-slider-1 .tab-triger > ul > li").each(function(i){
            var $this = $(this);
            $this.find(" > h3").on("click touch", function(){
                if( $(this).hasClass('active') ) return false
                else{
                    $("#tab-slider-1 .tab-triger > ul > li").removeClass("active")
                    $this.addClass("active")
                    $("#tab-slider-1 .tab-triger > ul > li > h3").removeClass("active")
                    $(this).addClass('active')

                    $("#tab-slider-1 .tab-show").slideUp();
                    $this.find(" > .tab-show").slideDown();
                    $("#tab-slider-1 div.slider-wrap > div.slider-item-wrap").removeClass('thumb-show')
                    $("#tab-slider-1 div.slider-wrap > div.slider-item-wrap").eq(i).addClass('thumb-show')

                }


            })

        }) 


        $("#tab-slider-2 .tab-triger > ul > li").eq(0).addClass('active')
        $("#tab-slider-2 .tab-triger > ul > li > h3").eq(0).addClass('active')
        $("#tab-slider-2 div.slider-wrap > div.slider-item-wrap").eq(0).addClass('thumb-show')

        $("#tab-slider-2 .tab-triger > ul > li").each(function(i){
            var $this = $(this);
            $this.find(" > h3").on("click touch", function(){
                if( $(this).hasClass('active') ) return false
                else{
                    $("#tab-slider-2 .tab-triger > ul > li").removeClass("active")
                    $this.addClass("active")
                    $("#tab-slider-2 .tab-triger > ul > li > h3").removeClass("active")
                    $(this).addClass('active')

                    $("#tab-slider-2 .tab-show").slideUp();
                    $this.find(" > .tab-show").slideDown();
                    $("#tab-slider-2 div.slider-wrap > div.slider-item-wrap").removeClass('thumb-show')
                    $("#tab-slider-2 div.slider-wrap > div.slider-item-wrap").eq(i).addClass('thumb-show')

                }


            })

        }) 

        $("#tab-slider-3 .tab-triger > ul > li").eq(0).addClass('active')
        $("#tab-slider-3 .tab-triger > ul > li > h3").eq(0).addClass('active')
        $("#tab-slider-3 div.slider-wrap > div.slider-item-wrap").eq(0).addClass('thumb-show')

        $("#tab-slider-3 .tab-triger > ul > li").each(function(i){
            var $this = $(this);
            $this.find(" > h3").on("click touch", function(){
                if( $(this).hasClass('active') ) return false
                else{
                    $("#tab-slider-3 .tab-triger > ul > li").removeClass("active")
                    $this.addClass("active")
                    $("#tab-slider-3 .tab-triger > ul > li > h3").removeClass("active")
                    $(this).addClass('active')

                    $("#tab-slider-3 .tab-show").slideUp();
                    $this.find(" > .tab-show").slideDown();
                    $("#tab-slider-3 div.slider-wrap > div.slider-item-wrap").removeClass('thumb-show')
                    $("#tab-slider-3 div.slider-wrap > div.slider-item-wrap").eq(i).addClass('thumb-show')

                }


            })

        }) 


        /*  home page */
        /* Date */

        $('div.date-picker > input').focus(function(){
            $('div.date-picker').addClass('blured')
            $(this).parent().removeClass('blured').addClass('focused')
        })
        $('div.date-picker > input').blur(function(){
            $('div.date-picker').removeClass('blured')
            $(this).parent().removeClass('focused')
            
        })
        
        
        var months = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
        var uDatepicker = $.datepicker._updateDatepicker;
        $.datepicker._updateDatepicker = function() {
            var ret = uDatepicker.apply(this, arguments);
            var $sel = this.dpDiv.find('select');
            $sel.find('option').each(function(i) {
                $(this).text(months[i]);
            });
            return ret;
        };
        


        if ($('#datepicker').length) {
            $("#datepicker").datepicker({
                dateFormat: 'dd MM yy',
                dayNamesMin: ["M", "T", "W", "T", "F", "S", "S"], 
                autoSize: true,
                onSelect: function () {
                    $(this).addClass('selected-date');
                }

            });
        }




        if ($('#datepicker-two').length) {
            $("#datepicker-two").datepicker({
                dateFormat: 'dd MM yy',
                dayNamesMin: ["M", "T", "W", "T", "F", "S", "S"],
                autoSize: true,
                onSelect: function () {
                    $(this).addClass('selected-date');
                }

            });
        }
        
        
        
        var monthNames = new Array(
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December");

        var now = new Date();
        var todayDate = now.getDate()  + " " + monthNames[now.getMonth()] + " " + now.getFullYear();
        var tomorrowDate = (now.getDate() +1 )  + " " + monthNames[now.getMonth()] + " " + now.getFullYear();
        
        
        $("#datepicker").val(todayDate)
        $("#datepicker-two").val(tomorrowDate)
        

        /* Date */
      
        
		
        if ($("select.stylled-select").length) {
            $("select.stylled-select").selectric();
        }
       
        $(window).scroll(function(){
            if ($(window).scrollTop() > 300) {
                $(".main-footer-section").addClass('footer-sticky');
            }
            else{
                $(".main-footer-section").removeClass('footer-sticky'); 
            }
        })
        
        
        /* Slider */
        

        //  venue-carousel function 
        
        
        
        
        
        if($('.suite-slider').length){

            var $status = $('.slideingInfo');
            var $slickElement = $('.suite-slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

                /* var i = (currentSlide ? currentSlide : 0) + 4;*/
                if( currentSlide + 1 > slick.slideCount ){
                    i = slick.slideCount
                }
                else{
                    i = ( currentSlide ? currentSlide : 0 ) + 1; 
                }

                var setCounter = ( i < 10  ? '0' + i : i ); 

                $(".slider-counter span").text(setCounter)

                var slickTotalCount = ( slick.slideCount < 10  ? '0' + slick.slideCount : slick.slideCount ); 

                $(".slider-counter dfn").text(slickTotalCount)
            });

            $slickElement.slick({

                dots: false,
                arrows:true,
                autoplay:false,
                autoplaySpeed:5000,
                infinite: false,
                navigation:false,
                speed: 900,
                slidesToShow:1,
                slidesToScroll: 1,
            });
        }
         

        /* Tab */
        $(document).ready(function(){

            var tabWrapper = $('#golf-tab'),
                tabMnu = tabWrapper.find('.golf-tab-grid, .golf-tab-list'),
                tabContent = tabWrapper.find('.golf-tab-content-item');

            tabContent.not(':last-child').hide();

            tabMnu.each(function(i){
                $(this).attr('data-tab','tab'+i);
            });
            tabContent.each(function(i){
                $(this).attr('data-tab','tab'+i);
            });

            tabMnu.click(function(){
                var tabData = $(this).data('tab');
                tabWrapper.find(tabContent).hide();
                tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show(); 
            });

            $('.tab-btn').click(function(){
                var before = $('.tab-btn.golf-tab-active');
                before.removeClass('golf-tab-active');
                $(this).addClass('golf-tab-active');
            });

        });
        /* Tab */
        
        
        if ($(".contact-content").length) {
            $("body").addClass("contact-page")
        }
        
        
        $('a.sightseeing-item .hoverd-text').each(function(){
            $('a.sightseeing-item .hoverd-text').mouseenter(function(){
                $(this).parent().addClass('hoverd-active')
            })
            $('a.sightseeing-item .hoverd-text').mouseleave(function(){
                $(this).parent().removeClass('hoverd-active')
            })


        })
        
        
        

        // INITIATE THE FOOTER
        siteFooter();
        // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
        $(window).resize(function() {
            siteFooter();
        });

        function siteFooter() {
            var siteContent = $('.main-content-wrap');
            var siteContentHeight = siteContent.height();
            var siteContentWidth = siteContent.width();

            var siteFooter = $('.main-footer-section');
            var siteFooterHeight = siteFooter.height();
            var siteFooterWidth = siteFooter.width();


            siteContent.css({
                "margin-bottom" : siteFooterHeight + 135
            });
        };
        
        $('div.flight-list-item-wrap').each(function(){
            var $$_this = $(this)
            
            $$_this.find('.flight-list-item').mouseenter(function () {
                $$_this.find('.flight-list-item').addClass('hovered');
                $(this).removeClass('hovered');
            });
            $$_this.find('.flight-list-item').mouseleave(function () {
                $$_this.find('.flight-list-item').removeClass('hovered')
            }); 
        })
        

        
        
        
        
	})// End ready function.
    
    $(window).on('load', function () {
        $("body").addClass("loaded");
    })
   

})(jQuery)

