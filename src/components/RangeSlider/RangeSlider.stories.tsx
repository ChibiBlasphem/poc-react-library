import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import { TooltipDefaulStyle } from '../Tooltip/Tooltip.theme';

import { RangeSlider, RangeSliderDefaultStyle, generateRangeSliderVars } from './RangeSlider';

export default {
  title: 'RangeSlider',
  component: RangeSlider,
  decorators: [
    (Story) => (
      <>
        <RangeSliderDefaultStyle />
        <Story />
      </>
    ),
  ],
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
  interval: 10,
  min: 0,
  max: 100,
} as any;

const StyledRangeSlider = styled(RangeSlider)`
  ${generateRangeSliderVars({
    height: '6px',
    dot: {
      size: '24px',
      shadow: {
        $moving: '0px 0px 1px 2px rgb(52 152 219 / 36%)',
      },
    },
    tooltip: {
      background: '#333',
      text: '#fff',
    },
  })}
`;
StyledRangeSlider.displayName = 'StyledRangeSlider';

export const CustomStyle: ComponentStory<typeof StyledRangeSlider> = (args) => {
  const [innerValues, setInnerValues] = useState<number[]>(args.values);

  return <StyledRangeSlider {...args} values={innerValues} onChange={setInnerValues} />;
};
CustomStyle.args = {
  values: [0, 20],
  interval: 5,
  min: 0,
  max: 100,
  marks: true,
};
