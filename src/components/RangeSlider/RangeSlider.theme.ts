/// <reference path="RangeSlider.themthem.d.ts" />

import { createGlobalStyle } from 'styled-components';
import { createGenerator } from 'themthem/component';

const defaultDotColor = '#fff';
const defaultDotBorderColor = 'transparent';
const defaultDotShadow = '0.5px 0.5px 2px 1px rgb(0 0 0 / 32%)';

export const generateRangeSliderVars = createGenerator('RangeSlider');

export const RangeSliderDefaultStyle = createGlobalStyle`
  :root {
    ${generateRangeSliderVars({
      height: '4px',
      dot: {
        size: '16px',
        'border-size': '2px',
        color: {
          $default: defaultDotColor,
          $hover: defaultDotColor,
          $moving: defaultDotColor,
        },
        'border-color': {
          $default: defaultDotBorderColor,
          $hover: defaultDotBorderColor,
          $moving: defaultDotBorderColor,
        },
        shadow: {
          $default: defaultDotShadow,
          $hover: defaultDotShadow,
          $moving: defaultDotShadow,
        },
      },
      rail: {
        color: '#ccc',
      },
      process: {
        color: '#3498db',
      },
      tooltip: {
        background: '#fff',
        text: '#333',
      },
    })}
  }
`;
