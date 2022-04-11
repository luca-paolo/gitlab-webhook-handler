import React from "react";

const Button = ({ children, iconRight, iconLeft, text, loading, disabled, onClick, className }) => {
	return (
		<button disabled={disabled ? disabled : loading} onClick={onClick} className={className + " relative"}>
			{children ? (
				<div className={loading && "opacity-0"}>
					{children}
				</div>
			) : (
				<div className={`flex items-center justify-center ${loading && "opacity-0"}`}>
					{iconLeft}
					{text}
					{iconRight}
				</div>
			)}
			{loading && (
				<div className="justify-center flex absolute">
					<svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
						<circle
							className="opacity-25" cx="12" cy="12" r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75" fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962
							7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				</div>
			)}
		</button>
	);
};

export default Button;
