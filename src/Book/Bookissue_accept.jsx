import React, { useState } from 'react';

const bookRequests = [
  { bookId: "B101", studentId: "S2025", title: "Operating Systems", requestDate: "2025-09-04" },
  { bookId: "B102", studentId: "S2026", title: "Data Structures", requestDate: "2025-09-05" },
];

export default function Bookissue_accept() {
  const [requests, setRequests] = useState(bookRequests);

  const handleAction = (bookId, studentId, action) => {
    console.log(`${action} request for Book ID: ${bookId}, Student ID: ${studentId}`);
    // You can replace this with an API call to update status
    setRequests(prev =>
      prev.filter(req => !(req.bookId === bookId && req.studentId === studentId))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">📋 Book Issue Requests</h2>

        {requests.length === 0 ? (
          <p className="text-center text-gray-500">No pending requests</p>
        ) : (
          <div className="space-y-4">
            {requests.map((req, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-indigo-700">{req.title}</h3>
                <p className="text-sm text-gray-600">Book ID: {req.bookId}</p>
                <p className="text-sm text-gray-600">Student ID: {req.studentId}</p>
                <p className="text-sm text-gray-600">Requested on: {req.requestDate}</p>

                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleAction(req.bookId, req.studentId, "Accepted")}
                    className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleAction(req.bookId, req.studentId, "Rejected")}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}