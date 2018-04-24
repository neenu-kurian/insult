let chances = 3

const calculateChances = (correctComeback, userComeback) => {
  console.log("correct comeback :" + correctComeback)
  console.log("user entered comeback :" + userComeback)
  if (!(correctComeback === userComeback)) chances = chances - 1;
  else console.log("keep it up!")
  return chances
}

describe('Calculate Chances', () => {
  test('should be defined', () => {
    expect(calculateChances()).toBeDefined()
  })
  test('should return 3 when a correct comeback is entered', () => {
    const correctComeback = 'And I\'ve got a little TIP for you, get the POINT ?'
    const userComeback = 'And I\'ve got a little TIP for you, get the POINT ?'
    expect(calculateChances(correctComeback, userComeback)).toBe(3)
  })
  test('should return 2 when an incorrect comeback is entered', () => {
    const correctComeback = 'And I\'ve got a little TIP for you, get the POINT ?'
    const userComeback = 'Nope'
    expect(calculateChances(correctComeback, userComeback)).toBe(2)
  })
})