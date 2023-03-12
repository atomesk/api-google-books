import React from "react";
import Paginator from "./Paginator";
import ContenueLivre from "./ContenueLivre";

class Livres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalItems: 0,
    };
  }

  handlePreviousPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  handleNextPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.totalItems / 10)) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };

  render() {
    const { livres } = this.props;
    const { currentPage, totalItems } = this.state;
    const totalPages = Math.ceil(totalItems / 10);

    return (
      <div>
        <div className="contain">
          <div className="contain">
            {livres && livres.length ? (
              <div className="container">
                {livres.map((livre, index) => (
                  <ContenueLivre key={index} name={livre} />
                ))}
              </div>
            ) : (
              <h3>Veuillez rechercher un auteur valide</h3>
            )}
          </div>
        </div>
        {livres && livres.length ? (
          <Paginator
            page={currentPage}
            totalPages={totalPages}
            previousPage={this.handlePreviousPage}
            nextPage={this.handleNextPage}
          />
        ) : null}
      </div>
    );
  }
}

export default Livres;
