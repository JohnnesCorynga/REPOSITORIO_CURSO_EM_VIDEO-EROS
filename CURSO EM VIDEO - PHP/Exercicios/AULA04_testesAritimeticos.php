<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="estilo.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <?php
    $n1 = 8;
    $n2 = 5;
    $n3 = 3;
    $nome = "Eros Ravier";
    $idade = 22;
    $altura = 1.85;
    $peso = 90;
    $soma = $n1 + $n2 + $n3;
    $multi = $n1 * $n2 * $n3;
    $media = ($n1+$n2+$n3)/3;
    $resto = $n1%$n3;

    echo "Olá, meu nome é $nome tenho $idade anos, e tirei as notas $n1, $n2, $n3.<br/>";
    echo "<br/>Com $altura de altura e $peso kg. O meu IMC é " 
    .number_format(($peso/($altura*$altura)),2);//Formata para colocar somente duas(2) casa decimais depois da virgula.
    if(($peso/($altura*$altura)) <= 21){
        echo "<br/>Você está com peso <strong>baixo!</strong>";
    }if(($peso/($altura*$altura)) <= 25){
        echo "<br/>Você está com peso <strong>normal</strong>!";
    } if(($peso/($altura*$altura)) <=30){
        echo "<br/>Você está <strong>sobre peso!</strong>";
    }else{
         echo "<br/>Você está muito acima do peso, (<strong>Obesidade nivel 1</strong>)!";
    }
    echo "<br/>A soma de $n1, $n2, $n3 é $soma";
    echo "<br/>A soma de $n1, $n2, $n3 é ".$n1+$n2+$n3;
    echo "<br/>A multiplicação dos valores é $multi";
    echo "<br/>A multiplicação de $n1, $n2 e $n3 é ".$n1*$n2*$n3;
    echo "<br/>A média de $n1, $n2 e $n3 é $media";
    echo "<br/>A média de $n1, $n2 e $n3 é ".(($n1+$n2+$n3)/3);
    
    $n4 = $_GET["a"]; //essa formula faz eu pegar os valores inseridos no url
    $n5 = $_GET["b"];
    echo "<br/>Valores recebidos: $n4 e $n5.";
    $somando = $n4+$n5;
    echo "<br/>A soma de $n4 e $n5 é $somando";
    echo "<br/>A subtração de $n4 e $n5 é ".$n4-$n5;
    $n6 = $_GET["c"];
    echo "<br/>O valor absoluto de $n6 é ".abs($n6);
    echo "<br/>O valor de $n4<sup>$n5</sup> é ".pow($n4, $n5);
    $n7 = 64;
    echo "<br/>A Raiz quadrada de $n7 é " .sqrt($n7);
    $n8 = 35.45;
    echo "<br/>O valor de $n8 arredondado é " .round($n8);
    echo "<br/>O valor de $n8 aredondado com CEIL é ".ceil($n8);
    echo "<br/>O valor de $n8 arredondado com FLOOR é ".floor($n8);
    echo "<br/>O valor inteiro de $n8 é ".intval($n8);
    echo "<br/>O valor em moeda de $n7 é R$ ".number_format($n7,2,",");
    $n9 = 1900;
    echo "<br/>O valor em moeda de $n9 é R$ ".number_format($n9, 2,",", ".");

?> 
    </div>
   
    
</body>
</html>