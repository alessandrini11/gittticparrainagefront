import { Component } from 'react'
import { Link } from 'react-router-dom'
import Table from "../components/Table"
class Etudiants extends Component {
    render() {
        return (
            <div className="container mx-auto p-6">
                <div className="flex justify-between">
                    <Link className="button bg-blue-500" to="/" >Acceuil</Link>
                    <Link className="button bg-green-500" to="/attribution">Attribuer Les Parrains</Link>
                </div>
                <section class="md:grid grid-cols-2 gap-3 mt-5">
                    <Table type="Les Parrains"></Table>
                    <Table type="Les Fieuls"></Table>
                </section>
            </div>
        )
    }
}

export default Etudiants