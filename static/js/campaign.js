$(document).on('mouseover', '.story-funding__article', function() {
  var $storyFundingArticle = $(this);
  $storyFundingArticle.find('.story-funding__image--black').addClass('hidden');
  $storyFundingArticle.find('.story-funding__image--color').removeClass('hidden');
});

$(document).on('mouseleave', '.story-funding__article', function() {
  var $storyFundingArticle = $(this);
  $storyFundingArticle.find('.story-funding__image--color').addClass('hidden');
  $storyFundingArticle.find('.story-funding__image--black').removeClass('hidden');
});
