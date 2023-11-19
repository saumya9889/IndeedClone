import React from 'react'

const CompanyReview = () => {
    return (
        <div className="CompanyReview" id='CompanyReview'>
            <h2>Company Review</h2>
            <div className="company-review-cards">
                <div class="comment">
                    <div class="comment_header">
                        <div class="comment_header-pic"></div>
                        <h2>Jesse Hopkins</h2>
                    </div>
                    <div class="comment_content">
                        <p>
                            Gorgeous design! Even more responsive than the previous version. A
                            pleasure to use!
                        </p>
                    </div>
                    <div class="comment_footer">
                        <span>Feb 13, 2022</span>
                        <button>
                            <svg
                                width="14"
                                height="18"
                                viewBox="0 0 14 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 9V15.4C0 16.2837 0.716344 17 1.6 17H11.2C12.0837 17 12.8 16.2837 12.8 15.4V9"
                                    stroke="#8C8AA7"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M9.59995 4.2L6.39995 1L3.19995 4.2"
                                    stroke="#8C8AA7"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M6.4 1V11.4"
                                    stroke="#8C8AA7"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span>Share</span>
                        </button>
                    </div>
                </div>

                <div class="comment">
                    <div class="comment_header">
                        <div class="comment_header-pic"></div>
                        <h2>Alice Banks</h2>
                    </div>
                    <div class="comment_content">
                        <p>
                            The device has a clean design, and the metal housing feels sturdy in
                            my hands. Soft rounded corners make it a pleasure to look at.
                        </p>
                    </div>
                    <div class="comment_footer">
                        <span>JAN 23, 2023</span>
                        <button>
                            <svg
                                width="14"
                                height="18"
                                viewBox="0 0 14 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 9V15.4C0 16.2837 0.716344 17 1.6 17H11.2C12.0837 17 12.8 16.2837 12.8 15.4V9"
                                    stroke="#8C8AA7"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M9.59995 4.2L6.39995 1L3.19995 4.2"
                                    stroke="#8C8AA7"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M6.4 1V11.4"
                                    stroke="#8C8AA7"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyReview
