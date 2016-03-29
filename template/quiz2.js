function makeRequest()
{
	console.log("made a request");
	$('.ajax').empty();
	$.ajax({
      url: "http://www.mattbowytz.com/simple_api.json",
      data: {
        data: "quizData"
      },
      method: 'GET',
    }).done(function(data) {
    	$('#button').text("Change "+getCookie("keptval"));
      	var content = $('.ajax');
      	var result = [];
      	result = data["data"];
      	var rand = result[Math.floor(Math.random() * result.length-1)];
      	console.log("My random value was ",rand);
      	var keepbutton = document.createElement('button');
      	//keepbutton.text("Keep it");
      	content.append('<button id="button2" type="button" onclick="keep()">keep it</button>');
      	content.append('<h20>'+rand+'</h20>');
      	console.log(result);
      	//var a = document.createTextNode("Something");
      	//a.css({fontSize: 20}); 
      	var cookie = document.cookie;
		console.log("cookie:"+cookie);
      });
}

function keep()
{
	console.log("keeping ");
	var buttonText = $('h20').text();
	console.log("buttonText: "+buttonText);
	document.cookie="keptval="+buttonText;
	var cookie = document.cookie;
	console.log("cookie:"+cookie);
}


$('button').click(function(){
  makeRequest();
});



(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$sub       = $('.submit');

	$mouseover.mouseover(function() {
		$this = $(this);
		$mouseover.empty();
		$(this).html('Scrooge McDuck!');
		if($(this).height() < 100)
		{
			$(this).height($(this).height() + 50);
		}
	});

	$('.click').click(function() {
		$('.click').children().text('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$('#target').submit(function(e) {
		//console.log("Submitted worked");
		e.preventDefault();//not sure if you do or don't want this submitted
		if ($(this).find('input[type=text], select').val() !== '') 
		{
			//console.log("We fell in.");
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).ready(function() {
		setTimeout(function(){
			$('.timeout').fadeOut('fast');
		}, 0);
		setTimeout(function(){
			$('.timeout').fadeIn('slow');
		}, 1000);
	});

})(jQuery);




function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
