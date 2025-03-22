import { FC } from "react";
import ProfileCard from "~/components/macro/ProfileCard";
import ButtonFramed from "~/components/mini/Button/ButtonFramed";
import { RichText } from "../components/macro/RichText";
import { CkEditor } from "~/components/macro/CkEditor";

interface ComponentMap {
  [key: string]: FC<any> & { processBlockData?: (block: any) => any };
}

const componentMap: ComponentMap = {
  // Macro components
  "macro-components.profile-card": ProfileCard,
  "macro-components.rich-text": RichText,
  "macro-components.ck-editor": CkEditor,

  // Mini components
  "mini-components.button-framed": ButtonFramed,
};

export default componentMap;
