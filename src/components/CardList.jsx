import React from 'react'
import CardItem from './CardItem'

export default function CardList({data}) {
  return (
    <div>
        {data.map((item,index)=>
       {return <CardItem item={item} index={index} />})
        }
    </div>
  )
}
