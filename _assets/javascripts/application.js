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

  Itch.getGameData({
    user: "madcapacity",
    game: "astervoid-2000",
    secret: "",
    onComplete: function(data) {
        var numKeysDiv = document.getElementById("claimed-numbers");
        var priceDiv   = document.getElementById("buy_price");
        var keysRemainingSpan = document.getElementById("claimed_keys_remaining");
        var reward     = data.rewards && data.rewards[0];

        if ( reward ) {
            // 97 is the # provided to internal alpha testers, press, etc
            var total = 97 + reward.amount;
            var amountRemaining = total - reward.amount_remaining;
            numKeysDiv.innerText = amountRemaining + " / " + total;

            priceDiv.innerText = reward.price.substr(0,2);
            keysRemainingSpan.innerText = total - amountRemaining;
        }
        else {
            numKeysDiv.innerText = "Rewards missing";
        }
    }
  });

});
