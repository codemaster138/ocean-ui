import React, { useState } from "react";
import Radio from ".";
import { Meta } from "@storybook/react/types-6-0";
import { Card, CardHeading, Button, Checkbox, Separator } from "../..";

// eslint-disable-next-line
export default {
  title: "Components/Radio",
} as Meta;

export const Template: any = (args: any) => {
  const [selected, setSelected] = useState("fast-food");

  return (
    <Card
      width={500}
      footer={
        <>
          <span></span>
          <Button primary>Submit</Button>
        </>
      }
    >
      <CardHeading>Food poll</CardHeading>
      <p>Please select all that apply:</p>
      <Checkbox defaultChecked>I like pizza 🍕</Checkbox>
      <Checkbox>I like burgers 🍔</Checkbox>
      <Separator />
      <p>Currently selected: <b>{selected}</b></p>
      <div className="div" onChange={(e: any) => setSelected(e.target.value)}>
        <Radio groupName="myGroup" value="fast-food" defaultChecked>I love fast food 🍟</Radio>
        <Radio groupName="myGroup" value="healthy">I'd rather eat healthy 🥗</Radio>
      </div>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {};
