// Arrays + manipulação de arrays

             // declara que a variavel é um array
const array: Array<number> = [10,20,30,40]

                    // outra forma de declarar que a variavel é um array (mais usada e simplificada)
const stringArray: string[] = ['a','b','c']


 console.log('indice do array:',array[0]);  // indices do array sempre começa no 0

// length (quantidade de elementos no array)
console.log('tamanho do array:',stringArray.length);

// push (adiciona um elemento na ultima posição array)

const arrayPush: number[] = [1,2,3,4,5]
console.log('array original',arrayPush);

arrayPush.push(6)
 console.log('novo array:',arrayPush);

// pop (remove o ultimo elemento do array)
const arrayPop: string[] = ['nathan', 'rodrigues', "vieira"]
console.log('array original', arrayPop);

arrayPop.pop() // não precisa passar parâmetro
console.log('array com ultimo item removido:', arrayPop);


// find
const nomes: string[] = ['ezio', "altair", 'aguilar', 'darim']

const buscaNome = nomes.find(nome => nome === 'altair')
console.log('nome encontrado:',buscaNome);

// forEach
const paises: string[] = ['india', 'argelia', 'libia', 'china']
paises.forEach((pais,index) => {
  console.log(`pais: ${index} - ${pais}`);
});

// outro exemplo 
const numeros: number[] = [1, 2,3 ,4]
numeros.forEach((num) => {
  if(num > 2){
    console.log(num);
  }
});



// map 
const armas: string[] = ['glock', 'fal', 'ak-47','uzi']
armas.map((arma) =>{
  console.log('arma:', arma);
})

