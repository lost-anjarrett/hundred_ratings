$(function(){
    var content = $('#content');
    var links = $('#menu a');

    function updateContent(hash) {
        $.get('content/' + hash + '.html', function (data) {
            content.html(data);
            // Classe active
            links.removeClass('active');
            $('[href="#'+hash+'"]').addClass('active');
            updateScript(hash);
        });
    };

    function updateScript(hash) {
        if (hash == 'demo') var ratings = new RatingSystem('.hundred-form');
    }

    function updateContentWithHash() {
        var hash = (window.location.hash).replace('#', '') || 'demo';
        updateContent(hash);
    };

    $(window).on('hashchange', updateContentWithHash);

    links.click(function (e) {
        $(this).blur();
    });


    updateContentWithHash();

});
