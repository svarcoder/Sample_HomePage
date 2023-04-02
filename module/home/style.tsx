import styled from "styled-components";

export const MainWrap = styled.div`
	padding-top: 150px;
	padding-left: 225px;
	padding-right: 20px;
	min-height: 100vh;

	@media (max-width: 1024px) {
		padding-left: 25px;
		padding-right: 25px;
	}

	@media (max-width: 480px) {
		padding-left: 15px;
		padding-right: 15px;
	}
`;
export const Button = styled.button<{
	background?: boolean;
	background2?: boolean;
	buttonShow?: boolean;
}>`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 25px;
	background: none;
	outline: none;
	border: ${({ background }) =>
		background ? "1px solid #665AA6" : "1px solid #ffffff"};
	padding: 5px 30px;
	border-radius: 30px;
	float: right;
	text-align: center;
	color: #ffffff;
	background: ${({ background, background2 }) =>
		background ? "#665AA6" : background2 ? "rgba(102, 90, 166, 0.2)" : ""};

	@media (max-width: 1200px) {
		padding: ${({ buttonShow }) => (buttonShow ? "5px 12px;" : "")};
	}

	@media (max-width: 1300px) {
		font-size: 12px;
		padding: ${({ buttonShow }) => (buttonShow ? "5px 12px;" : "")};
	}
`;
export const MainHeader = styled.div`
	margin-top: 70px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 2rem;
	color: #ffffff;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(1, 100%);
		grid-row-gap: 2rem;
	}
`;
export const Element = styled.div`
	border-radius: 20px;
	padding: 25px;
	border: 1px solid #000000;
	background: #000000;
`;
export const Title = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 800;
	font-size: 27px;
	line-height: 33px;
	color: #ffffff;

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;
export const ChildWrap = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 9rem);
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1em;
	margin-top: 10px;

	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const Child = styled.div`
	border-left: 10px solid #665aa6;
	padding: 15px;
	margin: 20px 0px;
`;
export const ChildTitle = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	color: #ffffff;
	margin-bottom: 12px;

	@media (max-width: 1300px) {
		font-size: 16px;
	}
`;
export const ChildDesc = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 29px;
	text-transform: capitalize;
	color: #ffffff;

	span {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;

		@media (max-width: 1300px) {
			font-size: 12px;
		}
	}

	@media (max-width: 1300px) {
		font-size: 22px;
	}
`;
export const TitleWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

export const ElementBodyWrap = styled(TitleWrap)`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 1024px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const Desc = styled.div<{ underline?: boolean; margin?: boolean }>`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	margin-right: ${({ margin }) => (margin ? "10px" : "")};
	text-align: ${({ underline }) => (underline === false ? "" : "right")};
	letter-spacing: -0.02em;
	text-decoration-line: ${({ underline }) =>
		underline === false ? "" : "underline"};
	color: #ffffff;
	text-transform: capitalize;

	@media (max-width: 480px) {
		font-size: 10px;
	}
`;

export const CheckBoxWrapper = styled.div`
	position: relative;
	margin-left: 15px;
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 50px;
	height: 27px;
	border-radius: 15px;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 21px;
		height: 21px;
		margin: 3px;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 50px;
	height: 27px;

	&:checked + ${CheckBoxLabel} {
		background: #4fbe79;
		&::after {
			content: "";
			display: block;
			border-radius: 50%;
			width: 21px;
			height: 21px;
			margin-left: 26px;
			transition: 0.2s;
		}
	}
`;
export const InputWrap = styled.div<{ float?: any; width?: boolean }>`
	position: relative;
	margin-left: 35px;
	float: ${({ float }) => (float ? float : "")};
	width: ${({ width }) => (width ? "" : "13.5%")};

	img {
		position: absolute;
		top: 29%;
		right: 8%;
	}
`;
export const Input = styled.input<{ inputvalult?: any }>`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	border: ${({ inputvalult }) =>
		inputvalult ? "1px solid #645AA1" : "1px solid #ffffff"};
	border-radius: ${({ inputvalult }) => (inputvalult ? "20px" : "40px")};
	color: #f3f5fd;
	background: none;
	padding: 12px;

	:focus {
		border-color: inherit;
		-webkit-box-shadow: none;
		box-shadow: none;
		outline: none;
	}

	::placeholder {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: ${({ inputvalult }) => (inputvalult ? "500" : "400")};
		font-size: ${({ inputvalult }) => (inputvalult ? "16px" : "14px")};
		line-height: ${({ inputvalult }) => (inputvalult ? "20px" : "17px")};

		color: #f3f5fd;
	}
`;

export const BodyWrap = styled.div`
	margin-top: 40px;
`;
export const BodyMain = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;
export const BodyChild = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const Pools = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;

	img {
		margin-right: 10px;
		margin-left: 10px;
	}
`;
export const Block = styled.div<{ color: string }>`
	background: ${({ color }) => (color ? color : "")};
	border-radius: 1px;
	width: 15px;
	height: 15px;
`;
export const VotingPoll = styled.div<{ incentive?: boolean }>`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	width: ${({ incentive }) => (incentive ? "100%" : "150px")};

	img {
		margin-right: 10px;
	}

	@media (max-width: 800px) {
		width: ${({ incentive }) => (incentive ? "250px" : "150px")};
	}
`;

export const Range = styled.input`
	margin-right: 10px;
	-webkit-appearance: none;
	width: 100%;
	height: 7px;
	border-radius: 100px;
	background: #e4e3fb;
	outline: none;
	opacity: 0.7;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;

	:hover {
		opacity: 1;
	}

	::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;

		border-radius: 50%;
		background: #5541bf;
		cursor: pointer;
	}

	::-moz-range-thumb {
		width: 20px;
		height: 20px;

		border-radius: 50%;
		background: #5541bf;
		cursor: pointer;
	}
`;

export const IncentivesButton = styled.div``;

export const TableColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ChartHeader = styled.div`
	height: 200px;
	width: 200px;
	margin-right: 50px;

	@media (max-width: 1024px) {
		margin-right: 0;
	}
`;

export const TableHeader = styled.div`
	width: 50%;

	@media (max-width: 480px) {
		width: 100%;
	}
`;

export const VotingTableHeader = styled.div`
	overflow-y: hidden;
	overflow-x: auto;

	&::-webkit-scrollbar {
		height: 0.8rem;
	}

	&::-webkit-scrollbar-track {
		background: rgba(black, 0.1);
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(white, 0.6);
		border-radius: 5px;
		border: none;
	}
`;
