import React, { useState } from 'react';

const requestedBooks = [
  { title: "Digital Logic Design", author: "M. Morris Mano", requestDate: "2025-09-03", status: "Pending" },
  { title: "Operating Systems", author: "Silberschatz", requestDate: "2025-09-01", status: "Approved" },
];

const issuedBooks = [
  { title: "Database Systems", author: "R. Elmasri", issueDate: "2025-08-28", returnDate: "2025-09-10" },
  { title: "Computer Networks", author: "A. S. Tanenbaum", issueDate: "2025-08-20", returnDate: "2025-09-05" },
];

export default function Borrowed_books() {
  const [activeTab, setActiveTab] = useState("requested");

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">📖 My Library Activity</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setActiveTab("requested")}
            className={`px-4 py-2 rounded-xl font-medium ${
              activeTab === "requested" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Requested Books
          </button>
          <button
            onClick={() => setActiveTab("issued")}
            className={`px-4 py-2 rounded-xl font-medium ${
              activeTab === "issued" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Issued Books
          </button>
        </div>

        {/* Book Cards */}
        <div className="space-y-4">
          {activeTab === "requested" &&
            requestedBooks.map((book, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-indigo-700">{book.title}</h3>
                <p className="text-sm text-gray-600">Author: {book.author}</p>
                <p className="text-sm text-gray-600">Requested on: {book.requestDate}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                    book.status === "Approved" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {book.status}
                </span>
              </div>
            ))}

          {activeTab === "issued" &&
  issuedBooks.map((book, index) => (
    <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-indigo-700">{book.title}</h3>
      <p className="text-sm text-gray-600">Author: {book.author}</p>
      <p className="text-sm text-gray-600">Issued on: {book.issueDate}</p>
      <p className="text-sm text-gray-600">Return by: {book.returnDate}</p>

      {/* Return Button */}
      <div className="mt-4 text-right">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Return Book
        </button>
      </div>
    </div>
  ))}

        </div>
      </div>
    </div>
  );
}