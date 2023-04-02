import styled from "styled-components";

export const HeaderWrap = styled.div`
	background: #423c6c;
	position: fixed;
	width: 100%;
	z-index: 1;
`;
export const HeaderMain = styled.div`
	display: flex;
	justify-content: end;
	flex-direction: row;
	align-items: center;
	padding: 37px 50px;

	@media (max-width: 1024px) {
		padding: 37px 10px;
		justify-content: space-between;
	}
	img {
		height: 28.38px;
		width: 28.38px;
	}
	.hamburger {
		display: none;
		@media (max-width: 1024px) {
			display: block;
		}
	}
`;
export const Wallet = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #665aa6;
	border-radius: 30px;
	padding: 9px 20px;
	border: 1px solid #665aa6;
	margin-left: 14px;
`;
export const Title = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	line-height: 22px;
	margin-left: 15px;
	color: #ffffff;
`;

export const Bottom = styled.div`
	background: #c0bded;
	border: 1px solid #ffffff;
	border-radius: 50px;
	padding: 10px 85px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1024px) {
		padding: 6px 20px;
		flex-direction: column;
	}
`;
export const BottomWrap = styled.div`
	position: fixed;
	bottom: 30px;
	width: 100%;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const VotingTitle = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #1e1a3e;

	span {
		color: #0c9521;
		margin-left: 10px;
		margin-right: 10px;
	}
`;
export const VotingButton = styled.button`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	color: #ffffff;
	opacity: 0.8;
	background: #665aa6;
	outline: none;
	border: 1px solid #665aa6;
	padding: 10px 40px;
	border-radius: 30px;
	text-align: center;
	color: #ffffff;
	opacity: 0.8;
`;

export const StyledMenu = styled.nav<{ open?: any }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	background-color: #5b60ae;
	overflow-y: auto;
	overflow-x: hidden;
	-webkit-animation: linear infinite;
	-webkit-animation-name: animate;
	-webkit-animation-duration: 5s;

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

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	}

	.hamburger {
		height: 28.38px;
		width: 28.38px;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;

export const HamMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

export const HamSection = styled.div`
	transition: all 0.3s linear;
	position: relative;
	transform-origin: 1px;
`;

export const WalletSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
