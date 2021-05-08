import Color from "color";
import React, { TableHTMLAttributes } from "react";
import styled from "styled-components";

interface TableProps {}

const StyledTable = styled.table`
  width: 100%;
  margin: 0;
  margin-top: 25px;

  tr {
    border-bottom: 1px solid ${(p: any) => p.theme.accent_1};
    padding: 0;

    &:nth-child(odd)  {
      td {
        background: ${(p) => Color(p.theme.bg).alpha(0.7).rgb().toString()};
      }
    }

    &:nth-child(1) {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      th {
        &:first-child {
          border-top-left-radius: 5px;
        }
        &:last-child {
          border-top-right-radius: 5px;
        }
      }
    }

    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      td {
        &:first-child {
          border-bottom-left-radius: 5px;
        }
        &:last-child {
          border-bottom-right-radius: 5px;
        }
      }
    }

    th {
      text-align: left;
    }

    th,
    td {
      padding: 15px 20px;
      border: none;
      margin: 0;
      color: ${p => p.theme.fg} !important;
    }

    &.header {
      background: ${(p) => p.theme.accent_3};
    }

    &.hoverable {
      transition: 300ms;
      cursor: pointer;

      &:hover {
        background: ${(p) => p.theme.bg};
      }
    }
  }
`;

export default function Table(props: TableHTMLAttributes<any> & TableProps) {
  return <StyledTable {...props} />;
}
