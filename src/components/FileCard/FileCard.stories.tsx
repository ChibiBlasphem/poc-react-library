import {ComponentMeta, ComponentStory} from "@storybook/react";
import FileCard from "./FileCard";

export default {
    title: 'FileCard',
    component: FileCard,
} as ComponentMeta<typeof FileCard>;

const Template: ComponentStory<typeof FileCard> = (args) => <FileCard {...args} />;

export const BasicFileCard = Template.bind({});
