import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonVariant } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
