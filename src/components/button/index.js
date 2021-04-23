import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  cursor: pointer;
  border: ${p=> p.primary ? '0' : '1'}px solid ${p => p.primary ? 'transparent' : p.theme.accent_2};
  background: ${p => p.primary ? p.theme.primary: 'transparent'};
  color: ${p => p.primary ? p.theme.on_primary : p.theme.fg};
  padding: ${p => p.primary ? '9px 17px' : '8px 16px'};
  border-radius: 5px;
  transition: 300ms;
  font-size: 13px;
  width: ${p => p.wide ? '100%' : 'initial'};

  svg {
    margin: 0 16px;
    height: 13px;
    width: auto;
  }

  &> :first-child {
    margin-left: 0;
  }

  &> :last-child {
    margin-right: 0;
  }

  &:hover {
    border-color: ${p => p.primary ? 'transparent' : p.theme.accent_3};
    opacity: 0.9;
  }
`;

export default function Button(props) {
  return (
    <StyledButton {...props }/>
  )
}