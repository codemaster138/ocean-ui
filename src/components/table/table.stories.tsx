import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Table from ".";
import Card from "../card";

export default {
  title: "Components/UI/Table",
} as Meta;

const Template: any = () => (
  <Card>
    <h1>Issues in this project</h1>
    <Table>
      <tr className="header">
        <th>ID</th>
        <th>Issue Name</th>
        <th>Assignees</th>
        <th>Tags</th>
        <th>State</th>
      </tr>
      <tr className="hoverable">
        <td>#1</td>
        <td>Test issue</td>
        <td>You</td>
        <td>Bug</td>
        <td>Open</td>
      </tr>
      <tr className="hoverable">
        <td>#2</td>
        <td>Another test issue</td>
        <td>–</td>
        <td>–</td>
        <td>Closed</td>
      </tr>
    </Table>
  </Card>
);

export const Default = Template.bind({});
