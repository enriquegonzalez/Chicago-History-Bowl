(function($) {
  $.fn.countdown = function(options, callback) {
    //custom 'this' selector
    thisEl = $(this); 
  
    // array of custom settings
    var settings = { 
      'date': null,
    };

    // append the settings array to options
    if(options) {
      $.extend(settings, options);
    }
   
   	//create the countdown processing function
	function countdown_proc() {
  		var eventDate = Date.parse(settings['date']) / 1000;
  		var currentDate = Math.floor($.now() / 1000);

  		if(eventDate <= currentDate) {
    		callback.call(this);
    		clearInterval(interval);
  		}

  		var seconds = eventDate - currentDate;

  		var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
  		seconds -= days * 60 * 60 * 24; //update the seconds variable with number of days removed
  
		var hours = Math.floor(seconds / (60 * 60));
  		seconds -= hours * 60 * 60; //update the seconds variable with number of hours removed
  
		var minutes = Math.floor(seconds / 60);
  		seconds -= minutes * 60; //update the seconds variable with number of minutes removed

  		//update the countdown's html values.
      	thisEl.find(".days").text(days);
      	thisEl.find(".hours").text(hours);
      	thisEl.find(".minutes").text(minutes);
      	thisEl.find(".seconds").text(seconds);
	}

	//loop the function
	interval = setInterval(countdown_proc, 1000);

	//run the function
	countdown_proc();

  }

}) (jQuery);