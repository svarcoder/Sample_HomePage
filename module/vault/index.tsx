import React from "react";
import Header from "../header/index";
import SideBar from "../sidebar/index";
import { VaultTitle, VaultWrap } from "./style";
import { InputCom } from "../home/input";
import { CardComp } from "../../shared/card/index";

const index = () => {
	return (
		<>
			<Header ShowFooter={false} />
			<SideBar />
			<VaultWrap>
				<InputCom float={"right"} width={true} inputvalult={true} />
				<VaultTitle>Choose Your Vault Type</VaultTitle>
				<CardComp />
			</VaultWrap>
		</>
	);
};

export default index;
