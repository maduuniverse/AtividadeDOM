<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .cor {
            width: 60px;
            height: 60px;
            background: gray;
            display: inline-block;
        }
    </style>
</head>

<body>
    <div id="caixa" style="background:pink;padding:20px;">
        <p id="texto">Exemplo</p>
    </div>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
document.getElementById("caixa").style.backgroundColor="black";
document.getElementById("texto").style.color="pink";
