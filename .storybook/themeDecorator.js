import styled from "styled-components";
import lightTheme from "../src/themes/light";
import { OceanRoot } from "../src";

const DecoContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
`;

const ThemeDecorator = (storyFn) => (
  <OceanRoot theme={lightTheme}>
    <DecoContainer>{storyFn()}</DecoContainer>
  </OceanRoot>
);

export default ThemeDecorator;
