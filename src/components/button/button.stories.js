import Button from '.';
import { UilEditAlt } from "@iconscout/react-unicons";

// eslint-disable-next-line
export default {
  title: 'Button'
}

const Template = (args) => <Button {...args}/>

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
WithIcon.description = 'Note that you should always put the text into a span when using icons.';
WithIcon.args = {
  children: [<UilEditAlt size="13"/>,<span>Edit File</span>],
  primary: false,
  wide: false
}