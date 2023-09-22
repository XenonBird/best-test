import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="bg-gray-100">
      {/* Profile Data */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-lg p-4 mb-4 flex justify-between gap-4 shadow-md">
          <div>
            <h1 className="text-2xl font-semibold mb-4">John Doe</h1>
            <div className="mb-4">
              <p>john@example.com</p>
              <p>New York</p>
            </div>
            <button className="text-gray-800 font-semibold py-2 px-4 border border-lime-500 rounded-lg hover:bg-lime-400">
              Edit Profile
            </button>
          </div>
          <div>
            <Image
              src="/icons/profile.svg"
              className="opacity-50"
              width="100"
              height="100"
              alt="Profile icon"
            />
          </div>
        </div>

        {/* Links to Other Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Link href="dashboard" className="w-full sm::max-w-[400px] border-2 border-lime-500 hover:bg-lime-400 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <p>View your dashboard.</p>
          </Link>
          <Link href="new" className="w-full sm::max-w-[400px] border-2 border-lime-500 hover:bg-lime-400 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">New Test</h2>
            <p>Create a new test.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
