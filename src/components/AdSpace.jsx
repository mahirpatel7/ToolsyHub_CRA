// import React from 'react';

// const AdSpace = ({ size, className = '' }) => {
//     const sizeClasses = {
//         banner: 'w-full h-24 md:h-32',
//         square: 'w-full h-64 md:w-64',
//         sidebar: 'w-full h-96'
//     };

//     return (
//         <div
//             className={`${sizeClasses[size]} ${className} bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500`}
//         >
//             <div className="text-center">
//                 <div className="text-sm font-medium">Advertisement</div>
//                 <div className="text-xs mt-1">
//                     {size === 'banner'
//                         ? '728x90'
//                         : size === 'square'
//                             ? '300x250'
//                             : '300x600'}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdSpace;



import React, { useEffect, useRef } from 'react';

const AdSpace = ({ size, className = '' }) => {
    const adRef = useRef(null);

    useEffect(() => {
        if (!adRef.current) return;

        // Clear previous ad
        adRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.referrerPolicy = 'no-referrer-when-downgrade';

        script.innerHTML = `
            (function(otf){
                var d = document,
                    s = d.createElement('script'),
                    l = document.currentScript;
                s.settings = otf || {};
                s.src = "//mistymeat.com/bhX.V/s/d/GSle0/YPWlcd/Aenmn9ou/ZlUkl/kyPKTRY-3fONTGgv4cMjjHUBtJNsj/cd5kOZDBgKy/OaQt";
                s.async = true;
                s.referrerPolicy = 'no-referrer-when-downgrade';
                l.parentNode.insertBefore(s, l);
            })({});
        `;

        adRef.current.appendChild(script);

    }, []);

    const sizeClasses = {
        banner: 'w-full h-24 md:h-32',
        square: 'w-full h-64 md:w-64',
        sidebar: 'w-full h-96'
    };

    return (
        <div
            ref={adRef}
            className={`${sizeClasses[size]} ${className} rounded-lg flex items-center justify-center`}
        >
        </div>
    );
};

export default AdSpace;
