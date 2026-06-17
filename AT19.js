<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 id="titulo">Meu Título</h1>

    <button onclick="destacar()">Destacar</button>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function destacar(){
    let h1 = document.getElementById("titulo");

    h1.style.color="white";
    h1.style.backgroundColor="blue";
}
