import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=916dbe69585b478aa27c27f9d66e0aed";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles : parsedData.articles
    })

  }

  render() {
    return (
      <div className="container my-3">
        <h1>News - Top Headlines </h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description: ""}
                  url={element.urlToImage ? element.urlToImage : "https://cdn.zeebiz.com/sites/default/files/2024/07/15/304830-pexel.png"}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

// 916dbe69585b478aa27c27f9d66e0aed