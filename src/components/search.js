import React from 'react'

const Search = () => {
    return (
        <div className="main-search-wrapper">
            <div className="search-wrap">
                <span className="title-wrap">what</span>
                <input type="text" placeholder="Job title, keywords, or company" />
                <span className="icon-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" aria-hidden="true"><defs></defs><path fill="#767676" fill-rule="evenodd" d="M11.4038 12.3048C10.7084 12.7451 9.88397 13 9 13c-2.48528 0-4.5-2.0147-4.5-4.5C4.5 6.01472 6.51472 4 9 4c2.4853 0 4.5 2.01472 4.5 4.5 0 .87711-.2509 1.6956-.6849 2.3876l3.5089 3.5089c.1952.1953.1952.5119 0 .7071l-.7071.7072c-.1953.1952-.5119.1952-.7071 0l-3.506-3.506zM11.5 8.5c0 1.38071-1.1193 2.5-2.5 2.5-1.38071 0-2.5-1.11929-2.5-2.5S7.61929 6 9 6c1.3807 0 2.5 1.11929 2.5 2.5z" clip-rule="evenodd"></path></svg>
                </span>
            </div>
            <div className="search-wrap">
                <span className="title-wrap">where</span>
                <input type="text" placeholder="City, state, zip code, or &quot;remote&quot;" />
                <span className="icon-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" aria-hidden="true"><defs></defs><path fill="#767676" fill-rule="evenodd" d="M5.81104 8.2c0-2.322 1.87303-4.2 4.18889-4.2 2.31587 0 4.18887 1.878 4.18887 4.2 0 2.581-2.8123 6.1691-3.8282 7.3811-.1906.2274-.5307.2274-.72131 0C8.62332 14.3691 5.81104 10.781 5.81104 8.2zm4.1889 2.0029c1.10456 0 1.99996-.89545 1.99996-2.00002 0-1.10457-.8954-2-1.99996-2-1.10457 0-2 .89543-2 2s.89543 2.00002 2 2.00002z" clip-rule="evenodd"></path></svg>
                </span>
            </div>
            <button className="find-button">
                find jobs
            </button>
        </div>
    )
}

export default Search
