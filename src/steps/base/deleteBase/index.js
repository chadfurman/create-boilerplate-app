import deleteFolder from '../../../utils/delete'

const run = async function(answers) {
  await deleteFolder('base')
  return answers
}

export default run
