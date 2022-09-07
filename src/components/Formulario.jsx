import { Fragment } from "react";
import { Marcas, Years, Planes } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {

    const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador();

    const handleSubmit = e=>{
        e.preventDefault();

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios');
            return;
        }

        setError('');

        cotizarSeguro();
    }

    return (
        <>
            {error && <Error/>}

            <form 
                action=""
                onSubmit={handleSubmit}
            >
                <div className='my-5'>
                    <label 
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Marca
                    </label>
                    <select 
                        name="marca" 
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}
                    >
                        <option value="">-- Seleciona Marca --</option>
                        {Marcas.map(marca=>(
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>    
                </div>
                
                <div className='my-5'>
                    <label 
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Año
                    </label>
                    <select 
                        name="year" 
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.year}
                    >
                        <option value="">-- Seleciona Año --</option>
                        {Years.map(year=>(
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>    
                </div>
                
                <div className='my-5'>
                    <label 
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Elige un plan
                    </label>
                    <div className="flex gap-3 item-center">
                        {Planes.map(plan=>(
                            <Fragment key={plan.id}>
                                <label htmlFor={plan.nombre}>
                                    {plan.nombre}
                                </label>
                                <input
                                    id={plan.nombre}
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input 
                    type="submit" 
                    value="Cotizar" 
                    className="w-full bg-indigo-500 hover:bg-indigo-700 transition-all ease-in text-white cursor-pointer p-3 uppercase font-bold"        
                />
            </form>
        </>
    )
}

export default Formulario