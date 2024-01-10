import { useState } from 'react' ;
const Komp1 = () => {
    const [salis, setsalis] = useState('');
 return (
    <div>
        <h2>Mėgstamiausia šalis</h2>
        <div>
            <label htmlFor="šalis">Įveskite šalį</label>
            <input type="text" />
            <button>Įvesti</button>
        </div>
        <p>Jūs įvedėte: {salis}</p>
    </div>
 )
}

export default Komp1

