
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





// Objetos Literais
const typeUser = {
  admin : 'seja bem vindo adm',
  student: 'olá estudante',
  viewer: 'olá visitante'
  }
  
  const validateUser = (user: string) =>{
     console.log(typeUser[user as keyof typeof typeUser]);
  }
  
  const usuario = 'admin'
  
  validateUser(usuario)
  validateUser("student")
  validateUser("viewer")
  
  