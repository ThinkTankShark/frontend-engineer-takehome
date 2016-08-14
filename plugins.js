$(function() {
    $('.wrapper').on('click', '#box2', function(e){
      e.preventDefault();
      e.stopPropagation();

      var parent = $(this).parent().next();
      var textArea = $(document).find('.main');
      textArea.toggleClass('hide');
    })
});
