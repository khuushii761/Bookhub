import React from 'react';

const returnedBooks = [
  {
    title: "Database Systems",
    author: "R. Elmasri",
    issueDate: "2025-08-10",
    returnDate: "2025-08-25",
    returnedOn: "2025-08-24",
    status: "On Time",
  },
  {
    title: "Computer Networks",
    author: "A. S. Tanenbaum",
    issueDate: "2025-07-15",
    returnDate: "2025-07-30",
    returnedOn: "2025-08-02",
    status: "Late",
  },
];

export default function ReturnedBooksPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">📦 Returned Books</h2>

        {/* Book Cards */}
        <div className="space-y-4">
          {returnedBooks.map((book, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-700">{book.title}</h3>
              <p className="text-sm text-gray-600">Author: {book.author}</p>
              <p className="text-sm text-gray-600">Issued on: {book.issueDate}</p>
              <p className="text-sm text-gray-600">Due by: {book.returnDate}</p>
              <p className="text-sm text-gray-600">Returned on: {book.returnedOn}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                  book.status === "On Time"
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {book.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}