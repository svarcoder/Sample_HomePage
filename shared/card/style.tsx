import styled from "styled-components";
import CardBack from "../../assets/images/cardBack.svg";

export const CardWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1rem;
	color: white;
	margin: 20px 0px;

	@media (max-width: 1300px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 800px) {
		grid-template-columns: repeat(1, 100%);
	}
`;

export const CardMain = styled.div`
	background: #000000;
	position: relative;
	border: 1px solid rgba(255, 255, 255, 0.4);
	box-shadow: 0px 4px 14px 3px rgba(128, 99, 138, 0.1);
	border-radius: 20px;
	padding: 15px;
`;

export const CardHead = styled.div`
	display: flex;
	align-items: center;

	img {
		height: 78px;
		width: 78px;
		margin-right: 20px;

		@media (max-width: 480px) {
			height: 50px;
			width: 50px;
		}
	}
`;

export const CardTitle = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 800;
	font-size: 28px;
	line-height: 34px;
	color: #ffffff;

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

export const CardBody = styled.div<{ padding?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0px;
	padding-bottom: ${({ padding }) => (padding ? "12px" : "")};
`;

export const BodyTitle = styled.div<{
	opacity?: boolean;
	background?: boolean;
	margin?: boolean;
}>`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #ffffff;
	margin: ${({ background }) => (background ? "10px 0px" : "")};
	margin-right: ${({ margin }) => (margin ? "5px " : "")};
	background: ${({ background }) =>
		background
			? "linear-gradient(94.46deg, #6B34D2 0%, #DBC3EE 118.06%);"
			: ""};
	-webkit-background-clip: ${({ background }) => (background ? "text" : "")};
	-webkit-text-fill-color: ${({ background }) =>
		background ? "transparent" : ""};
	background-clip: ${({ background }) => (background ? "text" : "")};
	text-fill-color: ${({ background }) => (background ? "transparent" : "")};
	opacity: ${({ opacity }) => (opacity ? "0.7" : "1")};

	@media (max-width: 480px) {
		font-size: 13px;
	}
`;

export const Logo = styled.div`
	position: absolute;
	right: 0;
	top: -42px;
	background-image: url(${CardBack?.src});
	background-position: center;
	background-repeat: no-repeat;
	margin: 16px;
	padding: 18px;
	box-shadow: 0px 4px 4px rgba(206, 19, 231, 0.11);
`;

export const CardDesc = styled.div``;
