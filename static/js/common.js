// Make header tranparent when scroll downwards
// TODO Use throttle
$(window).scroll(function() {
  if ($(window).scrollTop() > 250) $('#header').removeClass('transparent');
  else $('#header').addClass('transparent');
});

// Update language to Korean
function updateLanguageToKorean() {
  localStorage.setItem('lang', 'ko');
  document.title = $('#title-ko').val();
  $('#lang_eng').removeClass('on');
  $('#lang_kor').addClass('on');
  $('[data-lang="en"]').addClass('hidden');
  $('[data-lang="ko"]').removeClass('hidden');
}

// Update language to English
function updateLanguageToEnglish() {
  localStorage.setItem('lang', 'en');
  document.title = $('#title-en').val();
  $('#lang_kor').removeClass('on');
  $('#lang_eng').addClass('on');
  $('[data-lang="ko"]').addClass('hidden');
  $('[data-lang="en"]').removeClass('hidden');
}

// Change language
$(document).on('click', '#lang_kor', function(event) {
  event.preventDefault();
  updateLanguageToKorean();
});
$(document).on('click', '#lang_eng', function(event) {
  event.preventDefault();
  updateLanguageToEnglish();
});

// Translate contents when window loaded
$(window).load(function() {
  if (localStorage.getItem('lang') == 'en') updateLanguageToEnglish();
  else updateLanguageToKorean();
});
