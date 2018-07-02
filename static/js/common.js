// Make navigation bar tranparent when scroll downwards
function updateNavigationBarTransparency() {
  if ($(window).scrollTop() > 100) $('.navbar').removeClass('navbar--transparent');
  else $('.navbar').addClass('navbar--transparent');
}

// Adapt throttle function when scrolling
$(window).on('scroll', _.throttle(updateNavigationBarTransparency, 1000));

// Update language to Korean
function updateLanguageToKorean() {
  localStorage.setItem('lang', 'ko');
  document.title = $('#title-ko').val();
  $('.navbar__language--english').removeClass('language--active');
  $('.navbar__language--korean').addClass('language--active');
  $('[data-lang="en"]').addClass('hidden');
  $('[data-lang="ko"]').removeClass('hidden');
}

// Update language to English
function updateLanguageToEnglish() {
  localStorage.setItem('lang', 'en');
  document.title = $('#title-en').val();
  $('.navbar__language--korean').removeClass('language--active');
  $('.navbar__language--english').addClass('language--active');
  $('[data-lang="ko"]').addClass('hidden');
  $('[data-lang="en"]').removeClass('hidden');
}

// Change language configuration
$(document).on('click', '.navbar__language--korean', function(event) {
  event.preventDefault();
  updateLanguageToKorean();
});
$(document).on('click', '.navbar__language--english', function(event) {
  event.preventDefault();
  updateLanguageToEnglish();
});

// Slide down effect when drop down
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Slide up effect when drop up
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$(window).load(function() {
  updateLanguageToKorean();
  // Translate contents
  // if (localStorage.getItem('lang') == 'en') updateLanguageToEnglish();
  // else if (localStorage.getItem('lang') == 'ko') updateLanguageToKorean();
  // Detect language when user first visited site
  // else {
  //   var language = navigator.language || navigator.userLanguage;
  //   if (language == 'ko') updateLanguageToKorean();
  //   else updateLanguageToEnglish();
  // }

  // Ease effect when body DOM loads
  $('#main-container').animate({opacity: 1}, 700);

  // Hide loading icon
  $('#loading-icon').addClass('hidden');
});


