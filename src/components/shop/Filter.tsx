import React from 'react'

interface FilterProps {
    type:string,
    count:number | string
}

function Filter({ filtername }: {filtername:FilterProps[]}) {
    return (
        <div className='cols-span-1 flex flex-col gap-3 lato-font'>

            {filtername.map(({ type, count }, index) => (
                <button className='flex gap-3' key={type+count+index}>
                    <input type="checkbox" />
                    <span>{type}</span><span>({count})</span>
                </button>
            ))}


        </div>
    );
}

export default Filter