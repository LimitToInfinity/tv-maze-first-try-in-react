import React from "react";

function ShowCard(props) {

    const { name, image } = props;

    return(
        <div className="show-card">
            <img alt={name} src={image} />
        </div>
    );
}

export default ShowCard;