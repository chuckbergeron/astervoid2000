//= require zepto

$(function($) {

  var $document = $(document),
    $rootNode   = $('html, body'),
    $footer     = $('footer');

  $footer.find('.copyright-year').html(new Date().getFullYear());


  Itch.attachBuyButton(document.getElementById("buy_button"), {
    // replace the following with the correct information about your game
    user: "madcapacity",
    game: "astervoid-2000"
  });

});
