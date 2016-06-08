//= require zepto

$(function($) {

  var $document = $(document),
    $rootNode   = $('html, body'),
    $footer     = $('footer');

  $footer.find('.copyright-year').html(new Date().getFullYear());

});
