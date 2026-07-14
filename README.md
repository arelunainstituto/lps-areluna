# LPs Instituto Areluna — Monorepo (PT + BR)

Landing pages de conversão do Instituto Areluna. Um único repositório abriga **dois sites independentes** (Portugal e Brasil), que compartilham todos os componentes e o design system.

Stack: **Next.js 14** (App Router) + **Tailwind CSS** · **npm workspaces**.

## Estrutura

```
apps/
  pt/        → site Portugal   (projeto Vercel "areluna-pt")
  br/        → site Brasil     (projeto Vercel "areluna-br")
packages/
  core/      → tudo compartilhado (componentes, LeadForm, dados, estilos)
    src/
      components/   Hero, LandingPage, LeadForm, Home, …
      data/         pt.ts · br.ts · shared.ts · types.ts
      lib/leads.ts  construção do payload de lead
      server/lead.ts  handler do proxy /api/lead
      styles/globals.css
    tailwind-preset.ts   design tokens (cores/tipografia)
```

Cada app é **fino**: só o `layout`, a `home` do país, a rota `[slug]` e a rota `api/lead`. Todo o resto vem de `@areluna/core`, então **não há código duplicado**. Cada site embarca apenas o conteúdo e os assets do seu país.

## As 8 páginas

| Site | Procedimento | Rota |
|------|-------------|------|
| 🇵🇹 PT | Implantes / All-on-4 | `/implantes-dentarios` |
| 🇵🇹 PT | Facetas dentárias | `/facetas-dentarias` |
| 🇵🇹 PT | Alinhadores invisíveis | `/alinhadores-invisiveis` |
| 🇵🇹 PT | Transplante capilar | `/transplante-capilar` |
| 🇧🇷 BR | Harmonização facial | `/harmonizacao-facial` |
| 🇧🇷 BR | Rinomodelação | `/rinomodelacao` |
| 🇧🇷 BR | Bioestimulador de colágeno | `/bioestimulador-de-colageno` |
| 🇧🇷 BR | Toxina botulínica | `/toxina-botulinica` |

Cada site serve só os seus procedimentos (a home lista apenas o país correspondente); rotas do outro país retornam 404.

## Rodar localmente

```bash
npm install         # instala o workspace inteiro (uma vez)

npm run dev:pt      # site Portugal → http://localhost:3000
npm run dev:br      # site Brasil   → http://localhost:3000
```

## Build de produção

```bash
npm run build:pt    # build do site PT
npm run build:br    # build do site BR
npm run build       # ambos
```

## Deploy na Vercel (2 projetos, 1 repositório)

Criar **dois projetos Vercel** apontando para o mesmo repositório GitHub, cada um com o **Root Directory** correspondente:

| Projeto Vercel | Root Directory | Domínio sugerido |
|----------------|----------------|------------------|
| `areluna-pt` | `apps/pt` | `lp.institutoareluna.pt` |
| `areluna-br` | `apps/br` | `lp.institutoareluna.com.br` |

A Vercel detecta os npm workspaces automaticamente (instala a partir da raiz, builda o app do Root Directory). Nenhuma configuração extra é necessária.

### Variável de ambiente (nos dois projetos)

| Variável | Descrição |
|----------|-----------|
| `LEADS_WEBHOOK_URL` | URL do motor de distribuição. Default embutido: `https://distribuicao.institutoareluna.pt/backend/webhooks/leads/site`. Ver `.env.example`. |

## Onde editar o conteúdo

Todo o texto, contactos e equipa ficam em ficheiros de dados — **não é preciso mexer em componentes**:

- `packages/core/src/data/pt.ts` — conteúdo das 4 páginas de Portugal
- `packages/core/src/data/br.ts` — conteúdo das 4 páginas do Brasil
- `packages/core/src/data/shared.ts` — contactos (telefone/WhatsApp/morada), equipa e prova social
- `apps/pt/public/img/` · `apps/br/public/img/` — fotos (equipa e casos)

## Formulário de leads

O formulário (`packages/core/src/components/LeadForm.tsx`) envia cada submissão para o motor de distribuição via o proxy same-origin `POST /api/lead` (`packages/core/src/server/lead.ts`), que reencaminha para o `LEADS_WEBHOOK_URL`. O payload mapeia os campos PT/BR para os nomes canónicos (`name`/`email`/`phone`/`country`/`form_name`/`tratamento`) e inclui UTMs, `gclid`, `page_url`, `referrer`, `device` e um `external_id` por submissão.

---

_Desenvolvido por **Assessoria OST** — Tráfego · Performance · Inteligência._
