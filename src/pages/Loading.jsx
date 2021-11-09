import React, {useState, useEffect} from "react";
import { Circle, Heart } from "react-spinners-css";
import FadeLoader from "react-spinners/FadeLoader";


const Loading = () => {

    const[loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 10000)
    }, [])


    return(

        <div className="Loading">
            {
                loading ?(
                    <FadeLoader className="MyLoad" color={"#0E25F0"} loading={loading} size={150} />

                ) : (
                    <button onClick={() => setLoading(!loading)}>Lancement</button>)
                  
            }

        </div> 
        

    )



}


export default Loading