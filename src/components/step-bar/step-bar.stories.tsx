import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { default as StepBarComponent } from ".";

// eslint-disable-next-line
export default {
  title: 'Components/Step Bar'
} as Meta;

const Template: any = (args: any) => <StepBarComponent {...args}/>

export const StepBar: any = Template.bind({});
StepBar.args = {
  width: 500,
  steps: 5,
  current: 2
};