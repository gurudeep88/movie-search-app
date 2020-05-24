import React from 'react';
import spinner from '../../asset/images/spinner.gif'

function Spinner() {
    return (
        <div>
            <img 
                src={spinner}
                style={{width: '50px', margin: 'auto', display: 'block'}}
                alt='Loading...'
            />
        </div>
    )
}

export default Spinner;
