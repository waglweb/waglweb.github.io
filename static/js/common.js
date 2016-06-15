// Make header tranparent when scroll downwards
// TODO Use throttle
$(window).scroll(function() {
  if ($(window).scrollTop() > 250) $('.navbar').removeClass('navbar--transparent');
  else $('.navbar').addClass('navbar--transparent');
});

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

$(window).load(function() {
  // Translate contents
  if (localStorage.getItem('lang') == 'en') updateLanguageToEnglish();
  else if (localStorage.getItem('lang') == 'ko') updateLanguageToKorean();
  // Detect language when user first visited site
  else {
    var language = navigator.language || navigator.userLanguage;
    if (language == 'ko') updateLanguageToKorean();
    else updateLanguageToEnglish();
  }

  // Ease effect when body DOM loads
  $('body').animate({opacity: 1}, 700);

  // Hide loading icon
  $('#loading-icon').addClass('hidden');
});
