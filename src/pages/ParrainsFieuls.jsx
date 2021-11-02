import { Component } from 'react'
import { Link } from 'react-router-dom'
import ParrainAttribue from './ParrainAttribue'
class ParrainsFieuls extends Component {
    render() {
        return (
            <div className="w-11/12 mx-auto">
                <div className="flex justify-between">
                    <Link className="button bg-blue-500" to="/" >Acceuil</Link>
                    {/* <Link className="button bg-green-500" to="/attribution">Attribuer Les Parrains</Link> */}
                </div>
                <h1 className="text-2xl md:text-3xl">Les Parrains et Leurs Fieuls</h1>
                
                <div className="grid gap-3 md:grid-cols-3">
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                    <ParrainAttribue/>
                </div>
            </div>
        )
    }
}

export default ParrainsFieuls