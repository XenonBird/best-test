import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <div className="max-w-6xl mx-auto p-4 py-20 ">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Oops! The page you are looking for doesn&apos;t exist.
        </p>
        <div className="text-right">
          <Link
            href="/"
            className="bg-lime-400 text-gray-800 py-2 px-4 rounded-lg text-lg hover:bg-lime-500 ml-auto font-semibold"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
