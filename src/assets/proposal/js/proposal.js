function proposal(){

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex)
            .fadeIn(2000)
            .delay(1210)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

};
