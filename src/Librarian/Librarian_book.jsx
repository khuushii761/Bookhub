import React, { useState } from 'react';

const initialBooks = [
    {
        title: "Operating System Concepts",
        author: "Silberschatz",
        genre: "Computer Science",
        available: true,
    },
    {
        title: "Database System Design",
        author: "Elmasri & Navathe",
        genre: "Information Systems",
        available: false,
    },
];

export default function LibrarianBookList() {
    const [books, ] = useState(initialBooks);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );

    

   

    

    return (
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-teal-700">📚 Librarian Book Management</h1>
                    <p className="text-gray-600 mt-2">Search, add, update, or delete books from the library</p>
                </div>

                {/* Search + Add Book */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search by title, author, or genre..."
                        className="w-full sm:w-2/3 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <button
                        className="bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition"
                    >
                        ➕ Add New Book
                    </button>
                </div>

                {/* Book Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition relative">
                                <h2 className="text-lg font-semibold text-teal-800">{book.title}</h2>
                                <p className="text-gray-700 mt-1">👤 {book.author}</p>
                                <p className="text-gray-600">📚 {book.genre}</p>
                                <p className={`mt-2 font-medium ${book.available ? 'text-green-600' : 'text-red-500'}`}>
                                    {book.available ? 'Available' : 'Checked Out'}
                                </p>

                                {/* Action Buttons */}
                                <div className="mt-4 flex justify-between">
                                    <button
                                        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                                    >
                                        ✏️ Update
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                    >
                                        🗑️ Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">No books match your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
}