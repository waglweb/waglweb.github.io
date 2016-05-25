$('#btn_menu').mouseover(function() {
  $('#btn_menu').hide();
  $('#search').hide();
  $('nav').show();
});                 

$('nav').mouseleave(function() {
  $('#btn_menu').show();
  $('#search').show();
  $(this).hide();
});

// header scroll event
// TODO debounce 적용하기
$(window).scroll(function() {
  if ($(window).scrollTop() > 250) {
    $('#header').removeClass('transparent');
  } else {
    $('#header').addClass('transparent');
  }
});
