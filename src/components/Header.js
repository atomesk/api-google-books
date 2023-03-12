import React from 'react';
import axios from 'axios';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            totalItems: 0,
        };
    }

    handleChange(event) {
        const input = event.target.value;
        this.setState({
            input: input,
        });
        const startIndex = (this.props.currentPage - 1) * 10;
        const requete = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:' + input + '&startIndex=' + startIndex + '&maxResults=10';
        axios
            .get(requete)
            .then((response) => {
                this.props.onChange(response.data.items);
                this.setState({ totalItems: response.totalItems || 0 });
            })
            .catch((error) => {
                console.log('Erreur serveur' + error);
            });
    }
    

    render() {
        return (
            <div className="navbar">
                <div className="wrapper-nav">
                    <h1>{this.props.titre}</h1>
                    <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)}  placeholder="Rehercher un auteur" />
                </div>
            </div>
        );
    }
}

export default Header;
