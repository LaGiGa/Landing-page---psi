const heroVariants = [
  {
    id: "clarity",
    title: "Cuidar da ansiedade pode começar com uma conversa segura.",
    description:
      "Atendimento psicológico para jovens adultos que se sentem sobrecarregados, ansiosos ou emocionalmente cansados e querem voltar a viver com mais clareza e estabilidade.",
    supportingLine:
      "Um espaço de escuta para quem sente que está sustentando tudo por fora, mas por dentro já está cansado demais.",
    primaryCta: "Agendar conversa inicial",
    primaryMessage:
      "Olá, quero agendar uma conversa inicial para entender como funciona o atendimento.",
    secondaryCta: "Tirar dúvidas antes de agendar",
    secondaryMessage:
      "Olá, quero tirar dúvidas antes de decidir se agendo.",
  },
  {
    id: "routine",
    title: "Quando a mente não desacelera, a terapia pode ajudar a reorganizar.",
    description:
      "Atendimento para jovens adultos que convivem com ansiedade, exaustão emocional e excesso de cobrança e querem voltar a respirar com mais presença.",
    supportingLine:
      "A proposta é transformar confusão emocional em clareza prática, sem promessas apressadas e sem fórmulas prontas.",
    primaryCta: "Quero entender como começar",
    primaryMessage:
      "Olá, quero entender como seria começar o atendimento neste momento.",
    secondaryCta: "Falar antes de decidir",
    secondaryMessage:
      "Olá, quero conversar antes de decidir se agendo.",
  },
  {
    id: "welcome",
    title: "Você não precisa lidar sozinho com o que tem pesado por dentro.",
    description:
      "Terapia com acolhimento, escuta e clareza para quem quer entender melhor as próprias emoções e atravessar a rotina com menos sobrecarga.",
    supportingLine:
      "Ideal para quem quer começar terapia com mais segurança no primeiro contato e com um caminho simples para tirar dúvidas.",
    primaryCta: "Dar o primeiro passo agora",
    primaryMessage:
      "Olá, quero dar o primeiro passo e saber como funciona o atendimento.",
    secondaryCta: "Tirar minhas dúvidas",
    secondaryMessage:
      "Olá, quero tirar minhas dúvidas antes de agendar.",
  },
];

export const siteConfig = {
  name: "Dra. Ester Nolasco",
  firstName: "Ester",
  role: "Psicóloga clínica",
  credential: "CRP a informar",
  audience: "jovens adultos",
  city: "Palmas - TO",
  serviceModes: "Atendimento online e presencial",
  whatsappNumber: "5511999999999",
  whatsappLabel: "(11) 99999-9999",
  activeHeroVariant: heroVariants[0],
  heroVariants,
  seoTitle:
    "Psicóloga para ansiedade e acolhimento emocional | Atendimento online e presencial",
  seoDescription:
    "Psicóloga clínica com atendimento online e presencial, foco em ansiedade, acolhimento emocional e primeiro contato pelo WhatsApp.",
};

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
