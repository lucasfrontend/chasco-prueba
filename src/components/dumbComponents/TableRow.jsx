import React from "react";

const TableRow = ({ el, setEditData, deletePilot }) => {

    return <>
        <tr className=" flex justify-between border border-slate-300">
            <td className="px-5 py-3 text-left font-semibold">{ el.name_pilot.toUpperCase()}</td>
            <td className=" px-5 py-3 flex cursor-pointer">
                <div className="fill-green w-4" onClick={() => setEditData(el)}>
                    <svg viewBox="0 0 16 16">
                        <path class="path1" d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"></path>
                    </svg>
                    
                </div>
                <div className="w-4 cursor-pointer ml-4 " onClick={() => deletePilot(el.id)}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <polyline points="76.91 31.66 76.91 92.53 21.9 92.53 21.9 31.66"/>
                        <rect x="16.56" y="16.44" width="65.7" height="9.88"/>
                        <line x1="34.01" y1="40.69" x2="34.01" y2="81.02"/>
                        <line x1="49.41" y1="40.69" x2="49.41" y2="81.02"/>
                        <line x1="64.8" y1="40.69" x2="64.8" y2="81.02"/>
                        <path d="M37.25,16.44V12.31h0a5.14,5.14,0,0,1,4.83-5.4H56.73a5.14,5.14,0,0,1,4.83,5.4v4.13"/>
                    </svg>
                    
                </div>
            </td>

        </tr>
    </>

}

export default TableRow;