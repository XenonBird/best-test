export default function TeacherDashboard() {
  // Sample test data (replace with actual data from your backend)
  const tests = [
    {
      id: 1,
      title: "Math Quiz",
      date: "2023-09-30",
      questions: 20,
      attendees: 25,
      averageScore: 85,
    },
    {
      id: 2,
      title: "Science Quiz",
      date: "2023-10-05",
      questions: 15,
      attendees: 30,
      averageScore: 78,
    },
    // Add more test data as needed
  ];

  return (
    <main className="bg-gray-100">
      <div className="max-w-6xl container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">Taken tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <DataCard key={index} test={test} />
          ))}
        </div>
      </div>
    </main>
  );
}

function DataCard({ test }) {
	const date = new Date(test.date)
  return (
    <div
      key={test.id}
      className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-3"
    >
      <h2 className="text-xl font-semibold">{test.title}</h2>
      <table>
        <tr>
          <td>Date: </td>
          <td>{date.toLocaleDateString()}</td>
        </tr>
        <tr>
          <td>Questions: </td>
          <td>{test.questions}</td>
        </tr>
        <tr>
          <td>Attendees: </td>
          <td>{test.attendees}</td>
        </tr>
        <tr>
          <td>Average Score: </td>
          <td>{test.averageScore}%</td>
        </tr>
      </table>
      <button className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        More Details
      </button>
    </div>
  );
}
