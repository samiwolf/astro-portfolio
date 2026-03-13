import { useState } from "react";

export default function DownloadCVButton() {
	const [isDownloading, setIsDownloading] = useState(false);
	const [error, setError] = useState("");

	async function handleDownload() {
		try {
			setIsDownloading(true);
			setError("");
			const response = await fetch("/cv.pdf");
			if (!response.ok) {
				throw new Error("Failed to fetch CV");
			}
			const blob = await response.blob();
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = "MD-Samiul-Islam-Siddiqui-CV.pdf";
			document.body.appendChild(link);
			link.click();
			link.remove();
			URL.revokeObjectURL(url);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong");
		} finally {
			setIsDownloading(false);
		}
	}

	return (
		<div className="flex flex-col items-center gap-2">
			<button
				onClick={handleDownload}
				disabled={isDownloading}
				className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
			>
				{isDownloading ? "Preparing PDF..." : "Download CV (PDF)"}
			</button>
			{error && <p className="text-sm text-red-600">{error}</p>}
		</div>
	);
}
