import styled from "styled-components";

export default styled.div<{ small: boolean }>`
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
  img, svg {
    width: 100%;
    height: auto;
  }
`;

export const SidebarLink = styled.a<{ current: boolean }>`
  display: block;
  padding: 10px 20px;
  font-size: 14px;
  text-decoration: regular;
  color: ${(p) => (p.current ? p.theme.on_primary : p.theme.accent_1)};
  background-color: ${(p) => (p.current ? p.theme.primary : "transparent")};
  border-radius: 7px;
`;

export const SidebarButton = styled.button<{ current: boolean }>`
  border: none;
  display: block;
  padding: 10px 20px;
  font-size: 14px;
  text-decoration: regular;
  color: ${(p) => (p.current ? p.theme.on_primary : p.theme.accent_1)};
  background-color: ${(p) => (p.current ? p.theme.primary : "transparent")};
  border-radius: 7px;
`;
