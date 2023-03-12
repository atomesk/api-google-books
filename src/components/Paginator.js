import React from "react";

class Paginator extends React.Component {

  

  render() {
    return (
      <div className="paginator">
        <button onClick={this.props.previousPage} disabled={this.props.page === 1}>
            &lt;
        </button>
        <span>Page {this.props.page} / {this.props.totalPages}</span>
        <button onClick={this.props.nextPage} disabled={this.props.page === this.props.totalPages}>
            &gt;
        </button>

      </div>
    );
  }
}

export default Paginator;
