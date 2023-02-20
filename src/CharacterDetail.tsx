
import React from 'react';
import { useParams } from 'react-router-dom';
import characters from './characters.json';

function CharacterDetail() {
    const params =useParams();
    const id: string | undefined = params.id;
    const character = characters.find(c => c.id === parseInt(id?id:"1"));

    return (
        <div>
            {character && <>
                  <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
                <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p></>}
        </div>
    );
}

export default CharacterDetail;