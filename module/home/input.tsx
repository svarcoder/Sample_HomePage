import { NextImage } from "@/shared/image/NextImage";
import { Input, InputWrap } from "./style";
import Search from "@/assets/images/search.svg";

export function InputCom({ width, float, inputvalult }: any) {
	return (
		<InputWrap float={float} width={width}>
			<Input placeholder='Search...' inputvalult={inputvalult} />
			<NextImage src={Search} alt='Search' />
		</InputWrap>
	);
}
