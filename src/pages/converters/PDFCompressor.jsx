import React, { useState } from 'react';
import { Box } from '@mui/material'; // MUI used safely (no UI change)
import { Minimize2, Upload, Download, AlertCircle } from 'lucide-react';
// import { useAuth } from '../../contexts/AuthContext';
// import AuthModal from '../../components/AuthModal';
import AdSpace from '../../components/AdSpace';

const PDFCompressor = ({ connectionString }) => {
    const [file, setFile] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [compressionLevel, setCompressionLevel] = useState('medium');

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

    const handleCompress = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("compressionLevel", compressionLevel);

        try {
            const response = await fetch(`${connectionString}/api/compress-pdf`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Compression failed");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_compressed.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error("❌ Compression failed:", err);
            alert("Compression failed. Please try again.");
        }
    };

    const getCompressionDescription = () => {
        switch (compressionLevel) {
            case 'low':
                return 'Minimal compression, best quality';
            case 'medium':
                return 'Balanced compression and quality';
            case 'high':
                return 'Maximum compression, smaller file size';
            default:
                return '';
        }
    };

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Minimize2 className="h-8 w-8 inline mr-3 text-purple-600" />
                    PDF Compressor
                </h1>
                <p className="text-xl text-gray-600">
                    Reduce PDF file size while maintaining quality
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center ${dragOver ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
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
                                Supports PDF files up to 50MB
                            </p>
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                                className="hidden"
                                id="file-upload"
                            />
                            <label
                                htmlFor="file-upload"
                                className="bg-purple-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors"
                            >
                                Select PDF File
                            </label>
                        </div>

                        {file && (
                            <div className="mt-6">
                                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900">{file.name}</p>
                                            <p className="text-sm text-gray-600">
                                                Original size: {(file.size / (1024 * 1024)).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Compression Level
                                    </label>
                                    <div className="space-y-2">
                                        {['low', 'medium', 'high'].map((level) => (
                                            <div className="flex items-center" key={level}>
                                                <input
                                                    type="radio"
                                                    id={level}
                                                    name="compression"
                                                    value={level}
                                                    checked={compressionLevel === level}
                                                    onChange={(e) => setCompressionLevel(e.target.value)}
                                                    className="mr-2"
                                                />
                                                <label htmlFor={level} className="text-sm text-gray-700 capitalize">
                                                    {level} compression ({getCompressionDescription()})
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={handleCompress}
                                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    Compress PDF
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <AdSpace size="square" />

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Reduce PDF file size by up to 90%</li>
                            <li>• Multiple compression levels</li>
                            <li>• Maintain document quality</li>
                            <li>• Batch processing support</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Compression Levels
                        </h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div>
                                <p className="font-medium text-gray-900">Low</p>
                                <p>Minimal compression, best quality</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Medium</p>
                                <p>Balanced compression and quality</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">High</p>
                                <p>Maximum compression, smaller file size</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default PDFCompressor;
