import React from "react";

const Profile = () => {
    const user = JSON.parse(sessionStorage.getItem("userData"));

    if (!user) {
        return <div className="text-red-500 text-center text-xl mt-10">No user data found! ❌</div>;
    }

    return (
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen p-6 flex justify-center items-center font-sans">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
                
            
                <div className="flex items-center space-x-6 border-b pb-6 mb-6">
                    <img
                        src={user.image || "https://www.w3schools.com/howto/img_avatar.png"}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-blue-800">{user.name || "N/A"}</h1>
                        <p className="text-gray-600">{user.email || "N/A"}</p>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">Personal Information</h2>
                        <div className="mb-3">
                            <p className="font-medium text-gray-700">📚 Education:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {user.education
                                    ? user.education.split("}").map((education, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            {education.trim()}
                                        </span>
                                    ))
                                    : "N/A"}
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="font-medium text-gray-700">💼 Experience:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {user.experience
                                    ? user.experience.split("{},").map((experience, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            {experience.trim()}
                                        </span>
                                    ))
                                    : "N/A"}
                            </div>
                        </div>
                    </div>

                   
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">Professional Information</h2>
                        <div className="mb-3">
                            <p className="font-medium text-gray-700">🛠 Skills:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {user.skills
                                    ? user.skills.split(",").map((skill, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            {skill.trim()}
                                        </span>
                                    ))
                                    : "N/A"}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resume Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">📄 Resume</h2>
                    {user.file ? (
                        <a
                            href={user.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            View Resume
                        </a>
                    ) : (
                        <p className="text-gray-500">No resume uploaded.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
