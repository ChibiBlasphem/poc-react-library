import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const NoEstimationBar = Template.bind({});

export const WithEstimation = Template.bind({});
WithEstimation.args = {
  planned: 30,
};

export const WithTriggerer = Template.bind({});
WithTriggerer.args = {
  triggerer: 'ChibiKookie',
};
