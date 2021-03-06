import React, { useState } from "react";
import OptionSwitch, { SwitchOption } from ".";
import { Meta } from "@storybook/react/types-6-0";
import { Card } from "../..";
import { UilMoon, UilSun } from "@iconscout/react-unicons";

// eslint-disable-next-line
export default {
  title: "Components/UI/Option Switch",
} as Meta;

export const Template: any = () => {
  const [checked, setChecked] = useState('option1');

  return (
    <Card width={500}>
      <h1>Appearance Settings</h1>
      <p>Here, you can customize the app's look and feel to make it your own.</p>
      <OptionSwitch label="Color Theme">
        <SwitchOption selected={checked === 'option1'} onClick={() => setChecked('option1')}>
          <UilMoon size="16"/>
        </SwitchOption>
        <SwitchOption selected={checked === 'option2'} onClick={() => setChecked('option2')}>
          <UilSun size="16"/>
        </SwitchOption>
      </OptionSwitch>
    </Card>
  );
};

export const Centered: any = () => {
  const [checked, setChecked] = useState('option1');

  return (
    <Card width={500}>
      <h1>Appearance Settings</h1>
      <p>Here, you can customize the app's look and feel to make it your own.</p>
      <OptionSwitch centered>
        <SwitchOption selected={checked === 'option1'} onClick={() => setChecked('option1')}>
          <UilMoon size="16"/>
        </SwitchOption>
        <SwitchOption selected={checked === 'option2'} onClick={() => setChecked('option2')}>
          <UilSun size="16"/>
        </SwitchOption>
      </OptionSwitch>
    </Card>
  );
}

export const Default = Template.bind({});
Default.args = {};
