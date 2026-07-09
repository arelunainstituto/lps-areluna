# LPs Instituto Areluna (PT + BR)

Landing pages de conversão do Instituto Areluna, construídas por **Assessoria OST**.
Stack: **Next.js 14** (App Router) + **Tailwind CSS**. Renderização estática — podem ser publicadas em qualquer host (Vercel, Netlify, ou servidor próprio).

## As 8 páginas

| Unidade | Procedimento | Rota |
|---------|-------------|------|
| 🇵🇹 PT | Implantes / All-on-4 | `/pt/implantes-dentarios` |
| 🇵🇹 PT | Facetas dentárias | `/pt/facetas-dentarias` |
| 🇵🇹 PT | Alinhadores invisíveis | `/pt/alinhadores-invisiveis` |
| 🇵🇹 PT | Transplante capilar | `/pt/transplante-capilar` |
| 🇧🇷 BR | Harmonização facial | `/br/harmonizacao-facial` |
| 🇧🇷 BR | Rinomodelação | `/br/rinomodelacao` |
| 🇧🇷 BR | Bioestimulador de colágeno | `/br/bioestimulador-de-colageno` |
| 🇧🇷 BR | Toxina botulínica | `/br/toxina-botulinica` |

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de produção

```bash
npm run build
npm run start    # serve a build otimizada
```

## Publicar no domínio da Areluna

**Opção A — Vercel/Netlify (recomendado):** importar este repositório na plataforma; o build (`npm run build`) é detetado automaticamente. Depois apontar o domínio/subdomínio (ex.: `lp.institutoareluna.pt`) para o deploy.

**Opção B — servidor próprio:** `npm run build` gera a aplicação Next.js; servir com `npm run start` atrás de um proxy (Nginx/Apache), ou exportar estático se preferirem.

## Onde editar o conteúdo

Todo o texto, contactos e equipa ficam em ficheiros de dados — **não é preciso mexer em componentes**:

- `src/data/pt.ts` — conteúdo das 4 páginas de Portugal
- `src/data/br.ts` — conteúdo das 4 páginas do Brasil
- `src/data/shared.ts` — contactos (telefone/WhatsApp/morada), equipa e prova social (nota Google)
- `public/img/team/` — fotos dos profissionais
- `public/img/cases/` — fotos antes/depois

## Formulário de leads

O formulário (`src/components/LeadForm.tsx`) está em modo **protótipo** — captura os dados mas ainda **não envia para nenhum destino**. Antes de publicar em produção é preciso ligar a integração real (Meta Lead Ads / CRM Zoho / webhook) no ponto indicado no comentário do componente.

---

_Desenvolvido por **Assessoria OST** — Tráfego · Performance · Inteligência._
