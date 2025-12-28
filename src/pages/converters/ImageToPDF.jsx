import React, { useState } from 'react';
import { Box } from '@mui/material'; // MUI used safely (no UI change)
import { Image, Upload, Download, AlertCircle, X, Loader2 } from 'lucide-react';
import AdSpace from '../../components/AdSpace';

const ImageToPDF = ({ connectionString }) => {
    const [files, setFiles] = useState([]);
    const [dragOver, setDragOver] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFileSelect = (selectedFiles) => {
        const imageFiles = Array.from(selectedFiles).filter(file =>
            file.type.startsWith('image/')
        );
        if (imageFiles.length > 0) {
            setFiles(prev => [...prev, ...imageFiles]);
        } else {
            alert('Please select image files');
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles.length > 0) {
            handleFileSelect(droppedFiles);
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

    const removeFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleConvert = async () => {
        if (files.length === 0) return;
        setLoading(true);
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));

        try {
            const response = await fetch(`${connectionString}/api/image-to-pdf`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                alert('Conversion failed');
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            // ✅ Generate a 20-digit random number
            const random20DigitCode =
                Math.floor(Math.random() * 1e10).toString().padStart(10, '0') +
                Math.floor(Math.random() * 1e10).toString().padStart(10, '0');

            const a = document.createElement('a');
            a.href = url;
            a.download = `${random20DigitCode}.pdf`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert('Conversion failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Image className="h-8 w-8 inline mr-3 text-green-600" />
                    Image to PDF Converter
                </h1>
                <p className="text-xl text-gray-600">Convert images to PDF format</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center ${dragOver ? 'border-green-500 bg-green-50' : 'border-gray-300'
                                }`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                        >
                            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                            <p className="text-lg font-medium text-gray-900 mb-2">
                                Drop your images here or click to browse
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                Supports JPG, PNG, GIF, BMP, TIFF files
                            </p>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
                                className="hidden"
                                id="file-upload"
                            />
                            <label
                                htmlFor="file-upload"
                                className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
                            >
                                Select Images
                            </label>
                        </div>

                        {files.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Selected Images ({files.length})
                                </h3>
                                <div className="space-y-2">
                                    {files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                        >
                                            <div className="flex items-center">
                                                <Image className="h-5 w-5 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="font-medium text-gray-900">{file.name}</p>
                                                    <p className="text-sm text-gray-600">
                                                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFile(index)}
                                                className="text-red-600 hover:text-red-700 transition-colors"
                                            >
                                                <X className="h-5 w-5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={handleConvert}
                                    disabled={loading}
                                    className={`w-full mt-4 py-2 px-4 rounded-lg flex items-center justify-center transition-colors ${loading
                                            ? 'bg-green-400 text-white cursor-not-allowed'
                                            : 'bg-green-600 text-white hover:bg-green-700'
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            Converting...
                                        </>
                                    ) : (
                                        <>
                                            <Download className="h-4 w-4 mr-2" />
                                            Convert to PDF
                                        </>
                                    )}
                                </button>
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
                            <li>• Multiple image formats supported</li>
                            <li>• Batch conversion</li>
                            <li>• Custom page size options</li>
                            <li>• Image compression for smaller PDFs</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Supported Formats
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><strong>Input:</strong> JPG, PNG, GIF, BMP, TIFF</p>
                            <p><strong>Output:</strong> PDF</p>
                            <p><strong>Max Size:</strong> 10MB per image</p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default ImageToPDF;
