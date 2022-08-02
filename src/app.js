import { LightningElement } from "lwc";

export default class App extends LightningElement {
  //variavel comum
  //nome = 'Filipe';

  /* 
  Object javaScript
  {key: value, key1: value, ..., key3: value}

  nameObject = {
    key1: value,
    .
    keyn: valuen
    }
    
    Acessar valores
    nameObject.key
    
    pessoa.id
    pessoa.nome
    pessoa.idade*/


  //object js
  pessoa = {
  nome: 'Débora',
  cpf: '45664688',
  idade: 35,
  };

account = {
  name: 'Débora Sol',
  type: 'Prospect',
  rating: 'Warm',
  website: 'www.socorrodeus.com.br'
};

  //crie um objeto na classe chamado account
    // onde  deverá possuir chave e valor 
    //(name, type, rating, website) definir valores para elas
    //exiba o mesmo dentro do app.html

/* List de objetos
é uma lista com objetos armazenados
  lista = [
    {},
    {},
    {},
  ];
  */
  //uma lista que contem objetos (key: value)
  pokemons = [
    {cod: 1, nome: 'Pikachu', tipo: 'raio', nivel: '+8000'},
    {cod: 2, nome: 'Charmander', tipo: 'fogo', nivel: 35},
    {cod: 3, nome: 'Chicorita', tipo: 'planta', nivel: 21},
    {cod: 4, nome: 'Mew', tipo: 'psiquico', nivel: 11},
    {cod: 5, nome: 'Charizard', tipo: 'fogo', nivel: 26},
    {cod: 6, nome: 'Taurus', tipo: 'normal', nivel: 46},
  ]

}