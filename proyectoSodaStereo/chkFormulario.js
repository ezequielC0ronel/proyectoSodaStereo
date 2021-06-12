function limpiarEstados() {
    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");
    const tAreaMensaje = document.getElementById("comentario");

    document.getElementById("estado_nombre").innerHTML = "";
    document.getElementById("estado_correo").innerHTML = "";
    document.getElementById("estado_info").innerHTML = "";
    document.getElementById("estado_comentario").innerHTML = "";

    inputNombre.style.border = "2px solid yellow";
    inputCorreo.style.border = "2px solid yellow";
    tAreaMensaje.style.border = "2px solid yellow";
}

function verificacion() {
    const nombre = document.form.nombre.value;
    const correo = document.form.correo.value;
    const chkBoxsArr = Array.from(document.form.info_mail);
    const comentario = document.form.comentario.value;

    const tieneNum = /[0-9]/i;
    const tieneCaract = /^[!@#\$%\^\&*\)\(+=._-]+$/g;
    const esCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo")
    const tAreaMensaje = document.getElementById("comentario");
    limpiarEstados();

    //Nombre
    if (nombre.length == 0 || tieneNum.test(nombre) || tieneCaract.test(nombre)) {
        document.getElementById("estado_nombre").innerHTML = "* Tenés que ingresar un nombre. Maximo 20 caracteres, solo letras!";

        inputNombre.style.border = "2px solid red";
        return false;
    } else if (nombre.length > 20) {
        document.getElementById("estado_nombre").innerHTML = "* El nombre es demasiado largo!";

        inputNombre.style.border = "2px solid red";
        return false;
    }

    //Correo
    if (correo.length == 0 || !esCorreo.test(correo)) {
        document.getElementById("estado_correo").innerHTML = "* Tenés que ingresar un email valido! Hay un limite de 20 caracteres."

        inputCorreo.style.border = "2px solid red";
        return false;
    } else if (correo.length > 20) {
        document.getElementById("estado_correo").innerHTML = "* El correo es demasiado largo!";

        inputCorreo.style.border = "2px solid red";
        return false;
    }

    //Checkbox
    if (chkBoxSeleccionados(chkBoxsArr).length == 0) {
        document.getElementById("estado_info").innerHTML = "* Tenés que seleccionar al menos una opcion!"

        return false;
    }

    //Comentario
    if (comentario.length > 160 || comentario.length == 0) {
        document.getElementById("estado_comentario").innerHTML = "* Tenes que enviar un mensaje, solo hasta 160 caracteres!";

        tAreaMensaje.style.border = "2px solid red";
        return false;
    }

    return true;
}


function chkBoxSeleccionados(a) {
    const chkBoxsArr1 = [];
    let y = 0;
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if (element.checked) {
            chkBoxsArr1[y] = element.value;
            y++;
        }

    }
    return chkBoxsArr1;
}

function mostrarFormulario(){
    const chkBoxsArr = Array.from(document.form.info_mail);
    const formulario = document.getElementById("formulario");
    const infoContacto = document.getElementById("info_contacto");

    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");
    const tAreaMensaje = document.getElementById("comentario");
    
    formulario.style.display= "inline-block";
    infoContacto.style.display = "none";

    inputNombre.value="";
    inputCorreo.value="";
    for(let i = 0; i < chkBoxsArr.length; i++){
        chkBoxsArr[i].checked = false;
    }
    tAreaMensaje.value= "";
    
    inputNombre.focus();
    
}


function verificarFormulario() {
    const nombre = document.form.nombre.value;
    const correo = document.form.correo.value;
    const comentario = document.form.comentario.value;
    //Obtener de vuelta los checkBox con todas su propiedades (Checked).
    const chkBoxsArr = Array.from(document.form.info_mail);
    const formulario = document.getElementById("formulario");
    const infoContacto = document.getElementById("info_contacto");

    if (verificacion()) {
        formulario.style.display = "none";
        infoContacto.style.display = "block";
        document.getElementById("info_contacto").innerHTML = "<p>Nombre: " + nombre + "</p>"
        + "<p>Correo: " + correo + "</p>" + "<p>Comentario: " + comentario + "</p>" + "<p>Noticias para el mail: " + chkBoxSeleccionados(chkBoxsArr);
        document.getElementById("info_contacto").innerHTML += "<button onclick="+"mostrarFormulario()"+" style="+"color:" +"black" +">"+ "Volver al formulario" +"</button>";
    }



}




