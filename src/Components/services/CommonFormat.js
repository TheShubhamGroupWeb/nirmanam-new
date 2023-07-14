import React from 'react'
const CommonFormat = ({ customStyle, spanTag, spanTag2, spanTag3, spanTag4, spanTag6,
     p, p2, p3, p4, p5, p6, url }) => {
    return (<>
        <div className="container">
            <div className="row align-items-center">
                <div className='margin padding'></div>
                <div className="col-md-6">
                    <p><span class="fw-bolder" style={customStyle}>{spanTag}</span> {p}</p>
                    <p><span class="fw-bolder" style={customStyle}>{spanTag2}</span> {p2}</p>
                    <p><span class="fw-bolder" style={customStyle}>{spanTag3}</span> {p3}</p>
                    <p><span class="fw-bolder" style={customStyle}>{spanTag4}</span> {p4}</p>
                    <p><span class="fw-bolder" style={customStyle}></span> {p5}</p>
                    <p><span class="fw-bolder" style={customStyle}>{spanTag6}</span> {p6}</p>

                </div>

                <div className="col-md-6">
                    <img className='img-fluid' src={url} alt="" />
                </div>

            </div>
        </div>

    </>)
}
export default CommonFormat