import dynamic from "next/dynamic";

const IncentivePage = dynamic(() => import("@/module/reward/index"), {
	ssr: true,
});

export default function Incentive() {
	return (
		<>
			<IncentivePage />
		</>
	);
}
