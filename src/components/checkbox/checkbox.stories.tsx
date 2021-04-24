import React from "react";
import Checkbox from '.';
import { Meta } from "@storybook/react/types-6-0";
import { Card } from "../..";

// eslint-disable-next-line
export default {
  title: 'Components/Checkbox',
} as Meta;

const Template: any = (args: any) => <Card><Checkbox {...args}/></Card>;

export const Default = Template.bind({});
Default.args = {
  children: 'Test checkbox'
};