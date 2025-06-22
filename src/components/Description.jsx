import React from 'react'
import { useLocation } from 'react-router-dom'

const Description = () => {
    const location = useLocation()
    const { item } = location.state

    // console.log(item);
    

    return (
        <div className="p-4 text-lg">
            <h1 className='text-2xl font-semibold mb-2 '>{item.title}</h1>
            <p className='text-sm'>This blog is created by AI</p>
            <p className='text-sm text-slate-400'>Updated on {item.updatedAt}</p>
            <img src={item.image} alt={item.title} className="my-4 rounded-lg" />
            <p className='text-lg'>{item?.fullDescription[0].fullContent}</p>
            {
                item?.fullDescription[0].advantage&&<h1 className='my-3 text-3xl font-semibold'>{item.fullDescription[0].advantage[0].heading}</h1>
            }
            {
                item?.fullDescription[0]?.advantage[0]?.points.map((item,index)=><ul key={item+index} className='text-lg list-disc p-4'>
                    <li><span className='font-semibold'>{item.que}</span> : <span>{item.ans}</span></li>
                </ul>)
            }

            
            <p>{item?.fullDescription[0]?.summary}</p>

            {
                item?.fullDescription[0].whoShouldConsider&&<h1 className='my-6 text-3xl font-semibold'>{item.fullDescription[0].whoShouldConsider[0].heading}</h1>
            }

            {
                item?.fullDescription[0]?.whoShouldConsider[0].points.map((item,index)=><ul key={item+index} className='text-lg list-disc p-2'>
                    <li><span className='font-semibold'>{item.que}</span> : <span>{item.ans}</span></li>
                </ul>)
            }
            

            <p className='text-sm text-gray-500 mt-4'>{item.updated}</p>
        </div>
    )
}

export default Description
