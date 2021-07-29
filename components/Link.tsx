import clsx from 'clsx';
import Clickable, { ButtonOrLinkProps } from './Clickable';

interface Props extends ButtonOrLinkProps {
	to: string;
	out?: boolean;
	inherit?: boolean;
	underline?: boolean;
	active?: boolean;
	children: React.ReactNode;
	className?: string;
}
export default function Link({
	to,
	out,
	children,
	className,
	underline,
	active,
	...props
}: Props) {
	return (
		<Clickable
			className={clsx(className, 'inline-flex items-center', {
				underline: underline,
				'text-primary hover:text-secondary': active === undefined,
			})}
			to={to}
			out={out}
			{...props}
		>
			{children}
		</Clickable>
	);
}
