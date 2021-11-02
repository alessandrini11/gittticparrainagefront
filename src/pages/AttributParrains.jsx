import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Gallerie from '../components/Gallerie'
class AttributParrains extends Component {
    render() {
        return (
            <div className="px-5">
                <div className="mt-10 flex justify-between">
                    <Link to="/" className="button bg-blue-500">Home</Link>
                    <a href="" className="button bg-green-500">Lancer L'Attributon</a>
                </div>
                <section className="grid grid-cols-2 gap-2">
                    <Gallerie></Gallerie>
                    <Gallerie></Gallerie>
                </section>
            </div>
        )
    }
}

export default AttributParrains