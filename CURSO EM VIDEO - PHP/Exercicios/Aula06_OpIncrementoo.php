<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="_css/estilo.css"/>
  <meta charset="UTF-8"/>
  <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
  <input type="text" id="exemple ">
  <input type="button" onclick="enviar()" value="Enviar">
  <button type="submit">Enviar</button>

<div>
    <?php
    function enviar(){
      $atual1 = $_POST["exemple"];


      
    }
       $atual = $_GET["#exemple"];// Pega o ano na URL.
       echo "O ano atual é $atual";
       echo "<br/> O ano anterior é ".--$atual;//Primeiro decrementa.
       //echo "<br/> O ano anterior é ".$atual--;//Mostra o ano atual depois decrementa.
       echo "<br/>E ano posterior é ".$atual=$atual+2; //primeiro incrementa.
       //echo "<br/> O ano posterior é ".$atual++;//Mostra o ano atual depois incrementa.
    ?>
</div>
</body>
</html>
 