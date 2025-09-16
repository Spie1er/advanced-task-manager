import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#242424] px-6 text-center font-sans text-[#FECEAB]">
      {/* Illustration */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6 h-40 w-40 animate-bounce text-[#FF847C]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M9 9h.01M15 9h.01M12 15a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3z" />
      </svg>

      {/* Heading */}
      <h1 className="mb-3 text-6xl font-extrabold text-[#FF847C]">404</h1>
      <p className="mb-2 text-xl">
        Oops! We couldn’t find the page you’re looking for.
      </p>
      <p className="mb-6 text-sm text-[#99B898]">
        It might have been moved, deleted, or never existed.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center justify-center rounded-lg border border-[#99B898] bg-[#99B898]/20 px-6 py-3 text-lg font-bold text-[#FECEAB] transition hover:bg-[#FF847C] hover:text-white"
      >
        <span className="mr-2 text-xl">⬅️</span> Back to Home
      </Link>
    </div>
  );
}
