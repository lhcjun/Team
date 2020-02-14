import React from 'react';



const Card = ({name, email, bs, id}) => {
    return (
        <div>
            <img src={"./img/1.png"}  alt="photo"/>
            <div>
                <h2>{ name }</h2>
            </div>
        </div>
    )
}

export default Card;