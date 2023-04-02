import CustomTable from "@/shared/customTable";
import { AllColumns } from "./data";
import styled from "styled-components";
import { IncentiveHeader } from "./style";

export function RewardsTable({ RewardData }: any) {
	return (
		<IncentiveHeader>
			<CustomTable data={RewardData} columns={AllColumns} padding={true} />
		</IncentiveHeader>
	);
}
