$(function() {

	$(".addForm").submit(function() { // sinelect ko yung addForm class tapos nag lagay ako ng submit event listener
		var name = $(".txtname").val(); // kinuha ko yung value ng name input, tas nilagay ko sa variable

		$.ajax({
			type: 'POST', // HTTP Method
			url: baseUrl + 'services/insertUser',  // API Endpoint
			data: {'name': name}, // mag pasa tayo ng post data na may key name na name
			crossDomain: true, // by default false, to need natin i set sa true para ma access natin yung resources ng API
			success: function(data) { // callback function, dito natin marereceive yung response sa ginawa natin request sa API
				loadPage("#dashboard"); // redirect sa dashboard page
				Materialize.toast(data.msg, 3000, 'rounded'); // materialize toast, 1st parameter = 'message', 2nd parameter = duration, 3rd parameter = 'appearance'
				$(".txtname").val(""); // clearing ng value ng input
			}
		});

		return false; // para ma prevent yung pag refresh ng page once na mag submit yung form
	});
});