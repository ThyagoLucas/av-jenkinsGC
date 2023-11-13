export function calculoIMC(peso, altura){
    
    const imc = peso / (altura*altura);
    
    return imc.toFixed(2);
}

export function imcFaixa(peso, altura){
    
    const imc = peso / (altura*altura);
    
    if (imc <= 18.5) {
        return 'Baixo Peso';
    } else if (imc > 18.5 && imc < 24.9) {
        return 'Normal';
    } else {
        return 'Sobre peso';
    }

}