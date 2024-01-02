// pamėginkit susikurti naują komponentą Komp11
// ir ant jo padaryti kažką panašaus į čia, tik
// paimti ne šalį, o miestą

import { useState, useRef } from 'react';

const Komp1 = () => {
    const [salis, setSalis] = useState('');

    const salisInputRef = useRef();

    const ivestiSalisHandler = () => {
        // console.log(salisInputRef.current.value);
        setSalis(salisInputRef.current.value);
    };

    return (
        <div>
            <h2>Mėgstamiausia šalis</h2>
            <div>
                <label htmlFor="salis">Įveskite šalį:</label>
                <input ref={salisInputRef} id="salis" type="text" />
                <button onClick={ivestiSalisHandler}>Įvesti</button>
            </div>
            <p>Jūs įvedėte: {salis}</p>
        </div>
    )
}

export default Komp1

// Paprastam javascript būtų kažkas tokio:

// let mygtukas = document.querySelector('button');
// let inputas = document.querySelector('input');
// let rezultatas = document.querySelector('p');

// mygtukas.addEventListener('click', () => {
//     rezultatas.innerText = inputas.value;
// });