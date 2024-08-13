import React, { useState, useEffect } from "react";
import { IoSendSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		from_name: "",
		email_id: "",
		message: "",
	});

	useEffect(() => {
		AOS.init();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				formData,
				process.env.REACT_APP_EMAILJS_USER_ID
			)
			.then((response) => {
				alert("Email sent successfully");
				setFormData({
					from_name: "",
					email_id: "",
					message: "",
				});
			})
			.catch((error) => {
				alert("Failed to send message");
				console.error(error);
			});
	};

	return (
		<div
			name="contact"
			className="w-full min-h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-24 sm:py-32"
		>
			<div className="flex flex-col justify-center items-center w-full h-full text-white px-4 sm:px-0">
				{/* Heading */}
				<p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#00FFCA]">
					Contact
				</p>
				{/* Description */}
				<p className="py-4 sm:py-6 text-center">
					Submit the form below or send me an email -{" "}
					<span className="font-bold">divyanshsrathore13@gmail.com</span>
				</p>

				{/* Form */}
				<form onSubmit={handleSubmit} className="w-full max-w-md sm:max-w-lg">
					<input
						type="text"
						placeholder="Name"
						name="from_name"
						value={formData.from_name}
						onChange={handleChange}
						className="bg-gray-100 text-gray-950 p-2 w-full rounded-md mb-4"
						data-aos="fade-down"
						data-aos-duration="600"
						data-aos-easing="linear"
					/>
					<input
						type="email"
						placeholder="Email"
						name="email_id"
						value={formData.email_id}
						onChange={handleChange}
						className="my-4 p-2 bg-gray-100 text-gray-950 w-full rounded-md"
						data-aos="fade-down"
						data-aos-duration="800"
						data-aos-easing="linear"
					/>
					<textarea
						name="message"
						placeholder="Message"
						rows="10"
						value={formData.message}
						onChange={handleChange}
						className="bg-gray-100 p-2 w-full text-gray-950 rounded-md"
						data-aos="fade-down"
						data-aos-duration="1000"
						data-aos-easing="linear"
					></textarea>

					{/* Send Message Button */}
					<div className="mt-4 flex justify-center">
						<button
							type="submit"
							className="text-white group border-2 px-6 py-3 my-2 flex items-center justify-center sm:justify-start hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
						>
							Send Message
							<span className="group-hover:translate-x-1 duration-300">
								<IoSendSharp className="ml-2 sm:ml-4" />
							</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
