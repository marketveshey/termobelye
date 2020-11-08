
$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        arrows: true,   
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
  });
  $(document).ready(function() {
	
	/* scroll */
	
$("a[href^='#']").click(function(){
		var target = $(this).attr("href");
		var product = $(this).parent().find("h3").text();
        $("#order_form select[name='comment'] option[value='"+product+"']").prop("selected", true);
		$("html, body").animate({scrollTop: $(target).offset().top+"px"});
		return false;
	});

	/* timer */

	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").html( pad(hrs));
		$(".timer .minutes").html( pad(min));
		$(".timer .seconds").html( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) {
		s = ("00"+s).substr(-2);
		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
	}
	update();

	/* sliders */

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});


	/* validate form */

	$(".order_form").submit(function(){
		if ($(this).find("input[name='name']").val() == "" && $(this).find("input[name='phone']").val() == "") {
			alert("Р’РІРµРґРёС‚Рµ Р’Р°С€Рё РёРјСЏ Рё С‚РµР»РµС„РѕРЅ");
			$(this).find("input[name='name']").focus();
			return false;
		}
		else if ($(this).find("input[name='name']").val() == "") {
			alert("Р’РІРµРґРёС‚Рµ Р’Р°С€Рµ РёРјСЏ");
			$(this).find("input[name='name']").focus();
			return false;
		}
		else if ($(this).find("input[name='phone']").val() == "") {
			alert("Р’РІРµРґРёС‚Рµ Р’Р°С€ С‚РµР»РµС„РѕРЅ");
			$(this).find("input[name='phone']").focus();
			return false;
		}
		return true;
	});

});