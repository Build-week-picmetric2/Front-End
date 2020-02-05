import React from 'react';


function Spinner () {


    return (
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                <stop stopColor="#000" stopOpacity="0" offset="0%"/>
                <stop stopColor="#000" stopOpacity=".631" offset="63.146%"/>
                <stop stopColor="#000" offset="100%"/>
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)">
                <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite" />
                </path>
                <circle fill="#fff" cx="36" cy="18" r="1">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite" />
                </circle>
            </g>
        </g>
    </svg>
)
}

    


export default Spinner;





// <svg xmlns="http://www.w3.org/2000/svg" style="margin: auto; background: rgb(241, 242, 243) none repeat scroll 0% 0%; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
// <g transform="rotate(0 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(30 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(60 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(90 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(120 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(150 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(180 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(210 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(240 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(270 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(300 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
//   </rect>
// </g><g transform="rotate(330 50 50)">
//   <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
//     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
//   </rect>
// </g>
// </svg>