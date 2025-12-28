import React, { useState } from 'react';
import { Box } from '@mui/material'; // MUI used safely (no UI change)
import { FileText, Upload, Download } from 'lucide-react';
import AdSpace from '../../components/AdSpace';

const PDFToWord = ({ connectionString }) => {
    const [file, setFile] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [loading, setLoading] = useState(false); // ✅ loading state

    const handleFileSelect = (selectedFile) => {
        if (selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
        } else {
            alert('Please select a PDF file');
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            handleFileSelect(droppedFile);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true); // ✅ Start loading
        const formData = new FormData();
        formData.append('file', file);

        const originalFileName = file.name.replace(/\.[^/.]+$/, '');

        try {
            const response = await fetch(`${connectionString}/api/pdf-to-word`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                alert('Conversion failed');
                setLoading(false);
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `${originalFileName}.docx`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
            alert('Conversion failed');
        } finally {
            setLoading(false); // ✅ End loading
        }
    };

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <FileText className="h-8 w-8 inline mr-3 text-red-600" />
                    PDF to Word Converter
                </h1>
                <p className="text-xl text-gray-600">
                    Convert PDF files to editable Word documents
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center ${dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                                }`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                        >
                            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                            <p className="text-lg font-medium text-gray-900 mb-2">
                                Drop your PDF file here or click to browse
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                Supports PDF files up to 10MB
                            </p>
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) =>
                                    e.target.files?.[0] && handleFileSelect(e.target.files[0])
                                }
                                className="hidden"
                                id="file-upload"
                            />
                            <label
                                htmlFor="file-upload"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                            >
                                Select PDF File
                            </label>
                        </div>

                        {file && (
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">{file.name}</p>
                                        <p className="text-sm text-gray-600">
                                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleConvert}
                                        disabled={loading}
                                        className={`${loading
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-red-600 hover:bg-red-700'
                                            } text-white px-6 py-2 rounded-lg transition-colors flex items-center`}
                                    >
                                        {loading ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-4 w-4 mr-2 text-white"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                    />
                                                </svg>
                                                Converting...
                                            </>
                                        ) : (
                                            <>
                                                <Download className="h-4 w-4 mr-2" />
                                                Convert to Word
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <AdSpace size="square" />

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Features
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• High-quality PDF to Word conversion</li>
                            <li>• Preserves formatting and layout</li>
                            <li>• Maintains images and tables</li>
                            <li>• Fast and secure processing</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Supported Formats
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>
                                <strong>Input:</strong> PDF files
                            </p>
                            <p>
                                <strong>Output:</strong> DOCX (Microsoft Word)
                            </p>
                            <p>
                                <strong>Max Size:</strong> 10MB per file
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default PDFToWord;
