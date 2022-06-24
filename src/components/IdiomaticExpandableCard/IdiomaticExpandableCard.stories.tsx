import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IdiomaticExpandableCard } from './IdiomaticExpandableCard';

export default {
  title: 'IdiomaticExpandableCard',
  component: IdiomaticExpandableCard,
} as ComponentMeta<typeof IdiomaticExpandableCard>;

const Template: ComponentStory<typeof IdiomaticExpandableCard> = (args) => (
  <IdiomaticExpandableCard {...args}>
    <IdiomaticExpandableCard.Title>
      <strong>
        I am the content of this card with a very very long text to check what content do when he is
        very long
      </strong>
    </IdiomaticExpandableCard.Title>
    <IdiomaticExpandableCard.Details>
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
    </IdiomaticExpandableCard.Details>
  </IdiomaticExpandableCard>
);

export const Default = Template.bind({});
