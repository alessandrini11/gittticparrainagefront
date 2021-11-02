import React from 'react'

const Formulaire = (props) => {
    return (
        <div>
            <div className="">
                <img src="" alt="" />
                <h1>{props.name}</h1>
                <form className="border border-black w-2/3 md:w-1/3" >
                    <div>
                        <input type="text" className="w-full" />
                    </div>
                    <div>
                        <input type="text" className="w-full" />
                    </div>
                    <div>
                        <select className="w-full" name="" id="">
                            <option disabled value="">Sexe</option>
                            <option value="">Masculin</option>
                            <option value="">Feminin</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <select className="w-full" name="" id="">
                            <option disabled value="">Axe</option>
                            <option value="">GI</option>
                            <option value="">GRT</option>
                            <option value="">GLO</option>
                        </select>
                        <select className="w-full" name="" id="">
                            <option disabled value="">Sexe</option>
                            <option value="">Masculin</option>
                            <option value="">Feminin</option>
                        </select>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <input className="w-full" type="number" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulaire
