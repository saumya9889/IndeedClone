import React from 'react'

const JobCards = ({ key, data }) => {
    return (
        <div className="job-cards-wrapper" key={key}>
            <div className="title">
                <h2>{data?.title}</h2>
                <span className="more-icon">
                    {data?.moreIcon}
                </span>
            </div>
            <h3>{data?.companyName}</h3>
            <h4>{data?.location}</h4>
            {data?.jobType && <h5>{data?.jobType} <span>{data?.checkIcon}</span></h5>}
            <ul className="job-description">
                {data?.jobDescibe?.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            {data?.postTime && <h6>{data?.postTime}</h6>}
            {data?.buttonText && <div className="btn-group">
                <button>{data?.buttonText}</button>
                <span>{data?.saveIcon}</span>
                <span>{data?.removeIcon}</span>
            </div>}
        </div>
    )
}

export default JobCards
