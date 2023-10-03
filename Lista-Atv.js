// 1. 

let populacao_A = 80000;
let taxa_cresc_A = 0.03;

let populacao_B = 200000;
let taxa_cresc_B = 0.015;

let anos = 0;

while (populacao_A < populacao_B) {
    populacao_A += populacao_A * taxa_cresc_A;
    populacao_B += populacao_B * taxa_cresc_B;
    anos++;
}
console.log("Número de anos necessários: ", anos);

// 2. 

let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let numeto = parseInt(prompt("Digite um número inteiro: "));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("A quantidade de números pares é: ", pares);
console.log("A quantidade de números ímpares é: ", impares);

// 3. 

let quantidade = parseInt(prompt("Digite a quantidade de números:"));

let menorValor = Infinity;
let maiorValor = -Infinity;
let soma = 0;

for (let i = 0; i < quantidade; i++) {
  let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));

  menorValor = Math.min(menorValor, numero);
  maiorValor = Math.max(maiorValor, numero);
  soma += numero;
}

console.log("Menor valor:", menorValor);
console.log("Maior valor:", maiorValor);
console.log("Soma dos valores:", soma);

// 4. 

let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

const anoContratacao = 1995;
const anoAtual = new Date().getFullYear();

let aumento = 0.015;

let salarioAtual = salarioInicial;

for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
  aumento *= 2;
  salarioAtual += salarioAtual * aumento;
}

console.log(`O salário atual do funcionário em ${anoAtual} é R$ ${salarioAtual.toFixed(2)}.`);

// 5. 

function calcularAreaEPerimetroDoCirculo(raio) {
    const area = Math.PI * raio ** 2;
    const perimetro = 2 * Math.PI * raio;
    
    return { area, perimetro };
  }

  const raioDoCirculo = 5;
  const { area, perimetro } = calcularAreaEPerimetroDoCirculo(raioDoCirculo);
  
  console.log(`Área do círculo: ${area.toFixed(2)}`);
  console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
  
// 6. 

function calcularMontanteInvestimento(capitalInicial, taxaJuros, tempoMeses) {
    taxaJuros = taxaJuros / 100;
  
    const montante = capitalInicial * (1 + taxaJuros) ** tempoMeses;

    return montante.toFixed(2);
  }
  
  const capitalInicial = parseFloat(prompt("Digite o capital inicial:"));
  const taxaJuros = parseFloat(prompt("Digite a taxa de juros (em percentual):"));
  const tempoMeses = parseInt(prompt("Digite o tempo de investimento (em meses):"));
  
  const resultado = calcularMontanteInvestimento(capitalInicial, taxaJuros, tempoMeses);
  console.log(`O montante do investimento é R$ ${resultado}`);


// 7. 

var alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
  ];
  
  function imprimirAlunosAprovados(listaAlunos) {
    for (let aluno of listaAlunos) {
      const nome = aluno.nome;
      const notas = aluno.notas;
      const curso = aluno.curso;
  
      const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  
      if (media >= 7) {
        console.log(`Nome: ${nome}, Média Aritmética: ${media.toFixed(2)}, Curso: ${curso}`);
      }
    }
  }
  
  imprimirAlunosAprovados(alunos);
  