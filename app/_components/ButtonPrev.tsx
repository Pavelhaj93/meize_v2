import ButtonArrow from "./ButtonArrow";

export default function ButtonPrev(props: { href?: string }) {
	return <ButtonArrow direction="previous" {...props} />;
}
