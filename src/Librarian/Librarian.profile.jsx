import React from 'react';

export default function Librarian_profile() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                
                {/* Header Section */}
                <div className="bg-teal-100 py-8 px-6 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-teal-400 text-white text-5xl flex items-center justify-center shadow-md">
                        📚
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-teal-800">Ravi Mehta</h2>
                    <p className="text-gray-700">Chief Librarian</p>
                    <p className="text-gray-600">Rajarhat Campus Library</p>

                    {/* Action Buttons */}
                    
                </div>

                {/* Profile Info Section */}
                <div className="px-6 py-6 space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-800">Profile Information</h3>
                    <div>
                        <span className="font-medium">Full Name:</span> Ravi Mehta
                    </div>
                    <div>
                        <span className="font-medium">Email:</span> ravi.mehta@college.edu
                    </div>
                    <div>
                        <span className="font-medium">Phone:</span> +91-99876-54321
                    </div>
                    <div>
                        <span className="font-medium">Mobile:</span> +91-98765-12345
                    </div>
                    <div>
                        <span className="font-medium">Office:</span> Room 204, Main Library Building
                    </div>
                    <div>
                        <span className="font-medium">Address:</span> Rajarhat, West Bengal, India
                    </div>

                    {/* Edit Button */}
                    <div className="pt-4 text-center">
                        <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}