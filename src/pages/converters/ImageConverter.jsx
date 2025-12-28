import React, { useState } from 'react';
import { Box } from '@mui/material'; // MUI used safely (no UI change)
import { Image, Upload, Download, AlertCircle, Loader2 } from 'lucide-react';
import AdSpace from '../../components/AdSpace';

const ImageConverter = ({ connectionString }) => {
    const [file, setFile] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [outputFormat, setOutputFormat] = useState('png');
    const [quality, setQuality] = useState(90);
    const [loading, setLoading] = useState(false);

    const handleFileSelect = (selectedFile) => {
        if (selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
        } else {
            alert('Please select an image file');
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
        setLoading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('format', outputFormat);
        formData.append('quality', quality.toString());

        const originalFileName = file.name.replace(/\.[^/.]+$/, '');

        try {
            const response = await fetch(`${connectionString}/api/convert-image`, {
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
            a.download = `${originalFileName}.${outputFormat}`;
            a.click();
            window.URL.revokeObjectURL(url);

        } catch (err) {
            alert('Conversion failed');
        } finally {
            setLoading(false);
        }
    };

    const formatOptions = [
        { value: 'jpg', label: 'JPG', description: 'Best for photos' },
        { value: 'png', label: 'PNG', description: 'Best for graphics with transparency' },
        { value: 'webp', label: 'WebP', description: 'Modern format with great compression' },
        { value: 'bmp', label: 'BMP', description: 'Uncompressed bitmap format' },
        { value: 'tiff', label: 'TIFF', description: 'High quality format' }
    ];

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Image className="h-8 w-8 inline mr-3 text-indigo-600" />
                    Image Converter
                </h1>
                <p className="text-xl text-gray-600">
                    Convert images between different formats
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center ${dragOver ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
                                }`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                        >
                            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                            <p className="text-lg font-medium text-gray-900 mb-2">
                                Drop your image here or click to browse
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                Supports JPG, PNG, GIF, BMP, TIFF, WebP files
                            </p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    e.target.files?.[0] && handleFileSelect(e.target.files[0])
                                }
                                className="hidden"
                                id="file-upload"
                            />
                            <label
                                htmlFor="file-upload"
                                className="bg-indigo-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition-colors"
                            >
                                Select Image
                            </label>
                        </div>

                        {file && (
                            <div className="mt-6">
                                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900">{file.name}</p>
                                            <p className="text-sm text-gray-600">
                                                {(file.size / (1024 * 1024)).toFixed(2)} MB • {file.type}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Output Format
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {formatOptions.map((format) => (
                                            <div
                                                key={format.value}
                                                className={`border rounded-lg p-3 cursor-pointer transition-colors ${outputFormat === format.value
                                                        ? 'border-indigo-500 bg-indigo-50'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                    }`}
                                                onClick={() => setOutputFormat(format.value)}
                                            >
                                                <div className="font-medium text-gray-900">
                                                    {format.label}
                                                </div>
                                                <div className="text-xs text-gray-600">
                                                    {format.description}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {(outputFormat === 'jpg' || outputFormat === 'webp') && (
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Quality: {quality}%
                                        </label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="100"
                                            value={quality}
                                            onChange={(e) => setQuality(parseInt(e.target.value))}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                                            <span>Lower quality, smaller file</span>
                                            <span>Higher quality, larger file</span>
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={handleConvert}
                                    disabled={loading}
                                    className={`w-full py-2 px-4 rounded-lg flex items-center justify-center transition-colors ${loading
                                            ? 'bg-indigo-400 text-white cursor-not-allowed'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
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
                                            Convert to {outputFormat.toUpperCase()}
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
                            <li>• Convert between multiple formats</li>
                            <li>• Adjustable quality settings</li>
                            <li>• Batch processing</li>
                            <li>• Preserve metadata option</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Format Guide
                        </h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div>
                                <p className="font-medium text-gray-900">JPG</p>
                                <p>Best for photos, smallest file size</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">PNG</p>
                                <p>Supports transparency, lossless</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">WebP</p>
                                <p>Modern format, great compression</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default ImageConverter;
