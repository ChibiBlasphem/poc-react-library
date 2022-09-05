import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';

import { RangeSlider } from './RangeSlider';

export default {
  title: 'RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = (args) => {
  const [values, setValues] = useState(args.values);
  return <RangeSlider {...args} values={values} onChange={setValues} />;
};

export const Basic = Template.bind({});
Basic.args = {
  values: [20],
  min: 0,
  max: 100,
} as any;

export const TwoValues = Template.bind({});
TwoValues.args = {
  values: [0, 20],
  min: 0,
  max: 100,
} as any;

export const ThreeValues = Template.bind({});
ThreeValues.args = {
  values: [0, 20, 50],
  min: 0,
  max: 100,
} as any;

export const WithInterval = Template.bind({});
WithInterval.args = {
  values: [0, 20],
  step: 10,
  min: 0,
  max: 100,
} as any;

const StyledRangeSlider = styled(RangeSlider)`
  --component-RangeSlider-height: 6px;
  --component-RangeSlider-dot-size: 24px;
  --component-RangeSlider-dot-shadow__moving: 0px 0px 1px 2px rgb(52 152 219 / 36%);
  --component-Tooltip-background: #333;
  --component-Tooltip-text: #fff;
`;

export const CustomStyle: ComponentStory<typeof StyledRangeSlider> = (args) => {
  const [innerValues, setInnerValues] = useState<number[]>(args.values);

  return <StyledRangeSlider {...args} values={innerValues} onChange={setInnerValues} />;
};
CustomStyle.args = {
  values: [0, 20],
  step: 5,
  min: 0,
  max: 100,
  showMarks: true,
};
