import React from 'react'

interface IProps {
  text: string
}

const App = (props: IProps) => {
  const { text } = props
  return <div>Hello world { text }</div>
}

export default App
