import Color from "color";
import styled from "styled-components";

export default styled.div<{ small?: boolean }>`
  height: 100vh;
  width: ${(p) => (p.small ? "60px" : "250px")};
  background-color: ${(p) => p.theme.accent_4};
  border-right: 1px solid ${(p) => p.theme.accent_2};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  img,
  svg {
    width: 100%;
    height: auto;
    margin-bottom: 40px;
  }
`;

export const SidebarLink = styled.a<{ current?: boolean }>`
  display: block;
  padding: 15px 30px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  color: ${(p) => (p.current ? p.theme.on_primary : p.theme.accent_1)};
  background-color: ${(p) => (p.current ? p.theme.primary : "transparent")};
  border-radius: 7px;
  transition: 300ms;

  &:hover {
    color: ${(p) => (p.current ? p.theme.on_primary : p.theme.primary)};
    background: ${(p) =>
      p.current
        ? p.theme.primary
        : Color(p.theme.primary).alpha(0.03).rgb().toString()};
  }
`;

export const SidebarButton = styled.button<{ current?: boolean }>`
  border: none;
  display: block;
  padding: 15px 30px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  color: ${(p) => (p.current ? p.theme.on_primary : p.theme.accent_1)};
  background-color: ${(p) => (p.current ? p.theme.primary : "transparent")};
  border-radius: 7px;
  transition: 300ms;

  &:hover {
    color: ${(p) => (p.current ? p.theme.on_primary : p.theme.primary)};
    background: ${(p) =>
      p.current
        ? p.theme.primary
        : Color(p.theme.primary).alpha(0.03).rgb().toString()};
  }
`;
