import type { Professional, Proof } from "./types";

// Prova social (nota Google). NOTA: confirmar a nota exata com o cliente e,
// idealmente, substituir por print/embed real do Google Reviews na produção.
export const PROOF: Proof = {
  rating: "5,0",
  count: "500+",
  caption: "avaliações reais no Google",
};

// ── Contactos Portugal (Porto) ──────────────────────────────
export const PT_CONTACT = {
  phoneDisplay: "+351 916 880 681",
  phoneHref: "tel:+351916880681",
  whatsappHref: "https://wa.me/351916880662",
  address: "Rua Júlio Dinis 194, R/C — 4050-319 Porto, Portugal",
  regulatory: [
    "Nº Registo ERS: E161637",
    "Nº Licença de funcionamento: 21593/2022",
    "Diretor Clínico inscrito na Ordem dos Médicos Dentistas",
    "Publicidade de saúde em conformidade com a ERS",
  ],
};

// ── Contactos Brasil (Curitiba/PR) ──────────────────────────
// Telefone/WhatsApp da receção Areluna BR (fixo e WhatsApp no mesmo número).
export const BR_CONTACT = {
  phoneDisplay: "+55 41 3163-7004",
  phoneHref: "tel:+554131637004",
  whatsappHref: "https://wa.me/554131637004",
  address: "Curitiba — Paraná, Brasil",
  regulatory: [
    "Responsável técnica inscrita no CRO-PR",
    "Procedimentos realizados por profissionais habilitados",
    "Resultados variam conforme avaliação individual",
    "Publicidade em conformidade com o Código de Ética Odontológica",
  ],
};

// ── Equipa clínica (institutoareluna.com.br / .pt) ──────────
export const PROS: Record<string, Professional> = {
  arethuza: {
    name: "Dra. Arethuza Luna",
    role: "Fundadora · Ortodontia & Harmonização",
    credential:
      "Mestrados em Miami e Nova Iorque. Dupla titulação Brasil e Portugal. Referência em harmonização orofacial de resultado natural.",
    photo: "/img/team/arethuza.jpg",
  },
  leonardo: {
    name: "Dr. Leonardo Saraiva",
    role: "Estomatologia & Patologia Oral",
    credential:
      "Especialista em medicina oral e diagnóstico avançado, com foco em segurança clínica e reabilitação.",
    photo: "/img/team/leonardo.jpg",
  },
  carla: {
    name: "Dra. Carla Salvi",
    role: "Cirurgia Oral & Maxilofacial",
    credential:
      "Cirurgia guiada por computador e reabilitação com implantes. Precisão milimétrica em carga imediata.",
    photo: "/img/team/carla.jpg",
  },
  aline: {
    name: "Dra. Aline Marodin",
    role: "Cirurgia Oral & Harmonização Avançada",
    credential:
      "Cirurgiã com formação avançada em harmonização facial e protocolos minimamente invasivos.",
    photo: "/img/team/aline.jpg",
  },
  daiane: {
    name: "Dra. Daiane Andrade",
    role: "Endodontia",
    credential:
      "Tratamento e preservação dentária com tecnologia de magnificação e diagnóstico digital.",
    photo: "/img/team/daiane.jpg",
  },
  marcos: {
    name: "Dr. Marcos Kawasaki",
    role: "Dermatologia & Transplante Capilar",
    credential:
      "17+ anos de experiência. Especialista em transplante capilar e saúde da pele e do cabelo.",
    photo: "/img/team/marcos.jpg",
  },
  sara: {
    name: "Dra. Sara Ribeiro",
    role: "Reabilitação Orofacial",
    credential:
      "Especialista em devolver função e estética ao sorriso, do planeamento à prótese definitiva.",
    photo: "/img/team/sara.jpg",
  },
  pethine: {
    name: "Dra. Pethine Dalsasso",
    role: "Odontologia & Estética do Sorriso",
    credential:
      "Foco em planeamento digital do sorriso e tratamentos de estética dentária personalizados.",
    photo: "/img/team/pethine.jpg",
  },
  catharina: {
    name: "Dra. Catharina Souza",
    role: "Ortodontia",
    credential:
      "Especialista em ortodontia com foco em alinhadores invisíveis e planeamento digital do movimento dentário.",
    photo: "/img/team/catharina.jpg",
  },
};
