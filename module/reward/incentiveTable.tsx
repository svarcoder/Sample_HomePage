import CustomTable from "@/shared/customTable";
import { AllColumns } from "./data";
import { IncentiveHeader } from "./style";

export function IntencentiveRewardsTable({ IncentiveData }: any) {
	return (
		<IncentiveHeader>
			<CustomTable data={IncentiveData} columns={AllColumns} padding={true} />
		</IncentiveHeader>
	);
}
