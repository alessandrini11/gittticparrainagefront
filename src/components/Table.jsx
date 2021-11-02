import React from 'react'
import TableRows from './TableRows'
const Table = (props) => {
    return (
        <div>
            <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div class="w-full overflow-x-auto">
                    <h1 className="font-extralight text-3xl">{props.type}</h1>
                    <table class="w-full">
                        <thead>
                        <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th class="px-4 py-3">Name</th>
                            <th class="px-4 py-3">Axe</th>
                            <th class="px-4 py-3">Contact</th>
                        </tr>
                        </thead>
                        <tbody class="bg-white">
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        <TableRows></TableRows>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
