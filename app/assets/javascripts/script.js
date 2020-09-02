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


  

  var $gif = $('<img alt="logo_gif" title"logo gif">');
  var $src = $('#gif').attr("src");
  $gif.attr('src', $src);
  $('#logo-hover .in-view').append($gif);
