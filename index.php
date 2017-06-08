<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Hundred Ratings</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet">
        <link rel="stylesheet" href="plugin/css/hundred_ratings.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1 class="text-center border-bottom"><span class="logo">
            <span class="logo-inner">
                <span class="logo-2x">%</span>
                <span class="logo-1x">%</span>
                <span class="logo-3x">%</span>
            </span>
        </span>Hundred Ratings</h1>

        <p class="text-center border-bottom">An independant percent-rating System based on AJAX</p>

        <div class="container">
            
            <section class="example">
                <form class="hundred-form" action="send-rating.php" method="post">
                    <h5>Notez ce dessin</h5>
                    <div class="hundred-percent">
                        <div class="percent">
                            <div class="cursor"></div>
                        </div>
                    </div>
                    <input type="hidden" name="rating">
                    <button type="submit"><i class="fa fa-check" aria-hidden="true"></i></button>
                </form>
            </section>

            <section class="example">
                <form class="hundred-form" action="send-rating.php" method="post">
                    <div class="hundred-percent">
                        <div class="percent">
                            <div class="cursor"></div>
                        </div>
                    </div>
                    <input type="hidden" name="rating">
                    <input type="submit" value="VOTE">
                </form>
            </section>

        </div>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="plugin/js/hundred_ratings.js"></script>
    </body>
</html>
