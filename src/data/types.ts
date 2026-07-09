// ───────────────────────────────────────────────────────────
// ARELUNA — modelo de dados que dirige cada landing page.
// A copy (ponto 4) vive aqui; os componentes (ponto 5) só renderizam.
// ───────────────────────────────────────────────────────────

export type Unit = "pt" | "br";

export interface Stat {
  value: string;
  label: string;
}

export interface Benefit {
  title: string;
  body: string;
}

export interface Step {
  n: string;
  title: string;
  body: string;
}

export interface Professional {
  name: string;
  role: string;
  credential: string;
  photo?: string;
}

export interface Testimonial {
  name: string;
  meta: string; // idade / cidade / procedimento
  quote: string;
}

// Mecanismo único — o diferencial que destrói as alternativas (Schwartz Concentration)
export interface Mechanism {
  eyebrow: string;
  title: string;
  body: string;
  points: { title: string; body: string }[];
  enemyLine?: string; // golpe direto contra a alternativa (Turquia / influencer / kit)
}

// Prova social concreta (não afirmada — mostrada)
export interface Proof {
  rating: string; // ex.: "4,9"
  count: string; // ex.: "450+"
  caption: string; // ex.: "avaliações reais no Google"
}

// Bloco de contraste (ex.: rinomodelação × rinoplastia cirúrgica)
export interface Compare {
  title: string;
  intro: string;
  colA: string; // Areluna / procedimento
  colB: string; // alternativa
  rows: { label: string; a: string; b: string }[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface LeadField {
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "select";
  options?: string[];
  required?: boolean;
}

export interface Procedure {
  unit: Unit;
  slug: string;
  // SEO
  metaTitle: string;
  metaDescription: string;
  // Hero
  eyebrow: string;
  h1Lead: string; // texto normal
  h1Accent: string; // pedaço dourado
  heroSub: string;
  heroChips: string[]; // benefícios rápidos
  // Form
  formTitle: string;
  formSubtitle: string;
  formCta: string;
  formFields: LeadField[];
  formFootnote: string;
  offerName?: string; // entregável nomeado da oferta (ex.: "+ Simulação 3D do seu sorriso")
  urgency?: string; // por que agir agora (agenda/sazonal) — urgência legítima
  // Prova concreta
  proof?: Proof;
  // Mecanismo único
  mechanism?: Mechanism;
  // Contraste (opcional, ex.: rino × rinoplastia)
  compare?: Compare;
  // Trust
  stats: Stat[];
  // Differentials
  diffEyebrow: string;
  diffTitle: string;
  diffIntro: string;
  benefits: Benefit[];
  // Process
  processEyebrow: string;
  processTitle: string;
  steps: Step[];
  // Gallery
  galleryTitle: string;
  gallerySub: string;
  galleryCaptions: string[];
  galleryImages?: string[]; // fotos reais (antes/depois já compostos). Sem isto, usa placeholder.
  // Professionals
  proTitle: string;
  proIntro: string;
  professionals: Professional[];
  // Testimonials
  testimonialsTitle: string;
  testimonials: Testimonial[];
  // FAQ
  faq: Faq[];
  // Final CTA
  finalTitle: string;
  finalSub: string;
  finalCta: string;
  // Contact / footer
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  address: string;
  regulatory: string[];
}

export interface UnitConfig {
  unit: Unit;
  label: string;
  domain: string;
  procedures: Record<string, Procedure>;
}
