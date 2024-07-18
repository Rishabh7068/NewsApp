import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, url, newsUrl ,author , publish ,source} = this.props;
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
                {source}
            </span>
          </div>
            
          <img src={url} className="card-img-top" alt="newsimg" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By : {author} on {new Date(publish).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
