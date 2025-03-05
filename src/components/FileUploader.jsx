import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FileUploader() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("idle");
    const [responseData, setResponseData] = useState(null);

    const API_URL = "https://96e7-49-36-99-126.ngrok-free.app/api/profile/resumes/"; // Replace with your actual API URL

    const navigate = useNavigate();

    function handleFileChange(e) {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    }

    function removeFile() {
        setFile(null);
        setStatus("idle");
        setResponseData(null);
    }

    async function handleFileUpload() {
        if (!file) {
            alert("Please select a file!");
            return;
        }

        setStatus("uploading");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(API_URL, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });

            console.log("Upload Response:", response);

            if (response.status === 200 || response.status === 201) {
                setStatus("success");
                setResponseData(response.data);

                sessionStorage.setItem('userData', JSON.stringify(response.data));
                navigate('/profile'); // Navigate to profile page on successful upload

            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Upload Error:", error.response ? error.response.data : error.message);
            setStatus("error");
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50"> {/* Slightly less opaque backdrop */}
            <div className="p-0.5 rounded-3xl bg-gradient-to-r from-blue-500 to-blue-700 animate-border-glow"> {/* Blue gradient border */}
                <div className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl relative p-8"> {/* White background */}
                    <button className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-blue-500 transition" onClick={removeFile}>
                        ✖
                    </button>
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">Upload Resume & Portfolio</h2> {/* Blue heading */}
                    <p className="text-xl text-gray-500 mb-6">Apply with an updated resume & proof of work</p>
                    <div
                        className={`w-full border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-8 cursor-pointer transition-colors duration-300 border-blue-300 hover:border-blue-500`} // Blue border
                    >
                        <input type="file" onChange={handleFileChange} className="hidden" id="fileInput" />
                        <label htmlFor="fileInput" className="text-blue-700 text-2xl cursor-pointer"> {/* Blue label */}
                            📂 Drag & Drop or <span className="text-blue-500">Choose file</span> to upload
                        </label>
                        <span className="text-xl text-gray-500 mt-2">PDF Max 3.0MB</span>
                    </div>
                    {file && (
                        <div className="mt-8 bg-blue-100 p-4 rounded-lg flex justify-between items-center"> {/* Light blue file info */}
                            <p className="text-blue-700 text-xl">📄 {file.name} ({(file.size / 1024).toFixed(2)} KB)</p> {/* Blue file name */}
                            <button onClick={removeFile} className="text-red-500 text-2xl hover:text-red-400 transition">✖</button>
                        </div>
                    )}
                    <div className="mt-8 flex justify-between">
                        <button className="px-6 py-3 bg-blue-200 rounded-lg text-blue-700 hover:bg-blue-300 transition text-2xl" onClick={removeFile}> {/* Blue cancel button */}
                            Cancel
                        </button>
                        <button
                            className={`px-6 py-3 rounded-lg text-white transition text-2xl ${
                                status === "uploading" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700" // Blue upload button
                            }`}
                            onClick={handleFileUpload}
                            disabled={status === "uploading"}
                        >
                            {status === "uploading" ? "Uploading..." : "Apply Job"}
                        </button>
                    </div>

                    {status === "success" && responseData && (
                        <p className="text-green-500 mt-6 text-center text-2xl"> {/* Green success message */}
                            ✅ File uploaded successfully! <br />
                            <a href={responseData.file} target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
                                View Uploaded File
                            </a>
                        </p>
                    )}
                    {status === "error" && <p className="text-red-500 mt-6 text-center text-2xl">❌ Upload failed. Try again.</p>} {/* Red error message */}
                </div>
            </div>
        </div>
    );
}