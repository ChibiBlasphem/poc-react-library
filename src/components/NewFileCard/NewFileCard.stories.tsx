import {ComponentMeta, ComponentStory} from "@storybook/react";
import NewFileCard from "./NewFileCard";

export default {
  title: 'NewFileCard',
  component: NewFileCard,
} as ComponentMeta<typeof NewFileCard>;

const Template: ComponentStory<typeof NewFileCard> = (args) => <NewFileCard {...args} />;

export const BasicNewFileCard = Template.bind({});
