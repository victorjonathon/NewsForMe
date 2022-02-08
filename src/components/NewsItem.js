const NewsItem = (props) => {
    return(
        <div className="card col-md-3 m-2 px-0">
            <img src={props.urlToImage} className="card-img-top" alt="News Images"/>
            <div className="card-body">
                <h5 className="card-title">{props?.title.length > 45 ? props.title.substr(0, 45)+'...' : props.title}</h5>
                <p className="card-text">{props.description && props.description.length > 120 ? props.description.substr(0, 120)+'...' : props.description}</p>
                <a target="_blank" rel="noreferrer" href={props.url} className="btn btn-primary">View Details</a>
            </div>
        </div>
    )
}

export default NewsItem;