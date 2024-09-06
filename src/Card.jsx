import nerdImage from "./assets/Images/illustration.png";

import Button from "./Button";

import { H1, IMG, P, Tag } from "./components/styles/Elements.styles";
import {
  CardContainer,
  ContentContainer,
} from "./components/styles/Container.style";
import { StyleTitle } from "./components/styles/Custom";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag>EXCLUSIVE</Tag>
        <H1 color="#fff">
          <StyleTitle text="React styled Components" />
        </H1>
        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <div className="butons">
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </div>
      </ContentContainer>
      <IMG src={nerdImage} alt="Nerd" width="300px" />
    </CardContainer>
  );
}
