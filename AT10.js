<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .cor {
            width: 60px;
            height: 60px;
            background: gray;
            display: inline-block;
        }
    </style>
</head>

<body>
    <div class="cor"></div>
    <div class="cor"></div>
    <div class="cor"></div>
    <div class="cor"></div>
    <div class="cor"></div>

    <script src="script.js"></script>
</body>

</html>

<!--Script-->
let cores = document.querySelectorAll(".cor");

cores[0].style.backgroundColor="red";
cores[1].style.backgroundColor="orange";
cores[2].style.backgroundColor="yellow";
cores[3].style.backgroundColor="green";
cores[4].style.backgroundColor="blue";
