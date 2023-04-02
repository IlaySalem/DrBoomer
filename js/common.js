$(document).ready(function() {
 	$("#photogallery").owlCarousel({
 		loop: true,
  		
//  		//stagepading: 20,



        items: 1,
        responsive: {
                479: {
                    items : 1
                },
                 768: {
                    items : 2
                },
                  1024: {
                    items : 2
                },
                   1199: {
                    items : 3
                }
        },

           slideSpeed : 200,
//         paginationSpeed : 800,
//         rewindSpeed : 1000,

         autoplay : true,
         stopOnHover : true,

//         navigation : false,
//         navigationText : ["prev", "next"],
//         rewindNav : true,
//         scrollPerPage : false,

            pagination : true,
        paginationNumbers : true,

//         responsive : true,
//         responsiveRefreshRate : 200,
         responsiveBaseWidth : window,

         baseclass : "owl-carousel",
         theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyeffect : "fade",

//         autoheight : true,

//         jsonPath : false,
//         jsonSuccess : false,

//         dragBeforeAnimFinish : true,
//         mouseDrag : true,
//         touchDrag : true,

         addClassActive : true,
         animateIn: 'fadeIn',
         animateOut: 'fadeOut',
        // transitionStyle : "fadeOut",

//         beforeUpdate : false,
//         afterUpdate : false,
//         beforeInit : false,
//         afterInit : false,
//         beforeMove : false,
//         afterMove : false,
//         afterAction : false,
//         startDragging : false,
//         afterLazyLoad: false




		
});

 	$("#setificate").owlCarousel({
 		loop: true,
 		
 		//stagepading: 20,
 		
		
        itemsCustom : true,
        itemsDesktop : false,
       // itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleitem : true,
        itemsscaleup : true,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoplay : true,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseclass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyeffect : "fade",

        autoheight : true,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : true,
        transitionStyle : "fadeOut",

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false


}); 

 		}); 
	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
        $(".icons").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
            $(".icons").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
            $(".icons").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".icons").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 




/*$(document).ready(function(){
	$("photogallery").owlcarousel();
}); */