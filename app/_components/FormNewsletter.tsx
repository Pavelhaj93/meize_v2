import { useRouter } from "next/router";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { getLocaleStrings } from "../helpers/languages";
import Alert from "./Alert";
import Button from "./Button";
import Input from "./Input";

export default function FormNewsletter() {
	const lang = getLocaleStrings(useRouter().locale);

	const inputRef = useRef();
	const recaptchaRef = useRef();

	const [submitting, setSubmitting] = useState(false);
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(lang.alerts.emailError);
	const [success, setSuccess] = useState(false);

	const resetStatuses = () => {
		setSuccess(false);
		setError(false);
		setErrorMessage(lang.alerts.emailError);
	};

	const resetForm = () => {
		resetStatuses();
		setEmail("");
	};

	const handleInputChange = (e) => {
		const { value } = e.target;

		if (value) {
			setError(false);
		}

		setEmail(value);
	};

	const handleInputBlur = () => {
		setError(false);
	};

	const showError = (message) => {
		setSuccess(false);
		setError(true);
		setErrorMessage(message);
		inputRef.current.focus();
	};

	const showSuccess = () => {
		setEmail("");
		setError(false);
		setSuccess(true);

		setTimeout(() => {
			resetForm();
		}, 3000);
	};

	const onReCAPTCHAChange = async (captchaCode) => {
		if (!captchaCode) {
			return;
		}

		setSubmitting(true);

		const data = {
			email,
			message: "NEWSLETTER",
			access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
		};

		fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				res.success === true ? showSuccess() : showError(res.message);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		resetStatuses();

		if (!email) {
			showError(lang.alerts.emailError);
			return;
		}

		recaptchaRef.current.execute();
	};

	return (
		<form
			action=""
			className="relative w-full flex items-stretch h-full"
			onSubmit={handleSubmit}
			noValidate={true}
		>
			<ReCAPTCHA
				ref={recaptchaRef}
				size="invisible"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
				onChange={onReCAPTCHAChange}
			/>
			<div className="relative flex-1">
				<Input
					type="email"
					placeholder={lang.common.yourEmail}
					value={email}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
					ref={inputRef}
					className="border-r-0"
					autoComplete="email"
				/>

				<Alert
					className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 max-w-[400px]"
					active={error}
				>
					{errorMessage}
				</Alert>

				<Alert
					className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 max-w-[400px]"
					theme="success"
					active={success}
				>
					{lang.alerts.newsletterSuccess}
				</Alert>
			</div>
			<Button
				type="submit"
				theme="secondary"
				size="small"
				textSize="tiny"
				className="max-w-[150px]"
				padding="none"
			>
				{lang.common.subscribe}
			</Button>
		</form>
	);
}
