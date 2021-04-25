import React, { useState } from "react";
import ToggleSwitch from ".";
import { Meta } from "@storybook/react/types-6-0";
import { Card } from "../..";

// eslint-disable-next-line
export default {
  title: "Components/Toggle Switch",
} as Meta;

export const Template: any = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Card width={500}>
      <ToggleSwitch checked={checked} onToggle={setChecked}>
        Test toggle
      </ToggleSwitch>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {};
