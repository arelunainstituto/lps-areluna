import type { Procedure } from "./types";
import { PT_CONTACT, PROS, PROOF } from "./shared";

// Mecanismo único da unidade PT: laboratório protético próprio dentro da clínica.
const LAB_MECHANISM = {
  eyebrow: "O nosso diferencial",
  title: "O seu sorriso nasce aqui dentro. Não num laboratório qualquer.",
  body: "Temos o nosso próprio laboratório protético dentro da clínica. Cada dente é desenhado e fabricado sob o mesmo teto, pela nossa equipa — não dependemos de terceiros, nem de prazos de fora, nem de viagens ao estrangeiro. É isto que nos dá controlo total sobre o resultado, a precisão e o tempo.",
  enemyLine:
    "É a diferença entre confiar o seu sorriso a quem o fabrica ao seu lado — ou a uma clínica low-cost na Turquia, a 4.000 km, sem retorno fácil se algo correr mal.",
  points: [
    { title: "Laboratório próprio", body: "Prótese desenhada e produzida na clínica, com a nossa equipa a acompanhar cada prova." },
    { title: "Prazos que controlamos", body: "Sem espera por terceiros: ajustamos e entregamos no nosso ritmo, com agilidade." },
    { title: "Precisão e ajuste", body: "O protésico vê o seu caso de perto. Cada detalhe corrigido até ficar perfeito." },
    { title: "Acompanhamento perto de casa", body: "Qualquer ajuste futuro resolve-se aqui, no Porto — não num país a horas de avião." },
  ],
};

const baseContact = {
  phoneDisplay: PT_CONTACT.phoneDisplay,
  phoneHref: PT_CONTACT.phoneHref,
  whatsappHref: PT_CONTACT.whatsappHref,
  address: PT_CONTACT.address,
  regulatory: PT_CONTACT.regulatory,
};

const formFields = [
  { name: "nome", label: "Nome completo", type: "text" as const, required: true },
  { name: "telemovel", label: "Telemóvel", type: "tel" as const, required: true },
  { name: "email", label: "E-mail", type: "email" as const, required: true },
];

// ════════════════════════════════════════════════════════════
// IMPLANTES / ALL-ON-FOUR — página principal (maior volume + CPC)
// ════════════════════════════════════════════════════════════
const implantes: Procedure = {
  unit: "pt",
  slug: "implantes-dentarios",
  metaTitle: "Implantes Dentários no Porto | All-on-4 em 24h — Instituto Areluna",
  metaDescription:
    "Sorriso fixo em 24 horas com apenas 4 implantes, sem enxertos e com garantia superior a 20 anos. Avaliação especializada no Porto. Padrão europeu de excelência.",

  eyebrow: "Implantes Dentários · All-on-4",
  h1Lead: "Volte a sorrir",
  h1Accent: "em 24 horas",
  heroSub:
    "Reabilitação oral completa com apenas 4 implantes — sem enxertos, com estética natural e um sorriso fixo no próprio dia. Para quem decidiu deixar a prótese móvel no passado.",
  heroChips: [
    "Sorriso fixo em 24h",
    "Apenas 4 implantes",
    "Sem enxertos ósseos",
    "Garantia superior a 20 anos",
  ],

  formTitle: "Avaliação especializada",
  formSubtitle:
    "Plano de tratamento personalizado com a equipa clínica — e todas as suas dúvidas esclarecidas.",
  formCta: "Quero a minha avaliação",
  formFields,
  formFootnote:
    "Os seus dados são tratados com total confidencialidade.",
  offerName: "TAC 3D + simulação do seu novo sorriso",
  urgency: "Agenda de cirurgias limitada — vagas este mês",
  proof: PROOF,
  mechanism: LAB_MECHANISM,

  stats: [
    { value: "24h", label: "Sorriso fixo" },
    { value: "20+", label: "Anos de garantia" },
    { value: "500+", label: "Avaliações 5★" },
    { value: "8", label: "Especialistas" },
  ],

  diffEyebrow: "Por que Areluna",
  diffTitle: "Não é apenas um implante. É a sua vida de volta.",
  diffIntro:
    "Reunimos cirurgia guiada por computador, uma equipa multidisciplinar e um acompanhamento que dura anos — para que o resultado seja tão natural que ninguém perceba. Só você saberá.",
  benefits: [
    {
      title: "Carga imediata real",
      body: "Cirurgia de manhã, sorriso fixo à tarde. Sai da clínica com dentes que mordem, falam e sorriem no mesmo dia.",
    },
    {
      title: "Cirurgia guiada 3D",
      body: "Planeamento digital milimétrico antes de tocar no paciente. Mais previsibilidade, menos tempo de cadeira, recuperação mais suave.",
    },
    {
      title: "Sem enxertos na maioria dos casos",
      body: "A técnica All-on-4 aproveita o osso disponível em ângulos estratégicos — evitando cirurgias adicionais e meses de espera.",
    },
    {
      title: "Equipa multidisciplinar",
      body: "Cirurgiões, reabilitadores e protésicos a trabalhar em conjunto sob o mesmo teto. Um plano, uma responsabilidade.",
    },
    {
      title: "Estética que ninguém nota",
      body: "Próteses desenhadas para o seu rosto, com proporção e tonalidade naturais. O luxo está na naturalidade.",
    },
    {
      title: "Acompanhamento para a vida",
      body: "Não desaparecemos depois da cirurgia. Plano de manutenção e revisões para que o seu sorriso dure — com a mesma equipa, sempre.",
    },
  ],

  processEyebrow: "O percurso",
  processTitle: "Do primeiro contacto ao novo sorriso",
  steps: [
    {
      n: "01",
      title: "Avaliação digital",
      body: "Exame, TAC 3D e planeamento do caso. Mostramos-lhe exatamente o que é possível, com simulação do resultado final.",
    },
    {
      n: "02",
      title: "Cirurgia guiada",
      body: "Colocação dos implantes com guia cirúrgico, em ambiente seguro e confortável, com a precisão do planeamento digital.",
    },
    {
      n: "03",
      title: "Sorriso imediato",
      body: "Prótese fixa provisória no mesmo dia. Acompanhamento próximo até à prótese definitiva e durante todos os anos seguintes.",
    },
  ],

  galleryTitle: "Transformações reais",
  gallerySub:
    "Pacientes que recuperaram a confiança de sorrir, mastigar e viver sem constrangimentos.",
  galleryCaptions: ["Reabilitação total", "All-on-4 superior e inferior", "Sorriso renovado"],
  galleryImages: ["/img/cases/impl-1.jpg", "/img/cases/impl-3.jpg", "/img/cases/impl-2.jpg"],

  proTitle: "Quem cuida do seu sorriso",
  proIntro:
    "Uma equipa de especialistas com dupla titulação e formação internacional, dedicada a um único objetivo: o seu resultado.",
  professionals: [PROS.carla, PROS.sara, PROS.arethuza],

  testimonialsTitle: "Quem confiou, voltou a sorrir",
  testimonials: [
    {
      name: "Sérgio Emanuel",
      meta: "All-on-4 · Porto",
      quote:
        "Desde o dia da cirurgia, nunca mais parei de sorrir, seja para aquilo que for. Foi a melhor decisão que tomei.",
    },
    {
      name: "Maria S.",
      meta: "52 anos · Reabilitação total",
      quote:
        "Nem acreditei quando vi o meu novo sorriso no espelho. Num só dia, a minha vida mudou por completo.",
    },
    {
      name: "João S.",
      meta: "65 anos · Braga",
      quote:
        "A segurança de morder, falar e sorrir… tudo voltou em 24 horas. Recomendo sem pensar duas vezes.",
    },
  ],

  faq: [
    {
      q: "É verdade que fico com dentes fixos no próprio dia?",
      a: "Sim. Na maioria dos casos colocamos uma prótese fixa provisória no mesmo dia da cirurgia. A prótese definitiva é entregue após o período de cicatrização, com o acompanhamento da nossa equipa.",
    },
    {
      q: "Vou precisar de enxerto ósseo?",
      a: "A técnica All-on-4 foi concebida precisamente para evitar enxertos na grande maioria dos casos, aproveitando o osso disponível. Confirmamos tudo na avaliação com TAC 3D.",
    },
    {
      q: "A cirurgia é dolorosa? E a recuperação?",
      a: "O procedimento é realizado em ambiente seguro e confortável. A recuperação costuma ser mais simples do que se imagina, e damos-lhe todas as orientações para um pós-operatório tranquilo.",
    },
    {
      q: "Qual é a durabilidade e a Garantia Areluna?",
      a: "Os implantes têm uma garantia superior a 20 anos, mediante acompanhamento regular com a equipa Areluna. As revisões periódicas são planeadas desde o primeiro dia — é esse acompanhamento que garante a longevidade do resultado.",
    },
    {
      q: "Porquê fazer no Porto e não na Turquia?",
      a: "Na Turquia, o seu sorriso é fabricado num laboratório que nunca verá, a 4.000 km, e qualquer ajuste obriga a outra viagem. Aqui, a prótese é desenhada e produzida no nosso laboratório próprio, a cirurgia é guiada por equipa especializada com padrão europeu, e o acompanhamento — hoje e daqui a anos — resolve-se no Porto. A diferença não está só no preço: está na segurança e em quem responde por si depois.",
    },
  ],

  finalTitle: "O seu novo sorriso começa com uma conversa.",
  finalSub:
    "Marque a sua avaliação especializada e descubra, com a nossa equipa, o plano certo para si.",
  finalCta: "Marcar a minha avaliação",
  ...baseContact,
};

// ════════════════════════════════════════════════════════════
// FACETAS DENTÁRIAS
// ════════════════════════════════════════════════════════════
const facetas: Procedure = {
  unit: "pt",
  slug: "facetas-dentarias",
  metaTitle: "Facetas Dentárias no Porto | Sorriso Natural — Instituto Areluna",
  metaDescription:
    "Facetas dentárias ultrafinas com planeamento digital e resultado 100% natural. Corrija cor, forma e alinhamento em poucos dias. Avaliação no Porto.",

  eyebrow: "Facetas Dentárias",
  h1Lead: "Veja o seu novo sorriso",
  h1Accent: "antes de o ter",
  heroSub:
    "Com o Desenho Digital do Sorriso, mostramos-lhe o resultado em simulação antes de começar. Facetas ultrafinas, desenhadas para o seu rosto — decide com base no que vê, não no que imagina.",
  heroChips: [
    "Vê o resultado antes de decidir",
    "Facetas ultrafinas (mínimo desgaste)",
    "Cor e forma à medida",
    "Durabilidade até 20 anos",
  ],

  formTitle: "Simulação do seu sorriso",
  formSubtitle:
    "Veja, antes de decidir, como ficaria o seu novo sorriso, com planeamento digital da nossa equipa.",
  formCta: "Quero simular o meu sorriso",
  formFields,
  formFootnote:
    "Os seus dados são tratados com total confidencialidade.",
  offerName: "Desenho Digital do Sorriso (DSD) — a simulação do seu resultado",
  urgency: "Agenda de simulações limitada este mês",
  proof: PROOF,
  mechanism: LAB_MECHANISM,

  stats: [
    { value: "420K", label: "Sorrisos criados" },
    { value: "3D", label: "Simulação prévia" },
    { value: "500+", label: "Avaliações 5★" },
    { value: "20", label: "Anos de durabilidade" },
  ],

  diffEyebrow: "Por que Areluna",
  diffTitle: "A diferença entre dentes brancos e um sorriso bonito.",
  diffIntro:
    "Um sorriso natural não se copia de um catálogo. Desenhamos cada faceta para a sua face, a sua idade e a sua personalidade — para que pareça seu desde o primeiro dia.",
  benefits: [
    {
      title: "Desenho do sorriso (DSD)",
      body: "Planeamento digital que mostra o resultado antes de começar. Decide com base no que vê, não no que imagina.",
    },
    {
      title: "Facetas ultrafinas",
      body: "Lâminas de contacto altamente resistentes, com desgaste mínimo do dente. Conservadoras e duradouras.",
    },
    {
      title: "Cor e forma à medida",
      body: "Corrigimos manchas, espaços e desalinhamentos com proporção harmoniosa — o equilíbrio que faz um sorriso parecer natural.",
    },
    {
      title: "Resultado em poucos dias",
      body: "Um protocolo eficiente, com o mínimo de visitas — para que veja o seu novo sorriso o quanto antes.",
    },
    {
      title: "Naturalidade acima de tudo",
      body: "Nada de sorrisos iguais entre pacientes. O nosso padrão é a discrição elegante, não o exagero.",
    },
    {
      title: "Equipa especializada em estética",
      body: "Profissionais dedicados à estética do sorriso, com formação internacional e olhar artístico.",
    },
  ],

  processEyebrow: "O percurso",
  processTitle: "Do desenho ao sorriso perfeito",
  steps: [
    {
      n: "01",
      title: "Avaliação & DSD",
      body: "Analisamos o seu sorriso e criamos a simulação digital. Ajustamos consigo cada detalhe até ficar perfeito.",
    },
    {
      n: "02",
      title: "Preparação minuciosa",
      body: "Preparação conservadora dos dentes e confeção das facetas à medida, com o máximo rigor estético.",
    },
    {
      n: "03",
      title: "O seu novo sorriso",
      body: "Aplicação das facetas e ajustes finais. Sai com o sorriso que desenhámos juntos — natural e duradouro.",
    },
  ],

  galleryTitle: "Antes & depois",
  gallerySub: "Sorrisos reais transformados com facetas no Instituto Areluna.",
  galleryCaptions: ["Correção de cor e forma", "Sorriso desenhado", "Resultado natural"],
  galleryImages: ["/img/cases/facetas-1.jpg", "/img/cases/facetas-2.jpg", "/img/cases/facetas-3.jpg"],

  proTitle: "Quem desenha o seu sorriso",
  proIntro:
    "Especialistas em estética dentária com olhar artístico e rigor clínico, dedicados a um resultado que parece — e é — seu.",
  professionals: [PROS.pethine, PROS.arethuza, PROS.sara, PROS.daiane],

  testimonialsTitle: "O que dizem os nossos pacientes",
  testimonials: [
    {
      name: "Juliana C.",
      meta: "29 anos · Facetas",
      quote: "As facetas transformaram completamente o meu sorriso. O resultado é incrivelmente natural.",
    },
    {
      name: "Roberto S.",
      meta: "41 anos · Facetas",
      quote: "Procedimento tranquilo, resultado surpreendente. A minha confiança é outra.",
    },
    {
      name: "Camila R.",
      meta: "33 anos · Facetas",
      quote: "Adorei poder ver o planeamento digital antes. O resultado superou as expetativas.",
    },
  ],

  faq: [
    {
      q: "As facetas ficam com ar artificial?",
      a: "Não, quando bem planeadas. Desenhamos cada faceta para o seu rosto e personalidade, com cor e proporção naturais. O nosso padrão é a discrição.",
    },
    {
      q: "É preciso desgastar muito os dentes?",
      a: "As nossas facetas são ultrafinas e conservadoras, com desgaste mínimo. Confirmamos sempre a abordagem mais preservadora para o seu caso na avaliação.",
    },
    {
      q: "Posso ver o resultado antes de avançar?",
      a: "Sim. Com o Desenho Digital do Sorriso (DSD) mostramos uma simulação do resultado para que decida com confiança.",
    },
    {
      q: "Quanto tempo demora o tratamento?",
      a: "Na maioria dos casos, poucos dias e poucas visitas. Definimos o cronograma certo para si logo na avaliação.",
    },
    {
      q: "Quanto duram as facetas?",
      a: "Com os cuidados adequados, as facetas podem durar até cerca de 20 anos. Damos-lhe todas as orientações de manutenção.",
    },
  ],

  finalTitle: "Imagine sorrir sem pensar duas vezes.",
  finalSub: "Marque a sua avaliação e veja, em simulação, o sorriso que pode ser seu.",
  finalCta: "Quero a minha avaliação",
  ...baseContact,
};

// ════════════════════════════════════════════════════════════
// ALINHADORES INVISÍVEIS
// ════════════════════════════════════════════════════════════
const alinhadores: Procedure = {
  unit: "pt",
  slug: "alinhadores-invisiveis",
  metaTitle: "Alinhadores Invisíveis no Porto | Ortodontia Discreta — Areluna",
  metaDescription:
    "Alinhe os seus dentes de forma discreta e confortável, com alinhadores transparentes e planeamento digital. Avaliação ortodôntica no Porto.",

  eyebrow: "Alinhadores Invisíveis",
  h1Lead: "Endireite o sorriso",
  h1Accent: "sem que ninguém repare",
  heroSub:
    "Alinhadores transparentes, removíveis e confortáveis, com planeamento digital do início ao fim. A ortodontia que se adapta à sua vida — e não o contrário.",
  heroChips: [
    "Praticamente invisíveis",
    "Removíveis e confortáveis",
    "Planeamento digital",
    "Resultado previsível",
  ],

  formTitle: "Avaliação ortodôntica",
  formSubtitle:
    "Descubra se é candidato e veja o plano digital do seu tratamento — do sorriso de hoje ao resultado final.",
  formCta: "Quero a minha avaliação",
  formFields,
  formFootnote:
    "Os seus dados são tratados com total confidencialidade.",
  offerName: "Scan digital + simulação do movimento dos seus dentes",
  urgency: "Vagas de avaliação limitadas este mês",
  proof: PROOF,
  mechanism: {
    eyebrow: "O nosso diferencial",
    title: "Não é um kit que chega pelo correio. É ortodontia, com médico.",
    body: "Os alinhadores enviados por correio deixam-no sozinho com a sua boca. Aqui, cada fase é planeada, monitorizada e ajustada por especialistas em ortodontia — porque mover dentes é um ato clínico, não um produto de e-commerce. A diferença aparece no resultado e na segurança.",
    enemyLine:
      "Um sorriso é para a vida. Não é coisa para confiar a uma caixa que chega na sua porta sem ninguém o acompanhar.",
    points: [
      { title: "Especialista do início ao fim", body: "Ortodontia conduzida pela equipa — não um molde feito em casa." },
      { title: "Plano monitorizado", body: "Acompanhamos cada alinhador e corrigimos o rumo se for preciso." },
      { title: "Diagnóstico a sério", body: "Avaliamos osso, raízes e mordida antes de mover um único dente." },
      { title: "Segurança clínica", body: "Movimento planeado para proteger a saúde dos seus dentes a longo prazo." },
    ],
  },

  stats: [
    { value: "100%", label: "Discreto" },
    { value: "3D", label: "Plano digital" },
    { value: "500+", label: "Avaliações 5★" },
    { value: "8", label: "Especialistas" },
  ],

  diffEyebrow: "Por que Areluna",
  diffTitle: "Tecnologia ao serviço de um sorriso alinhado.",
  diffIntro:
    "Conduzido por uma fundadora ortodontista, o nosso protocolo une planeamento digital e acompanhamento próximo — para que cada alinhador o aproxime, com previsibilidade, do resultado desejado.",
  benefits: [
    {
      title: "Praticamente invisível",
      body: "Alinhadores transparentes que passam despercebidos no dia a dia, no trabalho e nas fotografias.",
    },
    {
      title: "Conforto e liberdade",
      body: "Removíveis para comer e escovar os dentes. Sem fios, sem brackets, sem restrições alimentares.",
    },
    {
      title: "Plano digital do início ao fim",
      body: "Vê o percurso do seu sorriso em simulação antes de começar. Cada fase é planeada e monitorizada.",
    },
    {
      title: "Acompanhamento de especialista",
      body: "Ortodontia conduzida por especialistas — não um kit enviado por correio. A diferença está no acompanhamento.",
    },
    {
      title: "Menos visitas, mais resultado",
      body: "Protocolo eficiente, com consultas otimizadas e acompanhamento que respeita a sua rotina.",
    },
    {
      title: "Estética e função",
      body: "Um sorriso alinhado é mais bonito e mais saudável. Cuidamos das duas coisas ao mesmo tempo.",
    },
  ],

  processEyebrow: "O percurso",
  processTitle: "Três passos para um sorriso alinhado",
  steps: [
    {
      n: "01",
      title: "Avaliação & scan digital",
      body: "Scan intraoral e planeamento do movimento dentário. Mostramos a simulação do resultado final.",
    },
    {
      n: "02",
      title: "Os seus alinhadores",
      body: "Recebe a sequência de alinhadores personalizados e usa-os no seu dia a dia, trocando conforme o plano.",
    },
    {
      n: "03",
      title: "Sorriso final",
      body: "Acompanhamento até ao alinhamento desejado e plano de contenção para manter o resultado.",
    },
  ],

  galleryTitle: "Resultados reais",
  gallerySub: "Sorrisos alinhados de forma discreta no Instituto Areluna.",
  galleryCaptions: ["Apinhamento corrigido", "Mordida alinhada", "Sorriso alinhado"],
  galleryImages: ["/img/cases/alinh-1.jpg", "/img/cases/alinh-2.jpg", "/img/cases/alinh-3.jpg"],

  proTitle: "Quem conduz o seu tratamento",
  proIntro:
    "Ortodontia liderada por especialistas com formação internacional e foco na previsibilidade do resultado.",
  professionals: [PROS.arethuza, PROS.catharina, PROS.pethine, PROS.sara, PROS.daiane],

  testimonialsTitle: "Histórias de quem alinhou o sorriso",
  testimonials: [
    {
      name: "Inês M.",
      meta: "27 anos · Alinhadores",
      quote: "Ninguém notou que estava em tratamento. E o meu sorriso mudou completamente.",
    },
    {
      name: "Pedro L.",
      meta: "35 anos · Alinhadores",
      quote: "A comodidade de poder tirar para comer fez toda a diferença. Recomendo muito.",
    },
    {
      name: "Sofia R.",
      meta: "31 anos · Alinhadores",
      quote: "Ver o plano digital antes deu-me toda a confiança para avançar. Adorei o resultado.",
    },
  ],

  faq: [
    {
      q: "Os alinhadores são mesmo invisíveis?",
      a: "São transparentes e praticamente impercetíveis no dia a dia. A maioria das pessoas à sua volta não vai notar que está em tratamento.",
    },
    {
      q: "Posso comer e beber com eles?",
      a: "Os alinhadores são removíveis. Retira-os para comer e para escovar os dentes, voltando a colocá-los de seguida.",
    },
    {
      q: "Doem?",
      a: "É normal sentir uma ligeira pressão nos primeiros dias de cada novo alinhador — sinal de que o tratamento está a funcionar. É geralmente muito tolerável.",
    },
    {
      q: "Quanto tempo dura o tratamento?",
      a: "Depende da complexidade do seu caso. Na avaliação mostramos-lhe a estimativa com base no plano digital personalizado.",
    },
    {
      q: "Com que frequência tenho de ir à clínica?",
      a: "As consultas são otimizadas e espaçadas, com acompanhamento próximo em cada fase. Definimos o calendário na avaliação, de forma a encaixar na sua rotina.",
    },
  ],

  finalTitle: "O sorriso que sempre quis, sem ninguém perceber.",
  finalSub: "Marque a sua avaliação ortodôntica e descubra o plano certo para si.",
  finalCta: "Marcar a minha avaliação",
  ...baseContact,
};

// ════════════════════════════════════════════════════════════
// IMPLANTE / TRANSPLANTE CAPILAR
// ════════════════════════════════════════════════════════════
const capilar: Procedure = {
  unit: "pt",
  slug: "transplante-capilar",
  metaTitle: "Transplante Capilar no Porto | Resultado Natural — Instituto Areluna",
  metaDescription:
    "Transplante capilar com técnica avançada e resultado natural, no Porto. Densidade, linha frontal e naturalidade planeadas ao detalhe. Avaliação especializada.",

  eyebrow: "Transplante Capilar",
  h1Lead: "Recupere o seu cabelo,",
  h1Accent: "com naturalidade",
  heroSub:
    "Transplante capilar com técnica avançada e desenho personalizado da linha frontal. Densidade e naturalidade planeadas ao detalhe — sem o ar artificial dos resultados padronizados.",
  heroChips: [
    "Resultado natural",
    "Desenho personalizado",
    "Técnica avançada",
    "Acompanhamento próximo",
  ],

  formTitle: "Avaliação capilar",
  formSubtitle:
    "Receba um plano à medida com estimativa de densidade e desenho da linha capilar — sem compromisso.",
  formCta: "Quero a minha avaliação",
  formFields,
  formFootnote:
    "Os seus dados são tratados com total confidencialidade.",
  offerName: "Análise capilar + desenho da sua nova linha frontal",
  urgency: "Agenda de procedimentos limitada este mês",
  proof: PROOF,
  mechanism: {
    eyebrow: "O nosso diferencial",
    title: "Aqui, o transplante é um ato médico. Não uma linha de montagem.",
    body: "Na Turquia, centenas de transplantes por dia, muitas vezes com a extração feita por técnicos. Aqui, o seu caso é conduzido pelo Dr. Marcos Kawasaki — 17+ anos em dermatologia e transplante capilar — e a sua linha frontal é desenhada à mão, folículo a folículo, para o seu rosto. É essa a diferença entre cabelo que parece natural e cabelo que denuncia que foi feito.",
    enemyLine:
      "Pensa na Turquia pelo preço? Pense também em quem segura o bisturi — e em quem o acompanha quando voltar para casa.",
    points: [
      { title: "Médico nomeado", body: "Dr. Marcos Kawasaki conduz o seu caso, do desenho ao acompanhamento." },
      { title: "Linha desenhada à mão", body: "Ângulo, direção e densidade pensados para o seu rosto e idade." },
      { title: "Sem fábrica de cirurgias", body: "Foco num resultado, não em volume diário. Tempo e cuidado no seu caso." },
      { title: "Acompanhamento cá", body: "A sua evolução é seguida no Porto, sem depender de uma clínica longe." },
    ],
  },

  stats: [
    { value: "17+", label: "Anos de experiência" },
    { value: "1 dia", label: "Procedimento" },
    { value: "500+", label: "Avaliações 5★" },
    { value: "100%", label: "Plano à medida" },
  ],

  diffEyebrow: "Por que Areluna",
  diffTitle: "A diferença está na naturalidade — e em quem a executa.",
  diffIntro:
    "Um bom transplante não se vê: vê-se cabelo. Com a experiência do Dr. Marcos Kawasaki, desenhamos a sua linha capilar respeitando ângulo, direção e densidade — para um resultado que parece sempre ter sido seu.",
  benefits: [
    {
      title: "Desenho da linha frontal",
      body: "A linha capilar é desenhada à mão, para o seu rosto e idade. O detalhe que separa um resultado natural de um artificial.",
    },
    {
      title: "Técnica avançada",
      body: "Extração e implantação cuidadas, com foco na sobrevivência dos folículos e na densidade do resultado final.",
    },
    {
      title: "Experiência que conta",
      body: "17+ anos dedicados à saúde capilar e da pele. Aqui, o transplante é ato médico — não linha de montagem.",
    },
    {
      title: "Naturalidade acima de tudo",
      body: "Ângulo, direção e distribuição planeados folículo a folículo, para um aspeto coerente e definitivo.",
    },
    {
      title: "Segurança e conforto",
      body: "Ambiente clínico, equipa médica e protocolo cuidado. A sua segurança vem sempre em primeiro lugar.",
    },
    {
      title: "Acompanhamento de perto",
      body: "Da avaliação ao resultado final, acompanhamos cada fase da sua evolução — sem o abandono típico das clínicas de volume.",
    },
  ],

  processEyebrow: "O percurso",
  processTitle: "Do plano ao novo cabelo",
  steps: [
    {
      n: "01",
      title: "Avaliação & desenho",
      body: "Análise capilar, definição da densidade necessária e desenho da linha frontal à medida do seu rosto.",
    },
    {
      n: "02",
      title: "Procedimento num dia",
      body: "Realização do transplante em ambiente clínico, com conforto e segurança, geralmente num único dia.",
    },
    {
      n: "03",
      title: "Acompanhamento",
      body: "Orientações de pós-procedimento e acompanhamento da evolução até ao resultado natural e duradouro.",
    },
  ],

  galleryTitle: "Resultados naturais",
  gallerySub: "Densidade e naturalidade recuperadas no Instituto Areluna.",
  galleryCaptions: ["Recuperação da linha frontal", "Aumento de densidade", "Resultado natural"],

  proTitle: "Quem cuida do seu cabelo",
  proIntro:
    "Liderança médica com 17+ anos de experiência em dermatologia e transplante capilar, e uma equipa focada na sua segurança.",
  professionals: [PROS.marcos, PROS.arethuza, PROS.carla, PROS.aline],

  testimonialsTitle: "Histórias de quem recuperou a confiança",
  testimonials: [
    {
      name: "Ricardo F.",
      meta: "38 anos · Transplante capilar",
      quote: "Ninguém acredita que fiz transplante. Ficou tão natural que parece que sempre tive.",
    },
    {
      name: "Nuno A.",
      meta: "44 anos · Transplante capilar",
      quote: "Pensei em ir à Turquia, mas escolhi fazer cá e não me arrependo. Atendimento impecável.",
    },
    {
      name: "Tiago M.",
      meta: "33 anos · Transplante capilar",
      quote: "O desenho da linha frontal fez toda a diferença. Recuperei mais do que cabelo.",
    },
  ],

  faq: [
    {
      q: "O resultado fica natural?",
      a: "Esse é o nosso compromisso. A linha capilar é desenhada à mão e cada folículo é implantado respeitando ângulo e direção naturais, para um resultado coerente com o seu rosto.",
    },
    {
      q: "É muito demorado ou doloroso?",
      a: "O procedimento é geralmente realizado num único dia, em ambiente clínico e com conforto. Damos-lhe todas as orientações para uma recuperação tranquila.",
    },
    {
      q: "Quando vejo o resultado final?",
      a: "O cabelo cresce de forma gradual ao longo dos meses seguintes. Acompanhamos a sua evolução até ao resultado definitivo.",
    },
    {
      q: "Porquê fazer no Porto e não na Turquia?",
      a: "Aqui o transplante é conduzido por equipa médica especializada, com padrão europeu, acompanhamento próximo e a segurança de uma clínica licenciada — sem abdicar da naturalidade do resultado.",
    },
    {
      q: "Como é o acompanhamento depois do procedimento?",
      a: "Acompanhamos de perto toda a sua evolução, com orientações claras de pós-procedimento e revisões — para garantir o melhor resultado a longo prazo.",
    },
  ],

  finalTitle: "Recupere mais do que cabelo. Recupere a confiança.",
  finalSub: "Marque a sua avaliação capilar e receba um plano à medida do seu caso.",
  finalCta: "Marcar a minha avaliação",
  ...baseContact,
};

export const PT_PROCEDURES: Record<string, Procedure> = {
  "implantes-dentarios": implantes,
  "facetas-dentarias": facetas,
  "alinhadores-invisiveis": alinhadores,
  "transplante-capilar": capilar,
};
