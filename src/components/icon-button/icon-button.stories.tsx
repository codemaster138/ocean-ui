import IconButton from '.';
import Card from '../card';
import { UilSetting } from '@iconscout/react-unicons';
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/UI/Icon Button'
} as Meta;

const Template: any = (args: any) => <IconButton {...args}/>;
const CardTemplate: any = (args: any) => <Card width={500}><IconButton {...args}/></Card>

export const Default = Template.bind({});
Default.args = {
  children: <UilSetting/>
};

export const Primary = Template.bind({});
Primary.args = {
  children: <UilSetting/>,
  primary: true
};

export const Badge = Template.bind({});
Badge.args = {
  children: <UilSetting/>,
  primary: false,
  badge: 5,
  badgeColor: 'primary'
}

export const InCard = CardTemplate.bind({});
InCard.args = {
  children: <UilSetting/>,
  primary: false,
}