import Card from '.';
import Button from '../button';
import { UilArrowRight } from "@iconscout/react-unicons";
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/UI/Card'
} as Meta;

const Template: any = (args: any) => <Card {...args}/>

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <h1>Just a Card</h1>
      <p>
        Cards can be used to group components together and separate them from others.
        You should never nest cards inside one another.
      </p>
    </>
  ),
  width: 500,
}

export const WithFooter = Template.bind({});
WithFooter.args = {
  children: (
    <>
      <h1>Card with footer</h1>
      <p>
        The footer should only ever contain up to two columns.
        The left should contain a secondary, the right a primary
        CTA. If only one column is used, it should be placed on
        the right and contain a primary CTA.
      </p>
    </>
  ),
  width: 500,
  footer: (
    <>
      <Button>Exit</Button>
      <Button primary><span>Next</span><UilArrowRight size="13"/></Button>
    </>
  )
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  children: (
    <>
      <h1>Dismissible Card</h1>
      <p>Can be used for notifications.</p>
    </>
  ),
  width: 500,
  footer: (
    <>
      <Button>Exit</Button>
      <Button primary><span>Next</span><UilArrowRight size="13"/></Button>
    </>
  ),
  dismiss() {}
};

export const Compact = Template.bind({});
Compact.args = {
  children: (
    <>
      <h1>Buy <b>1000</b> DogeCoins?</h1>
      <p>A compact, dismissible card is preferred for notifications over a regular dismissible card.</p>
    </>
  ),
  width: 300,
  footer: (
    <>
      <Button wide>Cancel</Button>
      <Button primary wide>Buy Coins</Button>
    </>
  ),
  compact: true,
  dismiss() {}
};

export const Subcard = Template.bind({});
Subcard.args = {
  children: (
    <>
      <h1>Test card</h1>
      <Template width="100%" subcard>
        <h1>Subcard</h1>
      </Template>
    </>
  )
}