export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "quando-a-ansiedade-comeca-a-passar-do-limite",
    title: "Quando a ansiedade começa a passar do limite",
    excerpt:
      "Entenda sinais de alerta que mostram quando a ansiedade deixa de ser apenas uma reação pontual e passa a afetar a rotina.",
    category: "Ansiedade",
    readTime: "6 min",
    image: "/blog/ansiedade.png",
    imageAlt: "Mulher olhando pela janela em um momento de reflexão",
    publishedAt: "11 de março de 2026",
    sections: [
      {
        heading: "Nem toda ansiedade é igual",
        paragraphs: [
          "Sentir ansiedade antes de uma conversa importante, uma mudança ou um desafio faz parte da experiência humana. O problema aparece quando esse estado deixa de ser pontual e passa a ocupar espaço demais na rotina.",
          "Quando a mente fica em alerta constante, o corpo também responde. Cansaço, tensão, dificuldade para descansar e sensação de que tudo exige mais energia do que deveria são sinais comuns.",
        ],
      },
      {
        heading: "O que merece atenção",
        paragraphs: [
          "Se a ansiedade começa a atrapalhar o sono, a concentração, os relacionamentos ou decisões simples do dia a dia, já existe um impacto importante na qualidade de vida.",
          "Nesses casos, a terapia pode ajudar a compreender gatilhos, padrões de pensamento e formas mais cuidadosas de lidar com a pressão interna.",
        ],
      },
      {
        heading: "Buscar ajuda é um passo de clareza",
        paragraphs: [
          "Nem sempre a pessoa procura terapia porque chegou ao limite absoluto. Muitas vezes, ela procura porque percebe que não quer continuar sustentando tudo sozinha.",
          "Esse reconhecimento já é, por si só, um gesto de cuidado importante.",
        ],
      },
    ],
  },
  {
    slug: "como-lidar-com-pensamentos-acelerados",
    title: "Como lidar com pensamentos acelerados no dia a dia",
    excerpt:
      "Pensamentos acelerados podem dar a sensação de que a mente nunca descansa. Veja por que isso acontece e como a terapia pode ajudar.",
    category: "Rotina emocional",
    readTime: "5 min",
    image: "/blog/pensamentos.png",
    imageAlt: "Pessoa sentada em silêncio em um ambiente de luz suave",
    publishedAt: "11 de março de 2026",
    sections: [
      {
        heading: "A mente continua mesmo quando o corpo para",
        paragraphs: [
          "Muitas pessoas conseguem cumprir tarefas, trabalhar, conversar e manter a rotina, mas por dentro sentem que a mente nunca desacelera.",
          "Esse excesso de pensamentos nem sempre vem como uma ideia clara. Às vezes aparece como inquietação, dificuldade de presença ou sensação constante de antecipação.",
        ],
      },
      {
        heading: "O que costuma manter esse ciclo",
        paragraphs: [
          "Cobrança interna, medo de errar, necessidade de controle e dificuldade de descansar sem culpa são fatores frequentes nesse processo.",
          "Quanto mais a pessoa tenta desligar na força, mais frustrada ela pode ficar por não conseguir.",
        ],
      },
      {
        heading: "O papel da terapia",
        paragraphs: [
          "Na terapia, o objetivo não é apenas reduzir sintomas, mas entender o que está alimentando esse estado de aceleração.",
          "Com isso, fica mais possível construir recursos de regulação emocional e uma relação menos punitiva com o próprio ritmo.",
        ],
      },
    ],
  },
  {
    slug: "sinais-de-esgotamento-emocional",
    title: "Sinais de esgotamento emocional que merecem atenção",
    excerpt:
      "Nem sempre o esgotamento aparece como um colapso. Muitas vezes ele surge como irritação, apatia e perda gradual de energia.",
    category: "Esgotamento",
    readTime: "6 min",
    image: "/blog/esgotamento.png",
    imageAlt: "Mulher em momento de pausa com expressão cansada",
    publishedAt: "11 de março de 2026",
    sections: [
      {
        heading: "Quando tudo pesa mais",
        paragraphs: [
          "O esgotamento emocional pode aparecer de forma silenciosa. A pessoa segue funcionando, mas com menos energia, menos presença e mais esforço para sustentar tarefas simples.",
          "Também pode surgir como irritação frequente, sensação de afastamento emocional, dificuldade de concentração e vontade constante de se recolher.",
        ],
      },
      {
        heading: "Não é falta de força",
        paragraphs: [
          "Muita gente interpreta esse estado como fraqueza, desorganização ou incapacidade. Mas, na prática, ele costuma ser um sinal de sobrecarga prolongada.",
          "O corpo e a mente começam a mostrar que a forma como tudo está sendo sustentado já não é mais saudável.",
        ],
      },
      {
        heading: "A terapia como espaço de reorganização",
        paragraphs: [
          "Ao falar sobre esse processo em terapia, a pessoa pode nomear melhor o que está vivendo e construir outras formas de cuidado, limite e descanso.",
          "Nem sempre é possível mudar tudo de uma vez. Mas compreender o que está acontecendo já ajuda a reduzir a sensação de caos.",
        ],
      },
    ],
  },
  {
    slug: "por-que-e-tao-dificil-colocar-limites",
    title: "Por que é tão difícil colocar limites",
    excerpt:
      "Dizer não, se priorizar e sustentar decisões pode ser mais difícil do que parece. Isso também tem relação com história emocional e vínculos.",
    category: "Relacionamentos",
    readTime: "5 min",
    image: "/blog/limites.png",
    imageAlt: "Pessoa caminhando sozinha em uma rua calma",
    publishedAt: "11 de março de 2026",
    sections: [
      {
        heading: "Limite não é frieza",
        paragraphs: [
          "Muitas pessoas sabem, racionalmente, que precisam se posicionar mais. Ainda assim, quando a situação chega, sentem culpa, medo de desagradar ou receio de serem vistas como egoístas.",
          "Isso acontece porque colocar limites não depende só de vontade. Também envolve história de vida, modelos de relação e segurança emocional.",
        ],
      },
      {
        heading: "Quando agradar vira regra",
        paragraphs: [
          "Se a pessoa aprendeu a manter vínculos priorizando sempre o outro, qualquer movimento de limite pode parecer arriscado demais.",
          "Nesses casos, é comum confundir cuidado com autoabandono.",
        ],
      },
      {
        heading: "O que a terapia pode oferecer",
        paragraphs: [
          "A terapia ajuda a perceber padrões, nomear desconfortos e construir um posicionamento mais coerente com aquilo que faz sentido para a própria vida.",
          "Colocar limites não precisa ser uma ruptura brusca. Pode ser um processo de fortalecimento gradual.",
        ],
      },
    ],
  },
  {
    slug: "terapia-online-funciona-mesmo",
    title: "Terapia online funciona mesmo?",
    excerpt:
      "Para muita gente, o atendimento online é a forma mais acessível de começar. Entenda o que faz esse formato funcionar bem.",
    category: "Terapia online",
    readTime: "4 min",
    image: "/blog/terapia-online.png",
    imageAlt: "Mesa com notebook e ambiente organizado para atendimento online",
    publishedAt: "11 de março de 2026",
    sections: [
      {
        heading: "O vínculo terapêutico não depende só da presença física",
        paragraphs: [
          "Uma dúvida comum é se a terapia online consegue ser profunda e acolhedora. Na prática, quando há privacidade, escuta qualificada e constância, o processo pode acontecer de forma muito consistente.",
          "Para muitas pessoas, inclusive, o online facilita a continuidade do cuidado por se adaptar melhor à rotina.",
        ],
      },
      {
        heading: "O que ajuda esse formato a funcionar",
        paragraphs: [
          "Ter um ambiente reservado, uma conexão estável e horários combinados com clareza faz diferença na qualidade da experiência.",
          "Quando esses pontos estão organizados, o atendimento online pode ser tão viável quanto o presencial para diversas demandas.",
        ],
      },
      {
        heading: "O mais importante é o espaço de cuidado",
        paragraphs: [
          "Mais do que o formato em si, o essencial é a possibilidade de ter um espaço onde a pessoa possa ser escutada, compreender o que sente e elaborar o que está vivendo.",
          "Se o online torna esse começo mais possível, ele já cumpre um papel importante.",
        ],
      },
    ],
  },
  {
    slug: "o-que-a-terapia-pode-ajudar-a-organizar-na-vida-adulta",
    title: "O que a terapia pode ajudar a organizar na vida adulta",
    excerpt:
      "A vida adulta traz exigências emocionais, profissionais e relacionais. A terapia pode ser um espaço para organizar tudo isso com mais clareza.",
    category: "Vida adulta",
    readTime: "6 min",
    image: "/blog/vida-adulta.png",
    imageAlt: "Pessoa em mesa de trabalho com expressão tranquila e concentrada",
    publishedAt: "11 de março de 2026",
    sections: [
      {
        heading: "Nem sempre o problema é uma coisa só",
        paragraphs: [
          "Na vida adulta, é comum que várias áreas se misturem: trabalho, relacionamento, família, finanças, decisões importantes e cobrança interna.",
          "Por isso, muitas vezes a pessoa sente que está mal, mas não consegue explicar exatamente por quê.",
        ],
      },
      {
        heading: "A terapia ajuda a dar nome ao que está confuso",
        paragraphs: [
          "Ter um espaço para falar com calma permite perceber padrões, organizar prioridades e entender de onde vem parte do sofrimento.",
          "Esse processo pode ajudar tanto em momentos críticos quanto em fases de transição, dúvida ou excesso de pressão.",
        ],
      },
      {
        heading: "Mais clareza para tomar decisões",
        paragraphs: [
          "A terapia não entrega respostas prontas, mas ajuda a construir uma relação mais honesta com o que a pessoa sente, deseja e sustenta.",
          "Com isso, decisões difíceis deixam de ser enfrentadas apenas no improviso ou no esgotamento.",
        ],
      },
    ],
  },
];

export const blogCategories = [
  "Todas",
  ...new Set(blogPosts.map((post) => post.category)),
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category?: string) {
  if (!category || category === "Todas") {
    return blogPosts;
  }

  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  const sameCategory = blogPosts.filter(
    (candidate) =>
      candidate.slug !== post.slug && candidate.category === post.category,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const fallback = blogPosts.filter(
    (candidate) =>
      candidate.slug !== post.slug && candidate.category !== post.category,
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}
