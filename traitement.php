<?php if (isset($_POST['rating'])) : ?>
    Vous avez donné une note de <?= $_POST['rating'] ?>%
        <span class="change-note"><a href="#">Changer cette note ?</a></span>
<?php endif; ?>
