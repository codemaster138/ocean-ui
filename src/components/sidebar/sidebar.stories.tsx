import React from "react";
import Sidebar, { SidebarLink } from ".";
import { Meta } from "@storybook/react/types-6-0";

// eslint-disable-next-line
export default {
  title: "Components/Sidebar",
} as Meta;

const Template: any = () => (
  <Sidebar>
    <SidebarLink href="/">Foobarbaz</SidebarLink>
  </Sidebar>
);

export const Default = Template.bind({});
