import React from "react";

export default function Footer() {
	return (
		<div className="mt-10">
			{/* Top Footer */}
			<div className="bg-[#8B653E] text-white w-full px-6 py-10 flex flex-col md:flex-row flex-wrap justify-between items-start gap-8">
				{/* Section 1: Policies */}
				<ul className="space-y-2 text-sm">
					<li>About us</li>
					<li>Billing Policy</li>
					<li>Privacy Policy</li>
					<li>Cookie Policy</li>
					<li>Terms & Conditions</li>
				</ul>

				{/* Section 2: Support */}
				<ul className="space-y-2 text-sm">
					<li>Contact us</li>
					<li>FAQ</li>
					<li>Safety tips</li>
					<li className="flex items-center gap-2">
						<i className="pi pi-envelope"></i>
						<span>support@medu.ng</span>
					</li>
				</ul>

				{/* Section 3: Social Media */}
				<div className="space-y-2 text-sm">
					<div className="flex items-center gap-2">
						<i className="pi pi-facebook"></i>
						<span>@medu.ng</span>
					</div>
					<div className="flex items-center gap-2">
						<i className="pi pi-twitter"></i>
						<span>@medu.ng</span>
					</div>
					<div className="flex items-center gap-2">
						<i className="pi pi-instagram"></i>
						<span>@medu.ng</span>
					</div>
				</div>

				{/* Section 4: Branding */}
				<div className="text-center md:text-left space-y-2">
					<p className="text-3xl font-semibold">medu</p>
					<p className="text-sm">Download medu free app</p>
				</div>

				{/* Section 5: App Store Buttons */}
				<div className="flex gap-4">
					<div className="flex items-center gap-2 border border-white rounded-lg p-3">
						<i className="pi pi-apple text-xl"></i>
						<div>
							<p className="text-xs">Download the app</p>
							<p className="text-lg font-medium">Apple Store</p>
						</div>
					</div>
					<div className="flex items-center gap-2 border border-white rounded-lg p-3">
						<i className="pi pi-google text-xl"></i>
						<div>
							<p className="text-xs">Download the app</p>
							<p className="text-lg font-medium">Google Play</p>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="bg-[#623b14] h-[10vh] flex items-center justify-center">
				<p className="text-white text-sm">© 2025 medu.ng — All rights reserved.</p>
			</div>
		</div>
	);
}
