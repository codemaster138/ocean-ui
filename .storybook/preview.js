import { addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"

addDecorator(themeDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['MDX', ['Introduction']]
    }
  }
}