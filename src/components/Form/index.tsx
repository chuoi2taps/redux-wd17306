import React, { useState } from 'react'
import  Button from '../../components/Button'
import { AiOutlinePlus } from "react-icons/ai";
import { IProduct } from '../../interfaces/product';
import Input from '../Input';

type FormProps = {
  onAdd:(product:IProduct)=>void

}

const Form = ({onAdd}: FormProps) => {
  const [inputValue, setInputValue] = useState({})

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]:e.target.value
    })
  }
  
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!inputValue) return alert('Hãy viết vào form')
    onAdd({
      ...inputValue,
    } as IProduct);
    setInputValue('')
    const form = e.target as HTMLFormElement;
    form.reset()
  }
  
  return (
    <form onSubmit={onHandleSubmit} className='flex justify-between items-center p-2 border border-red-500'>
        <Input onChange={onHandleChange} placeholder='Name' size='small' name='name'/>
        <Input onChange={onHandleChange} placeholder='Price' size='small' name='price'/>
        <Button type='primary' shape='default' icon={<AiOutlinePlus className='text-2xl'/>} />
        {JSON.stringify(inputValue)}
    </form>
  )
}

export default Form