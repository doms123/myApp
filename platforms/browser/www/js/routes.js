$(function() {
	window.baseUrl = "http://localhost/api/"; // baseUrl ng API
	window.url = window.location.href; // window url ng App

	$.ajaxSetup({ cache: true }); // remove default caching of onload method
	
	window.loadPage = function(url) { // functions lang to na may functions name na loadPage, naka set lang sa window para maging global siya, maaccess pa rin siya kahit sa labas na ng document ready function natin
		var urlArr = url.split("#"); // split natin yung url string gamit yung #
		var url = urlArr[1]; // kunin natin yung index 1 para makuha natin yung page name

		if(url == null || url == '') { // go to dashboard
			$(".main").load("dashboard.html", function() {});
		}else { // iload natin yung page name na nakuha natin
			$(".main").load(url+".html", function() {});
		}
	}

	loadPage(url);

	$("body").on("click", "a", function() { // nag lagay ako ng click event sa lahat ng <a> tag
		var href = $(this).attr("href"); // kinuha ko yung value ng href attribute ng <a> tag

		if(href != "#") { // pag yung value ng href hash dun lang natin icacall yung loadPage function
			loadPage(href);
		}
	});

	$("#nav-mobile a").click(function() { // nag lagay ako ng click event sa lahat ng <a> tag ng #nav mobile
		$('.button-collapse').sideNav("hide"); // hide natin yung sidenav
	});
});