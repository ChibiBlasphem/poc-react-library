import {ComponentMeta, ComponentStory} from "@storybook/react";
import Card from "./Card";

export default {
    title: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const BasicCard = Template.bind({});

export const WithContentCard = Template.bind({});
WithContentCard.args = { children: <span>Some content</span> };
