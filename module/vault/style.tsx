import styled from "styled-components";

export const VaultWrap = styled.div`
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

export const VaultTitle = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 800;
	font-size: 28px;
	line-height: 34px;
	color: #ffffff;
	margin-top: 35px;

	@media (max-width: 480px) {
		font-size: 20px;
		margin-top: 50px;
	}
`;
