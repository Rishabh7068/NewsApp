import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, url, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="newsimg" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
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
