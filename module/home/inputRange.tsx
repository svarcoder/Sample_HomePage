import { Range } from "./style";

export function InputRange({ range }: any) {
	return (
		<>
			<Range type='range' min='0' max='100' value={range} />
		</>
	);
}
