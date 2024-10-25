import React from "react";

function NewsItem(props) {
    let { title, description, imageUrl, anotherURL, author, dateTime, publishedBy } = props;

    return (
        <div className={`card bg-${props.bgColor}`} style={{ width: '100%' }}>
            <span className="position-absolute start-50  translate-middle badge rounded-pill bg-danger" style={{ top: '10px' }}>
                {publishedBy}
                <span className="visually-hidden">Published by this organization</span>
            </span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className={`card-title text-${props.textColor}`}>{title}</h5>
                <p className={`card-text text-${props.textColor}`}>{description}</p>
                <p className="card-text"><small className={`text-body-secondary text-${props.textColor}`}>By {author}, Updated on {dateTime}</small></p>
                <a href={anotherURL} rel="noreferrer" target="_blank" className={`btn btn-primary`}>Read More</a>
            </div>
        </div>
    );
}

export default NewsItem