import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ArticleHeader = () => {
    const path = useLocation().pathname
    const pathName = path.split('/')[1]
    const navigate = useNavigate()

    const setActiveButton = (currPath) => {
        let classes = "p-2 bg-slate-100 rounded-xl text-black"

        if (pathName == currPath) {
            classes = "p-2 bg-slate-900 rounded-xl text-white"
        }
        return classes
    }
    return (
        <div className='flex items-center justify-between p-3 text-lg gap-1 '>
            <button className={setActiveButton('purposeloan')} onClick={()=>navigate('/purposeloan')}>Purpose Loan</button>
            <button className={setActiveButton('financecalculator')} onClick={()=>navigate('/financecalculator')}>Finance Calculator</button>
            <button className={setActiveButton('insurancecalculator')} onClick={()=>navigate('/insurancecalculator')}>Insurance Calculator</button>
        </div>
    )
}

export default ArticleHeader
