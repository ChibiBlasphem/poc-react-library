/// <reference path="Tooltip.themthem.d.ts" />

import { createGlobalStyle } from 'styled-components';
import { createGenerator } from 'themthem/component';

export const generateTooltipVars = createGenerator('Tooltip');

export const TooltipDefaulStyle = createGlobalStyle`
  ${generateTooltipVars({
    background: '#fff',
    text: '#333',
  })}
`;
