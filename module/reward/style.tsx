import styled from "styled-components";
import Reward from "@/assets/images/reward.svg";

export const RewardWrap = styled.div`
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

export const RewardHeader = styled.div<{ incentive?: boolean }>`
	margin: 55px 0px;
	background-image: url(${Reward?.src});
	padding: 45px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: ${({ incentive }) => (incentive ? "cover" : "")};
	border-radius: 20px;

	@media (max-width: 480px) {
		padding: 35px;
	}
`;

export const RewardTitle = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 800;
	font-size: 32px;
	line-height: 126.8%;
	color: #ffffff;

	@media (max-width: 480px) {
		font-size: 22px;
	}
`;

export const RewardDesc = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 126.8%;
	margin: 10px 0px;
	letter-spacing: 0.06em;
	width: 60%;
	color: #ffffff;
	opacity: 0.85;

	@media (max-width: 480px) {
		font-size: 12px;
	}
`;

export const RewardButton = styled.button`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	background-color: #3b3079;
	text-align: center;
	border: 1px solid #3b3079;
	border-radius: 30px;
	padding: 10px 32px;
	color: #ffffff;

	@media (max-width: 480px) {
		padding: 5px 15px;
	}
`;

export const RewardBody = styled.div`
	margin: 30px 0px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(1, 100%);
	}

	@media (max-width: 1024px) {
		grid-template-columns: repeat(1, 100%);
	}
`;

export const RewardElement = styled.div``;

export const ActionDiv = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ButtonDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 14px;
`;

export const ElementTitle = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 800;
	font-size: 26px;
	line-height: 126.8%;
	color: #ffffff;

	@media (max-width: 480px) {
		font-size: 18px;
	}
`;

export const IncentiveHeader = styled.div`
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
