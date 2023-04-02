import React, { Fragment } from "react";
import { Element, Footer, Logo, SideWrap, Title } from "./style";
import { NextImage } from "@/shared/image/NextImage";
import LogoIcon from "@/assets/images/logo.svg";
import Dashboard from "@/assets/images/dashboard.svg";
import Home from "@/assets/images/home.svg";
import Asset from "@/assets/images/asset.svg";
import Mint from "@/assets/images/mint.svg";
import Earn from "@/assets/images/earn.svg";
import Auction from "@/assets/images/auction.svg";
import More from "@/assets/images/more.svg";
import Discord from "@/assets/images/discord.svg";
import Git from "@/assets/images/git.svg";
import Twitter from "@/assets/images/twiter.svg";
import Medium from "@/assets/images/medium.svg";
import Telegram from "@/assets/images/telegram.svg";
import Linkedin from "@/assets/images/linkedin.svg";
import Dot from "@/assets/images/dots.svg";
import { useRouter } from "next/router";

export const ElementDocument = [
	{
		id: 1,
		img: Dashboard,
		name: "DASHBOARD",
	},
	{
		id: 2,
		img: Home,
		name: "MY POSITIONS",
	},
	{
		id: 3,
		img: Asset,
		name: "ASSETS",
	},
	{
		id: 4,
		img: Mint,
		name: "MINT",
	},
	{
		id: 5,
		img: Earn,
		name: "EARN",
	},
	{
		id: 6,
		img: Auction,
		name: "AUCTIONS",
	},
	{
		id: 7,
		img: More,
		name: "More",
	},
];

export const FooterElement = [
	{
		id: 1,
		img: Discord,
	},
	{
		id: 2,
		img: Git,
	},
	{
		id: 3,
		img: Twitter,
	},
	{
		id: 4,
		img: Medium,
	},
	{
		id: 5,
		img: Telegram,
	},
	{
		id: 6,
		img: Linkedin,
	},
	{
		id: 7,
		img: Dot,
	},
];

const Index = () => {
	const router = useRouter();

	return (
		<>
			<SideWrap>
				<Logo onClick={() => router.push("/")}>
					<NextImage src={LogoIcon} alt='Logo' />
				</Logo>
				{ElementDocument.map((item, i) => (
					<Element
						key={item?.id}
						active={
							router.asPath === "/mint"
								? i === 3
									? true
									: false
								: i === 6
								? true
								: false
						}>
						<NextImage src={item?.img} alt='Logo' />
						<Title>{item?.name}</Title>
					</Element>
				))}

				<Footer>
					{FooterElement.map((data) => (
						<Fragment key={data?.id}>
							<NextImage src={data?.img} alt='Icon' />
						</Fragment>
					))}
				</Footer>
			</SideWrap>
		</>
	);
};

export default Index;
