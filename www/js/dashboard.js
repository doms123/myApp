$(function() { // document ready

    loadRecord();
    function loadRecord() {
    	$.ajax({
    		type: 'POST', // HTTP Method
    		url: baseUrl + 'services/users', // API Endpoint, notes yung baseUrl variable naka declare sa script.js
    		crossDomain: true, // by default false, to need natin i set sa true para ma access natin yung resources ng API
    		success: function(data) { // callback function, dito natin marereceive yung response sa ginawa natin request sa API
    			var data = data.users; // gumawa ako ng variable para sa user obj
    			var noOfLoops = data.length; // kinuha ko yung total no. of objects tapos gagamit ko para sa iteration sa for loop
    			var html = ""; // nag itialize ako variable with empty string
 
    			for(x = 0; x < noOfLoops; x++) { // for loop ng <tr>, kinoconcat ko sa ginawa kong html variable sa taas
    				html += '<tr>';
    					html += '<td>'+data[x].name+'</td>';
    					html += '<td>';
                            html += '<button class="waves-effect waves-light btn blue darken-4 editBtn">Edit</button> ';
                            html += '<button class="waves-effect waves-light btn red accent-4 deleteBtn" data-id="'+data[x].user_id+'">Delete</button></td>';
    				html += '</tr>';
    			}

    			$(".main tbody").html(html); // sa tbody ng table natin, dun ko ipapasok yung content gamit yung html() method ni jquery
    		}
    	});
    }

    $("tbody").on("click", ".deleteBtn", function() { // sinelect ko yung deleteBtn tapos nag lagay ako ng click event listener
        var deleteId = $(this).attr("data-id"); // kinuha ko yung value ng data-id attribute na ginawa ko dun sa loop ng records
        var result = confirm("Want to delete?");

        if(result) { // delete confirmation 
            $.ajax({ 
                type: 'POST', // HTTP Method
                url: baseUrl + 'services/deleteUser', // API Endpoint
                crossDomain: true, // by default false, to need natin i set sa true para ma access natin yung resources ng API
                data: {'userId': deleteId}, // mag pasa tayo ng post data na may key name na userId
                success: function(data) { // callback function, dito natin marereceive yung response sa ginawa natin request sa API
                    loadRecord(); // sa callback need natin icall yung loadRecord() method para mag refresh yung records sa table
                    Materialize.toast(data.msg, 3000, 'rounded'); // materialize toast, 1st parameter = 'message', 2nd parameter = duration, 3rd parameter = 'appearance'
                }
            });
        }
    });
});