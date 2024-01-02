import { useState, useRef } from "react";

const Komp3 = () => {
    const [pazymiai, setPazymiai] = useState([]);

    const pazymysInputRef = useRef();

    const onPazymiaiSubmitHandler = (event) => {
        event.preventDefault();
        // alert('submittinta');
        let naujasPazymys = pazymysInputRef.current.valueAsNumber;
        // console.log(naujasPazymys);
        setPazymiai([...pazymiai, naujasPazymys]);
        pazymysInputRef.current.value = '';
        // console.log(pazymiai);
    };

    const onIsvalytiClickHandler = () => {
        setPazymiai([]);
    };

    const vidurkis = () => {
        return (pazymiai.reduce((a, b) => a + b, 0) / pazymiai.length).toFixed(2);
    };

    return (
        <div>
            <h2>Studento vidurkis</h2>
            <form onSubmit={onPazymiaiSubmitHandler}>
                <label htmlFor="pazymys">Įveskite pažymį:</label>
                <input ref={pazymysInputRef} type="number" min="1" max="10" />
                <button type="submit">Įvesti</button>
            </form>
            {
                pazymiai.length > 0 &&
                <div>
                    <h3>Įvesti pažymiai</h3>
                    <p>{ pazymiai.join(', ') }</p>
                </div>
            }
            {
                pazymiai.length > 0 &&
                <div>
                    <h3>Įvestų pažymių vidurkis</h3>
                    <p>{ vidurkis() }</p>
                </div>
            }
            {
                pazymiai.length > 0 &&
                <button onClick={onIsvalytiClickHandler}>Išvalyti</button>
            }
        </div>
    )
}

export default Komp3