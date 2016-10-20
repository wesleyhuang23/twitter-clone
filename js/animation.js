$(document).ready(function(){
  $('#tweet-controls').hide();
  $('#char-count').hide();

  $('.tweet-compose').on('click', function(){
    $(this).css('height', '5em');
  });
});
