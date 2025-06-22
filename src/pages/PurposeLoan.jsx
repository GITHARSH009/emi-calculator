import React from 'react'

import Card from '../components/Card'
import ArticleHeader from '../components/ArticleHeader'
import { purposeLoan } from '../database/purposeloan'


const PurposeLoan = () => {

    return (
        <div>
            <ArticleHeader />

            {
                purposeLoan.map((item) => (
                    <Card key={item.id} item={item} />
                ))
            }


        </div>
    )
}

export default PurposeLoan
