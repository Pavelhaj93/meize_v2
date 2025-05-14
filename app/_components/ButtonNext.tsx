import ButtonArrow from "./ButtonArrow";

export default function ButtonNext(props: { href?: string }) {
	return <ButtonArrow direction="next" {...props} />;
}
