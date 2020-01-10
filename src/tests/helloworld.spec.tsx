import React from 'react'
import renderer from 'react-test-renderer'
import HelloWorld from '..'

test("HelloWorld component test", () => {
  const component = renderer.create(<HelloWorld text="!!" />)
  const testInstance = component.root

  expect(testInstance.findByType(HelloWorld).props.text).toBe("!!")

  // let tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
})
