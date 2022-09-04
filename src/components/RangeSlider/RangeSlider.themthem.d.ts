/// <reference types="themthem/interfaces" />

type WithMovingModifiers = {
  $modifiers: ['hover', 'moving'];
};

interface ComponentDesignTokenBox {
  RangeSlider: {
    $values: ['height'];
    dot: {
      $values: ['size', 'border-size'];
      color: WithMovingModifiers;
      'border-color': WithMovingModifiers;
      shadow: WithMovingModifiers;
    };
    rail: {
      $values: ['color'];
    };
    process: {
      $values: ['color'];
    };
    tooltip: { $values: ['background', 'text'] };
  };
}
