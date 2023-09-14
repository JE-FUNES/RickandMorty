

 function CalcularEdad(fecha) {

   

    let values = fecha.split("-");
    let dia = values[2];
    let mes = values[1];
    let ano = values[0];

    let hoy = new Date();
    let anoHoy = hoy.getYear();
    let mesHoy = hoy.getMonth() + 1;
    let diaHoy = hoy.getDate();

    let edad = (anoHoy + 1900) - ano;
    if (mesHoy < mes) {
        edad--;
    }
    if ((mes == mesHoy) && (diaHoy < dia)){
        edad--;
    }
    if (edad > 1900) {
        edad -= 1900;
    }

    let meses = 0;

    if (mesHoy > mes && dia > diaHoy){
    meses = mesHoy - mes - 1;
    } else if (mesHoy > mes){
        meses = mesHoy - mes;
    } if (mesHoy < mes && dia < diaHoy){
        meses = 12 - (mes - mesHoy);
    } else if (mesHoy < mes) {
        meses = 12 - (mes - mesHoy + 1);
    } if (mesHoy == mes && dia > diaHoy){
        meses = 11;
    }

    let dias = 0;
    if (diaHoy > dia) {
        dias = diaHoy - dia;
    } if (diaHoy < dia){
        let ultimoDiaMes = new Date(anoHoy, mesHoy - 1, 0);
        dias = ultimoDiaMes.getDate() - (dia - diaHoy);
    }
    return edad + " años, " + meses + " meses y " + dias + " días."; 
}

export default CalcularEdad;