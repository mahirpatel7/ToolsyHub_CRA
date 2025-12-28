import React, { useState } from 'react';
import { Box } from '@mui/material'; // MUI used safely (no UI change)
import { FileText, Upload, Download } from 'lucide-react';
import AdSpace from '../../components/AdSpace';

const WordToPDF = ({ connectionString }) => {
    const [file, setFile] = useState(null);
    const [dragOver, setDragOver] = useState(false);

    const handleFileSelect = (selectedFile) => {
        const allowedTypes = [
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword',
        ];

        if (allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
        } else {
            alert('Please select a Word document (.docx or .doc)');
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

        const formData = new FormData();
        formData.append('file', file);

        const originalFileName = file.name.replace(/\.[^/.]+$/, '');
        console.log('Original file name:', originalFileName);

        try {
            const response = await fetch(`${connectionString}/api/word-to-pdf`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                alert('Conversion failed');
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${originalFileName}.pdf`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
            alert('Conversion failed');
        }
    };

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <FileText className="h-8 w-8 inline mr-3 text-blue-600" />
                    Word to PDF Converter
                </h1>
                <p className="text-xl text-gray-600">
                    Convert Word documents to PDF format
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
                                Drop your Word document here or click to browse
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                Supports DOC and DOCX files up to 10MB
                            </p>
                            <input
                                type="file"
                                accept=".doc,.docx"
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
                                Select Word File
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
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                                    >
                                        <Download className="h-4 w-4 mr-2" />
                                        Convert to PDF
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
                            <li>• High-quality Word to PDF conversion</li>
                            <li>• Preserves formatting and layout</li>
                            <li>• Maintains images and tables</li>
                            <li>• No login required</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Supported Formats
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><strong>Input:</strong> DOC, DOCX files</p>
                            <p><strong>Output:</strong> PDF</p>
                            <p><strong>Max Size:</strong> 10MB per file</p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default WordToPDF;
