import React from "react";
import { NextImage } from "../image/NextImage";
import {
	BodyTitle,
	CardBody,
	CardDesc,
	CardHead,
	CardMain,
	CardTitle,
	CardWrapper,
	Logo,
} from "./style";
import Atom from "@/assets/images/atom.svg";
import Fire from "@/assets/images/fire.svg";
import Ticker from "@/assets/images/ticker.svg";

const data: any = [
	{
		id: 1,
		title: "ATOM - A",
		img: Atom,
		emission: "2,134,545 Harbor",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
	{
		id: 2,
		title: "ATOM - A",
		img: Atom,
		emission: "-",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
	{
		id: 3,
		title: "ATOM - A",
		img: Atom,
		emission: "2,134,545 Harbor",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
	{
		id: 4,
		title: "ATOM - A",
		img: Atom,
		emission: "2,134,545 Harbor",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
	{
		id: 5,
		title: "ATOM - A",
		img: Atom,
		emission: "2,134,545 Harbor",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
	{
		id: 6,
		title: "ATOM - A",
		img: Atom,
		emission: "2,134,545 Harbor",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
	{
		id: 7,
		title: "ATOM - A",
		img: Atom,
		emission: "2,134,545 Harbor",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
	{
		id: 8,
		title: "ATOM - A",
		img: Atom,
		emission: "2,134,545 Harbor",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
	{
		id: 9,
		title: "ATOM - A",
		img: Atom,
		emission: "2,134,545 Harbor",
		APR: "345678%",
		ratio: "140.00%",
		fee: "1.00%",
		amount: "50 CMST",
		drawdownFee: "0.05%",
		ceiling: "250,000 CMST",
		minted: "44,49482 CMST",
	},
];

export function CardComp() {
	return (
		<>
			<CardWrapper>
				{data.map((item: any) => (
					<CardMain key={item?.id}>
						<Logo>
							<CardBody padding={true}>
								<BodyTitle margin={true}>{"Hot"}</BodyTitle>
								<NextImage src={Fire} alt='' />
							</CardBody>
						</Logo>

						<CardHead>
							<NextImage src={item?.img} alt='' />
							<CardTitle>{item?.title}</CardTitle>
						</CardHead>
						<CardBody>
							<CardDesc>
								<BodyTitle>{"Weekly Emission"}</BodyTitle>
								<BodyTitle background={true}>{item?.emission}</BodyTitle>
							</CardDesc>
							<CardDesc>
								<BodyTitle>{"APR"}</BodyTitle>
								<BodyTitle background={true}>{item?.APR}</BodyTitle>
							</CardDesc>
						</CardBody>
						<CardBody>
							<BodyTitle opacity={true}>
								{"Min Collateralization Ratio"}{" "}
								<NextImage src={Ticker} alt='' />
							</BodyTitle>
							<BodyTitle>{item?.ratio}</BodyTitle>
						</CardBody>
						<CardBody>
							<BodyTitle opacity={true}>
								{"Stability Fee"} <NextImage src={Ticker} alt='' />
							</BodyTitle>
							<BodyTitle>{item?.fee}</BodyTitle>
						</CardBody>
						<CardBody>
							<BodyTitle opacity={true}>
								{"Min. Borrow Amount"} <NextImage src={Ticker} alt='' />
							</BodyTitle>
							<BodyTitle>{item?.amount}</BodyTitle>
						</CardBody>
						<CardBody>
							<BodyTitle opacity={true}>
								{"Drawdown Fee"} <NextImage src={Ticker} alt='' />
							</BodyTitle>
							<BodyTitle>{item?.drawdownFee}</BodyTitle>
						</CardBody>
						<CardBody>
							<BodyTitle opacity={true}>
								{"Debt Ceiling"} <NextImage src={Ticker} alt='' />
							</BodyTitle>
							<BodyTitle>{item?.ceiling}</BodyTitle>
						</CardBody>
						<CardBody>
							<BodyTitle opacity={true}>
								{"Total CMST Minted"} <NextImage src={Ticker} alt='' />
							</BodyTitle>
							<BodyTitle>{item?.minted}</BodyTitle>
						</CardBody>
					</CardMain>
				))}
			</CardWrapper>
		</>
	);
}
