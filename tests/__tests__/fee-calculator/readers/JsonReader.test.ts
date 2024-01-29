import JsonReader from '../../../../src/fee-calculator/readers/JsonReader'
import fs from 'fs'

describe('Json reader', () => {
  let ReaderInstance: JsonReader
  const mockFileContent = {
    'key': 'value'
  }

  beforeEach(() => {
    ReaderInstance = new JsonReader('mock-file-path')
  })

  it('should read given paths content and return parsed data correctly', () => {
    jest.spyOn(fs, 'readFileSync').mockReturnValue(JSON.stringify(mockFileContent))
    const received = ReaderInstance.getTransactions()

    expect(received).toEqual(mockFileContent)
  })

  it('should throw error', () => {
    jest.spyOn(fs, 'readFileSync').mockImplementation(() => {
      throw new Error('file could not be read')
    })

    expect(() => {
      ReaderInstance.getTransactions()
    }).toThrowError('file could not be read or does not exist')
  })
})
