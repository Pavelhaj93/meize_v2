"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Alert from "./Alert";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

interface FormField {
	error: boolean;
	value: string;
	validate: (val: string) => boolean;
}

interface ChangeEvent {
	target: {
		value: string;
	};
}

interface FormData {
	name: FormField;
	email: FormField;
	message: FormField;
}

const defaultFormData: FormData = {
	name: {
		error: false,
		value: "",
		validate: (val) => !!val,
	},
	email: {
		error: false,
		value: "",
		validate: (val) => !!val && val.includes("@"),
	},
	message: {
		error: false,
		value: "",
		validate: (val) => !!val,
	},
};

export default function FormContact() {
	const t = useTranslations();

	const inputNameRef = useRef<HTMLInputElement>(null);
	const inputEmailRef = useRef<HTMLInputElement>(null);
	const inputMessageRef = useRef<HTMLTextAreaElement>(null);
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const [submitting, setSubmitting] = useState(false);

	const [name, setName] = useState(defaultFormData.name);
	const [email, setEmail] = useState(defaultFormData.email);
	const [message, setMessage] = useState(defaultFormData.message);

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const resetForm = () => {
		setName(defaultFormData.name);
		setEmail(defaultFormData.email);
		setMessage(defaultFormData.message);
	};

	const handleNameChange = (e: ChangeEvent) => {
		const value = e.target.value;
		setName({
			...name,
			value,
			error: !name.validate(value),
		});
	};

	const handleEmailChange = (e: ChangeEvent) => {
		const value = e.target.value;
		setEmail({
			...email,
			value,
			error: !email.validate(value),
		});
	};

	const handleMessageChange = (e: ChangeEvent) => {
		const value = e.target.value;
		setMessage({
			...message,
			value,
			error: !message.validate(value),
		});
	};

	const handleInputBlur = () => {
		removeErrors();
	};

	const removeErrors = () => {
		setName({ ...name, error: false });
		setEmail({ ...email, error: false });
		setMessage({ ...message, error: false });
	};

	const revalidateInputs = () => {
		if (!name.validate(name.value)) {
			setName({ ...name, error: true });
			inputNameRef?.current?.focus();
			return false;
		}

		if (!email.validate(email.value)) {
			setEmail({ ...email, error: true });
			inputEmailRef?.current?.focus();
			return false;
		}

		if (!message.validate(message.value)) {
			setMessage({ ...message, error: true });
			inputMessageRef?.current?.focus();
			return false;
		}

		return true;
	};

	const onReCAPTCHAChange = async (captchaCode: string | null) => {
		if (!captchaCode) {
			return;
		}

		setSubmitting(true);

		const data = {
			name: name.value,
			email: email.value,
			message: message.value,
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
				setSubmitting(false);
				recaptchaRef?.current?.reset();

				if (res.success === true) {
					setSuccess(true);
					resetForm();

					setTimeout(() => {
						setSuccess(false);
					}, 4000);
				} else {
					setError(true);
				}
			})
			.catch((error) => {
				console.error(error);
				setError(true);
				setSubmitting(false);
				recaptchaRef?.current?.reset();
			});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const validated = revalidateInputs();
		if (!validated) return;

		recaptchaRef?.current?.execute();
	};

	return (
		<form
			action=""
			className={cn("relative w-full dark:text-white", {
				"opacity-50 pointer-events-none": submitting,
			})}
			onSubmit={handleSubmit}
		>
			<ReCAPTCHA
				ref={recaptchaRef}
				size="invisible"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
				onChange={onReCAPTCHAChange}
			/>

			<div className="flex flex-col gap-6">
				<div className="relative flex flex-col gap-1">
					<label htmlFor="name" className={name.error ? "text-red-400" : ""}>
						{t("common.name")} *
					</label>
					<Input
						type="text"
						id="name"
						name="name"
						// placeholder={t("common.name")}
						value={name.value}
						onChange={handleNameChange}
						onBlur={handleInputBlur}
						ref={inputNameRef}
						error={name.error}
					/>
				</div>

				<div className="relative flex flex-col gap-1">
					<label htmlFor="email" className={email.error ? "text-red-400" : ""}>
						{t("common.email")} *
					</label>
					<Input
						type="text"
						id="email"
						name="email"
						// placeholder={t("common.email")}
						value={email.value}
						onChange={handleEmailChange}
						onBlur={handleInputBlur}
						ref={inputEmailRef}
						error={email.error}
					/>
				</div>

				<div className="relative flex flex-col gap-1">
					<label
						htmlFor="message"
						className={message.error ? "text-red-400" : ""}
					>
						{t("common.message")} *
					</label>
					<Textarea
						id="message"
						name="message"
						// placeholder={t("common.message")}
						value={message.value}
						onChange={handleMessageChange}
						onBlur={handleInputBlur}
						ref={inputMessageRef}
						error={message.error}
					/>
				</div>

				<div className="relative text-left">
					<Button type="submit" size="big" textSize="small" padding="big">
						{!submitting ? t("common.submit") : t("common.submitting")}
					</Button>

					<Alert
						className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2"
						active={error}
						arrow="left"
					>
						{t("alerts.commonError")}
					</Alert>

					<Alert
						className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2"
						theme="success"
						active={success}
						arrow="left"
					>
						{t("alerts.contactSuccess")}
					</Alert>
				</div>
			</div>
		</form>
	);
}
