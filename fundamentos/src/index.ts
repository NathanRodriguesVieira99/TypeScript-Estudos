// SINTAXE BÁSICA

// TIPOS PRIMITIVOS

// declarar variáveis
let a: string = 'a' // string
let b: number = 1 // number
let x: boolean = true// boolean

// variavel que pode receber mais de um tipo
let n: string | number = 2
n = 'nathan'

// variavel receber qualquer tipo 
let m: any = 3
m = 'v'
m = true


// OBJETOS

// tipagem de objetos

//interface (declara tipo do objeto)
interface Pessoa {
  nome: string,
  idade: number,
  profissao?: string // propiedade opcional  
};

const pessoa: Pessoa = {
  nome:'nathan',
  idade: 19
};

const outraPessoa: Pessoa ={
   nome:'joão',
   idade: 40,
   profissao: 'desenvolvedor'
};

// ARRAYS
const arrayPessoa: Pessoa[] = [    // recebe o array e declara que ele tem que receber o tipo Pessoa
  pessoa,
  outraPessoa
];

const arrayNumber: number[] = [  // declara o tipo que vai ter dentro do array
1,2,3
];

const arrayString: Array<string> = [   // outra forma de declarar o tipo que vai ter dentro do array
  'talibã', 'boko haram' , 'estado islãmico kurasan'
];