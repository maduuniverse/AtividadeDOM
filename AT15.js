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
    <div id="quadrado" style="width:100px;height:100px;background:yellow;">
    </div>

    <br>

    <button onclick="azul()">Azul</button>
    <button onclick="rosa()">Rosa</button>

    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function azul(){
    document.getElementById("quadrado").style.backgroundColor="blue";
}

function rosa(){
    document.getElementById("quadrado").style.backgroundColor="pink";
}
