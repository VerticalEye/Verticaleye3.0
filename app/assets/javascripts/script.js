function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = $(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = $(".tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}


function openForm(){
  document.getElementsByClassName("form")[0].style.display = "block";
}

function closeForm(){
  document.getElementsByClassName("form")[0].style.display = "none";
}




  //animazioni onscroll
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
  var $gif = $('<img alt="logo_gif" title="logo_gif" id="prova">');
  var $src = $('#gif').attr("src");
  $gif.attr('src', $src);
  if (($('#el-logo').hasClass('in-view')) && (!$('#el-logo').children('#prova').length)) {
    $('#el-logo').append($gif);

  };
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

//Lightbox
$("#lavori img").click(function(){
    var href = $(this).attr("src"); 
    $overlay.show();
    $immagine.attr("src", href);
    $immagine.show();
    var titleDesc = $(this).attr("title");
    $desc.text(titleDesc);
  });

  var $overlay = $('<div id="overlay"></div>');
  var $immagine = $('<img>');
  var $desc = $('<p></p>')

  $("body").append($overlay);
  $overlay.append($immagine);
  $overlay.append($desc);

  $($overlay).click(function(){
    $overlay.hide();
  });

 


  

