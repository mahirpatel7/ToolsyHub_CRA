import React from 'react';

const AdSpace = ({ size, className = '' }) => {
    const sizeClasses = {
        banner: 'w-full h-24 md:h-32',
        square: 'w-full h-64 md:w-64',
        sidebar: 'w-full h-96'
    };

    return (
        <div
            className={`${sizeClasses[size]} ${className} bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500`}
        >
            <div className="text-center">
                <div className="text-sm font-medium">Advertisement</div>
                <div className="text-xs mt-1">
                    {size === 'banner'
                        ? '728x90'
                        : size === 'square'
                            ? '300x250'
                            : '300x600'}
                </div>
            </div>
        </div>
    );
};

export default AdSpace;
