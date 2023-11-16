function descomposicionFactoresPrimos() {
    let numeroUsuario = parseInt(prompt("Ingresa un número para descomponer en factores primos:"));
    let factoresPrimos = [1];
    console.log(`el numero ingresado es ${numeroUsuario}`)
    while (numeroUsuario > 1) {
        for(let i=2 ; numeroUsuario%i==0;i++){
        factoresPrimos.push(i);
        numeroUsuario /= i;
        }
        return console.log(` sus factores son ${factoresPrimos}`)
    }
}
descomposicionFactoresPrimos()