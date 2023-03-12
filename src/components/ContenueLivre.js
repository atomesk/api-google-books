import React from "react";

function ContenueLivre(props) {

    let image = props.name.volumeInfo.imageLinks
    if (!image) {
        image = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg";

    } else {
        image = props.name.volumeInfo.imageLinks.thumbnail;
    }

    let description = props.name.volumeInfo.description;
    if (!description) {
        description = "Pas de description disponible";
    }

    if (description.length > 300) {
        description = description.substring(0, 300) + "[...]";
    }

    let title = props.name.volumeInfo.title;
    if(title.length > 80){
        title = title.substring(0, 80) + "[...]";
    }

    return (

        <div className="composant-affichage">
            <div className="composant-flex">
                <div>
                    <img src={image}></img>
                </div>
                <div className="desc">
                    <h2>{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
            <div className="voirPlus"><a href={props.name.volumeInfo.previewLink} target="_blank">En savoir plus &gt;</a></div>
        </div>

    );
}

export default ContenueLivre;
