import React from "react";

class Archives extends React.Component {
  render() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    let message =
      (this.props.match.params.article
        ? this.props.match.params.article + ", "
        : "") +
      "date=" +
      query.get("date") +
      ", filter=" +
      query.get("filter");
    return (
      <div>
        <h1>Archives</h1>
        <h2>{message}</h2>
      </div>
    );
  }
}

export default Archives;