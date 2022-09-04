import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExpandableCard } from './ExpandableCard';

export default {
  title: 'ExpandableCard',
  component: ExpandableCard,
} as ComponentMeta<typeof ExpandableCard>;

const detailsJsx = (
  <>
    Data:
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    Other:
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </>
);

const Template: ComponentStory<typeof ExpandableCard> = (args) => (
  <ExpandableCard {...args} detail={detailsJsx}>
    <strong>
      I am the content of this card with a very very long text to check what content do when he is
      very long
    </strong>
  </ExpandableCard>
);

export const Default = Template.bind({});
