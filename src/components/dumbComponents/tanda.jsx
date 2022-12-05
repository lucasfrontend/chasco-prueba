import React from "react";

const Tanda = () => {

    const [ showComponent, setShowComponent ] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setShowComponent(!showComponent)
        }, 2000);
    }, []);

 
    return <>
    <h1>holi</h1>
    { showComponent &&  <p>culo</p>}

    </>

}

export default Tanda;