import React from "react";
import "primeicons/primeicons.css";
import {Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="w-full px-4 py-3 bg-white shadow-md flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
			{/* Logo */}
			<h1 className="text-[#8B653E] font-semibold text-2xl md:text-3xl">medu</h1>

			{/* Center content */}
			<div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto md:flex-1 md:justify-center">
				{/* Location */}
				<div className="flex items-center gap-2 text-[#8B653E]">
					<i className="pi pi-map-marker"></i>
					<p className="text-sm sm:text-base">Nigeria</p>
				</div>

				{/* Search input */}
				<div className="relative w-full sm:w-[250px] md:w-[300px]">
					<input
						type="text"
						placeholder="Search for things..."
						className="w-full border border-gray-300 rounded-md p-2 pr-10 text-sm"
					/>
					<i className="pi pi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></i>
				</div>

				{/* Search Button */}
				<button className="bg-[#8B653E] text-white px-4 py-2 rounded-md text-sm">
					Search
				</button>
			</div>

			{/* Right content */}
			<div className="flex items-center justify-end gap-3 w-full md:w-auto">
				<Link to="/login" className="flex items-center gap-2 cursor-pointer text-[#8B653E] text-sm">
					<i className="pi pi-user"></i>
					<p>Log In</p>
				</Link>
				<button className="bg-[#8B653E] text-white px-4 py-2 rounded-md text-sm">
					Start to sell
				</button>
			</div>
		</div>
	);
}
