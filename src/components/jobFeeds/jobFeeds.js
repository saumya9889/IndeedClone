import React from 'react'
import JobCards from './jobCards'
import {JobCardsData,JobCompanyData} from "../jobFeeds/jobData";

const JobFeeds = () => {
   
    return (
        <div className="job-feeds">
            <div className="jobs-container">
                <h2 className="title">
                    Jobs based on your activity on Indeed
                </h2>
            </div>
            <div className="jobs-main-cards-wrapper">
                <div className="card-left">
                {JobCardsData?.map((item, index) => (
                    <JobCards key={index} data={item} />
                ))}
                 <button className="show-more">
                    show more jobs
                 </button>
                </div>
                <div className="card-right">
                {JobCompanyData?.map((item, index) => (
                    <JobCards key={index} data={item} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default JobFeeds
