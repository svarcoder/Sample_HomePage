import { NextImage } from "@/shared/image/NextImage";
import React, { useState } from "react";
import {
	Bottom,
	BottomWrap,
	HamSection,
	HeaderMain,
	HeaderWrap,
	Title,
	VotingButton,
	VotingTitle,
	Wallet,
	WalletSection,
} from "./style";
import StarIcon from "@/assets/images/star.svg";
import WalletIcon from "@/assets/images/vector.svg";
import HamIcon from "@/assets/images/ham.png";
import Menu from "./burger";

const Index = ({ ShowFooter }: any) => {
	const [show, setShow] = useState<boolean>(false);

	return (
		<>
			<HeaderWrap>
				<HeaderMain>
					<HamSection onClick={() => setShow(!show)}>
						<NextImage src={HamIcon} alt='' className='hamburger' />
					</HamSection>
					<WalletSection>
						<NextImage src={StarIcon} alt='Star' />
						<Wallet>
							<NextImage src={WalletIcon} alt='Wallet' />
							<Title>{"qwddf..12f234"}</Title>
						</Wallet>
					</WalletSection>
				</HeaderMain>
				{ShowFooter && (
					<BottomWrap>
						<Bottom>
							<VotingTitle>
								Voting Power Used: <span>0%</span>
							</VotingTitle>
							<VotingButton>Vote</VotingButton>
						</Bottom>
					</BottomWrap>
				)}

				{show && <Menu show={show} setShow={setShow} />}
			</HeaderWrap>
		</>
	);
};

export default Index;
