import React from 'react';
import Special from '../Special/Special';

const MySelf = ({House}) => {
    return (
        <div>
            <h1>Me</h1>
            <p>House:{House}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;