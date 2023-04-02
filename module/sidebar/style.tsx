import styled from "styled-components";
import Sidebar from "../../assets/images/sidebar.svg";

export const SideWrap = styled.div`
	position: fixed;
	z-index: 2;
	height: 100%;
	background-image: url(${Sidebar?.src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1024px) {
		display: none;
	}
`;

export const Logo = styled.div`
	text-align: center;
	padding: 20px;
	margin-top: 22px;
`;

export const Title = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	color: #ffffff;
`;

export const Element = styled.div<{ active?: boolean }>`
	width: 100%;
	padding: ${({ active }) => (active ? "22px" : "10px")};
	text-align: center;
	background: ${({ active }) => (active ? "#000000" : "")};
	border-left: ${({ active }) => (active ? "8px solid #C5B2DB" : "")};

	img {
		margin-bottom: 5px;
	}
`;

export const Footer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin-bottom: 22px;

	img {
		height: 19.25px;
		width: 22.16px;
		margin-right: 5px;
	}
`;
