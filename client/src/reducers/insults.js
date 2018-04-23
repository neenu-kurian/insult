const initialInsult = [
  {
    id: 1,
    insult: 'You fight like a Dairy Farmer!',
    comeback: 'How appropriate! You fight like a cow!'
  },
  {
    id: 2,
    insult: 'This is the END for you, you gutter crawling cur!',
    comeback: 'And I\'ve got a little TIP for you, get the POINT?'
  }
]

export default (state = initialInsult, {type, payload} = {}) => {
  return state
}