import React from 'react'
import ArticleHeader from '../components/ArticleHeader'
import Card from '../components/Card'
import { insurance } from '../database/insurance'
const InsuranceCalculator = () => {
  return (
    <div>
      <ArticleHeader/>
      {
        insurance.map((item)=><Card key={item.title} item={item} />)
      }
      
    </div>
  )
}

export default InsuranceCalculator
