import * as React from 'react';

export function Button({
	title,
	children,
	href,
}: {
	title: string;
	children: React.ReactNode;
	href: string;
}): JSX.Element {
	return (
		<div className='ui-bg-red-400 w-100 h-100'></div>
	);
}
