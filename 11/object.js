var objest={
    ced:null,
    nom:null,
    ape:null,
    n1:null,
    n2:null,
    n3:null,
}
function guardar(){

    objest.ced=document.getElementById("ced").value;
    objest.nom=document.getElementById("nom").value;
    objest.ape=document.getElementById("ape").avalue;
    objest.n1=parseFloat(document.getElementById("n1").value)  ;
    objest.n2=parseFloat(document.getElementById("n2").value)  ;
    objest.n3=parseFloat(document.getElementById("n1").value)  ;
    document.getElementById("nf").value=notafinal();
    listarestudiante();
    limpiarcaja();
}
function notafinal(){
    return((objest.n1+n2+n3)/3);
    var salida="";
    salida='<tr><td>'+objest.ced+'</td><td>'+'<tr><td>'+objest.nom+'</td><td>'+
        '<tr><td>'+objest.ape+'</td><td>'+'<tr><td>'+objest.n1+'</td><td>'+
        '<tr><td>'+objest.n2+'</td><td>'+'<tr><td>'+objest.n3+'</td><td>'+
        '<tr><td>'+notafinal()+'</td><td>';
    document.getElementById('cuerpo').innerHTML=salida;
}