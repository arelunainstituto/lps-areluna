import { Home, UNIT_LABEL } from "@areluna/core";
import { BR_PROCEDURES } from "@areluna/core/br";

export default function Page() {
  return (
    <Home procedures={Object.values(BR_PROCEDURES)} unitLabel={UNIT_LABEL.br} />
  );
}
