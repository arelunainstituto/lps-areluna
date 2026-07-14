import type { Procedure } from "./types";
import { BR_CONTACT, PROS, PROOF } from "./shared";

// Mecanismo único da unidade BR: instituto sério (não influencer) com
// padrão europeu REAL — única em Curitiba com unidade própria em Portugal.
const INSTITUTO_MECHANISM = {
  eyebrow: "O nosso diferencial",
  title: "Padrão europeu de verdade. Não é slogan — é um endereço no Porto.",
  body: "Em Curitiba, muita gente promete 'padrão europeu'. A Areluna é a única que tem, de facto, uma unidade a operar em Portugal — os mesmos protocolos, a mesma equipa, a mesma exigência. Não somos mais um nome no feed: somos um instituto, com responsabilidade clínica e uma fundadora com dupla titulação Brasil e Portugal.",
  enemyLine:
    "A diferença entre um procedimento feito por um perfil que viraliza — e um plano pensado por um instituto que responde por você depois.",
  points: [
    { title: "Instituto, não influencer", body: "Equipa e responsabilidade clínica, não a agenda lotada de um nome do momento." },
    { title: "Unidade real em Portugal", body: "Padrão europeu comprovável: a matriz opera no Porto, com os mesmos protocolos." },
    { title: "Dupla titulação BR + PT", body: "Fundadora Dra. Arethuza Luna, formada e atuante nos dois países." },
    { title: "Avaliação antes da agulha", body: "Estudamos o seu rosto e indicamos só o que faz sentido. Sem empurrar procedimento." },
  ],
};

const baseContact = {
  phoneDisplay: BR_CONTACT.phoneDisplay,
  phoneHref: BR_CONTACT.phoneHref,
  whatsappHref: BR_CONTACT.whatsappHref,
  address: BR_CONTACT.address,
  regulatory: BR_CONTACT.regulatory,
};

const formFields = [
  { name: "nome", label: "Nome completo", type: "text" as const, required: true },
  { name: "telefone", label: "WhatsApp / Telefone", type: "tel" as const, required: true },
  { name: "email", label: "E-mail", type: "email" as const, required: true },
  {
    name: "regiao",
    label: "Em que região você está?",
    type: "select" as const,
    required: true,
    options: ["Curitiba", "Região Metropolitana de Curitiba", "Interior do Paraná", "Outro estado", "Fora do Brasil"],
  },
];

// ════════════════════════════════════════════════════════════
// HARMONIZAÇÃO FACIAL — termo-âncora (maior volume BR)
// ════════════════════════════════════════════════════════════
const harmonizacao: Procedure = {
  unit: "br",
  slug: "harmonizacao-facial",
  metaTitle: "Harmonização Facial em Curitiba | Resultado Natural — Instituto Areluna",
  metaDescription:
    "Harmonização facial com padrão europeu e resultado natural em Curitiba. Avaliação personalizada com a equipe do Instituto Areluna. Naturalidade e precisão.",

  eyebrow: "Harmonização Facial · Curitiba",
  h1Lead: "Realce a sua beleza,",
  h1Accent: "sem perder o que é seu",
  heroSub:
    "Harmonização facial com olhar artístico e padrão europeu, em Curitiba. Equilíbrio e proporção que valorizam os seus traços — para um resultado que parece descanso, não procedimento.",
  heroChips: [
    "Resultado natural",
    "Plano individualizado",
    "Padrão europeu",
    "Equipe especializada",
  ],

  formTitle: "Avaliação personalizada",
  formSubtitle:
    "Um plano pensado para o seu rosto, com indicação dos procedimentos certos para os seus objetivos.",
  formCta: "Quero minha avaliação",
  formFields,
  formFootnote:
    "Seus dados são tratados com total confidencialidade. Sem custo e sem compromisso.",
  offerName: "Avaliação facial completa + plano individualizado",
  urgency: "Agenda de avaliações limitada este mês",
  proof: PROOF,
  mechanism: INSTITUTO_MECHANISM,

  stats: [
    { value: "450+", label: "Avaliações 5★" },
    { value: "BR + PT", label: "Dupla titulação" },
    { value: "Curitiba", label: "Atendimento" },
    { value: "100%", label: "Plano individual" },
  ],

  diffEyebrow: "Por que Areluna",
  diffTitle: "Um instituto. Não mais um nome no feed.",
  diffIntro:
    "A harmonização que valoriza você é a que ninguém percebe — apenas notam que está diferente, melhor. Trazemos o padrão europeu de naturalidade para Curitiba, com avaliação séria e mãos especializadas.",
  benefits: [
    {
      title: "Naturalidade é o método",
      body: "Nada de rostos iguais. Planejamos cada procedimento para os seus traços, respeitando a sua identidade e a sua idade.",
    },
    {
      title: "Padrão europeu, pertinho de você",
      body: "Protocolos e olhar estético trazidos da atuação em Portugal. A mesma exigência, agora em Curitiba.",
    },
    {
      title: "Avaliação antes de qualquer agulha",
      body: "Estudamos a sua face, os seus objetivos e a sua história. O plano vem primeiro; o procedimento, depois.",
    },
    {
      title: "Equipe, não influencer",
      body: "Profissionais habilitados e dedicados ao seu resultado — com a segurança de um instituto, não o improviso de uma agenda lotada.",
    },
    {
      title: "Experiência do início ao fim",
      body: "Do acolhimento ao acompanhamento, cada detalhe é pensado para que você se sinta cuidada de verdade.",
    },
    {
      title: "450+ avaliações 5 estrelas",
      body: "A confiança de centenas de pacientes que escolheram naturalidade e segurança — e voltaram a recomendar.",
    },
  ],

  processEyebrow: "Como funciona",
  processTitle: "Do estudo do rosto ao resultado",
  steps: [
    {
      n: "01",
      title: "Avaliação facial",
      body: "Análise dos seus traços e objetivos. Indicamos apenas o que faz sentido para você — com transparência.",
    },
    {
      n: "02",
      title: "Plano individualizado",
      body: "Desenhamos a combinação de procedimentos ideal, sempre na medida certa para um resultado natural.",
    },
    {
      n: "03",
      title: "Procedimento & acompanhamento",
      body: "Realização com técnica e segurança, e acompanhamento próximo para garantir o melhor resultado.",
    },
  ],

  galleryTitle: "Resultados naturais",
  gallerySub: "Pacientes do Instituto Areluna que escolheram realçar — não transformar.",
  galleryCaptions: ["Contorno e proporção", "Olhar descansado", "Harmonia natural"],

  proTitle: "Quem cuida do seu rosto",
  proIntro:
    "Conduzida pela Dra. Arethuza Luna, com dupla titulação Brasil e Portugal, a nossa equipe une formação internacional e olhar artístico.",
  professionals: [PROS.arethuza, PROS.aline, PROS.leonardo, PROS.sara],

  testimonialsTitle: "O que dizem as nossas pacientes",
  testimonials: [
    {
      name: "Fernanda M.",
      meta: "Curitiba · Harmonização facial",
      quote: "Ficou exatamente o que eu queria: natural. As pessoas percebem que algo mudou, mas não sabem o quê.",
    },
    {
      name: "Patrícia L.",
      meta: "Batel · Harmonização facial",
      quote: "A avaliação foi outro nível. Senti que pensaram no meu rosto, não em vender procedimento.",
    },
    {
      name: "Carolina S.",
      meta: "Curitiba · Harmonização facial",
      quote: "Atendimento impecável do início ao fim. Voltei a me sentir bem comigo mesma.",
    },
  ],

  faq: [
    {
      q: "A harmonização vai deixar meu rosto artificial?",
      a: "Esse é exatamente o resultado que evitamos. O nosso padrão é a naturalidade: planejamos cada procedimento na medida certa para valorizar os seus traços, não para mudar quem você é.",
    },
    {
      q: "O que está incluído na harmonização facial?",
      a: "A harmonização combina diferentes procedimentos (preenchimentos, bioestimuladores, toxina, fios, entre outros) conforme a avaliação. Por isso o plano é sempre individualizado.",
    },
    {
      q: "Como é a primeira consulta?",
      a: "É uma avaliação completa do seu rosto e dos seus objetivos. Indicamos apenas o que faz sentido para você, com transparência e sem pressão.",
    },
    {
      q: "Vocês atendem fora de Curitiba?",
      a: "Atendemos pacientes de Curitiba, região metropolitana e de fora. Organizamos a sua agenda para otimizar deslocamentos.",
    },
    {
      q: "Por que escolher o Instituto Areluna?",
      a: "Somos um instituto com padrão europeu, dupla titulação Brasil e Portugal e mais de 450 avaliações 5 estrelas. Aqui você encontra naturalidade, segurança e uma experiência de cuidado completa.",
    },
  ],

  finalTitle: "A sua melhor versão já é você. Só precisa de equilíbrio.",
  finalSub: "Agende a sua avaliação personalizada e descubra o plano certo para o seu rosto.",
  finalCta: "Quero minha avaliação",
  ...baseContact,
};

// ════════════════════════════════════════════════════════════
// RINOMODELAÇÃO — joia de nicho
// ════════════════════════════════════════════════════════════
const rinomodelacao: Procedure = {
  unit: "br",
  slug: "rinomodelacao",
  metaTitle: "Rinomodelação em Curitiba | Nariz Harmonioso Sem Cirurgia — Areluna",
  metaDescription:
    "Rinomodelação em Curitiba: harmonize o seu nariz sem cirurgia, com resultado natural e seguro. Avaliação com a equipe do Instituto Areluna.",

  eyebrow: "Rinomodelação · Curitiba",
  h1Lead: "O seu nariz",
  h1Accent: "em equilíbrio, sem cirurgia",
  heroSub:
    "Rinomodelação para harmonizar o contorno do seu nariz sem bisturi, com resultado imediato e natural. Um procedimento de precisão, conduzido com mãos especializadas.",
  heroChips: [
    "Sem cirurgia, sem afastamento",
    "Resultado no mesmo dia",
    "Procedimento de precisão",
    "Proporcional ao seu rosto",
  ],

  formTitle: "Avaliação de rinomodelação",
  formSubtitle:
    "Descubra se a rinomodelação é indicada para o seu caso e veja o que é possível alcançar para o seu perfil.",
  formCta: "Quero minha avaliação",
  formFields,
  formFootnote:
    "Seus dados são tratados com total confidencialidade. Sem custo e sem compromisso.",
  offerName: "Avaliação do seu perfil + indicação personalizada",
  urgency: "Agenda de avaliações limitada este mês",
  proof: PROOF,
  mechanism: INSTITUTO_MECHANISM,
  compare: {
    title: "Rinomodelação ou rinoplastia?",
    intro:
      "Para muitos casos, a rinomodelação harmoniza o perfil sem o que mais afasta as pessoas da cirurgia: o corte, o tempo parado e o risco. Veja a comparação que provavelmente já fez na sua cabeça.",
    colA: "Rinomodelação",
    colB: "Rinoplastia cirúrgica",
    rows: [
      { label: "Cirurgia / cortes", a: "Não", b: "Sim" },
      { label: "Resultado visível", a: "No mesmo dia", b: "Meses (pós-operatório)" },
      { label: "Afastamento da rotina", a: "Imediato retorno", b: "Dias a semanas" },
      { label: "Internamento / anestesia geral", a: "Não", b: "Geralmente sim" },
      { label: "Reversibilidade", a: "Maior flexibilidade", b: "Definitiva" },
    ],
  },

  stats: [
    { value: "Sem", label: "Bisturi" },
    { value: "Imediato", label: "Resultado" },
    { value: "450+", label: "Avaliações 5★" },
    { value: "BR + PT", label: "Dupla titulação" },
  ],

  diffEyebrow: "Por que Areluna",
  diffTitle: "Precisão milimétrica para um detalhe que muda tudo.",
  diffIntro:
    "O nariz é o centro do rosto — qualquer ajuste exige técnica e bom senso estético. Fazemos rinomodelação com a seriedade que o procedimento merece, priorizando segurança e um resultado que respeita a sua face.",
  benefits: [
    {
      title: "Sem cirurgia, sem afastamento",
      body: "Harmonize o contorno do nariz sem internamento e sem longos períodos de recuperação. Volte à sua rotina rapidamente.",
    },
    {
      title: "Resultado na hora",
      body: "Você vê a mudança no mesmo dia, com ajustes pensados para um efeito natural e proporcional ao seu rosto.",
    },
    {
      title: "Segurança em primeiro lugar",
      body: "Procedimento de zona delicada conduzido por profissional habilitado, com protocolo e produtos de qualidade.",
    },
    {
      title: "Olhar artístico",
      body: "Avaliamos o seu perfil como um todo. Um nariz harmonioso é o que conversa com o resto da face.",
    },
    {
      title: "Padrão europeu",
      body: "A mesma exigência técnica e estética da nossa atuação em Portugal, agora pertinho de você em Curitiba.",
    },
    {
      title: "Naturalidade acima de tudo",
      body: "Nada de resultados exagerados. O objetivo é o equilíbrio — que as pessoas notem você, não o procedimento.",
    },
  ],

  processEyebrow: "Como funciona",
  processTitle: "Três passos para um perfil em harmonia",
  steps: [
    {
      n: "01",
      title: "Avaliação do perfil",
      body: "Analisamos o seu nariz no contexto do rosto e verificamos a indicação para a rinomodelação.",
    },
    {
      n: "02",
      title: "Procedimento preciso",
      body: "Realização com técnica e segurança, ajustando o contorno na medida exata para um resultado natural.",
    },
    {
      n: "03",
      title: "Resultado & acompanhamento",
      body: "Você vê a mudança na hora e conta com o nosso acompanhamento para garantir a sua satisfação.",
    },
  ],

  galleryTitle: "Antes & depois",
  gallerySub: "Perfis harmonizados sem cirurgia no Instituto Areluna.",
  galleryCaptions: ["Correção de dorso", "Projeção da ponta", "Perfil harmonioso"],

  proTitle: "Quem realiza o seu procedimento",
  proIntro:
    "Profissionais habilitados, com formação internacional e foco na segurança de uma das regiões mais delicadas do rosto.",
  professionals: [PROS.arethuza, PROS.aline, PROS.leonardo, PROS.sara],

  testimonialsTitle: "Histórias de quem harmonizou o perfil",
  testimonials: [
    {
      name: "Mariana T.",
      meta: "Curitiba · Rinomodelação",
      quote: "Sempre quis ajustar meu nariz sem cirurgia. O resultado ficou natural e na hora. Amei.",
    },
    {
      name: "Beatriz A.",
      meta: "Curitiba · Rinomodelação",
      quote: "Me senti muito segura. Explicaram tudo e o resultado respeitou o meu rosto, sem exagero.",
    },
    {
      name: "Letícia G.",
      meta: "Região de Curitiba · Rinomodelação",
      quote: "Mudou a minha relação com as fotos de perfil. Procedimento rápido e muito bem feito.",
    },
  ],

  faq: [
    {
      q: "A rinomodelação substitui a cirurgia (rinoplastia)?",
      a: "A rinomodelação harmoniza o contorno do nariz sem cirurgia, sendo indicada para determinados casos. Na avaliação verificamos se é a melhor opção para o que você deseja.",
    },
    {
      q: "Dói? Preciso de recuperação?",
      a: "É um procedimento bem tolerado, sem internamento e com retorno rápido à rotina. Damos todas as orientações de cuidados.",
    },
    {
      q: "O resultado é permanente?",
      a: "O resultado tem duração que varia conforme o caso e o produto utilizado. Explicamos tudo na avaliação, com transparência.",
    },
    {
      q: "É seguro?",
      a: "Quando realizada por profissional habilitado, com técnica e produtos adequados, é um procedimento seguro. A sua segurança é a nossa prioridade.",
    },
    {
      q: "Como agendo a minha avaliação?",
      a: "Basta preencher o formulário ou falar conosco no WhatsApp. Nossa equipe entra em contato para agendar.",
    },
  ],

  finalTitle: "Um detalhe em equilíbrio muda o rosto inteiro.",
  finalSub: "Agende a sua avaliação de rinomodelação e descubra o que é possível para o seu perfil.",
  finalCta: "Quero minha avaliação",
  ...baseContact,
};

// ════════════════════════════════════════════════════════════
// BIOESTIMULADOR DE COLÁGENO — a onda de 2026
// ════════════════════════════════════════════════════════════
const bioestimulador: Procedure = {
  unit: "br",
  slug: "bioestimulador-de-colageno",
  metaTitle: "Bioestimulador de Colágeno em Curitiba | Pele Firme e Natural — Areluna",
  metaDescription:
    "Bioestimulador de colágeno em Curitiba: firmeza e qualidade de pele de dentro para fora, com resultado natural e progressivo. Avaliação no Instituto Areluna.",

  eyebrow: "Bioestimulador de Colágeno · Curitiba",
  h1Lead: "Firmeza que vem",
  h1Accent: "de dentro para fora",
  heroSub:
    "O bioestimulador de colágeno devolve firmeza e qualidade à pele de forma progressiva e natural. O tratamento que age na causa — não apenas na superfície.",
  heroChips: [
    "Resultado progressivo",
    "Estímulo natural de colágeno",
    "Firmeza e qualidade de pele",
    "Padrão europeu",
  ],

  formTitle: "Avaliação de pele",
  formSubtitle:
    "Descubra como o bioestimulador pode atuar no seu caso e receba um plano personalizado para a sua pele.",
  formCta: "Quero minha avaliação",
  formFields,
  formFootnote:
    "Seus dados são tratados com total confidencialidade. Sem custo e sem compromisso.",
  offerName: "Avaliação da sua pele + protocolo personalizado",
  urgency: "O colágeno leva semanas a formar-se — quem começa no inverno chega ao verão com a pele já firme",
  proof: PROOF,
  mechanism: INSTITUTO_MECHANISM,

  stats: [
    { value: "Colágeno", label: "Estímulo natural" },
    { value: "Progressivo", label: "Resultado" },
    { value: "450+", label: "Avaliações 5★" },
    { value: "BR + PT", label: "Dupla titulação" },
  ],

  diffEyebrow: "Por que Areluna",
  diffTitle: "A beleza que não se impõe. Repousa.",
  diffIntro:
    "Enquanto o mercado corre atrás do exagero, o bioestimulador representa a beleza discreta: pele firme, viçosa, sua. Trabalhamos a qualidade da pele com a paciência e o critério que um resultado natural exige.",
  benefits: [
    {
      title: "Age na causa",
      body: "Estimula a produção do seu próprio colágeno, melhorando firmeza e qualidade da pele de forma estrutural.",
    },
    {
      title: "Resultado progressivo e natural",
      body: "A melhora aparece com o tempo, de forma gradual. Ninguém percebe um 'antes e depois' abrupto — apenas uma pele melhor.",
    },
    {
      title: "Indicação criteriosa",
      body: "Avaliamos a sua pele e os seus objetivos para indicar o protocolo certo. Sem excessos, sem promessas vazias.",
    },
    {
      title: "Padrão europeu",
      body: "Protocolos de qualidade e visão de longevidade da pele trazidos da nossa atuação em Portugal.",
    },
    {
      title: "Combina com o seu plano",
      body: "O bioestimulador integra-se à harmonização e à rotina de cuidados, potencializando resultados.",
    },
    {
      title: "Experiência de cuidado",
      body: "Do acolhimento ao acompanhamento, uma experiência pensada para que você se sinta cuidada de verdade.",
    },
  ],

  processEyebrow: "Como funciona",
  processTitle: "Da avaliação à pele renovada",
  steps: [
    {
      n: "01",
      title: "Avaliação da pele",
      body: "Analisamos a qualidade da sua pele, flacidez e objetivos para indicar o protocolo ideal.",
    },
    {
      n: "02",
      title: "Aplicação",
      body: "Realização do procedimento com técnica e conforto, iniciando o estímulo de colágeno.",
    },
    {
      n: "03",
      title: "Evolução & manutenção",
      body: "Acompanhamos a evolução do resultado e definimos a manutenção para preservar a firmeza conquistada.",
    },
  ],

  galleryTitle: "Resultados que repousam",
  gallerySub: "Qualidade de pele recuperada de forma natural no Instituto Areluna.",
  galleryCaptions: ["Mais firmeza", "Viço e qualidade", "Pele renovada"],

  proTitle: "Quem cuida da sua pele",
  proIntro:
    "Equipe com formação internacional e padrão europeu, dedicada à saúde e à longevidade da sua pele.",
  professionals: [PROS.arethuza, PROS.marcos, PROS.aline, PROS.leonardo],

  testimonialsTitle: "O que dizem as nossas pacientes",
  testimonials: [
    {
      name: "Adriana P.",
      meta: "Curitiba · Bioestimulador",
      quote: "Minha pele ficou mais firme sem parecer 'feita'. Exatamente o que eu procurava: natural.",
    },
    {
      name: "Cláudia R.",
      meta: "Curitiba · Bioestimulador",
      quote: "Gostei de não ter pressa. Avaliaram direitinho e o resultado foi aparecendo com naturalidade.",
    },
    {
      name: "Simone V.",
      meta: "Região de Curitiba · Bioestimulador",
      quote: "Atendimento de altíssimo nível. Senti que cuidaram da minha pele a longo prazo.",
    },
  ],

  faq: [
    {
      q: "O que é o bioestimulador de colágeno?",
      a: "É um tratamento que estimula a produção do seu próprio colágeno, melhorando a firmeza e a qualidade da pele de forma estrutural e progressiva.",
    },
    {
      q: "Quando vejo o resultado?",
      a: "O resultado é gradual e aparece ao longo das semanas seguintes, conforme a pele produz novo colágeno. É uma melhora natural, não um efeito imediato.",
    },
    {
      q: "Quantas sessões preciso?",
      a: "Depende da sua pele e dos seus objetivos. Definimos o protocolo ideal na avaliação, com transparência.",
    },
    {
      q: "Pode ser combinado com outros procedimentos?",
      a: "Sim. O bioestimulador integra-se muito bem à harmonização facial e à rotina de cuidados, potencializando o resultado.",
    },
    {
      q: "É indicado para mim?",
      a: "A melhor forma de saber é com uma avaliação. Analisamos a sua pele e indicamos apenas se fizer sentido para o seu caso.",
    },
  ],

  finalTitle: "A beleza mais sofisticada é a que ninguém percebe.",
  finalSub: "Agende a sua avaliação e descubra como o bioestimulador pode renovar a sua pele.",
  finalCta: "Quero minha avaliação",
  ...baseContact,
};

// ════════════════════════════════════════════════════════════
// TOXINA BOTULÍNICA / BOTOX — isca premium, anti-"barato"
// ════════════════════════════════════════════════════════════
const botox: Procedure = {
  unit: "br",
  slug: "toxina-botulinica",
  metaTitle: "Toxina Botulínica em Curitiba | Botox Natural e Seguro — Instituto Areluna",
  metaDescription:
    "Toxina botulínica (botox) em Curitiba com resultado natural e seguro. Suavize linhas de expressão sem perder a sua expressão. Avaliação no Instituto Areluna.",

  eyebrow: "Toxina Botulínica · Curitiba",
  h1Lead: "Suavize o tempo,",
  h1Accent: "mantenha a sua expressão",
  heroSub:
    "Toxina botulínica aplicada com critério para suavizar linhas de expressão sem congelar o rosto. Você continua sendo você — apenas mais descansada.",
  heroChips: [
    "Expressão preservada",
    "Aplicação criteriosa",
    "Resultado natural",
    "Padrão europeu",
  ],

  formTitle: "Avaliação personalizada",
  formSubtitle:
    "Uma indicação pensada para o seu rosto, com aplicação na medida certa para a sua musculatura.",
  formCta: "Quero minha avaliação",
  formFields,
  formFootnote:
    "Seus dados são tratados com total confidencialidade. Sem custo e sem compromisso.",
  offerName: "Avaliação facial + plano de aplicação individualizado",
  urgency: "Agenda de avaliações limitada este mês",
  proof: PROOF,
  mechanism: INSTITUTO_MECHANISM,

  stats: [
    { value: "Natural", label: "Resultado" },
    { value: "RELFYDESS", label: "Longa duração" },
    { value: "450+", label: "Avaliações 5★" },
    { value: "BR + PT", label: "Dupla titulação" },
  ],

  diffEyebrow: "Por que Areluna",
  diffTitle: "Botox bem feito não se vê. Sente-se.",
  diffIntro:
    "A diferença entre um rosto descansado e um rosto congelado está na mão de quem aplica. Trabalhamos a toxina com critério e dosagem individualizada — porque expressão também é beleza.",
  benefits: [
    {
      title: "Sua expressão, preservada",
      body: "Suavizamos linhas sem tirar a sua naturalidade. O objetivo é um rosto descansado, nunca paralisado.",
    },
    {
      title: "Dosagem individualizada",
      body: "Cada rosto é único. Avaliamos a sua musculatura e os seus objetivos para aplicar na medida exata.",
    },
    {
      title: "Profissional habilitado",
      body: "Aplicação por profissional qualificado, com a segurança e o critério de um instituto — não de uma promoção.",
    },
    {
      title: "Padrão europeu",
      body: "A mesma exigência técnica e estética da nossa atuação em Portugal, agora em Curitiba.",
    },
    {
      title: "Visão de conjunto",
      body: "Avaliamos a toxina dentro de um plano maior de harmonia facial, para resultados coerentes.",
    },
    {
      title: "Opção de longa duração (RELFYDESS)",
      body: "Para quem quer menos manutenção, oferecemos a toxina de longa duração — mesmo resultado natural, com efeito mais prolongado. Avaliamos se é indicada para você.",
    },
  ],

  processEyebrow: "Como funciona",
  processTitle: "Três passos para um rosto descansado",
  steps: [
    {
      n: "01",
      title: "Avaliação facial",
      body: "Analisamos as suas linhas de expressão e a sua musculatura, definindo os pontos e a dosagem ideais.",
    },
    {
      n: "02",
      title: "Aplicação precisa",
      body: "Realização do procedimento com técnica e conforto, na medida certa para preservar a sua expressão.",
    },
    {
      n: "03",
      title: "Resultado & retorno",
      body: "O efeito aparece nos dias seguintes. Fazemos o retorno para garantir que ficou exatamente como combinado.",
    },
  ],

  galleryTitle: "Resultados naturais",
  gallerySub: "Rostos descansados — nunca congelados — no Instituto Areluna.",
  galleryCaptions: ["Linhas da testa", "Região dos olhos", "Olhar descansado"],

  proTitle: "Quem realiza a sua aplicação",
  proIntro:
    "Profissionais habilitados, com formação internacional e o critério que diferencia um resultado natural.",
  professionals: [PROS.arethuza, PROS.aline, PROS.leonardo, PROS.sara],

  testimonialsTitle: "O que dizem as nossas pacientes",
  testimonials: [
    {
      name: "Renata C.",
      meta: "Curitiba · Toxina botulínica",
      quote: "Ficou super natural. Continuo com a minha expressão, só que mais descansada. Adorei.",
    },
    {
      name: "Juliana F.",
      meta: "Batel · Toxina botulínica",
      quote: "Já tinha feito em outro lugar e ficado 'travada'. Aqui foi outro nível de cuidado.",
    },
    {
      name: "Marina D.",
      meta: "Curitiba · Toxina botulínica",
      quote: "Aplicação caprichada, sem pressa, com avaliação de verdade. Voltarei sempre.",
    },
  ],

  faq: [
    {
      q: "Vou ficar com o rosto 'congelado'?",
      a: "Não. O nosso método preserva a sua expressão: suavizamos as linhas com dosagem individualizada, para um rosto descansado e natural.",
    },
    {
      q: "Quanto tempo dura o efeito?",
      a: "Em geral, alguns meses, variando conforme o caso. Na avaliação explicamos a duração esperada e a manutenção.",
    },
    {
      q: "Quando aparece o resultado?",
      a: "O efeito costuma aparecer nos primeiros dias após a aplicação, estabilizando ao longo de cerca de duas semanas. Fazemos o retorno para conferir.",
    },
    {
      q: "É seguro?",
      a: "Quando aplicada por profissional habilitado, com produto e técnica adequados, é um procedimento seguro. A sua segurança é a nossa prioridade.",
    },
    {
      q: "O que é a toxina de longa duração (RELFYDESS)?",
      a: "É uma toxina botulínica de efeito mais prolongado, indicada para quem deseja menos manutenção sem abrir mão do resultado natural. Na avaliação verificamos se é a melhor opção para o seu caso.",
    },
    {
      q: "Como agendo?",
      a: "Preencha o formulário e nossa equipe entra em contato para agendar a sua avaliação.",
    },
  ],

  finalTitle: "Descanse a expressão. Sem abrir mão de ser você.",
  finalSub: "Agende a sua avaliação e veja como a toxina, bem aplicada, pode renovar o seu olhar.",
  finalCta: "Quero minha avaliação",
  ...baseContact,
};

export const BR_PROCEDURES: Record<string, Procedure> = {
  "harmonizacao-facial": harmonizacao,
  rinomodelacao: rinomodelacao,
  "bioestimulador-de-colageno": bioestimulador,
  "toxina-botulinica": botox,
};
