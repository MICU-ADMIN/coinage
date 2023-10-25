import React from 'react';
import { Card } from 'ui';

import { Meta } from '@storybook/react';

export default {
	title: 'Card',
	component: Card,
} as Meta;

export const Primary = () => (
	<Card>Hello</Card>
);
