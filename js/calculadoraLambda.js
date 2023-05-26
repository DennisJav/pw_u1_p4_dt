const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const sumarNumeros=() =>{
    var numero1=parseInt(document.getElementById('idNum1').value) ;
    var numero2=parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML = 'Resultado' + sumar(numero1, numero2);
}

const restarNumeros=() =>{
    var numero1=parseInt(document.getElementById('idNum1').value) ;
    var numero2=parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML = 'Resultado' + restar(numero1, numero2);
}

const multiplicarNumeros=() =>{
    var numero1=parseInt(document.getElementById('idNum1').value) ;
    var numero2=parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML = 'Resultado' + multiplicar(numero1, numero2);
}

const dividirNumeros=() =>{
    var numero1=parseInt(document.getElementById('idNum1').value) ;
    var numero2=parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML = 'Resultado' + dividir(numero1, numero2);
}

const conceptosJS = () =>{
    //var
    //let
    //const
    //Declaracion de variable
    var variable1='Edison';
    var variable2=1;
    let variable3='Dennis';
    let variable4=2;
    const variable5='Javier';
    const variable=3;

    console.log(variable3);

    //Declaracion de arreglos
    const diasSemana = ['Lunes','Martes','Miercoles'];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    diasSemana.push('Jueves');
    diasSemana.push('Viernes');
    console.log(diasSemana);
    //Concatenacion
    const diasFinSemana=['Sabado','Domingo'];
    const diasCompleto =diasSemana.concat(diasFinSemana)
    console.log(diasCompleto);


    for(const dia of diasCompleto){
        console.log(dia)
    }

    //Declaracion de objetos
    const persona = {
        nombre:"Dennis",
        apellido:"Tapia",
        edad:33,
        ciudad:"Quito"
    }
    
    const persona2 = {
        nombre:"Javier",
        apellido:"Ortiz",
        edad:23,
        ciudad:"Quito",
        vehiculo:{
            marca:'nissan',
            modelo:'kicks',
            anio:2022
        }
    }

    //el contenido de un vector interno si es mutable
    diasCompleto[0] = 'CAMBIO';
    console.log(diasCompleto[0]);
    console.log(persona2);

  //  Desestrucuracion de arreglos
    //descomposicion por posicion
    const dias2 = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
    const [dia1,dia2,dia3] = dias2;
    console.log(dia3);
    console.log(dia1);

    //forma acotada
    const [d1,d2,d3,d4,d5] = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
    console.log(d2);

    //desestructuracion de objetos
    const persona3 = {
        nombre:"Lizeth",
        apellido:"Imbaquingo",
        edad:22,
        ciudad:"Quito"
    }

    const {nombre,edad}=persona3;
    console.log(nombre);
    console.log(edad);

    const persona4 = {
        nombre:"Javier",
        apellido:"Ortiz",
        edad:23,
        ciudad:"Quito",
        vehiculo:{
            marca:'nissan',
            modelo:'kicks',
            anio:2022
        }
    }

    const {vehiculo} = persona4;
    console.log(vehiculo)

    const {marca} = vehiculo;
    console.log(marca);

    const {modelo} = persona4.vehiculo;
    console.log(modelo);
}