<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .q {
            width: 100px;
            height: 100px;
            background: gray;
            display: inline-block;
        }
    </style>
</head>

<body>
    <div id="caixa" style="width:100px;height:100px;background:orange;">
    </div>

    <br>

    <button onclick="limparCor()">Limpar Cor</button>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function colorir(){
    let q = document.querySelectorAll(".q");

    q[0].style.backgroundColor="red";
    q[1].style.backgroundColor="green";
    q[2].style.backgroundColor="blue";
}
