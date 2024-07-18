import React from "react";

const Newsitem = (props) => {
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position :"absolute",
            right : "0"
          }}>
          <span className="badge rounded-pill bg-primary">
                {props.source}
            </span>
          </div>
            
          <img src={props.url} className="card-img-top" alt="newsimg" />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text"><small className="text-muted">By : {props.author} on {new Date(props.publish).toGMTString()} </small></p>
            <a href={props.newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem
