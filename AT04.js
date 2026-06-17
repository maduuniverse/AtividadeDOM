<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .quadrado {
            width: 100px;
            height: 100px;
            background: gray;
            margin: 5px;
        }
    </style>
</head>

<body>
    <div class="quadrado"></div>
    <div class="quadrado"></div>
    <div class="quadrado"></div>
    <script src="script.js"></script>

</body>

</html>

<!--Script-->
let q = document.querySelectorAll(".quadrado");

q[0].style.backgroundColor = "blue";
q[1].style.backgroundColor = "orange";
q[2].style.backgroundColor = "pink";
