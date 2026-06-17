<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #triangulo {
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid black;
        }
    </style>
</head>

<body>
    <div id="triangulo"></div>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
document.getElementById("triangulo").style.borderBottomColor = "lime";
