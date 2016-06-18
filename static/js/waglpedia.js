// Show detail info on mouse over
$(document).on('mouseover', '.waglpedia__service', function() {
  var $waglpediaItem = $(this);
  $waglpediaItem.find('.waglpedia__service-summary--default').addClass('hidden');
  $waglpediaItem.find('.waglpedia__service-summary--active').removeClass('hidden');
});

// Hide detail info on mouse leave
$(document).on('mouseleave', '.waglpedia__service', function() {
  var $waglpediaItem = $(this);
  $waglpediaItem.find('.waglpedia__service-summary--active').addClass('hidden');
  $waglpediaItem.find('.waglpedia__service-summary--default').removeClass('hidden');
});

// Show detail info when spreading
$(document).on('show.bs.collapse', '.waglpedia__service--collapsed', function () {
  var serviceName = $(this).data('service-name');
  var $waglpediaItem = $('#' + serviceName);
  $waglpediaItem.find('.waglpedia__service-summary--default').addClass('hidden');
  $waglpediaItem.find('.waglpedia__service-summary--active').removeClass('hidden');
});

// Hide detail info when collapsing
$(document).on('hidden.bs.collapse', '.waglpedia__service--collapsed', function () {
  var serviceName = $(this).data('service-name');
  var $waglpediaItem = $('#' + serviceName);
  $waglpediaItem.find('.waglpedia__service-summary--active').addClass('hidden');
  $waglpediaItem.find('.waglpedia__service-summary--default').removeClass('hidden');
});

// Toggle off the other collapsing items
$(document).on('click', '.waglpedia__service', function(event) {
  event.preventDefault();

  $('.waglpedia__service--collapsed').collapse('hide');
  $('.waglpedia__service').removeClass('collapse').removeClass('in');

  $(this).collapse('show');
});
