<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="mensagem" style="width:250px;height:100px;background:green;color:white;padding:20px;">
        Mensagem inicial
    </div>

    <br>

    <button onclick="mostrar()">Mostrar Mensagem</button>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function mostrar(){
    document.getElementById("mensagem").innerHTML =
    "Cor alterada com sucesso!";
}
