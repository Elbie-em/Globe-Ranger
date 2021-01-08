import numberWithCommas from '../../dataOperations/conversions'

describe('Testing the conversions module', () => {
  test('it splits an integer to have a string with commas', () => {
      const population = 22387000
      expect(numberWithCommas(population)).toBe("22,387,000")
  })
})