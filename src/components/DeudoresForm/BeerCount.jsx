import { useState } from "react"

//paso por prop valores por defecto
export const BeerCount = ({ stock=10, initial=1}) => {
    const [ count, setCount ] = useState(initial)

    const handleCountSuma = () => {
        if(count < stock){
            setCount(count+1)
        }
    }

    const handleCountResta = () => {
        if(count > initial){
            setCount(count-1)
        }
    }

    return (
        <>
            <div className="item-count">
                <div className="item-count-selector row">
                    <button onClick={handleCountResta} className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"> 
                        <div className="w-4 cursor-pointer fill-white text-white">
                            -
                        </div>
                    </button>
                    <span className=" mr-4 text-white">
                        {count}
                    </span>
                    <button onClick={handleCountSuma} className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"> 
                        <div className="w-4 cursor-pointer fill-white text-white">
                            +
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}