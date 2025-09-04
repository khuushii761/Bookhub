import React from 'react';

export default function Student_profile() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                
                {/* Header Section */}
                <div className="bg-indigo-100 py-8 px-6 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-indigo-400 text-white text-5xl flex items-center justify-center shadow-md">
                        🎓
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-indigo-800">Khushi Sharma</h2>
                    <p className="text-gray-700">Student, B.Tech CSE</p>
                    <p className="text-gray-600">Rajarhat, WB, India</p>
                    
                </div>

                {/* Profile Info Section */}
                <div className="px-6 py-6 space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-800">Profile Information</h3>
                    <div>
                        <span className="font-medium">Full Name:</span> Khushi Sharma
                    </div>
                    <div>
                        <span className="font-medium">Email:</span> khushi.sharma@college.edu
                    </div>
                    <div>
                        <span className="font-medium">Phone:</span> +91-98765-43210
                    </div>
                    <div>
                        <span className="font-medium">Mobile:</span> +91-91234-56789
                    </div>
                    <div>
                        <span className="font-medium">Address:</span> Rajarhat, West Bengal, India
                    </div>

                    {/* Edit Button */}
                    <div className="pt-4 text-center">
                        <button className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}