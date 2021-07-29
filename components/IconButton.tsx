import clsx from 'clsx';
import Clickable, { Props as ButtonOrLinkProps } from './Clickable';

interface Props extends ButtonOrLinkProps {}

export function IconButton({ onClick, children, className, ...props }: Props) {
	return (
		<Clickable
			onClick={onClick}
			className={clsx(
				'inline-flex items-center md:p-1 rounded-full hover:ring-4 hover:ring-accent hover:bg-accent focus:outline-none',
				className,
			)}
			{...props}
		>
			{children}
		</Clickable>
	);
}
