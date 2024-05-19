import React from 'react'

function DashboardIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (

        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H8C9.10457 10 10 9.10457 10 8V4C10 2.89543 9.10457 2 8 2H4ZM18 10C20.2091 10 22 8.20914 22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 8.20914 15.7909 10 18 10ZM10 18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C8.20914 14 10 15.7909 10 18ZM16 14C14.8954 14 14 14.8954 14 16V20C14 21.1046 14.8954 22 16 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14H16Z" fill="#7152F3" />
        </svg>
        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4C2 2.89543 2.89543 2 4 2H8C9.10457 2 10 2.89543 10 4V8C10 9.10457 9.10457 10 8 10H4C2.89543 10 2 9.10457 2 8V4Z" stroke={stroke} stroke-width="1.5" />
            <path d="M22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6Z" stroke={stroke} stroke-width="1.5" />
            <path d="M10 18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C8.20914 14 10 15.7909 10 18Z" stroke={stroke} stroke-width="1.5" />
            <path d="M14 16C14 14.8954 14.8954 14 16 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H16C14.8954 22 14 21.1046 14 20V16Z" stroke={stroke} stroke-width="1.5" />
        </svg>
        )
    )
}

function AllEmployeesIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (

        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11ZM12 19C15.3137 19 18 17.6569 18 16C18 14.3431 15.3137 13 12 13C8.68629 13 6 14.3431 6 16C6 17.6569 8.68629 19 12 19ZM6.38165 13.019C3.91199 13.1713 2 14.2241 2 15.5001C2 16.5521 3.29949 17.4523 5.13963 17.8213C4.72843 17.2645 4.5 16.6483 4.5 16.0001C4.5 14.8567 5.21076 13.8129 6.38165 13.019ZM19.5001 16.0001C19.5001 16.6483 19.2716 17.2645 18.8604 17.8213C20.7006 17.4523 22.0001 16.5521 22.0001 15.5001C22.0001 14.2241 20.0881 13.1713 17.6184 13.019C18.7893 13.8129 19.5001 14.8567 19.5001 16.0001ZM15.7183 10.5354C16.2115 9.8134 16.5 8.94039 16.5 8C16.5 7.68794 16.4682 7.3833 16.4077 7.08914C16.5949 7.0312 16.7938 7 17 7C18.1045 7 19 7.89543 19 9C19 10.1046 18.1045 11 17 11C16.5123 11 16.0653 10.8254 15.7183 10.5354ZM7 7C7.20619 7 7.40509 7.0312 7.59223 7.08914C7.53176 7.3833 7.5 7.68794 7.5 8C7.5 8.94039 7.78845 9.8134 8.28171 10.5354C7.93462 10.8254 7.4877 11 7 11C5.89543 11 5 10.1046 5 9C5 7.89543 5.89543 7 7 7Z" fill="#7152F3" />
        </svg>

        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="16.5" rx="6" ry="2.5" stroke={stroke} stroke-width="1.5" stroke-linejoin="round" />
            <circle cx="12" cy="8" r="3" stroke={stroke} stroke-width="1.5" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.44547 13.2615C5.20689 13.313 4.06913 13.5361 3.18592 13.8894C2.68122 14.0913 2.22245 14.3505 1.87759 14.6766C1.53115 15.0042 1.25 15.4512 1.25 16C1.25 16.5488 1.53115 16.9958 1.87759 17.3234C2.22245 17.6495 2.68122 17.9087 3.18592 18.1106C3.68571 18.3105 4.26701 18.4687 4.90197 18.5778C4.40834 18.0453 4.09852 17.4503 4.01985 16.8195C3.92341 16.787 3.83104 16.7531 3.74301 16.7179C3.34289 16.5578 3.06943 16.386 2.90826 16.2336C2.7498 16.0837 2.74999 16.0046 2.75 16.0001L2.75 16L2.75 15.9999C2.74999 15.9954 2.7498 15.9163 2.90826 15.7664C3.06943 15.614 3.34289 15.4422 3.74301 15.2821C3.94597 15.201 4.17201 15.1266 4.41787 15.0608C4.83157 14.371 5.53447 13.756 6.44547 13.2615Z" fill={stroke} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9802 16.8195C19.9015 17.4503 19.5917 18.0453 19.0981 18.5778C19.733 18.4687 20.3143 18.3105 20.8141 18.1106C21.3188 17.9087 21.7776 17.6495 22.1224 17.3234C22.4689 16.9958 22.75 16.5488 22.75 16C22.75 15.4512 22.4689 15.0042 22.1224 14.6766C21.7776 14.3505 21.3188 14.0913 20.8141 13.8894C19.9309 13.5361 18.7931 13.313 17.5546 13.2615C18.4656 13.756 19.1685 14.371 19.5822 15.0608C19.828 15.1266 20.0541 15.201 20.257 15.2821C20.6571 15.4422 20.9306 15.614 21.0918 15.7664C21.2502 15.9163 21.25 15.9954 21.25 15.9999V16V16.0001C21.25 16.0046 21.2502 16.0837 21.0918 16.2336C20.9306 16.386 20.6571 16.5578 20.257 16.7179C20.169 16.7531 20.0766 16.787 19.9802 16.8195Z" fill={stroke} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5145 10.1522C16.2946 10.6126 16.0063 11.0341 15.6628 11.4036C16.0587 11.6243 16.5147 11.75 17.0001 11.75C18.5188 11.75 19.7501 10.5188 19.7501 9C19.7501 7.48122 18.5188 6.25 17.0001 6.25C16.8958 6.25 16.7929 6.2558 16.6916 6.26711C16.8637 6.73272 16.9684 7.23096 16.9939 7.75001C16.996 7.75 16.998 7.75 17.0001 7.75C17.6904 7.75 18.2501 8.30964 18.2501 9C18.2501 9.69036 17.6904 10.25 17.0001 10.25C16.8278 10.25 16.6637 10.2152 16.5145 10.1522Z" fill={stroke} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.30845 6.26711C7.20719 6.2558 7.10427 6.25 7 6.25C5.48122 6.25 4.25 7.48122 4.25 9C4.25 10.5188 5.48122 11.75 7 11.75C7.48537 11.75 7.94138 11.6243 8.33721 11.4036C7.99374 11.0341 7.70549 10.6126 7.4856 10.1522C7.33631 10.2152 7.17222 10.25 7 10.25C6.30964 10.25 5.75 9.69036 5.75 9C5.75 8.30964 6.30964 7.75 7 7.75C7.00205 7.75 7.00409 7.75 7.00614 7.75001C7.0317 7.23096 7.13641 6.73272 7.30845 6.26711Z" fill={stroke} />
        </svg>

        )
    )
}

function AllDepartmentsIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (

        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C9 5.10457 8.10457 6 7 6C5.89543 6 5 5.10457 5 4C5 2.89543 5.89543 2 7 2C8.10457 2 9 2.89543 9 4ZM7 6C5.34315 6 4 6.89543 4 8C4 9.10457 5.34315 10 7 10C8.65685 10 10 9.10457 10 8C10 6.89543 8.65685 6 7 6ZM18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14C16.8954 14 16 14.8954 16 16C16 17.1046 16.8954 18 18 18ZM18 18C19.6569 18 21 18.8954 21 20C21 21.1046 19.6569 22 18 22C16.3431 22 15 21.1046 15 20C15 18.8954 16.3431 18 18 18ZM11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75C20.5858 12.75 20.25 12.4142 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3ZM3 11.25C3.41421 11.25 3.75 11.5858 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25Z" fill="#7152F3" />
        </svg>


        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="4" r="2" stroke={stroke} stroke-width="1.5" />
            <ellipse cx="6" cy="8" rx="3" ry="2" stroke={stroke} stroke-width="1.5" />
            <circle cx="18" cy="16" r="2" stroke={stroke} stroke-width="1.5" />
            <path d="M22 12C22 6.47715 17.5228 2 12 2M12 22C6.47715 22 2 17.5228 2 12" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
            <ellipse cx="18" cy="20" rx="3" ry="2" stroke={stroke} stroke-width="1.5" />
        </svg>


        )
    )
}

function AttendenceIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (

        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 2C8.75 1.58579 8.41421 1.25 8 1.25C7.58579 1.25 7.25 1.58579 7.25 2V3.5H7C4.79086 3.5 3 5.29086 3 7.5V8.25H21V7.5C21 5.29086 19.2091 3.5 17 3.5H16.75V2C16.75 1.58579 16.4142 1.25 16 1.25C15.5858 1.25 15.25 1.58579 15.25 2V3.5H8.75V2ZM21 9.75H3V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V9.75ZM15.5645 13.4939C15.8372 13.1822 15.8056 12.7083 15.4939 12.4356C15.1822 12.1628 14.7084 12.1944 14.4356 12.5061L11.5657 15.786C11.4776 15.8867 11.3258 15.9002 11.2214 15.8166L9.46855 14.4144C9.1451 14.1556 8.67313 14.208 8.41438 14.5315C8.15562 14.8549 8.20806 15.3269 8.53151 15.5857L10.2843 16.9879C11.0156 17.5729 12.0779 17.4786 12.6946 16.7738L15.5645 13.4939Z" fill="#7152F3" />
        </svg>
        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill={'none'} xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 2V5" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z" stroke={stroke} stroke-width="1.5" />
            <path d="M9 15L10.7528 16.4023C11.1707 16.7366 11.7777 16.6826 12.1301 16.2799L15 13" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 9H21" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
        </svg>)
    )
}

function PayrollIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (

        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 11.25C11.3096 11.25 10.75 10.6904 10.75 10C10.75 9.30964 11.3096 8.75 12 8.75C12.6904 8.75 13.25 9.30964 13.25 10C13.25 10.4142 13.5858 10.75 14 10.75C14.4142 10.75 14.75 10.4142 14.75 10C14.75 8.74122 13.9043 7.67998 12.75 7.35352V6.5C12.75 6.08579 12.4142 5.75 12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5V7.35352C10.0957 7.67998 9.25 8.74122 9.25 10C9.25 11.5188 10.4812 12.75 12 12.75C12.6904 12.75 13.25 13.3096 13.25 14C13.25 14.6904 12.6904 15.25 12 15.25C11.3096 15.25 10.75 14.6904 10.75 14C10.75 13.5858 10.4142 13.25 10 13.25C9.58579 13.25 9.25 13.5858 9.25 14C9.25 15.2588 10.0957 16.32 11.25 16.6465V17.5C11.25 17.9142 11.5858 18.25 12 18.25C12.4142 18.25 12.75 17.9142 12.75 17.5V16.6465C13.9043 16.32 14.75 15.2588 14.75 14C14.75 12.4812 13.5188 11.25 12 11.25Z" fill="#7152F3" />
        </svg>

        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke={stroke} stroke-width="1.5" />
            <path d="M14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 6.5V8" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 16V17.5" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        )
    )
}

function JobsIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (
        !isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
            <path d="M14 12.16V13.16C14 13.17 14 13.17 14 13.18C14 14.27 13.99 15.16 12 15.16C10.02 15.16 10 14.28 10 13.19V12.16C10 11.16 10 11.16 11 11.16H13C14 11.16 14 11.16 14 12.16Z" stroke={stroke} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="#7152F3" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.70422 12.5398C2.36948 12.4067 2 12.6496 2 13.0098V18.375C2 20.5842 3.79086 22.375 6 22.375H18C20.2091 22.375 22 20.5842 22 18.375V13.0098C22 12.6496 21.6305 12.4068 21.2958 12.5398C20.029 13.0433 18.4079 13.5628 16.5036 13.9087C15.7992 14.0367 15.2884 14.6421 14.9597 15.278C14.461 16.2429 13.454 16.9024 12.293 16.9024H11.7069C10.5459 16.9024 9.53891 16.2429 9.0402 15.278C8.71148 14.642 8.20068 14.0367 7.4963 13.9087C5.59207 13.5627 3.97099 13.0432 2.70422 12.5398Z" fill="#7152F3" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.375H6C3.79086 6.375 2 8.16586 2 10.375C2 10.5921 2.10742 10.7935 2.29492 10.9029C3.14278 11.3976 5.7673 12.7693 9.49817 13.2321V13.6891C9.49817 14.7937 10.3936 15.6891 11.4982 15.6891H12.5016C13.6062 15.6891 14.5016 14.7937 14.5016 13.6891V13.2322C18.2326 12.7694 20.8572 11.3976 21.7051 10.9029C21.8926 10.7935 22 10.5921 22 10.375C22 8.16586 20.2091 6.375 18 6.375ZM11.0751 12.4694C10.9647 12.4694 10.8751 12.5589 10.8751 12.6694V13.6582C10.8751 14.1 11.2333 14.4582 11.6751 14.4582H12.3248C12.7666 14.4582 13.1248 14.1 13.1248 13.6582V12.6694C13.1248 12.5589 13.0352 12.4694 12.9248 12.4694H11.0751Z" fill="#7152F3" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.125C9.75736 3.125 8.75 4.13236 8.75 5.375V6.375C8.75 6.78921 8.41421 7.125 8 7.125C7.58579 7.125 7.25 6.78921 7.25 6.375V5.375C7.25 3.30393 8.92893 1.625 11 1.625H13C15.0711 1.625 16.75 3.30393 16.75 5.375V6.375C16.75 6.78921 16.4142 7.125 16 7.125C15.5858 7.125 15.25 6.78921 15.25 6.375V5.375C15.25 4.13236 14.2426 3.125 13 3.125H11Z" fill="#7152F3" />
        </svg>

        )
    )
}

function CandidatesIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (
        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C12.2091 11 14 9.20914 14 7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7C6 9.20914 7.79086 11 10 11ZM10 21C13.866 21 17 19.2091 17 17C17 14.7909 13.866 13 10 13C6.13401 13 3 14.7909 3 17C3 19.2091 6.13401 21 10 21ZM13.9614 10.8155C14.9141 9.82652 15.5 8.48172 15.5 7.00008C15.5 6.29549 15.3675 5.62184 15.1261 5.00269C16.7244 5.0688 17.9999 6.38548 17.9999 8.00008C17.9999 9.65694 16.6568 11.0001 14.9999 11.0001C14.6349 11.0001 14.285 10.9349 13.9614 10.8155ZM18.4999 16.9999C18.4999 17.5387 18.3802 18.0595 18.157 18.5515C19.8634 18.0226 20.9999 17.0776 20.9999 15.9999C20.9999 14.4937 18.7799 13.2468 15.8867 13.0325C17.4974 14.0333 18.4999 15.4409 18.4999 16.9999Z" fill="#7152F3" />
        </svg>
        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10" cy="17.5" rx="7" ry="3.5" stroke={stroke} stroke-width="1.5" stroke-linejoin="round" />
            <circle cx="10" cy="7" r="4" stroke={stroke} stroke-width="1.5" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0447 10.2496C14.7227 10.7485 14.3286 11.1965 13.8773 11.5791C14.2318 11.6901 14.6089 11.75 15 11.75C17.0711 11.75 18.75 10.0711 18.75 7.99999C18.75 6.04422 17.2528 4.43814 15.342 4.26538C15.6082 4.78435 15.801 5.34717 15.9067 5.94015C16.6978 6.28887 17.25 7.07994 17.25 7.99999C17.25 9.2277 16.2667 10.2257 15.0447 10.2496Z" fill={stroke} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9995 17.5563C18.9895 18.1705 18.8146 18.7606 18.5008 19.3109C18.8692 19.2095 19.2143 19.0921 19.5311 18.9601C20.1282 18.7113 20.6604 18.3959 21.0548 18.0074C21.4519 17.6163 21.75 17.1065 21.75 16.5C21.75 15.8936 21.4519 15.3837 21.0548 14.9926C20.6604 14.6041 20.1282 14.2887 19.5311 14.0399C18.5085 13.6138 17.1906 13.3394 15.7494 13.2684C16.7516 13.7775 17.5701 14.417 18.135 15.1443C18.4327 15.2275 18.7071 15.3216 18.9542 15.4246C19.4428 15.6282 19.7893 15.8515 20.0022 16.0612C20.2124 16.2683 20.25 16.4161 20.25 16.5C20.25 16.5839 20.2124 16.7318 20.0022 16.9388C19.796 17.142 19.4643 17.3579 18.9995 17.5563Z" fill={stroke} />
        </svg>
        )
    )
}

function LeavesIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (
        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2H14C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6H10C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2ZM6.50733 4.03003C6.50247 4.10272 6.5 4.17607 6.5 4.24999C6.5 6.04491 7.95507 7.49999 9.75 7.49999H14.25C16.0449 7.49999 17.5 6.04491 17.5 4.24999C17.5 4.17607 17.4975 4.10272 17.4927 4.03003C19.4694 4.27282 21 5.95766 21 7.99999V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.99999C3 5.95766 4.53062 4.27282 6.50733 4.03003ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H16C16.4142 14.75 16.75 14.4142 16.75 14C16.75 13.5858 16.4142 13.25 16 13.25H8ZM7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H12C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75H8C7.58579 18.75 7.25 18.4142 7.25 18Z" fill="#7152F3"/>
        </svg>
        
        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H16M8 14H16M8 18H12M8 4C8 5.10457 8.89543 6 10 6H14C15.1046 6 16 5.10457 16 4M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4M8 4H7C4.79086 4 3 5.79086 3 8V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V8C21 5.79086 19.2091 4 17 4H16" stroke={stroke} stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        
        )
    )
}

function HolidaysIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (
        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2817 0.75C16.696 0.75 17.0317 1.08579 17.0317 1.5V3H17.2817C19.4909 3 21.2817 4.79086 21.2817 7V17.5C21.2817 19.7091 19.4909 21.5 17.2817 21.5H7.28174C5.0726 21.5 3.28174 19.7091 3.28174 17.5V7C3.28174 4.79086 5.0726 3 7.28174 3H7.53174V1.5C7.53174 1.08579 7.86752 0.75 8.28174 0.75C8.69595 0.75 9.03174 1.08579 9.03174 1.5V3H15.5317V1.5C15.5317 1.08579 15.8675 0.75 16.2817 0.75ZM18.0317 12.5C18.0317 12.9142 17.696 13.25 17.2817 13.25H11.2817C10.8675 13.25 10.5317 12.9142 10.5317 12.5C10.5317 12.0858 10.8675 11.75 11.2817 11.75H17.2817C17.696 11.75 18.0317 12.0858 18.0317 12.5ZM17.2817 9.25C17.696 9.25 18.0317 8.91421 18.0317 8.5C18.0317 8.08579 17.696 7.75 17.2817 7.75H11.2817C10.8675 7.75 10.5317 8.08579 10.5317 8.5C10.5317 8.91421 10.8675 9.25 11.2817 9.25H17.2817ZM18.0317 16.5C18.0317 16.9142 17.696 17.25 17.2817 17.25H11.2817C10.8675 17.25 10.5317 16.9142 10.5317 16.5C10.5317 16.0858 10.8675 15.75 11.2817 15.75H17.2817C17.696 15.75 18.0317 16.0858 18.0317 16.5ZM8.78174 8.5C8.78174 9.05228 8.33402 9.5 7.78174 9.5C7.22945 9.5 6.78174 9.05228 6.78174 8.5C6.78174 7.94772 7.22945 7.5 7.78174 7.5C8.33402 7.5 8.78174 7.94772 8.78174 8.5ZM7.78174 13.5C8.33402 13.5 8.78174 13.0523 8.78174 12.5C8.78174 11.9477 8.33402 11.5 7.78174 11.5C7.22945 11.5 6.78174 11.9477 6.78174 12.5C6.78174 13.0523 7.22945 13.5 7.78174 13.5ZM8.78174 16.5C8.78174 17.0523 8.33402 17.5 7.78174 17.5C7.22945 17.5 6.78174 17.0523 6.78174 16.5C6.78174 15.9477 7.22945 15.5 7.78174 15.5C8.33402 15.5 8.78174 15.9477 8.78174 16.5Z" fill="#7152F3"/>
        </svg>
        
        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 13H11M17 9H11M17 17H11M16 2V5M8 2V5M7 22H17C19.2091 22 21 20.2091 21 18V7.5C21 5.29086 19.2091 3.5 17 3.5H7C4.79086 3.5 3 5.29086 3 7.5V18C3 20.2091 4.79086 22 7 22Z" stroke={stroke} stroke-width="1.5" stroke-linecap="round"/>
        <path d="M8.5 9C8.5 9.55228 8.05228 10 7.5 10C6.94772 10 6.5 9.55228 6.5 9C6.5 8.44772 6.94772 8 7.5 8C8.05228 8 8.5 8.44772 8.5 9Z" fill={stroke}/>
        <path d="M8.5 13C8.5 13.5523 8.05228 14 7.5 14C6.94772 14 6.5 13.5523 6.5 13C6.5 12.4477 6.94772 12 7.5 12C8.05228 12 8.5 12.4477 8.5 13Z" fill={stroke}/>
        <path d="M8.5 17C8.5 17.5523 8.05228 18 7.5 18C6.94772 18 6.5 17.5523 6.5 17C6.5 16.4477 6.94772 16 7.5 16C8.05228 16 8.5 16.4477 8.5 17Z" fill={stroke}/>
        </svg>
        
        )
    )
}

function SettingsIcon({ isSelected, isDark }) {
    let stroke;
    stroke = isDark ? 'white' : 'black'
    return (
        isSelected ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0455 3H12.9545C14.0089 3 14.8636 3.80589 14.8636 4.8C14.8636 5.93762 16.0808 6.66088 17.08 6.11698L17.1815 6.06174C18.0946 5.56468 19.2622 5.85966 19.7894 6.72058L20.7439 8.27943C21.2711 9.14036 20.9582 10.2412 20.0451 10.7383C19.0455 11.2824 19.0455 12.7176 20.0451 13.2617C20.9582 13.7588 21.2711 14.8596 20.7439 15.7206L19.7894 17.2794C19.2622 18.1403 18.0946 18.4353 17.1815 17.9383L17.08 17.883C16.0808 17.3391 14.8636 18.0624 14.8636 19.2C14.8636 20.1941 14.0089 21 12.9545 21H11.0455C9.99109 21 9.13635 20.1941 9.13635 19.2C9.13635 18.0624 7.91917 17.3391 6.92 17.883L6.81851 17.9383C5.90541 18.4353 4.73782 18.1404 4.21064 17.2794L3.25609 15.7206C2.72891 14.8597 3.04176 13.7588 3.95487 13.2617C4.95451 12.7176 4.95451 11.2824 3.95487 10.7383C3.04176 10.2412 2.72891 9.14034 3.25609 8.27942L4.21064 6.72057C4.73782 5.85964 5.90541 5.56467 6.81852 6.06172L6.92 6.11697C7.91917 6.66087 9.13635 5.93761 9.13635 4.8C9.13635 3.80589 9.99109 3 11.0455 3ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z" fill="#7152F3"/>
        </svg>
        ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7439 15.7206L20.1043 15.3289V15.3289L20.7439 15.7206ZM19.7894 17.2794L20.429 17.6711V17.6711L19.7894 17.2794ZM3.25609 8.27942L2.61648 7.88775H2.61648L3.25609 8.27942ZM4.21064 6.72057L4.85025 7.11223L4.21064 6.72057ZM6.81852 6.06172L7.1771 5.403L7.1771 5.403L6.81852 6.06172ZM3.95487 10.7383L3.59629 11.397H3.59629L3.95487 10.7383ZM17.1815 17.9383L16.8229 18.597L16.8229 18.597L17.1815 17.9383ZM20.0451 13.2617L19.6866 13.9204V13.9205L20.0451 13.2617ZM4.21064 17.2794L3.57103 17.6711L3.57103 17.6711L4.21064 17.2794ZM3.25609 15.7206L3.8957 15.3289L3.8957 15.3289L3.25609 15.7206ZM19.7894 6.72058L20.429 6.32892V6.32892L19.7894 6.72058ZM20.7439 8.27943L20.1043 8.67109V8.67109L20.7439 8.27943ZM20.0451 10.7383L20.4037 11.397L20.0451 10.7383ZM17.1815 6.06174L17.5401 6.72046V6.72046L17.1815 6.06174ZM3.95487 13.2617L4.31345 13.9205H4.31345L3.95487 13.2617ZM6.81851 17.9383L6.45994 17.2795L6.45993 17.2795L6.81851 17.9383ZM17.08 6.11698L16.7214 5.45825L17.08 6.11698ZM6.92 6.11697L6.56142 6.77569L6.56142 6.77569L6.92 6.11697ZM17.08 17.883L17.4386 17.2243L17.4386 17.2243L17.08 17.883ZM6.92 17.883L7.27858 18.5418L7.27858 18.5418L6.92 17.883ZM11.0455 3.75H12.9545V2.25H11.0455V3.75ZM12.9545 20.25H11.0455V21.75H12.9545V20.25ZM11.0455 20.25C10.3631 20.25 9.88635 19.7389 9.88635 19.2H8.38635C8.38635 20.6493 9.61906 21.75 11.0455 21.75V20.25ZM14.1136 19.2C14.1136 19.7389 13.6369 20.25 12.9545 20.25V21.75C14.3809 21.75 15.6136 20.6493 15.6136 19.2H14.1136ZM12.9545 3.75C13.6369 3.75 14.1136 4.26107 14.1136 4.8H15.6136C15.6136 3.35071 14.3809 2.25 12.9545 2.25V3.75ZM11.0455 2.25C9.61906 2.25 8.38635 3.35071 8.38635 4.8H9.88635C9.88635 4.26107 10.3631 3.75 11.0455 3.75V2.25ZM20.1043 15.3289L19.1498 16.8878L20.429 17.6711L21.3835 16.1122L20.1043 15.3289ZM3.8957 8.67108L4.85025 7.11223L3.57103 6.32891L2.61648 7.88775L3.8957 8.67108ZM4.85025 7.11223C5.15889 6.6082 5.88055 6.40506 6.45993 6.72045L7.1771 5.403C5.93027 4.72428 4.31676 5.11109 3.57103 6.32891L4.85025 7.11223ZM4.31345 10.0795C3.75746 9.77688 3.6043 9.14696 3.8957 8.67108L2.61648 7.88775C1.85352 9.13373 2.32606 10.7055 3.59629 11.397L4.31345 10.0795ZM19.1498 16.8878C18.8411 17.3918 18.1195 17.5949 17.5401 17.2795L16.8229 18.597C18.0697 19.2757 19.6832 18.8889 20.429 17.6711L19.1498 16.8878ZM21.3835 16.1122C22.1465 14.8663 21.6739 13.2945 20.4037 12.603L19.6866 13.9205C20.2425 14.2231 20.3957 14.853 20.1043 15.3289L21.3835 16.1122ZM4.85025 16.8878L3.8957 15.3289L2.61648 16.1122L3.57103 17.6711L4.85025 16.8878ZM19.1498 7.11225L20.1043 8.67109L21.3835 7.88777L20.429 6.32892L19.1498 7.11225ZM20.1043 8.67109C20.3957 9.14697 20.2425 9.77689 19.6866 10.0795L20.4037 11.397C21.6739 10.7055 22.1465 9.13374 21.3835 7.88777L20.1043 8.67109ZM17.5401 6.72046C18.1195 6.40507 18.8411 6.60822 19.1498 7.11225L20.429 6.32892C19.6832 5.1111 18.0697 4.72429 16.8229 5.40301L17.5401 6.72046ZM3.8957 15.3289C3.6043 14.853 3.75746 14.2231 4.31345 13.9205L3.59629 12.603C2.32606 13.2945 1.85352 14.8663 2.61648 16.1122L3.8957 15.3289ZM3.57103 17.6711C4.31675 18.8889 5.93027 19.2757 7.1771 18.597L6.45993 17.2795C5.88055 17.5949 5.15889 17.3918 4.85025 16.8878L3.57103 17.6711ZM17.4386 6.7757L17.5401 6.72046L16.8229 5.40301L16.7214 5.45825L17.4386 6.7757ZM6.45993 6.72045L6.56142 6.77569L7.27858 5.45824L7.1771 5.403L6.45993 6.72045ZM17.5401 17.2795L17.4386 17.2243L16.7214 18.5417L16.8229 18.597L17.5401 17.2795ZM6.56142 17.2243L6.45994 17.2795L7.17709 18.597L7.27858 18.5418L6.56142 17.2243ZM3.59629 11.397C4.07404 11.6571 4.07404 12.3429 3.59629 12.603L4.31345 13.9205C5.83498 13.0922 5.83498 10.9078 4.31345 10.0795L3.59629 11.397ZM7.27858 18.5418C7.77798 18.2699 8.38635 18.6314 8.38635 19.2H9.88635C9.88635 17.4934 8.06035 16.4084 6.56142 17.2243L7.27858 18.5418ZM15.6136 19.2C15.6136 18.6314 16.222 18.2699 16.7214 18.5417L17.4386 17.2243C15.9397 16.4083 14.1136 17.4934 14.1136 19.2H15.6136ZM20.4037 12.603C19.926 12.3429 19.926 11.6571 20.4037 11.397L19.6866 10.0795C18.165 10.9078 18.165 13.0922 19.6866 13.9204L20.4037 12.603ZM6.56142 6.77569C8.06035 7.59165 9.88635 6.50663 9.88635 4.8H8.38635C8.38635 5.3686 7.77798 5.7301 7.27858 5.45824L6.56142 6.77569ZM16.7214 5.45825C16.222 5.73011 15.6136 5.36861 15.6136 4.8H14.1136C14.1136 6.50663 15.9397 7.59166 17.4386 6.7757L16.7214 5.45825ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 14.25C10.7574 14.25 9.75001 13.2426 9.75001 12H8.25001C8.25001 14.0711 9.92894 15.75 12 15.75V14.25ZM9.75001 12C9.75001 10.7574 10.7574 9.75 12 9.75V8.25C9.92894 8.25 8.25001 9.92893 8.25001 12H9.75001ZM12 9.75C13.2426 9.75 14.25 10.7574 14.25 12H15.75C15.75 9.92893 14.0711 8.25 12 8.25V9.75Z" fill={stroke}/>
        </svg>        
        )
    )
}



export { DashboardIcon, AllEmployeesIcon, AllDepartmentsIcon, AttendenceIcon, PayrollIcon, JobsIcon, CandidatesIcon, LeavesIcon, HolidaysIcon, SettingsIcon }