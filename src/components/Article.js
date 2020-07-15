import React from "react";

class Article extends React.Component {
  render() {
    const { article, content} = this.props
    return (
      <div className={"col-md-4"}>
        <h2>{article}</h2>
        <p>
          {content}
        </p>
        <a className={"btn btn-default"} href="#">
          More Info
        </a>
      </div>
    );
  }
}

export default Article;
