"use client";

import React, { useState, useEffect } from "react";
import { IoSendSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
	const [formData, setFormData] = useState({
		from_name: "",
		email_id: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	useEffect(() => {
		AOS.init();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				formData,
				process.env.REACT_APP_EMAILJS_USER_ID
			)
			.then((response) => {
				setSubmitStatus("success");
				setFormData({
					from_name: "",
					email_id: "",
					message: "",
				});
			})
			.catch((error) => {
				setSubmitStatus("error");
				console.error(error);
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<div
			name="contact"
			className="w-full min-h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-24 sm:py-32"
		>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold inline-block border-b-4 border-[#00FFCA] pb-2 mb-4">
						Contact
					</h2>
					<p className="text-lg sm:text-xl mt-4">
						Get in touch or shoot me an email directly at{" "}
						<a
							href="mailto:divyanshsrathore13@gmail.com"
							className="font-bold text-[#00FFCA] hover:underline"
						>
							divyanshsrathore13@gmail.com
						</a>
					</p>
				</div>

				<div
					className="bg-[#2E0F59] rounded-2xl shadow-[inset_-8px_-8px_16px_#1D0A3B,_inset_8px_8px_16px_#3F1477] p-8 sm:p-12"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="from_name"
								className="block text-sm font-medium mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="from_name"
								name="from_name"
								value={formData.from_name}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 rounded-lg bg-[#3A1078] border border-[#4A2088] focus:outline-none focus:ring-2 focus:ring-[#00FFCA] transition duration-200"
								placeholder="Your name"
							/>
						</div>
						<div>
							<label
								htmlFor="email_id"
								className="block text-sm font-medium mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email_id"
								name="email_id"
								value={formData.email_id}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 rounded-lg bg-[#3A1078] border border-[#4A2088] focus:outline-none focus:ring-2 focus:ring-[#00FFCA] transition duration-200"
								placeholder="your.email@example.com"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={6}
								value={formData.message}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 rounded-lg bg-[#3A1078] border border-[#4A2088] focus:outline-none focus:ring-2 focus:ring-[#00FFCA] transition duration-200 resize-none"
								placeholder="Your message here..."
							></textarea>
						</div>
						<div className="flex justify-center sm:justify-start">
							<button
								type="submit"
								disabled={isSubmitting}
								className={`
                  flex items-center justify-center px-6 py-3 rounded-lg text-lg font-semibold
                  transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2E0F59] focus:ring-[#00FFCA]
                  ${
										isSubmitting
											? "bg-gray-400 cursor-not-allowed"
											: "bg-[#00FFCA] text-[#3A1078] hover:bg-[#00E6B5]"
									}
                `}
							>
								{isSubmitting ? (
									<svg
										className="animate-spin h-5 w-5 mr-3"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								) : (
									<>
										Send Message
										<IoSendSharp className="ml-2" />
									</>
								)}
							</button>
						</div>
					</form>
					{submitStatus === "success" && (
						<div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
							Message sent successfully!
						</div>
					)}
					{submitStatus === "error" && (
						<div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
							Failed to send message. Please try again.
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
