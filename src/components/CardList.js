import React from 'react';
import Card from './Card';

const CardList = ( { members } ) => {
    return (
        <div>
            {
                members.map((user, i) => {
                    return (
                        <Card 
                            key = { members[i].id }
                            id = { members[i].id } 
                            name = { members[i].name } 
                            email = { members[i].email }
                            bs = { members[i].company.bs }
                        />)
                })
            };
        </div>
    );
}

export default CardList;