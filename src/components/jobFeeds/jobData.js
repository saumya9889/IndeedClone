const moreIcon = <svg width="24" height="24" role="presentation" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17Z" fill="#2d2d2d"></path></svg>
const checkIcon = <svg width="20" height="20" class="jobCardAQSignalIcon jobCardAQSignalIcon-check" aria-label="matches your preference" xmlns="http://www.w3.org/2000/svg" role="img" fill="none" viewBox="0 0 16 11"><path fill="#1F662C" d="M15.069 1.207a.5.5 0 0 0 0-.707l-.354-.354a.5.5 0 0 0-.707 0L5.525 8.63 1.992 5.097a.5.5 0 0 0-.707 0l-.353.354a.5.5 0 0 0 0 .707L4.464 9.69l-.001.002.707.707a.499.499 0 0 0 .71 0l.706-.708 8.483-8.484Z"></path></svg>
const saveIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" class="css-1xqhio eac13zx0"><title>save-icon</title><path fill-rule="evenodd" d="M12 14.616l6 3.905V4H6v14.52l6-3.905zM4.383 21.96A.25.25 0 014 21.748V2.502a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v19.246a.25.25 0 01-.383.212L12 17.002 4.383 21.96z" clip-rule="evenodd"></path></svg>
const notInterestedIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" focusable="false" role="presentation" fill="inherit" viewBox="0 0 24 24" class="css-1xqhio eac13zx0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 014 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0120 12c0 4.42-3.58 8-8 8z"></path></svg>
// job---card--left--section---data
export const JobCardsData = [
    {
        title: "Front end developer",
        moreIcon: moreIcon,
        companyName: "Deliote",
        location: "gurugran , haryana",
        jobType: "Full-time",
        checkIcon: checkIcon, 
        postTime:"Just posted",
        jobDescibe: [
            {
                name: "2-10 Years Frontend Developer Experience.",
            },
            {
                name: "Having Strong experience in HTML, Javascript, CSS, Bootstrap.",
            },
            {
                name: "Good to have Reactjs or Angular.",
            },
            {
                name: "Implementing responsive design and cross-browser compatibility…",
            }
        ]
    },
    {
        title: "web developer developer",
        moreIcon: moreIcon,
        companyName: "noida",
        location: "uttar pradesh",
        jobType: "Full-time / part-time",
        checkIcon: checkIcon, 
        postTime:"posted 1 days ago",
        jobDescibe: [
            {
                name: "2-5 Years Frontend Developer Experience.",
            },
            {
                name: "Having Strong experience in html, Javascript, CSS",
            } ,
            {
                name: "Implementing responsive design and cross-browser compatibility…",
            }
        ]
    },
    {
        title: "Sr. Front end developer",
        moreIcon: moreIcon,
        companyName: "google",
        location: "gurugran , haryana",
        jobType: "Full-time",
        checkIcon: checkIcon, 
        postTime:"posted 2 days ago",
        jobDescibe: [
            {
                name: "5-10 Years Frontend Developer Experience.",
            },
            {
                name: "Having Strong experience in DSA, Javascript, CSS, React js, Next",
            },
            {
                name: "Good to have Reactjs or Angular.",
            },
            {
                name: "Implementing responsive design and cross-browser compatibility…",
            }
        ]
    }
]
// job---card--right--section---data
export const JobCompanyData = [
    {
        title: "Front end developer",
        companyName: "Deliote",
        location: "gurugran , haryana", 
        buttonText: "Apply on company site",
        saveIcon: saveIcon,
        removeIcon: notInterestedIcon,
        jobDescibe: [
            {
                name: "You must create an Indeed account before continuing to the company website to apply",
            } 
        ]
    }
]


// salary--guide--->>>>
const ArrowIcon= <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" class="chevronIcon css-1h8i0i2 eac13zx0" aria-hidden="true"><path d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"></path></svg>
export const SalaryGuideData =[
   {
    title:"front end developer",
    price:"Average salary ₹2,49,826 per year",
    arrowIcon:ArrowIcon,
    jobs:"Job openings"
   } ,
   {
    title:"web designer",
    price:"Average salary ₹5,30,310 per year",
    arrowIcon:ArrowIcon,
    jobs:"Job openings"
   } ,
   {
    title:"Sr front end developer",
    price:"Average salary ₹20,49,852 per year",
    arrowIcon:ArrowIcon,
    jobs:"Job openings"
   },
   {
    title:"Sr full stack  developer",
    price:"Average salary ₹40,90,829 per year",
    arrowIcon:ArrowIcon,
    jobs:"Job openings"
   },
   {
    title:"junior Front end  developer",
    price:"Average salary 8,20,122 per year",
    arrowIcon:ArrowIcon,
    jobs:"Job openings"
   },
]

