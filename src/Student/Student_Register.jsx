import React from 'react';
import { Link } from 'react-router-dom';

function Student_Register() {
    return (
        <div className="h-screen flex flex-col md:flex-row overflow-hidden">
            {/* Image Section */}
            <div className="md:w-1/2 hidden md:block">
                <img
                    src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=600&auto=format&fit=crop&q=60"
                    alt="Library"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Form Section */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-200">
                <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Register</h2>

                    <div className="space-y-3">
                        {[
                            { label: 'Name', type: 'text', placeholder: 'John Doe' },
                            { label: 'Email', type: 'email', placeholder: 'you@example.com' },
                            { label: 'Password', type: 'password', placeholder: '********' },
                            { label: 'confirm Password', type: 'password', placeholder: '*********' },
                            { label: 'Roll Number', type: 'text', placeholder: '123456' },
                            { label: 'Phone', type: 'text', placeholder: '+134567890' },
                             { label: 'Address', type: 'text', placeholder: 'Kolkata' },
                        ].map((field, idx) => (
                            <div key={idx}>
                                <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        ))}

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </div>

                    <p className="mt-3 text-center text-sm text-gray-600">
                        Have an account?{' '}
                        <Link to="/Student/Login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Student_Register;