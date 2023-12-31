import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto p-4 py-20">
        <h1 className="text-4xl font-semibold mb-4">
          Welcome to our MCQ Test Website
        </h1>
        <p className="text-lg mb-8">
          Test your knowledge with our multiple choice questions.
        </p>
        <div className="text-right">
          <Link
            href="/quiz"
            className="bg-lime-400 text-gray-800 py-2 px-4 rounded-lg text-lg hover:bg-lime-500 ml-auto font-semibold"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
