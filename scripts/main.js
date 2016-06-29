// console.log('\'Allo \'Allo!');

// This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.  constructs a YT.Player object 
  //    to insert a video player on your page
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'CwgMtXH9ni0',
     playerVars: { 
       'autoplay': 0,
       'controls': 1, 
       'rel' : 0    // indicates whether the player should show related videos when playback ends/ 1=true
      },
      events: {
        'onReady': onPlayerReady
        // 'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
   console.log('ready');
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.

  // var done = false;
  // function onPlayerStateChange(event) {
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // }

  function stopVideo() {
    player.stopVideo();
  }


// This code makes navbar fixed after scrolling 
$(document).on('ready', function(){
	
	$( window ).on('scroll', function() {
		// console.log("foo");
		var scrollTop     = $(window).scrollTop(),
		    elementOffset = $('#features').offset().top,
		    //the div's current distance from the top:
		    distance      = (elementOffset - scrollTop),   // loads at 500px , top is at 0px ...
		    //the height of the navbar:
		    navHeight 	= $('.navbar-wrapper').height();   // 40 
		    
		    // distanceIncludingNav = (distance + navHeight);
		   
		    // console.log(distance);
		    // console.log(navHeight);

	 // when distance from top is zero + navheight, do this:
		   
		   	// console.log(targDistance);

		    // // console.log(distance);
		    if(distance <= navHeight) {
		    	$('.page-top').css({
		    		'position' : 'fixed',
		    		'width' : '100%',
		    		'background-color' : '#000',
		    		'z-index' : '20'
		    	});

		    	$('.navbar-wrapper').css('background-color', 'rgba(0,0,0, 0.7)');

		    } else {
		    	$('.page-top').css({
		    		'position' : 'initial',
		    		'width' : '100%',
		    		'background-color' : 'initial'
		    	});

		    	$('.navbar-wrapper').css('background-color', 'rgba(246, 186, 4, 0.5)');
		    }

		    
	});



});


// console.log(w);