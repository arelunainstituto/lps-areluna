import { Home, UNIT_LABEL } from "@areluna/core";
import { PT_PROCEDURES } from "@areluna/core/pt";

export default function Page() {
  return (
    <Home procedures={Object.values(PT_PROCEDURES)} unitLabel={UNIT_LABEL.pt} />
  );
}
