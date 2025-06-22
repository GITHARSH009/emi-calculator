import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <Link to="/description" state={{ item: item }}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden m-4">
                <div className="flex items-center p-4">
                    <div className="flex-grow pr-4">
                        <h2 className="text-lg font-bold">{item.title}</h2>
                        <p className="mt-2 text-gray-600">
                            {item.description}
                        </p>
                        <p className="mt-4 text-sm text-gray-400">
                            Updated On {item.updatedAt}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            className="h-24 w-24 object-cover rounded-lg"
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card