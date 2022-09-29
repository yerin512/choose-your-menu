import { Form } from 'components/Form'

export const FormContainer = () => {
  const handleChange = () => {
    // Todo: 입려값 받아서 저장
    console.log('dd')
  }

  return <Form onChange={handleChange} />
}
