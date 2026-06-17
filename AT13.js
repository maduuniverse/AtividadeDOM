<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #oval {
            width: 200px;
            height: 100px;
            background: gray;
            border-radius: 50%;
        }
    </style>
</head>

<body>
    <div id="caixa" style="width:100px;height:100px;background:gray;"></div>
    <br>
    <button onclick="mudar()">Mudar para Azul</button>

    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function mudar(){
    document.getElementById("caixa").style.backgroundColor="blue";
}
