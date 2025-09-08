import React from 'react'

function Student_nav() {
  return (
    <div>
       <aside className="w-64 bg-white shadow-md fixed h-full z-40">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-indigo-700">Student Portal</h2>
        </div>
        <nav className="p-6 space-y-4">
          <Link to="/Student/Home" className="block text-gray-700 hover:text-indigo-700">Dashboard</Link>
          <Link to="/Student/Book" className="block text-gray-700 hover:text-indigo-700">Book</Link>
          <Link to="/Book/Issue_Request" className="block text-gray-700 hover:text-indigo-700">Issue Book Request</Link>
          <Link to="/Book/Borrowed_Books" className="block text-gray-700 hover:text-indigo-700">Borrowed Books</Link>
          <Link to="/Book/Return" className="block text-gray-700 hover:text-indigo-700"> Book Return</Link>
          <Link to="/logout" className="block text-red-600 hover:text-red-800">Logout</Link>
        </nav>
      </aside>
    </div>
  )
}

export default Student_nav