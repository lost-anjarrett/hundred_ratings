$(function(){
    var content = $('#content');
    var links = $('#menu a');
    var hashLocation = (window.location.hash).replace('#', '') || 'demo';

    function updateContent(source) {
        $.get(source, function (data) {
            content.html(data);
            // Classe active
            links.removeClass('active');
            $('[href="'+source+'"]').addClass('active');
            console.log(source);
            if (source.indexOf('demo') !== -1) {
                var ratings = new RatingSystem('.hundred-form');
            }
        });
    }

    // Récupère l'ancre
    function updateAnchor(source) {
        var anchor = source.replace('content/', '').replace('.html', '');
        return anchor;
    }

    // Ajouter le contenu lié au lien cliqué
    links.click(function (e) {
        e.preventDefault();
        // Récupère la position du fichier
        var source = $(this).attr('href');
        window.location.hash = updateAnchor(source);
        // Affichage dans la div#corps
        updateContent(source);
    });

    // Chargement du contenu en fonction de l'ancre
    updateContent('content/' + hashLocation + '.html');

    console.log('guich');
});
