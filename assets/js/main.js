var $main = $('#container');

$('#sidebar ul').css('height', window.innerHeight0);

$('#search-icon').click(function() {
  $('#search').animate({width: 'toggle'}, 'fast');
});
