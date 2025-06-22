import React from 'react'
import ArticleHeader from '../components/ArticleHeader'
import Card from '../components/Card'
import { finanace } from '../database/finance'
const FinanceCalculator = () => {
  return (
    <div>
      <ArticleHeader/>
      {
        finanace.map((item)=><Card item={item} key={item.title} />)
      }
    </div>
  )
}

export default FinanceCalculator
