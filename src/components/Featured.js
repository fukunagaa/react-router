import React from "react";
import Article from "./Article";
import config from "../config";

class Featured extends React.Component {
  render() {
    const articles = config.articles;
    const adSpots = config.adSpots;
    const keys = Object.keys(articles);
    const article = keys[Math.round( Math.random() * ( keys.length - 1))];
    const content = articles[article];
    const adSpot = adSpots[Math.round( Math.random() * ( adSpots.length - 1))]
    return (
      <div>
      <h1>Featured</h1>
      <div className={"row"}>
      <div className={"col-lg-12"}>
        <div className={"well text-center"}>
          {adSpot}
        </div>
      </div>
    </div>
      <div className={"row"}>
        <Article article={article} content={content}/>
        <Article article={article} content={content}/>
        <Article article={article} content={content}/>
      </div>
      </div>
    );
  }
}

export default Featured;