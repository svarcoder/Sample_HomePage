import React from "react";
import Header from "../header/index";
import SideBar from "../sidebar/index";
import {
	BodyChild,
	BodyMain,
	BodyWrap,
	Button,
	Child,
	ChildDesc,
	ChildTitle,
	ChildWrap,
	Desc,
	Element,
	ElementBodyWrap,
	MainHeader,
	MainWrap,
	Title,
	TitleWrap,
} from "./style";
import { Donut } from "./chart";
import { Table } from "./table";
import { Toggle } from "./toggle";
import { InputCom } from "./input";
import { VotingTable } from "./votingTable";

const index = () => {
	return (
		<>
			<Header ShowFooter={true} />
			<SideBar />
			<MainWrap>
				<Button>Back</Button>
				<MainHeader>
					<Element>
						<Title>Emission Details</Title>
						<ChildWrap>
							<Child>
								<ChildTitle>Voting Ends in</ChildTitle>
								<ChildDesc>
									10 <span>D</span> 21 <span>H</span> 24 <span>M</span>
								</ChildDesc>
							</Child>
							<Child>
								<ChildTitle>Your Emission</ChildTitle>
								<ChildDesc>05 HARBOR</ChildDesc>
							</Child>
							<Child>
								<ChildTitle>My Voting Power</ChildTitle>
								<ChildDesc>12345 veHarbor</ChildDesc>
							</Child>
							<Child>
								<ChildTitle>Week 1 Total Emission</ChildTitle>
								<ChildDesc>25 HARBOR</ChildDesc>
							</Child>
						</ChildWrap>
					</Element>
					<Element>
						<TitleWrap>
							<Title>Emission Distribution</Title>
							<Desc>View All</Desc>
						</TitleWrap>
						<ElementBodyWrap>
							<Donut />
							<Table />
						</ElementBodyWrap>
					</Element>
				</MainHeader>

				<BodyWrap>
					<BodyMain>
						<Title>Emission Voting</Title>
						<BodyChild>
							<ChildTitle>Hide zero balances</ChildTitle>
							<Toggle />
							<InputCom width={true} />
						</BodyChild>
					</BodyMain>
					<VotingTable />
				</BodyWrap>
			</MainWrap>
		</>
	);
};

export default index;
