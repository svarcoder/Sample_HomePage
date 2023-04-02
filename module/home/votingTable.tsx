import CustomTable from "@/shared/customTable";
import { Columns2, Data2 } from "./data";
import { VotingTableHeader } from "./style";

export function VotingTable() {
	return (
		<VotingTableHeader>
			<CustomTable data={Data2} columns={Columns2} padding={true} />
		</VotingTableHeader>
	);
}
