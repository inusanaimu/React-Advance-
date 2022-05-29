import React from 'react'
import Product from './Product'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.netlify.app/api/react-prop-types-example'
// 'https://course-api.com/react-prop-types-example'
const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      <h2>products</h2>
      {/* <img src={defaultImage} /> */}
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
