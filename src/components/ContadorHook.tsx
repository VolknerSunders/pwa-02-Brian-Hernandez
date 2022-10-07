import { useCounter } from './hooks/useCounter';
export const ContadorHook = () => {
    const {valor, acumular} = useCounter();
    return (
        <div>
            <h3>Contador Hook: <small>{valor}</small></h3>
            <button className="FicButton1"
                    onClick={() => acumular(1)}
            >
                    Sumar (+1)
            </button>
            &nbsp;
            <button className="FicButton2"
                    onClick={() => acumular(-1)}
            >
                    Restar (-1)
            </button>
        </div>
    )
}