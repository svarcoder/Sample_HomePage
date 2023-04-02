import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./style";

export function Toggle() {
	return (
		<CheckBoxWrapper>
			<CheckBox id='checkbox' type='checkbox' />
			<CheckBoxLabel htmlFor='checkbox' />
		</CheckBoxWrapper>
	);
}
