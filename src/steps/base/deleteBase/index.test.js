import deleteFolder from '../../../utils/delete'

import subject from './'

jest.mock('../../../utils/delete', () => jest.fn(answers => answers))

const fakeAnswers = { a: 123 }
describe('Base step: Delete', () => {
  it('deletes the left-over base folder', async () => {
    const answers = await subject(fakeAnswers)
    expect(deleteFolder).toHaveBeenCalledWith('base')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
