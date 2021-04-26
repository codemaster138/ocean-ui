import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import Input from ".";

// eslint-disable-next-line
export default {
  title: 'Components/UI/Input'
} as Meta;

const Template: any = (args: any) => <Input {...args}/>;

export const Text = Template.bind({});
Text.args = {
  type: "text"
};

export const Password = Template.bind({});
Password.args = {
  type: "password"
};

export const Error = Template.bind({});
Error.args = {
  type: "password",
  error: "Invalid password"
};