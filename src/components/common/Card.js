import React from 'react'
import Button from './Button'

const Card = ({ title, description, btnText, btnOnCLick }) => {
  return (
    <div class='flex justify-center'>
      <div class='block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
        <h5 class='text-gray-900 text-xl leading-tight font-medium mb-2'>
          {title}
        </h5>
        <p class='text-gray-700 text-base mb-4'>{description}</p>
        <Button onClick={btnOnCLick}>{btnText}</Button>
      </div>
    </div>
  )
}

export default Card
