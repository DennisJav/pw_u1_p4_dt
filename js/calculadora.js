
function operaciones(num1,num2,op){

    switch (op) {
        case 1:
            return num1+num2;
            break;
        case 2:
            return num1-num2;
            break
        case 3:
            return num1*num2;
            break
        case 4:
            return num1/num2;
            break
        default:
            document.getElementById('labelResultado').innerHTML= 'Operacion no valida'
            break;
    }

}

function sumarNumeros(op){
    var numero1=parseInt(document.getElementById('idNum1').value) ;
    var numero2=parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML= 'Resultado: ' + operaciones(numero1,numero2,op);
}

function eliminarElemento(){
    document.getElementById('idEliminar').remove();

}

function insertarElemento(){
    document.getElementById('idInsertar').innerHTML='<strong>Importante</strong>';
}

function convertir(idCampo){
    return parseInt(document.getElementById(idCampo).value);

}