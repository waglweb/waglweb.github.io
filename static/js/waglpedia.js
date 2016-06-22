// Only for desktop device
if (typeof window.orientation === 'undefined') {

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
}

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

// Filter by category
$(document).on('click', '.waglpedia__tag', function() {
  
  // Initialize
  $('.waglpedia__tag').removeClass('waglpedia__tag--active');
  $('.waglpedia__service').addClass('waglpedia__service--inactive');

  var $waglpediaTag = $(this);
  var category = $waglpediaTag.data('category');

  $waglpediaTag.addClass('waglpedia__tag--active');

  if (category == 'all') {
    $('.waglpedia__service').removeClass('waglpedia__service--inactive');
  } else {
    var $selectedTags = $('.waglpedia__service-tag[data-category="' + category + '"]');
    $selectedTags.closest('.waglpedia__service').removeClass('waglpedia__service--inactive');
  }
});
