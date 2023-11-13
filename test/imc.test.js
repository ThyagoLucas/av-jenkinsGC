import { calculoIMC, imcFaixa } from '../src/imc.js';

test('Peso 83, altura 1,75 to equal 27.10', () => {
    expect(calculoIMC(83, 1.75)).toBe('27.10');

});

test('Peso 83, altura 1,75 to equal 27.10', () => {
    expect(imcFaixa(14, 1.75)).toBe('Baixo Peso FALHA');

});

test('Peso 83, altura 1,75 to equal Sobre peso', () => {
    expect(imcFaixa(83, 1.75)).toBe('Sobre peso');
});