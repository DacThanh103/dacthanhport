$(document).ready(function(){
		$(".btn-toggle").click(function(){
			$("#menu").slideToggle()
		})
				$("#dropdown-btn").click(function(){
			$("#dropdown-menu").slideToggle()
		})
	})// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Le Dac Thanh", "a Graphic Designer"],
       	 	typeSpeed:80,
        		backSpeed:50,
        		loop:true,
        		});
new WOW().init();
$('#banner').owlCarousel({
  loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
 autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
 })
$('#banner2	').owlCarousel({
  loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
 autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
 })







