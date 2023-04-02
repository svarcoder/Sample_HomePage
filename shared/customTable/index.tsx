import React, { useMemo } from "react";
import { useTable } from "react-table";
import {
	CustumTableBodyTag,
	CustumTableDataTag,
	CustumTableHeadingTag,
	CustumTableHeadTag,
	CustumTableRowTag,
	CustumTableTag,
} from "./style";

interface ICustomTableProps {
	data: any;
	columns: any;
	scroll?: any;
	padding?: any;
	headingFontWeight?: string;
	headingWidth?: any;
}

const CustomTable = ({ data, columns, padding }: ICustomTableProps) => {
	const columnsData = useMemo(() => columns, [columns]);
	const body = useMemo(() => data, [data]);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable<any>({
			columns: columnsData,
			data: body,
		});

	return (
		<CustumTableTag {...getTableProps()}>
			<CustumTableHeadTag>
				{headerGroups.map((headerGroup, i) => (
					<CustumTableRowTag {...headerGroup.getHeaderGroupProps()} key={i}>
						{headerGroup.headers.map((column, index) => (
							<CustumTableHeadingTag
								{...column.getHeaderProps()}
								key={index}
								padding={padding}>
								<div>{column.render("Header")}</div>
							</CustumTableHeadingTag>
						))}
					</CustumTableRowTag>
				))}
			</CustumTableHeadTag>
			<CustumTableBodyTag {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<CustumTableRowTag {...row.getRowProps()} key={i} tableData={true}>
							{row.cells.map((cell, index) => {
								return (
									<CustumTableDataTag
										{...cell.getCellProps()}
										key={index}
										padding={padding}>
										<div>{cell.render("Cell")}</div>
									</CustumTableDataTag>
								);
							})}
						</CustumTableRowTag>
					);
				})}
			</CustumTableBodyTag>
		</CustumTableTag>
	);
};

export default CustomTable;
