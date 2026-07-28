// ── Configuração de rastreamento de conversão ─────────────────
// Preencher quando for ATIVAR as campanhas. Vazio = desligado
// (as tags não carregam nem disparam, sem quebrar o site).
//
// O fluxo: ao submeter o formulário, o utilizador é redirecionado
// para /obrigado, e é lá que a conversão é registada.
//
// No BR já existe o GTM (ver GoogleTagManager) — nesse caso, basta
// configurar no GTM um acionador de evento personalizado
// "lead_conversion" (disparado na /obrigado) e ligar a tag de
// conversão do Google Ads / Meta. As constantes abaixo são a
// alternativa direta (sem GTM), útil sobretudo para o site PT.

// Google Ads: Ferramentas → Conversões → (ação) → "Configurar a tag manualmente".
export const GOOGLE_ADS_ID: string = ""; // ex.: "AW-123456789"
export const GOOGLE_ADS_CONVERSION_LABEL: string = ""; // ex.: "AbC-D_efGhIjKl"

// Meta Pixel (opcional): dispara o evento "Lead" na /obrigado.
export const META_PIXEL_ID: string = ""; // ex.: "123456789012345"
