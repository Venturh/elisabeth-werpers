import { CheckCircleIcon } from '@heroicons/react/solid';

type Props = {
	title: string;
	description?: string;
};
export function SuccessMessage({ title, description }: Props) {
	return (
		<div className="p-4 rounded-md bg-green-50">
			<div className="flex items-center">
				<CheckCircleIcon
					className="flex-shrink-0 w-5 h-5 text-green-400"
					aria-hidden="true"
				/>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-green-800">{title}</h3>
				</div>
			</div>
			{description && (
				<div className="mt-2 text-sm text-green-700">
					<p>{description}</p>
				</div>
			)}
		</div>
	);
}
