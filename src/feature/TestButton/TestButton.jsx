/* eslint-disable no-unused-vars */
import React from 'react'
//component imports
import Button from '../../components/button/Button'

//dependency imports
import { useDispatch, useSelector } from 'react-redux'
import { selectClickStatus, clickButton } from './buttonSlice'


const TestButton = () => {
    const dispatch = useDispatch()
    const clickStatus = useSelector(selectClickStatus);

    
  return (
    <div>
        <h1>Testing out buttons</h1>
        <Button onClick={() => dispatch(clickButton())} />
        <Button onClick={() => dispatch(clickButton())} variant='secondary'/>
        <Button onClick={() => dispatch(clickButton())}  variant='borderless' icon={true}/>
    </div>
  )
}

export default TestButton
