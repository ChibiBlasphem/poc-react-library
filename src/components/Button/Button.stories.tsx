import { faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { Button } from './Button';
import { ButtonSize } from './Button.types';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const DefaultStyleButton = styled(Button)`
  --button-color: #ffffff;
  --button-background-color: #88b2a8;
  --button-background-color__hover: #6a8a83;
  --button-border-color: #88b2a8;
`;

const StudioStyleButton = styled(Button)`
  --button-color: #ffffff;
  --button-background-color: #2a66a1;
  --button-background-color__hover: #1f4c78;
  --button-border-color: #2a66a1;
`;

const TemplateDefault: ComponentStory<typeof Button> = (args) => <DefaultStyleButton {...args} />;
const TemplateStudio: ComponentStory<typeof Button> = (args) => <StudioStyleButton {...args} />;

export const Default = TemplateDefault.bind({});
Default.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
};

export const CustomStyle = TemplateStudio.bind({});
CustomStyle.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
};

export const WithLeftIcon = TemplateDefault.bind({});
WithLeftIcon.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
  icons: {
    left: faChevronLeft,
  },
};

export const WithRightIcon = TemplateDefault.bind({});
WithRightIcon.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
  icons: {
    right: faChevronRight,
  },
};

export const WithTwoIcons = TemplateDefault.bind({});
WithTwoIcons.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
  icons: {
    left: faChevronLeft,
    right: faChevronRight,
  },
};

export const OnlyIcon = TemplateDefault.bind({});
OnlyIcon.args = {
  size: ButtonSize.SMALL,
  icons: {
    left: faBars,
  },
};

export const Disabled = TemplateDefault.bind({});
Disabled.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
  disabled: true,
};
