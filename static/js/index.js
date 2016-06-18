// Show detail info when mouse over
$(document).on('mouseover', '.waglpedia__item', function() {
  var $waglpediaItem = $(this);
  $waglpediaItem.find('.waglpedia__image-container--desktop').addClass('hidden');
  $waglpediaItem.find('.waglpedia__text-container--desktop').removeClass('hidden');
});

// Hide detail info when mouse leave
$(document).on('mouseleave', '.waglpedia__item', function() {
  var $waglpediaItem = $(this);
  $waglpediaItem.find('.waglpedia__image-container--desktop').removeClass('hidden');
  $waglpediaItem.find('.waglpedia__text-container--desktop').addClass('hidden');
});
