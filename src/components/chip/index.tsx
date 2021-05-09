import Color from "color";
import styled from "styled-components";

const Chip = styled.span`
  font-size: 13px;
  color: ${(props) =>
    Color(props.theme[props.color || ""] || props.color).contrast(
      Color("#fff")
    ) >
    Color(props.theme[props.color || ""] || props.color).contrast(Color("#000"))
      ? "#fff"
      : "#000"};
  background-color: ${(props) => props.theme[props.color || ""] || props.color};
  border-radius: 15px;
  display: inline-block;
  padding: 5px 20px;
`;

export default Chip;
