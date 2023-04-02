import CustomTable from "@/shared/customTable";
import { Columns, Data } from "./data";
import { TableHeader } from "./style";

export function Table() {
	return (
		<TableHeader>
			<CustomTable data={Data} columns={Columns} padding={false} />
		</TableHeader>
	);
}
