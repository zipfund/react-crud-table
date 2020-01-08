import React from 'react'

interface IProps {
  text: string
}

export const HelloWorld = (props: IProps) => {
  const { text } = props
  return <div>Hello world { text }</div>
}

export default HelloWorld
