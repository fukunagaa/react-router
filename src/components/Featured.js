import React from "react";
import Article from "./Article";
import config from "../config";

class Featured extends React.Component {
  render() {
    const keys = Object.keys(config.articles);
    const article = keys[Math.round( Math.random() * ( keys.length - 1))];
    const content = config.articles[article];
    return (
      <div>
      <h1>Featured</h1>
      <div className={"row"}>
      <div className={"col-lg-12"}>
        <div className={"well text-center"}>
          Ad spot goes here
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