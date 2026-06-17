<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <div id="caixa" style="width:100px;height:100px;background:red;">
    </div>

    <br>

    <button onclick="alternar()">Alternar Cor</button>
    <button onclick="colorirTudo()">Colorir Tudo</button>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function alternar(){

    let caixa = document.getElementById("caixa");

    if(caixa.style.backgroundColor == "red"){
        caixa.style.backgroundColor = "green";
    }else{
        caixa.style.backgroundColor = "red";
    }

}
