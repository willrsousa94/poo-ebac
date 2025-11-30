/*
Script que irá verificar o this.valor inserido no campo e calcular o tempo no estacionamento

Regras: 

this.valor          Tempo
R$ 1,00        30 minutos 
R$ 1,75        60 minutos
R$ 3,00        120 minutos (Tempo máximo permitido)

Ao clicar no botão, irá fazer todo cálculo e mostrar o troco caso haja
Se o this.valor inserido for menor que 1 real, mostrar "this.valor Insuficiente" na tela

Tudo isso precisa utilizar POO
*/

class Estacionamento {
  //definindo os this.valores de this.valor, tempo e troco de forma privada
  #valor;
  #tempo;
  #troco;

  //criação do construtor padrão
  constructor() {}

  //getters e setters
  get getValor() {
    return this.#valor;
  }

  set setValor(novoValor) {
    this.#valor = novoValor;
  }

  get getTempo() {
    return this.#tempo;
  }

  set setTempo(novoTempo) {
    this.#tempo = novoTempo;
  }

  get getTroco() {
    return this.#troco;
  }

  set setTroco(novoTroco) {
    if (this.getValor < 1) {
      this.#troco = 0;
    } else {
      this.#troco = novoTroco;
    }
  }

  //métodos
  calcular() {
    this.setValor = Number(
      document.querySelector("#valor").value.replace(".", "").replace(",", ".")
    );
    if (this.getValor >= 1) {
      if (this.getValor >= 1 && this.getValor < 1.75) {
        this.setTempo = 30;
        this.getValor > 1
          ? (this.setTroco = this.getValor - 1)
          : (this.setTroco = 0);
      }
      if (this.getValor >= 1.75 && this.getValor < 3) {
        this.setTempo = 60;
        this.getValor > 1.75
          ? (this.setTroco = this.getValor - 1.75)
          : (this.setTroco = 0);
      }
      if (this.getValor >= 3) {
        this.setTempo = 120;
        this.getValor > 3
          ? (this.setTroco = this.getValor - 3)
          : (this.setTroco = 0);
      }
    }

    this.exibirTempo();
    this.exibirTroco();
  }

  exibirTempo() {
    if (this.getValor >= 1) {
      document.querySelector(
        "#tempo"
      ).textContent = `Seu tempo de estacionamento será de ${this.getTempo} minutos`;
    } else {
      document.querySelector("#tempo").textContent = `Valor insuficiente`;
    }
  }

  exibirTroco() {
    if (this.getTroco != 0) {
      document.querySelector(
        "#troco"
      ).textContent = `Seu troco é: R$ ${this.getTroco}`;
    } else {
      document.querySelector("#troco").textContent = `Não há troco`;
    }
  }
}

//instanciando elemento
const estacionamento = new Estacionamento();

//Chamada do clique
document.querySelector("#calcular").addEventListener("click", function (e) {
  estacionamento.calcular();
});
