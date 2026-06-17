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
    <div id="circulo" style="width:100px;height:100px;border-radius:50%;background:red;">
    </div>

    <br>

    <button onclick="trocar()">Trocar Cor</button>

    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function trocar(){
    document.getElementById("circulo").style.backgroundColor="green";
}
