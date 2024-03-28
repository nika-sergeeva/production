import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'Viktor',
        first: 'Ser',
        city: 'Moscow',
        currency: Currency.EUR,
        avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: '',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
