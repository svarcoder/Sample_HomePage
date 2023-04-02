import CMOX from "@/assets/images/cmdx.svg";
import { Button, Desc, VotingPoll } from "../home/style";
import { NextImage } from "@/shared/image/NextImage";
import { ActionDiv } from "./style";

export const RewardData = [
	{
		id: 1,
		Week: "06",
		Img: CMOX,
		Assets: "4.40 CMDX",
	},
	{
		id: 2,
		Week: "06",
		Img: CMOX,
		Assets: "4.40 CMDX",
	},
	{
		id: 3,
		Week: "06",
		Img: CMOX,
		Assets: "4.40 CMDX",
	},
	{
		id: 4,
		Week: "06",
		Img: CMOX,
		Assets: "4.40 CMDX",
	},
	{
		id: 5,
		Week: "06",
		Img: CMOX,
		Assets: "4.40 CMDX",
	},
];

export const AllColumns = [
	{
		Header: "Week",
		accessor: "Week",
		Cell: ({ value }: any) => value,
	},
	{
		Header: "Assets",
		accessor: "Assets",
		Cell: ({ row, value }: any) => (
			<VotingPoll incentive={true}>
				<NextImage src={row?.original?.Img} alt='' />
				<Desc underline={false} margin={true}>
					{value}
				</Desc>
				{value !== "-" && (
					<Button background2={true} buttonShow={true}>
						View All
					</Button>
				)}
			</VotingPoll>
		),
	},
	{
		Header: "Action",
		accessor: "Action",
		Cell: ({ value }: any) =>
			!value ? (
				<ActionDiv>
					<Button background={true}>Claim</Button>
				</ActionDiv>
			) : (
				"-"
			),
	},
];
