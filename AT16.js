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
    <div id="retangulo" style="width:300px;padding:20px;background:white;">
        Texto do retângulo
    </div>

    <br>

    <button onclick="modoEscuro()">Modo Escuro</button>
    <script src="script.js"></script>
</body>

</html>

<!--Script-->
function modoEscuro(){
    let r = document.getElementById("retangulo");

    r.style.backgroundColor="black";
    r.style.color="white";
}
