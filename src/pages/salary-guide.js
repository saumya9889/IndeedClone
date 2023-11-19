import React from 'react'
import { SalaryGuideData } from "../components/jobFeeds/jobData";

const SalaryGuide = () => {
  return (
    <div className="SalaryGuide" id='SalaryGuide'>
      <h2>Salary Guide</h2>
      <div className="salary-guid-cards">
        {SalaryGuideData.map((item, index) => (
          <div className="cards-content" key={index}>
            <h2>{item.title}</h2>
            <div className="salary-price">
              <p>{item?.price}</p>
              <span>
                {item.arrowIcon}
              </span>
            </div>
            <a href='#' className="job-openings">{item.jobs}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SalaryGuide
