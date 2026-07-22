// Ponto de entrada partilhado (@areluna/core).
// Componentes e tipos comuns aos dois sites. Os dados por país NÃO
// entram aqui — cada app importa "@areluna/core/pt" ou "@areluna/core/br"
// para embarcar só o conteúdo do seu país.

export { default as LandingPage } from "./components/LandingPage";
export { default as Home } from "./components/Home";
export { GoogleTagManager } from "./components/GoogleTagManager";

export type * from "./data/types";
export { UNIT_LABEL } from "./data/units";
