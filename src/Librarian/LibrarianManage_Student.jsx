import React, { useState } from 'react';

const initialStudents = [
  { studentId: "S2025", name: "Khushi Sharma", email: "khushi@example.com", status: "Active" },
  { studentId: "S2026", name: "Amit Roy", email: "amit@example.com", status: "Active" },
  { studentId: "S2027", name: "Neha Das", email: "neha@example.com", status: "Suspended" },
];

export default function StudentManagementPage() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSuspend = (studentId) => {
    setStudents(prev =>
      prev.map(student =>
        student.studentId === studentId
          ? { ...student, status: "Suspended" }
          : student
      )
    );
    console.log(`Student ${studentId} suspended`);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">👥 Manage Students</h2>

        {/* Search Box */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name, email, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Student Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 rounded-xl">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Student ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-800">{student.studentId}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{student.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{student.email}</td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          student.status === "Suspended"
                            ? "bg-red-200 text-red-800"
                            : "bg-green-200 text-green-800"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {student.status === "Active" ? (
                        <button
                          onClick={() => handleSuspend(student.studentId)}
                          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                        >
                          Suspend
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm italic">Already Suspended</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                    No matching students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}