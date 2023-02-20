
import React from 'react';
import { Link } from 'react-router-dom';
import characters from './characters.json';

function CharacterList() {
    return (
        <div>
            {characters.map(character => (
                <div key={character.id}>
                    <Link to={`/character/${character.id}`}>{character.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default CharacterList;