<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #circulo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: red;
            display: inline-block;
        }

        #quadrado {
            width: 100px;
            height: 100px;
            background: blue;
            display: inline-block;
        }
    </style>
</head>

<body>
    <div id="circulo"></div>
    <div id="quadrado"></div>

    <script src="script.js"></script>
</body>

</html>

<!--Script-->
document.getElementById("circulo").style.backgroundColor = "blue";
document.getElementById("quadrado").style.backgroundColor = "red";
