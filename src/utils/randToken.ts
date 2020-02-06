import randToken from 'rand-token'

export const generateToken = () => {
  return randToken.generate(10)
}
