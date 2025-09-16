import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-6 text-center font-mono text-green-400">
      <h1 className="mb-4 animate-pulse text-6xl font-extrabold">
        404: Page Not Found
      </h1>
      <p className="mb-2 text-xl">
        “This is not the page you’re looking for...”
      </p>
      <p className="text-sm italic">– Obi-Wan Kenobi</p>

      <img
        src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
        alt="Obi-Wan Kenobi wave"
        className="mt-6 rounded-xl shadow-lg"
      />

      <Link
        to="/"
        className="mt-8 rounded-xl bg-yellow-500 px-6 py-3 text-lg font-semibold text-black transition hover:bg-yellow-400"
      >
        🚀 Return to Base
      </Link>
    </div>
  );
}
