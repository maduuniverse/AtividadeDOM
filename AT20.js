<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="circulo" style="width:100px;height:100px;border-radius:50%;background:blue;">
    </div>

    <br>

    <button onclick="esconder()">Esconder</button>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function esconder(){
    document.getElementById("circulo").style.display="none";
}
