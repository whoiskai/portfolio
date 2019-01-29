$(document).ready(function(){
  $('#wrapper').fadeIn(500).css("display", "grid");
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = 'views/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});