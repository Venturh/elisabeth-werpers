import { ExclamationCircleIcon } from '@heroicons/react/solid';

type Props = {
	title: string;
	description?: string;
};
export function ErrorMessage({ title, description }: Props) {
	return (
		<div className="p-4 rounded-md bg-red-50">
			<div className="flex items-center">
				<ExclamationCircleIcon
					className="flex-shrink-0 w-5 h-5 text-red-400"
					aria-hidden="true"
				/>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-red-800">{title}</h3>
				</div>
			</div>
			{description && (
				<div className="mt-2 text-sm text-red-700">
					<p>{description}</p>
				</div>
			)}
		</div>
	);
}
