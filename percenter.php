<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="percent.css">
    </head>
    <body>

        <form class="percent-form" action="traitement.php" method="post">
            <h5>Notez ce dessin</h5>
            <div class="hundred-percent">
                <div class="percent">
                    <div class="cursor"></div>
                </div>
            </div>
            <input type="hidden" name="rating">
            <button type="submit"><i class="fa fa-check" aria-hidden="true"></i></button>
        </form>
        <form class="percent-form" action="traitement.php" method="post">
            <div class="hundred-percent">
                <div class="percent">
                    <div class="cursor"></div>
                </div>
            </div>
            <input type="hidden" name="rating">
            <input type="submit" value="VOTE">
        </form>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="percenter.js"></script>
    </body>
</html>
