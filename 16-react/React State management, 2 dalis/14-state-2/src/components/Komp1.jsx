import { useState } from 'react';

const Komp1 = () => {
    const [zodis, setZodis] = useState('');

    const zodzioHandler = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        setZodis(event.target.value);
    };

    return (
        <div>
            <h2>Žodžio ilgis</h2>
            <label htmlFor="vardasInput">Žodis:</label>
            <input onInput={zodzioHandler} type="text" id="vardasInput" />
            <p>Įvestas žodis: {zodis}</p>
            <p>Simbolių kiekis: {zodis.length}</p>
        </div>
    )
}

export default Komp1
