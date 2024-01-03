import Vaikinis from "./Vaikinis"

const Tevinis = () => {

    let prekes = [
        { pavadinimas: "Knyga", kiekis: 10 },
        { pavadinimas: "Zaislas", kiekis: 5 },
        { pavadinimas: "Kompiuteris", kiekis: 1}
    ];

    return (
        <div>
            <h2>Tevinis</h2>
            {
                prekes.map((preke, i) => {
                    return <Vaikinis key={i} preke={preke} />
                })
            }
        </div>
    )
}

export default Tevinis