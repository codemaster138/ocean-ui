import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Card from "../card";
import Chip from ".";

export default {
  title: "Components/UI/Chip",
} as Meta;

const Template = (args: any) => (
  <Card>
    <Chip {...args}/>
    <Chip color="col_green">Feature request</Chip>
    <Chip color="col_purple">Something</Chip>
    <Chip color="col_pink">Something</Chip>
    <Chip color="col_orange">Something</Chip>
  </Card>
);

export const Chip_: any = Template.bind({});
Chip_.args = {
  children: "Bug",
  color: "col_red"
};
