import type { ReactNode } from "react";

interface TechnologyItemProp {
  icon: ReactNode;
  name: string;
}

const TechnologyItem = ({ icon, name }: TechnologyItemProp) => (
  <li className="technology-item">
    <span aria-hidden="true">{icon}</span>
    {name}
  </li>
);

export default TechnologyItem;
