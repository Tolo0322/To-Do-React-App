import { useState } from "react";

export function FilterBar( { onFilter } ) {

    const [active, setActive] = useState('all');
    
    const handleFilter = (filter) => {
        onFilter(filter);
        setActive(filter);
    }
    
    const buttonStyle = (filter) => (`px-4 py-2 rounded-lg border border-gray-700 text-gray-400 hover:bg-white/10 ${active === filter ? 'bg-white/10' : ''}`);
    

    return (
        <div className="flex gap-4 mb-10">
            <button onClick={() => handleFilter('all')} className={buttonStyle('all')}>Todas</button>          
            <button onClick={() => handleFilter('pending')} className={buttonStyle('pending')}>Pendientes</button>          
            <button onClick={() => handleFilter('completed')} className={buttonStyle('completed')}>Completadas</button>          
        </div>
    )
}