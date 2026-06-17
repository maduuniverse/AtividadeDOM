<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .q {
            width: 60px;
            height: 60px;
            background: gray;
            display: inline-block;
        }
    </style>
</head>

<body>
    <div class="q"></div>
    <div class="q"></div>
    <div class="q"></div>
    <div class="q"></div>
    <div class="q"></div>

    <br><br>

    <button onclick="colorirTudo()">Colorir Tudo</button>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function colorirTudo(){

    let q = document.querySelectorAll(".q");

    q[0].style.backgroundColor="red";
    q[1].style.backgroundColor="orange";
    q[2].style.backgroundColor="yellow";
    q[3].style.backgroundColor="green";
    q[4].style.backgroundColor="blue"
}
