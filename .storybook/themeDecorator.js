import styled from "styled-components";
import { OceanRoot, defaultLightTheme as theme } from "../src";

const DecoContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
`;

const ThemeDecorator = (storyFn) => (
  <OceanRoot theme={theme}>
    <DecoContainer>{storyFn()}</DecoContainer>
  </OceanRoot>
);

export default ThemeDecorator;
