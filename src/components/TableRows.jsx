import React from 'react'

const TableRows = () => {
    return (
        <tr class="text-gray-700">
            <td class="px-4 py-3 border">
            <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                <p class="font-semibold text-black">Schuame Alexandre Lionel</p>
                <p class="text-xs text-gray-600">Masculin</p>
                </div>
            </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">GLO 4</td>
            <td class="px-4 py-3 text-sm border">695254870</td>
        </tr>
    )
}

export default TableRows
