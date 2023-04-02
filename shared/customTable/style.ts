import styled from "styled-components";

export const CustumTableTag = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0px 18px;
`;

export const CustumTableHeadTag = styled.thead`
	& :nth-child(2) {
		display: none;
	}
`;

export const CustumTableBodyTag = styled.tbody``;

export const CustumTableRowTag = styled.tr<{ tableData?: boolean }>`
	& :nth-child(2) {
		display: revert;
	}

	position: relative;
	overflow: hidden;

	::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: ${({ tableData }) => (tableData ? "#000000" : "")};
		opacity: ${({ tableData }) => (tableData ? "0.4" : "")};
		z-index: -1;
		border: ${({ tableData }) =>
			tableData ? "1px solid rgba(255, 255, 255, 0.7)" : ""};
		border-radius: ${({ tableData }) => (tableData ? "15px" : "")};
	}
`;
export const CustumTableHeadingTag = styled.th<{ padding?: boolean }>`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: ${({ padding }) => (padding ? "400" : "700")};
	font-size: ${({ padding }) => (padding ? "18px" : "16px")};
	line-height: ${({ padding }) => (padding ? "22px" : "20px")};
	color: #ffffff;
	padding: ${({ padding }) => (padding ? "15px" : "")};
	text-align: left;
`;

export const CustumTableDataTag = styled.td<{ padding?: boolean }>`
	font-family: "Montserrat";
	color: #fff;
	padding: ${({ padding }) => (padding ? "15px" : "")};
	text-align: left;

	span {
		margin-left: 50px;

		@media (max-width: 480px) {
			font-size: 10px;
			margin-left: 0;
		}
	}
`;
