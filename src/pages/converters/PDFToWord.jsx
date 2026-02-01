// import React, { useState } from 'react';
// import { Box } from '@mui/material'; // MUI used safely (no UI change)
// import { FileText, Upload, Download } from 'lucide-react';
// import AdSpace from '../../components/AdSpace';

// const PDFToWord = ({ connectionString }) => {
//     const [file, setFile] = useState(null);
//     const [dragOver, setDragOver] = useState(false);
//     const [loading, setLoading] = useState(false); // ✅ loading state

//     const handleFileSelect = (selectedFile) => {
//         if (selectedFile.type === 'application/pdf') {
//             setFile(selectedFile);
//         } else {
//             alert('Please select a PDF file');
//         }
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         setDragOver(false);
//         const droppedFile = e.dataTransfer.files[0];
//         if (droppedFile) {
//             handleFileSelect(droppedFile);
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//         setDragOver(true);
//     };

//     const handleDragLeave = (e) => {
//         e.preventDefault();
//         setDragOver(false);
//     };

//     const handleConvert = async () => {
//         if (!file) return;

//         setLoading(true); // ✅ Start loading
//         const formData = new FormData();
//         formData.append('file', file);

//         const originalFileName = file.name.replace(/\.[^/.]+$/, '');

//         try {
//             const response = await fetch(`${connectionString}/api/pdf-to-word`, {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (!response.ok) {
//                 alert('Conversion failed');
//                 setLoading(false);
//                 return;
//             }

//             const blob = await response.blob();
//             const url = window.URL.createObjectURL(blob);

//             const a = document.createElement('a');
//             a.href = url;
//             a.download = `${originalFileName}.docx`;
//             a.click();
//             window.URL.revokeObjectURL(url);
//         } catch (err) {
//             console.error(err);
//             alert('Conversion failed');
//         } finally {
//             setLoading(false); // ✅ End loading
//         }
//     };

//     return (
//         <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="text-center mb-8">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-4">
//                     <FileText className="h-8 w-8 inline mr-3 text-red-600" />
//                     PDF to Word Converter
//                 </h1>
//                 <p className="text-xl text-gray-600">
//                     Convert PDF files to editable Word documents
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <div
//                             className={`border-2 border-dashed rounded-lg p-8 text-center ${dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
//                                 }`}
//                             onDrop={handleDrop}
//                             onDragOver={handleDragOver}
//                             onDragLeave={handleDragLeave}
//                         >
//                             <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
//                             <p className="text-lg font-medium text-gray-900 mb-2">
//                                 Drop your PDF file here or click to browse
//                             </p>
//                             <p className="text-sm text-gray-600 mb-4">
//                                 Supports PDF files up to 10MB
//                             </p>
//                             <input
//                                 type="file"
//                                 accept=".pdf"
//                                 onChange={(e) =>
//                                     e.target.files?.[0] && handleFileSelect(e.target.files[0])
//                                 }
//                                 className="hidden"
//                                 id="file-upload"
//                             />
//                             <label
//                                 htmlFor="file-upload"
//                                 className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
//                             >
//                                 Select PDF File
//                             </label>
//                         </div>

//                         {file && (
//                             <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="font-medium text-gray-900">{file.name}</p>
//                                         <p className="text-sm text-gray-600">
//                                             {(file.size / (1024 * 1024)).toFixed(2)} MB
//                                         </p>
//                                     </div>
//                                     <button
//                                         onClick={handleConvert}
//                                         disabled={loading}
//                                         className={`${loading
//                                                 ? 'bg-gray-400 cursor-not-allowed'
//                                                 : 'bg-red-600 hover:bg-red-700'
//                                             } text-white px-6 py-2 rounded-lg transition-colors flex items-center`}
//                                     >
//                                         {loading ? (
//                                             <>
//                                                 <svg
//                                                     className="animate-spin h-4 w-4 mr-2 text-white"
//                                                     viewBox="0 0 24 24"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <circle
//                                                         className="opacity-25"
//                                                         cx="12"
//                                                         cy="12"
//                                                         r="10"
//                                                         stroke="currentColor"
//                                                         strokeWidth="4"
//                                                     />
//                                                     <path
//                                                         className="opacity-75"
//                                                         fill="currentColor"
//                                                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                                                     />
//                                                 </svg>
//                                                 Converting...
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Download className="h-4 w-4 mr-2" />
//                                                 Convert to Word
//                                             </>
//                                         )}
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="space-y-6">
//                     <AdSpace size="square" />

//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                             Features
//                         </h3>
//                         <ul className="space-y-2 text-sm text-gray-600">
//                             <li>• High-quality PDF to Word conversion</li>
//                             <li>• Preserves formatting and layout</li>
//                             <li>• Maintains images and tables</li>
//                             <li>• Fast and secure processing</li>
//                         </ul>
//                     </div>

//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                             Supported Formats
//                         </h3>
//                         <div className="space-y-2 text-sm text-gray-600">
//                             <p>
//                                 <strong>Input:</strong> PDF files
//                             </p>
//                             <p>
//                                 <strong>Output:</strong> DOCX (Microsoft Word)
//                             </p>
//                             <p>
//                                 <strong>Max Size:</strong> 10MB per file
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Box>
//     );
// };

// export default PDFToWord;







import React, { useState } from 'react';
import { Box } from '@mui/material'; // MUI used safely (no UI change)
import { FileText, Upload, Download, AlertCircle } from 'lucide-react';
import AdSpace from '../../components/AdSpace';

const PDFToWord = ({ connectionString }) => {
    const [file, setFile] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [loading, setLoading] = useState(false); // ✅ loading state
    const [error, setError] = useState(null); // ✅ Error state
    const [success, setSuccess] = useState(false); // ✅ Success state

    const handleFileSelect = (selectedFile) => {
        // ✅ Clear previous errors and success
        setError(null);
        setSuccess(false);

        // ✅ Validate file type
        if (selectedFile.type !== 'application/pdf') {
            setError('❌ Please select a valid PDF file');
            return;
        }

        // ✅ Validate file size (10MB limit)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (selectedFile.size > maxSize) {
            setError(`❌ File is too large (${(selectedFile.size / (1024 * 1024)).toFixed(2)}MB). Max size: 10MB`);
            return;
        }

        setFile(selectedFile);
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
        if (!file) {
            setError('❌ No file selected');
            return;
        }

        setLoading(true); // ✅ Start loading
        setError(null);
        setSuccess(false);

        const formData = new FormData();
        formData.append('file', file);

        const originalFileName = file.name.replace(/\.[^/.]+$/, '');

        try {
            console.log(`📄 Converting: ${file.name}`);

            const response = await fetch(`${connectionString}/api/pdf-to-word`, {
                method: 'POST',
                body: formData,
            });

            // ✅ Better error handling
            if (!response.ok) {
                let errorMessage = 'Conversion failed';

                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorData.error || errorMessage;
                } catch (e) {
                    errorMessage = `Server error: ${response.statusText}`;
                }

                setError(`❌ ${errorMessage}`);
                setLoading(false);
                return;
            }

            // ✅ Validate response blob
            const blob = await response.blob();

            if (blob.size === 0) {
                setError('❌ Error: Empty file received from server');
                setLoading(false);
                return;
            }

            // ✅ Check if response is actually a file (not error HTML)
            if (!blob.type.includes('openxmlformats')) {
                setError('❌ Invalid file format received');
                setLoading(false);
                return;
            }

            // ✅ Download the file
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${originalFileName}.docx`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);

            // ✅ Show success message
            setSuccess(true);
            console.log('✅ Conversion successful!');

            // ✅ Clear file for next conversion after 3 seconds
            setTimeout(() => {
                setFile(null);
                setSuccess(false);
            }, 3000);

        } catch (err) {
            console.error('❌ Conversion error:', err);
            setError(`❌ Network error: ${err.message}`);
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
                    Convert PDF files to editable Word documents instantly
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        {/* ✅ Error Message Display */}
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-red-800 font-medium">Conversion Error</p>
                                    <p className="text-red-700 text-sm mt-1">{error}</p>
                                </div>
                            </div>
                        )}

                        {/* ✅ Success Message Display */}
                        {success && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                                <div className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0">✓</div>
                                <div>
                                    <p className="text-green-800 font-medium">Success!</p>
                                    <p className="text-green-700 text-sm mt-1">Your PDF has been converted and downloaded successfully.</p>
                                </div>
                            </div>
                        )}

                        {/* ✅ Drop Zone - ORIGINAL LOGIC PRESERVED */}
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragOver
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-300 hover:border-gray-400'
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
                                disabled={loading}
                            />
                            <label
                                htmlFor="file-upload"
                                className={`${loading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                                    } text-white px-6 py-2 rounded-lg transition-colors inline-block`}
                            >
                                {loading ? 'Converting...' : 'Select PDF File'}
                            </label>
                        </div>

                        {/* ✅ File Info and Convert Button - ORIGINAL LOGIC PRESERVED */}
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
                                            } text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2`}
                                    >
                                        {loading ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-4 w-4 text-white"
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
                                                <Download className="h-4 w-4" />
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
                            <li>✓ High-quality PDF to Word conversion</li>
                            <li>✓ Preserves text formatting</li>
                            <li>✓ Fast processing (usually under 15 seconds)</li>
                            <li>✓ Secure - files deleted after conversion</li>
                            <li>✓ No registration required</li>
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
                            <p>
                                <strong>Speed:</strong> 8-15 seconds
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default PDFToWord;