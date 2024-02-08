const perguntas = [
    {
      pergunta: "Qual é a principal função do operador '===' em JavaScript?",
      respostas: [
        "Comparar valores, incluindo seus tipos",
        "Comparar valores, sem considerar seus tipos",
        "Atribuir um valor a uma variável",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destas opções é uma forma válida de declarar uma variável em JavaScript?",
      respostas: [
        "let 1variavel = 10;",
        "var variavel-2 = 20;",
        "const variavel3 = 30;",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'forEach' faz em um array em JavaScript?",
      respostas: [
        "Remove todos os elementos do array",
        "Executa uma função para cada elemento do array",
        "Adiciona um elemento ao final do array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "Não há diferença, ambos representam a ausência de valor",
        " 'null' representa a ausência de valor, enquanto 'undefined' é atribuído automaticamente a variáveis não inicializadas",
        " 'undefined' representa a ausência de valor, enquanto 'null' é atribuído automaticamente a variáveis não inicializadas",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '||' faz em JavaScript?",
      respostas: [
        "Concatena duas strings",
        "Realiza uma operação de divisão",
        "Retorna o primeiro valor verdadeiro entre dois operandos",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'map' em um array em JavaScript?",
      respostas: [
        "Altera os elementos do array original",
        "Cria um novo array com o resultado da aplicação de uma função em cada elemento do array original",
        "c) Remove elementos duplicados do array",
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "Utilizando o método 'toInt'",
        "Utilizando o método 'parseInt'",
        "Utilizando o método 'toNumber'",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'var' na declaração de variáveis em JavaScript?",
      respostas: [
        " Não há diferença, ambos são usados para declarar variáveis globais",
        " 'let' permite a redeclaração da variável no mesmo escopo, enquanto 'var' não",
        " 'var' é usada para declarar variáveis constantes, enquanto 'let' permite reatribuição de valor",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do código a seguir em JavaScript: console.log(typeof [])?",
      respostas: [
        " 'object'",
        " 'array'",
        " 'string'",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        " Retorna o primeiro valor verdadeiro entre dois operandos",
        " Realiza uma operação de multiplicação",
        " Retorna 'true' se ambos os operandos forem verdadeiros, caso contrário retorna 'false'",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'perguntas-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        // função que sempre vai deletar mas se tiver correta add. 
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        // faz o somatório e da o total de acertos
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //seletor para remover a reposta que tava na tela (reposta A)
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }