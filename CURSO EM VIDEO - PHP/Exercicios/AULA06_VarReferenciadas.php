<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>Curso de PHP - CursoemVideo.com</title>  
  <link rel="stylesheet" href="estilo.css"/>

</head>
<body>
<div>
    <?php
        $a = 3;
        $b = $a; //aqui o $b passa a valer 3
        $b += 5; // aqui o $b passa a valer 8 e $a continua sendo 3;
        echo "A variavel A vale $a";// retorna 3 
        echo "<br/>A variavel B vale $b"; //retorna 8
        //USANDO VAR REFERENCIAIS
        $c = 3;
        $d = &$c; //Aqui $d passa a valer 3 
        $d += 5; // aqui $d passa a valer 8, e $a tambem passa a valer 8 
        echo "<br/>A variavel C vale $c";// retorna 8
        echo "<br/>A variavel D vale $d";// retorna 8

        

    ?>
</div>
</body>
</html>
 