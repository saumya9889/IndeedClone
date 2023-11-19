import React, { useState } from 'react'
import RecentSearch from '../components/recentSearch'
import JobFeeds from '../components/jobFeeds/jobFeeds'

const Jobs = () => {
    const [tab, setTab] = useState(true);
    const handleRecentTab = () => {
        setTab(false)
    }
    const handleFeedsTab = () => {
        setTab(true)
    }
    return (
        <div className="jobs-wrap">
            <div className="jobs-header-wrap">
                <div className="jobs-tab">
                    <button className={`${tab ? "active" :"unActive"}`} onClick={handleFeedsTab}>Job Feed</button>
                    <button className={`${tab ? "unActive" :"active"}`} onClick={handleRecentTab}>recent search</button>
                </div>
            </div>
            <div className="jobs-main-content-wrap">
                {tab ? <JobFeeds /> :
                    <RecentSearch />}
            </div>
        </div>
    )
}

export default Jobs
