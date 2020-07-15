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
    return <h1>Archives ({message})</h1>;
  }
}

export default Archives;
