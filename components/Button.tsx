import clsx from 'clsx';
import Clickable, { Props as ButtonOrLinkProps } from './Clickable';

export interface Props extends ButtonOrLinkProps {
	variant?:
		| 'brand'
		| 'accent'
		| 'error'
		| 'success'
		| 'outline'
		| 'primary'
		| 'inherit';
	loading?: boolean;
	stopPropagation?: boolean;
}

export default function Button({
	children,
	to,
	onClick,
	variant = 'brand',
	loading = false,
	className,
	stopPropagation,
	...props
}: Props) {
	return (
		<Clickable
			className={clsx(
				className,
				'inline-flex justify-center items-center px-4 py-2 text-sm font-medium border border-tansparent rounded-md shadow-sm focus:outline-none disabled:opacity-50 disabled:cursor-default',
				{
					'bg-brand-500 text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500':
						variant === 'brand',
					'text-brand-500 focus:ring-1 focus:ring-text-primary':
						variant === 'inherit',
					'text-primary bg-accent hover:bg-black hover:text-white ':
						variant === 'accent',
					'text-primary bg-primary ring-1 ring-accent hover:ring-black dark:hover:ring-white':
						variant === 'outline',
					'text-error bg-secondary hover:bg-error hover:text-white focus:ring-1 focus:ring-error ring-1 ring-accent ':
						variant === 'error',
					'text-success bg-secondary hover:bg-success hover:text-black focus:ring-1 focus:ring-success ring-1 ring-accent ':
						variant === 'success',
					'text-white bg-black hover:bg-primary hover:text-primary hover:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:hover:bg-primary disabled:hover:bg-black disabled:hover:text-white':
						variant === 'primary',
				},
			)}
			to={to}
			onClick={(e: any) => {
				if (stopPropagation) return e.stopPropagation();
				onClick ? onClick(e) : undefined;
			}}
			{...props}
		>
			{children}
			{loading && (
				<svg
					className="w-5 h-5 ml-2 fill-current animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" />
				</svg>
			)}
		</Clickable>
	);
}
