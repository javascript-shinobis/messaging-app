import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ActionButton from "../index";

export default {
  title: "Example/ActionButton",
  component: ActionButton,
  argTypes: {
    bgColor: { control: "color" },
    labelColor: { control: "color" },
  },
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ActionButton {...args} />
);

export const Submit = Template.bind({});
Submit.args = {
  label: "Submit",
  bgColor: "red",
  onClick: () => console.log("Submitted"),
};

export const Check = Template.bind({});
Check.args = {
  label: "Check",
  bgColor: "red",
  onClick: () => console.log("Checked!!"),
};
