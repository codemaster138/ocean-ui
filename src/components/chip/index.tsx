import Color from "color";
import styled from "styled-components";

const Chip = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme[props.color || ""] || props.color};
  background-color: ${(props) =>
    Color(props.theme[props.color || ""] || props.color)
      .alpha(0.1)
      .rgb()
      .toString()};
  border: 1px solid ${(props) =>
    Color(props.theme[props.color || ""] || props.color)
      .alpha(0.3)
      .rgb()
      .toString()};
  border-radius: 80px;
  padding: 5px 20px;
`;

export default Chip;
