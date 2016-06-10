// Show user profile and hide other profiles
$(document).on('click', '.about__profile', function(event) {
  event.preventDefault();

  $('.profile--collapsed').collapse('hide');
  $('.about__profile').removeClass('collapse').removeClass('in');

  $(this).collapse('show');
});

// Adjust contact info box to get same height with google map
$(window).load(function() {
  $('.contact--desktop').css('height', $('.contact__google-map').height() - 4);
});
