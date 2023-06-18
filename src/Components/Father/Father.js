import React from 'react';
import Sister from '../Sister/Sister';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';



const Father = ({ House}) => {
    return (
        <div>
            <h1>Father:</h1>
            <p>House:{House}</p>
            <MySelf House={House}></MySelf>
            <Brother House={House}></Brother>
            <Sister House={House}></Sister>

        </div>
    );
};

export default Father;