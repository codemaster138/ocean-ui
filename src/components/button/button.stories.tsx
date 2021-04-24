import React from "react";
import Button from '.';
import { Meta } from "@storybook/react/types-6-0";
import { UilEditAlt } from "@iconscout/react-unicons";

// eslint-disable-next-line
export default {
  title: 'Components/Button',
} as Meta;

const Template: any = (args: any) => <Button {...args}/>

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  primary: false,
  wide: false
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  primary: true,
  wide: false
}

export const WithIcon = Template.bind({});
WithIcon.description = 'Note that you should always put the text into a <span> when using icons.';
WithIcon.args = {
  children: [<UilEditAlt size="13"/>,<span>Edit File</span>],
  primary: false,
  wide: false
}

export const Destructive = Template.bind({});
Destructive.args = {
  children: 'Delete Account',
  wide: false,
  destructive: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  wide: false,
  destructive: false,
  primary: false,
  disabled: true
}