import React from 'react'
const CommonFormat = ({ customStyle, spanTag, p, url }) => {
    return (<>
        <div className="container">
            <div className="row align-items-center">
                <div className='margin padding'></div>
                <div className="col-md-6">
                    <p><span class="fw-bolder" style={customStyle}>{spanTag}</span> {p}</p>
                </div>

                <div className="col-md-6">
                    <img className='img-fluid' src={url} alt="" />
                </div>

            </div>
        </div>

    </>)
}
export default CommonFormat