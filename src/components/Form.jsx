import React from 'react'
import { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addResto } from '../JS/actions/restaurantActions'

export default function AddResto() {
    const [resto,setResto]=useState({
        nom:"",
        address:"",
        img:"",
    })
    const handleChange=(e)=>{
        setResto({...resto,
        [e.target.name]:e.target.value})
    }
    const dispatch = useDispatch();

    console.log(resto)
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Avenue x" name='address' onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword"   >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Plan b" name="nom" onChange={handleChange} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Image</Form.Label>
      <Form.Control type="text" placeholder="Plan b" name="img" onChange={handleChange} />
    </Form.Group>
   
    <Button variant="primary" type="submit" onClick={()=>dispatch(addResto({
        ...resto,
        id:Math.random()
    }))}>
      Add Product
    </Button>
  </Form>
  )
}
