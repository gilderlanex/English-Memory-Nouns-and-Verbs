const verbData = [
  // TECNOLOGIA
  {
    id: 1,
    infinitive: "to deploy",
    translation: "implantar / publicar",
    category: "Tecnologia",
    sentences: [
      {
        english: "The team will ___ the new feature to the server tonight.",
        answer: "deploy",
        translation: "A equipe vai implantar a nova funcionalidade no servidor hoje à noite."
      }
    ]
  },
  {
    id: 2,
    infinitive: "to debug",
    translation: "depurar / corrigir erros",
    category: "Tecnologia",
    sentences: [
      {
        english: "I spent three hours trying to ___ this code.",
        answer: "debug",
        translation: "Eu passei três horas tentando depurar esse código."
      }
    ]
  },
  {
    id: 3,
    infinitive: "to implement",
    translation: "implementar",
    category: "Tecnologia",
    sentences: [
      {
        english: "We need to ___ a new security protocol.",
        answer: "implement",
        translation: "Precisamos implementar um novo protocolo de segurança."
      }
    ]
  },
  {
    id: 4,
    infinitive: "to refactor",
    translation: "refatorar",
    category: "Tecnologia",
    sentences: [
      {
        english: "It's a good idea to ___ the old functions to improve performance.",
        answer: "refactor",
        translation: "É uma boa ideia refatorar as funções antigas para melhorar a performance."
      }
    ]
  },

  // EMPRESARIAL
  {
    id: 5,
    infinitive: "to negotiate",
    translation: "negociar",
    category: "Empresarial",
    sentences: [
      {
        english: "Our CEO will ___ a better contract with the suppliers.",
        answer: "negotiate",
        translation: "Nosso CEO vai negociar um contrato melhor com os fornecedores."
      }
    ]
  },
  {
    id: 6,
    infinitive: "to schedule",
    translation: "agendar",
    category: "Empresarial",
    sentences: [
      {
        english: "Let's ___ a meeting for next Monday.",
        answer: "schedule",
        translation: "Vamos agendar uma reunião para a próxima segunda-feira."
      }
    ]
  },
  {
    id: 7,
    infinitive: "to manage",
    translation: "gerenciar / administrar",
    category: "Empresarial",
    sentences: [
      {
        english: "She knows how to ___ a large team effectively.",
        answer: "manage",
        translation: "Ela sabe como gerenciar uma grande equipe de forma eficaz."
      }
    ]
  },
  {
    id: 8,
    infinitive: "to brainstorm",
    translation: "fazer um brainstorm (chuva de ideias)",
    category: "Empresarial",
    sentences: [
      {
        english: "We need to ___ new marketing strategies.",
        answer: "brainstorm",
        translation: "Precisamos fazer um brainstorm de novas estratégias de marketing."
      }
    ]
  },

  // CASAMENTO
  {
    id: 9,
    infinitive: "to marry",
    translation: "casar",
    category: "Casamento",
    sentences: [
      {
        english: "They decided to ___ in a beautiful church.",
        answer: "marry",
        translation: "Eles decidiram se casar em uma igreja linda."
      }
    ]
  },
  {
    id: 10,
    infinitive: "to invite",
    translation: "convidar",
    category: "Casamento",
    sentences: [
      {
        english: "How many people did you ___ to the wedding?",
        answer: "invite",
        translation: "Quantas pessoas você convidou para o casamento?"
      }
    ]
  },
  {
    id: 11,
    infinitive: "to propose",
    translation: "pedir em casamento / propor",
    category: "Casamento",
    sentences: [
      {
        english: "He is going to ___ to her during their trip to Paris.",
        answer: "propose",
        translation: "Ele vai pedi-la em casamento durante a viagem deles a Paris."
      }
    ]
  },
  {
    id: 12,
    infinitive: "to celebrate",
    translation: "comemorar / celebrar",
    category: "Casamento",
    sentences: [
      {
        english: "We will ___ our 10th anniversary next month.",
        answer: "celebrate",
        translation: "Nós vamos comemorar nosso 10º aniversário no mês que vem."
      }
    ]
  },

  // DIA A DIA
  {
    id: 13,
    infinitive: "to wake up",
    translation: "acordar",
    category: "Dia a dia",
    sentences: [
      {
        english: "I usually ___ at 6 AM every morning.",
        answer: "wake up",
        translation: "Eu geralmente acordo às 6 da manhã todos os dias."
      }
    ]
  },
  {
    id: 14,
    infinitive: "to commute",
    translation: "deslocar-se (casa/trabalho)",
    category: "Dia a dia",
    sentences: [
      {
        english: "It takes me an hour to ___ to work by bus.",
        answer: "commute",
        translation: "Eu levo uma hora para me deslocar até o trabalho de ônibus."
      }
    ]
  },
  {
    id: 15,
    infinitive: "to buy",
    translation: "comprar",
    category: "Dia a dia",
    sentences: [
      {
        english: "I forgot to ___ milk at the supermarket.",
        answer: "buy",
        translation: "Eu esqueci de comprar leite no supermercado."
      }
    ]
  },
  {
    id: 16,
    infinitive: "to exercise",
    translation: "exercitar-se",
    category: "Dia a dia",
    sentences: [
      {
        english: "Doctors recommend to ___ at least three times a week.",
        answer: "exercise",
        translation: "Os médicos recomendam se exercitar pelo menos três vezes por semana."
      }
    ]
  },

  // OBJETOS DE CASA / TAREFAS DOMÉSTICAS
  {
    id: 17,
    infinitive: "to organize",
    translation: "organizar / arrumar",
    category: "Casa",
    sentences: [
      {
        english: "I need to ___ my closet this weekend.",
        answer: "organize",
        translation: "Eu preciso arrumar meu armário neste final de semana."
      }
    ]
  },
  {
    id: 18,
    infinitive: "to clean",
    translation: "limpar",
    category: "Casa",
    sentences: [
      {
        english: "Please, ___ the kitchen counter after cooking.",
        answer: "clean",
        translation: "Por favor, limpe a bancada da cozinha depois de cozinhar."
      }
    ]
  },
  {
    id: 19,
    infinitive: "to fix",
    translation: "consertar",
    category: "Casa",
    sentences: [
      {
        english: "Can you ___ the leaking faucet in the bathroom?",
        answer: "fix",
        translation: "Você pode consertar a torneira vazando no banheiro?"
      }
    ]
  },
  {
    id: 20,
    infinitive: "to sweep",
    translation: "varrer",
    category: "Casa",
    sentences: [
      {
        english: "Don't forget to ___ the floor before the guests arrive.",
        answer: "sweep",
        translation: "Não esqueça de varrer o chão antes que os convidados cheguem."
      }
    ]
  }
];

// Available Categories
const categories = [...new Set(verbData.map(v => v.category))];
