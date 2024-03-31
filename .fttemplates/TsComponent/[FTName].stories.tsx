import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { [FTName] } from './[FTName]';

export default {
    title: 'features/[FTName]',
    component: [FTName],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof [FTName]>;

const Template: ComponentStory<typeof [FTName]> = (args) => <[FTName] {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
})];
