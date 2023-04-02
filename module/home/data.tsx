import { NextImage } from "@/shared/image/NextImage";
import {
	Block,
	Desc,
	IncentivesButton,
	Pools,
	TableColumn,
	VotingPoll,
} from "./style";
import Atom from "@/assets/images/atom.svg";
import CMDX from "@/assets/images/cmdx.svg";
import { InputRange } from "./inputRange";

export const Data = [
	{
		id: 1,
		Pools: "ATOM-C",
		Img: Atom,
		Color: "#00AFB9",
		Vote: "23%",
	},
	{
		id: 2,
		Pools: "ATOM-A",
		Img: Atom,
		Color: "#FDFCDC",
		Vote: "23%",
	},
	{
		id: 3,
		Pools: "ATOM-B",
		Img: Atom,
		Color: "#00AFB9",
		Vote: "23% ",
	},
	{
		id: 4,
		Pools: "WETH-CMDX",
		Img: Atom,
		Color: "#F07167",
		Vote: "23% ",
	},
	{
		id: 5,
		Pools: "OSMO-CMDX",
		Img: Atom,
		Color: "#FED9B7",
		Vote: "23% ",
	},
];

export const Data2 = [
	{
		id: 1,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "0",
	},
	{
		id: 2,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "10",
	},
	{
		id: 3,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "50",
	},
	{
		id: 4,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "20",
	},
	{
		id: 5,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "10",
	},
	{
		id: 6,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "0",
	},
	{
		id: 7,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "0",
	},
	{
		id: 8,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "0",
	},
	{
		id: 9,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "0",
	},
	{
		id: 10,
		Pools: "ATOM-A",
		Img: Atom,
		Farmed: "13.09 CMST",
		Percent: "0.1%",
		TotalVote: "502.76",
		TotalDesc: "veHarbor",
		Incentives: "4.40 CMDX",
		IncentivesImg: CMDX,
		MyVote: "0.00 ",
		MyVoteDesc: "veHARBOR",
		Vote: "0",
	},
];

export const Columns = [
	{
		Header: "Vaults/Pools",
		accessor: "Pools",
		Cell: ({ row, value }: any) => (
			<Pools>
				<Block color={row?.original?.Color}></Block>
				<NextImage src={row?.original?.Img} alt='' />
				<Desc underline={false}>{value}</Desc>
			</Pools>
		),
	},
	{
		Header: "Vote",
		accessor: "Vote",
		Cell: ({ value }: any) => <Desc underline={false}>{value} </Desc>,
	},
];

export const Columns2 = [
	{
		Header: "Vaults/Pools",
		accessor: "Pools",
		Cell: ({ row, value }: any) => (
			<VotingPoll>
				<NextImage src={row?.original?.Img} alt='' />
				<Desc underline={false}>{value}</Desc>
			</VotingPoll>
		),
	},
	{
		Header: "My Borrowed/Farmed",
		accessor: "Farmed",
		Cell: ({ row, value }: any) => (
			<TableColumn>
				<Desc underline={false}>{value}</Desc>
				<span>{row?.original?.Percent}</span>
			</TableColumn>
		),
	},
	{
		Header: "Total Votes",
		accessor: "TotalVote",
		Cell: ({ row, value }: any) => (
			<VotingPoll>
				<Desc underline={false} margin={true}>
					{value}
				</Desc>
				<Desc underline={false}>{row?.original?.TotalDesc}</Desc>
			</VotingPoll>
		),
	},
	{
		Header: "External Incentives",
		accessor: "Incentives",
		Cell: ({ row, value }: any) => (
			<VotingPoll>
				<NextImage src={row?.original?.IncentivesImg} alt='' />
				<Desc underline={false} margin={true}>
					{value}
				</Desc>
				<IncentivesButton></IncentivesButton>
			</VotingPoll>
		),
	},
	{
		Header: "My Vote",
		accessor: "MyVote",
		Cell: ({ row, value }: any) => (
			<VotingPoll>
				<Desc underline={false} margin={true}>
					{value}
				</Desc>
				<Desc underline={false}>{row?.original?.MyVoteDesc}</Desc>
			</VotingPoll>
		),
	},
	{
		Header: "Vote",
		accessor: "Vote",
		Cell: ({ value }: any) => (
			<VotingPoll>
				<InputRange range={value} />
				<Desc underline={false}>{value}%</Desc>
			</VotingPoll>
		),
	},
];
