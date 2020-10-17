function mudaFoto(foto)
{
    while(true)
     {
        window.setTimeout(fotoon("icone"), 5000);
        window.setTimeout(fotoon("icone"), 5000);
     }
}
function fotoon(foto)
{
    document.getElementById("icone").src = foto;
}
function fotoff(foto)
{
    foto= 0;
}
    