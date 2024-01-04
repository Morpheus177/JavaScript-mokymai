import TekstoVaik from "./TekstoVaik"

const TekstoBendras = () => {
    let vidinisTekstas = 'Trečia eilutė';

    return (
        <div>
            <h2>Teksto dalykai</h2>
            <TekstoVaik tekstas="Pirma eilutė" />
            <TekstoVaik tekstas="Antra eilutė" />
            <TekstoVaik tekstas={vidinisTekstas} />
            <TekstoVaik />
        </div>
    )
}

export default TekstoBendras