// count letter      
$('#text_speak_voice').on('change keydown keyup paste', function() {
  $('#letter_count').text($('#text_speak_voice').val().length+'/200');
});

// masonry
function masonry_layout() {
  $('#voice_container').masonry({
    itemSelector: '.voice',
    columnWidth: 375,
    gutter: 28
  });
}

// masonry init
$(document).ready(function() {
  masonry_layout();
});
