// Classes (consegue criar varios objetos)
class User {
  name: string = 'nathan'
  age: number = 19

constructor(name: string, age: number){ // parâmetros do constructor
  this.name = name  // this: acessa a propieade do objeto  
  this.age = age
}

  showName = () => {
    console.log(this.name);
  }
}

const user = new User('nathan', 19) // passando parâmetros do constructor
user.showName()

const otherUser = new User('joão', 28)
otherUser.showName()

