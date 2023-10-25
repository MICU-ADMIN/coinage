import React from 'react';
import { Button } from 'ui';

import { Meta } from '@storybook/react';

export default {
	title: 'Button',
	component: Button,
} as Meta;

export const Primary = () => (
	<Button>Hello</Button>
);
