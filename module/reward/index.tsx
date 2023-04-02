import React, { useEffect, useState } from "react";
import Header from "../header/index";
import SideBar from "../sidebar/index";
import { Button } from "../home/style";
import {
	ButtonDiv,
	ElementTitle,
	RewardBody,
	RewardButton,
	RewardDesc,
	RewardElement,
	RewardHeader,
	RewardTitle,
	RewardWrap,
} from "./style";
import { IntencentiveRewardsTable } from "./incentiveTable";
import CMOX from "@/assets/images/cmdx.svg";
import Harbur from "@/assets/images/hurbur.svg";
import { RewardsTable } from "./rewardsTable";

const Index = () => {
	const [loading1, setLoading1] = useState<boolean>(true);
	const [loading2, setLoading2] = useState<boolean>(true);
	const [data1, setData1] = useState<any>([]);
	const [data2, setData2] = useState([]);

	useEffect(() => {
		const incentiveData = async () => {
			setLoading1(true);
			try {
				let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/cosmwasm/wasm/v1/contract/comdex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsjn692k/smart/eyJjbGFpbWFibGVfYnJpYmUiOnsiYWRkcmVzcyI6ImNvbWRleDFtN2Z5cjZtNXYzbHdzbXc0cGtqenp5cXY2cDR3Z2FqM3RjYzB6NyIsImFwcF9pZCI6MX19`;
				const response = await fetch(url);
				const result = await response.json();
				setData1(result?.data);
				setLoading1(false);
			} catch (error) {
				setLoading1(false);
			}
		};

		const rewardData = async () => {
			setLoading2(true);
			try {
				let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/cosmwasm/wasm/v1/contract/comdex1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsjn692k/smart/eyJyZWJhc2UiOnsiYXBwX2lkIjoxLCJhZGRyZXNzIjoiY29tZGV4MW03ZnlyNm01djNsd3NtdzRwa2p6enlxdjZwNHdnYWozdGNjMHo3IiwiZGVub20iOiJ1aGFyYm9yIn19`;
				const response = await fetch(url);

				const result = await response.json();
				setData2(result?.data);
				setLoading2(false);
			} catch (error) {
				setLoading2(false);
			}
		};
		incentiveData();
		rewardData();
	}, []);

	const IncentiveData =
		data1.length > 0 &&
		data1.map((item: any) => ({
			id: item?.proposal_id + 1,
			Week: item?.proposal_id,
			Img: item?.total_incentive[0]?.amount && CMOX,
			Assets: item?.total_incentive[0]?.amount
				? `${item?.total_incentive[0]?.amount} ${item?.total_incentive[0]?.denom}`
				: "-",
			Action: item?.claimed,
		}));

	const RewardData =
		data2.length > 0 &&
		data2.map((item: any) => ({
			id: item?.proposal_id + 1,
			Week: item?.proposal_id,
			Img: item?.rebase && Harbur,
			Assets: item?.rebase ? `${item?.rebase} HARBOR` : "-",
			Action: item?.claimed,
		}));

	return (
		<>
			<Header ShowFooter={false} />
			<SideBar />
			<RewardWrap>
				<Button>Back</Button>
				<RewardHeader incentive={true}>
					<RewardTitle>Rebase Rewards </RewardTitle>
					<RewardDesc>
						{
							"$veHarbor is distributed to $veHARBOR holders in order to reduce the voting power dilution. Users can see their $veHarbor here."
						}
					</RewardDesc>
					<RewardButton>Take me there!</RewardButton>
				</RewardHeader>

				<RewardBody>
					<RewardElement>
						<ButtonDiv>
							<ElementTitle>External Incentives </ElementTitle>
							<Button background={true} buttonShow={true}>
								Claim All
							</Button>
						</ButtonDiv>
						{loading1 ? (
							<RewardDesc>{"Loading..."}</RewardDesc>
						) : data1.length <= 0 ? (
							<RewardDesc>{"No Items"}</RewardDesc>
						) : (
							<IntencentiveRewardsTable IncentiveData={IncentiveData} />
						)}
					</RewardElement>
					<RewardElement>
						<ButtonDiv>
							<ElementTitle>Emission Rewards</ElementTitle>
						</ButtonDiv>
						{loading2 ? (
							<RewardDesc>{"Loading..."}</RewardDesc>
						) : data2.length <= 0 ? (
							<RewardDesc>{"No Items"}</RewardDesc>
						) : (
							<RewardsTable RewardData={RewardData} />
						)}
					</RewardElement>
				</RewardBody>
			</RewardWrap>
		</>
	);
};

export default Index;
