<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="estilo.css"/>
  <meta charset="UTF-8"/>
  <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
<div>
    <?php
        $preco = $_GET["p"];
        $porcentagem = $_GET["por"];
        echo "O preço do produto é R$".number_format($preco, 2, ",", ".");
        $preco += $preco*$porcentagem/100;
        $preco1 = number_format($preco, 2,",", ".");
        echo "<br/>O novo preço acrescido de $porcentagem% é $preco1";
        $preco = $_GET["p"];
        $porcentagem = $_GET["por"];
        $preco -= $preco*$porcentagem/100;
        $preco1 = number_format($preco, 2,",", ".");
        echo "<br/>O novo preço com $porcentagem% de desconto é $preco1";

    ?>
</div>
</body>
</html>



