import dynamic from "next/dynamic";

const MintPage = dynamic(() => import("@/module/vault/index"), {
	ssr: false,
});

export default function Mint() {
	return (
		<>
			<MintPage />
		</>
	);
}
