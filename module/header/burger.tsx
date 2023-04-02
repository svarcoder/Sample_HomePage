import React, { Fragment } from "react";
import { HamMenu, StyledMenu } from "./style";
import { NextImage } from "@/shared/image/NextImage";
import HamIcon from "@/assets/images/close.png";
import { ElementDocument, FooterElement } from "../sidebar";
import { Element, Footer, Title } from "../sidebar/style";
import { useRouter } from "next/router";
import LogoIcon from "@/assets/images/logo.svg";

const Menu = ({ show, setShow }: any) => {
	const router = useRouter();
	return (
		<StyledMenu open={show}>
			<HamMenu onClick={() => setShow(!show)}>
				<NextImage src={LogoIcon} alt='Logo' />
				<NextImage src={HamIcon} alt='Ham' className='hamburger' />
			</HamMenu>
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
		</StyledMenu>
	);
};
export default Menu;
