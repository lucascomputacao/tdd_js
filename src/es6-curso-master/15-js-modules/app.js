// import método from 'biblioteca';
// * carrega tudo da lib
// as => alias para o método (novo nome)
import { union as juntaTudo, uniq as soOsMesmos } from 'ramda';

import soma, { sub, multiplicacao, div as dividir, PI } from './utils';

import react from 'react';
import reactDOM from 'react-dom';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = juntaTudo(arr1, arr2);

const arr4 = soOsMesmos(arr1);

console.log('juntaTudo', arr3);

console.log('soOsMesmos', arr4);

console.log('soma', soma(3, 2));

console.log('sub', sub(3, 2));

console.log('multplicacao ', multiplicacao(7, 2));

console.log('dividir', dividir(4, 2));

console.log('pi', PI);
