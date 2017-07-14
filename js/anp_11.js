(function($){
    "use strict"; 
    /* globals jQuery */

document.addEventListener("touchmove", function(e) {if(e.target.id != "myRange") {e.preventDefault();}}, false);

    $(document).ready(function(e) {
            var img_cc_2014_1 = $("#img_cc_2014_1");
            var img_cc_2014_2 = $("#img_cc_2014_2");
            var img_cc_2014_3 = $("#img_cc_2014_3");
            var img_cc_2009_1 = $("#img_cc_2009_1");
            var img_cc_2009_2 = $("#img_cc_2009_2");
            var img_cc_2009_3 = $("#img_cc_2009_3");
            var img_cc_2009_4 = $("#img_cc_2009_4");
            var img_cc_2009_5 = $("#img_cc_2009_5");
            var img_cc_2009_6 = $("#img_cc_2009_6");
            var img_cc_2004_1 = $("#img_cc_2004_1");
            var img_cc_1993_1 = $("#img_cc_1993_1");
            var img_cc_1993_2 = $("#img_cc_1993_2");
            var img_cc_1993_3 = $("#img_cc_1993_3");
            var img_cc_1993_4 = $("#img_cc_1993_4");
            var img_cc_1993_5 = $("#img_cc_1993_5");
            var img_cc_1993_6 = $("#img_cc_1993_6");
            var img_contour = $("#img_contour");
            var img_landmark = $("#img_landmark");
            var img_well = $("#img_well");

            img_cc_2014_1.hide();
            img_cc_2014_2.hide();
            img_cc_2014_3.hide();
            img_cc_2009_1.hide();
            img_cc_2009_2.hide();
            img_cc_2009_3.hide();
            img_cc_2009_4.hide();
            img_cc_2009_5.hide();
            img_cc_2009_6.hide();
            img_cc_2004_1.hide();
            img_cc_1993_1.hide();
            img_cc_1993_2.hide();
            img_cc_1993_3.hide();
            img_cc_1993_4.hide();
            img_cc_1993_5.hide();
            img_cc_1993_6.hide();
            img_contour.hide();
            img_landmark.hide();
            img_well.hide();

          


            /////////////////////////////////////////////////////////
            ////////BUTTON: VIEWS X 3////////////////////////////////
            /////////////////////////////////////////////////////////
            /* /////Contour/////////////////////////////////////// */
            $("#btn_contour img").on("click", function(){
                $("#btn_contour").toggleClass("active");
                $("#btn_contour h4").toggleClass("active");
                img_contour.fadeToggle("fast", function() {
                    //
                }); 
            });
            $("#btn_contour").hover(function () {
                    $("#btn_contour img").css("opacity", "1.0");
            }, 
            function () {
                if($("#btn_contour").is(".active")) {
                    $("#btn_contour img").css("opacity", "1.0");
                } else {
                    $("#btn_contour img").css("opacity", "0.6");
                }
            });

            /* /////Landmark/////////////////////////////////////// */
            $("#btn_landmark img").on("click", function(){
                $("#btn_landmark").toggleClass("active");
                $("#btn_landmark h4").toggleClass("active");
                img_landmark.fadeToggle("fast");
            });
            $("#btn_landmark").hover(function () {
                    $("#btn_landmark img").css("opacity", "1.0");
            }, 
            function () {
                if($("#btn_landmark").is(".active")) {
                    $("#btn_landmark img").css("opacity", "1.0");
                } else {
                    $("#btn_landmark img").css("opacity", "0.6");
                }
            });

            /* /////Well/////////////////////////////////////////// */
            $("#btn_well img").on("click", function(){
                $("#btn_well").toggleClass("active");
                $("#btn_well h4").toggleClass("active");
                img_well.fadeToggle("fast");
            });
            $("#btn_well").hover(function () {
                    $("#btn_well img").css("opacity", "1.0");
            }, 
            function () {
                if($("#btn_well").is(".active")) {
                    $("#btn_well img").css("opacity", "1.0");
                } else {
                    $("#btn_well img").css("opacity", "0.6");
                }
            });



            ///////////////////////////////////////////////////////////////
            ////////BUTTON: EPA REPORTS X 5////////////////////////////////
            ///////2014 x 3, 2009 x 6, 2004 x 1, 1999 x 0, 1993 x 6////////
            ///////////////////////////////////////////////////////////////
            /* /////EPA REPORTS 2014//////////////////////////////////// */
            $("#btn_cc_2014_1").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2014_1 h4").toggleClass("active");
                // $("#btn_cc_2014_1 img").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.64);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                //slide up all the link lists
                $("#accordian ul ul").slideUp();
                //slide down the link list below the div clicked - only if its closed
                if(!$("#cc_1_name").next().is(":visible")) {
                    $("#cc_1_name").next().slideDown();
                }

                img_cc_2014_1.fadeToggle("fast", function() {
                    //
                }); 
                /*
                div_cc_2014_1.fadeToggle("fast", function() {
                     $(this).ripples({
                        resolution: 256,
                        dropRadius: 10, //px
                        perturbance: 0.04,
                    });
                }); 
                */
                // $(this).data("clicked", true);
                // if($("#btn_cc_2014_1").data("clicked")) {
                //     alert('yes');
                // }                */
            });
            /*
            $("#btn_cc_2014_1").hover(function () {
                $("#btn_cc_2014_1 h4").css("opacity", "1.0");
            }, 
            function () {
                if($("#btn_cc_2014_1").is(".active")) {
                    $("#btn_cc_2014_1 h4").css("opacity", "1.0");
                } else {
                    $("#btn_cc_2014_1 h4").css("opacity", "0.5");
                }
            });
            */
            $("#btn_cc_2014_2").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2014_2 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.64);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_2_name").next().is(":visible")) {
                    $("#cc_2_name").next().slideDown();
                }

                img_cc_2014_2.fadeToggle("fast"); 
            });
            $("#btn_cc_2014_3").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2014_3 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.64);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_3_name").next().is(":visible")) {
                    $("#cc_3_name").next().slideDown();
                }

                img_cc_2014_3.fadeToggle("fast"); 
            });
            /* /////EPA REPORTS 2009//////////////////////////////////// */
            $("#btn_cc_2009_1").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2009_1 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.38);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_1_name").next().is(":visible")) {
                    $("#cc_1_name").next().slideDown();
                }

                img_cc_2009_1.fadeToggle("fast"); 
            });
            $("#btn_cc_2009_2").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2009_2 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.38);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_1_name").next().is(":visible")) {
                    $("#cc_1_name").next().slideDown();
                }

                img_cc_2009_2.fadeToggle("fast"); 
            });
            $("#btn_cc_2009_3").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2009_3 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.38);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_1_name").next().is(":visible")) {
                    $("#cc_1_name").next().slideDown();
                }

                img_cc_2009_3.fadeToggle("fast"); 
            });
            $("#btn_cc_2009_4").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2009_4 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.38);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_4_name").next().is(":visible")) {
                    $("#cc_4_name").next().slideDown();
                }

                img_cc_2009_4.fadeToggle("fast"); 
            });
            $("#btn_cc_2009_5").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2009_5 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.38);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                // if(!$("#cc_1_name").next().is(":visible")) {
                //     $("#cc_1_name").next().slideDown();
                // }

                img_cc_2009_5.fadeToggle("fast");
            });
            $("#btn_cc_2009_6").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2009_6 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.38);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                // if(!$("#cc_1_name").next().is(":visible")) {
                //     $("#cc_1_name").next().slideDown();
                // }

                img_cc_2009_6.fadeToggle("fast"); 
            });
            /* /////EPA REPORTS 2004//////////////////////////////////// */
            $("#btn_cc_2004_1").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_2004_1 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(7.08);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                // if(!$("#cc_1_name").next().is(":visible")) {
                //     $("#cc_1_name").next().slideDown();
                // }

                img_cc_2004_1.fadeToggle("fast");
            });
            /* /////EPA REPORTS 1993//////////////////////////////////// */
            $("#btn_cc_1993_1").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_1993_1 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(6.45);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_1_name").next().is(":visible")) {
                    $("#cc_1_name").next().slideDown();
                }

                img_cc_1993_1.fadeToggle("fast"); 
            });
            $("#btn_cc_1993_2").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_1993_2 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(6.45);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_2_name").next().is(":visible")) {
                    $("#cc_2_name").next().slideDown();
                }

                img_cc_1993_2.fadeToggle("fast"); 
            });
            $("#btn_cc_1993_3").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_1993_3 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(6.45);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_2_name").next().is(":visible")) {
                    $("#cc_2_name").next().slideDown();
                }

                img_cc_1993_3.fadeToggle("fast"); 
            });
            $("#btn_cc_1993_4").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_1993_4 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(6.45);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_5_name").next().is(":visible")) {
                    $("#cc_5_name").next().slideDown();
                }

                img_cc_1993_4.fadeToggle("fast"); 
            });
            $("#btn_cc_1993_5").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_1993_5 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(6.45);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                if(!$("#cc_6_name").next().is(":visible")) {
                    $("#cc_6_name").next().slideDown();
                }

                img_cc_1993_5.fadeToggle("fast"); 
            });
            $("#btn_cc_1993_6").on("click", function(){
                $(this).toggleClass("active");
                $("#btn_cc_1993_6 h4").toggleClass("active");
                
                scrollBar.val();

                if($(this).is(".active")) {
                   scrollBar.val(6.45);
                   timelineImg_top.attr("src", "img/timeline/12.png");
                   timelineImg_top.css("opacity", "1.0");
                }

                $("#accordian ul ul").slideUp();
                // if(!$("#cc_1_name").next().is(":visible")) {
                //     $("#cc_1_name").next().slideDown();
                // }

                img_cc_1993_6.fadeToggle("fast"); 
            });



            ///////////////////////////////////////////////////////////////
            ////////SCROLL BAR/////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////
            var scrollBar = $("#myRange");    // $("input[type=range]"")
            var scrollBar_val;
            var timelineImg_bot = $("#myImg_bot");
            var timelineImg_top = $("#myImg_top");
            //$("#myRange").change(function(e) {       //IE
            //$("#myRange").on("input", function(e) {  //Chrome, Firefox
            //$("#myRange").on("input change", function(e) {
            scrollBar.on("input change", function(e) {
                // var scrollBar_val = this.value;
                scrollBar_val = this.value;
                
                var timelineImg_bot_num = Math.round(scrollBar_val);
                var timelineImg_top_num = Math.floor(scrollBar_val) + 1;     
          
                var timelineImg_bot_opacity = Math.cos(Math.abs(scrollBar_val - timelineImg_bot_num) * Math.PI).toFixed(2);
                var timelineImg_top_opacity = Math.sin(Math.abs(scrollBar_val - timelineImg_top_num) * Math.PI).toFixed(2);

                // var timelineImg_bot = $("#myImg_bot");
                timelineImg_bot.attr("src", "img/timeline/" + ((timelineImg_bot_num * 2 ) - 1) + ".png");
                // var timelineImg_top = $("#myImg_top");
                timelineImg_top.attr("src", "img/timeline/" + ((timelineImg_top_num - 1) * 2 ) + ".png");

                timelineImg_bot.css("opacity", timelineImg_bot_opacity);
                timelineImg_top.css("opacity", timelineImg_top_opacity);
  
                $("#text_scrollBar_value").html("scrollBar value: " + scrollBar_val);
                $("#text_img_num").html("bot img num: " + (timelineImg_bot_num*2-1) + "----top img num: " + (timelineImg_top_num-1)*2);
                $("#text_img_opacity").html("bot img opacity: " + timelineImg_bot_opacity + "----top img opacity: " + timelineImg_top_opacity); 

                if(scrollBar_val >= 7.80 ) {         
                    timelineImg_bot.attr("src", "img/timeline/13.png");
                    timelineImg_top.attr("src", "img/timeline/12.png");
                    timelineImg_bot.css("opacity", timelineImg_bot_opacity);
                    timelineImg_top.css("opacity", timelineImg_top_opacity);
                } else if (scrollBar_val < 7.80 && scrollBar_val >= 6.49 ) {         
                    timelineImg_bot.attr("src", "img/timeline/12.png");
                    timelineImg_bot.css("opacity", "1.0");
                    timelineImg_top.css("opacity", "0.0");
                } else {
                    scrollBar_val = this.value;
                    // if($("#btn_cc_2014_1").is(".active"))  img_cc_2014_2.show();
                    // else  img_cc_2014_2.hide();
                }
            });
    

            /*
            setInterval(function() {
                var newVal = parseInt($("input[type="range"]").val()) + 1;
                $("input[type="range"]").val(newVal);
            }, 500);
            */


    });
})(jQuery); 










/*
$(function(){

   var _default = 0, 
       $block = $('#abgne-block-20120327'), 
       $tabs = $block.find('.tabs'), 
       $tabsLi = $tabs.find('li'), 
       $tab_content = $block.find('.tab_content'), 
       $tab_contentLi = $tab_content.find('li'), 
       _width = $tab_content.width();

   $tabsLi.hover(function(){
       var $this = $(this);

       if($this.hasClass('active')) return;

       $this.toggleClass('hover');
   }).click(function(){ 
    
       var $active = $tabsLi.filter('.active').removeClass('active'), 
           _activeIndex = $active.index(),  
           $this = $(this).addClass('active').removeClass('hover'), 
           _index = $this.index(), 
           isNext = _index > _activeIndex;
    
       if(_activeIndex == _index) return;
    
       $tab_contentLi.eq(_activeIndex).stop().animate({
           left: isNext ? -_width : _width
       }).end().eq(_index).css('left', isNext ? _width : -_width).stop().animate({
           left: 0
       });
   });

   $tabsLi.eq(_default).addClass('active');
   $tab_contentLi.eq(_default).siblings().css({
       left: _width
   });
});
*/