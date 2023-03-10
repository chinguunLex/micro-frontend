import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useParams } from "react-router-dom"

export const CustomerAction = ({ pageName }) => {
  const { name } = useParams()
  return (
    <>
      <h3>
        {pageName} {name}
      </h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ethnicity</Form.Label>
          <Form.Control type="text" placeholder="Ethnicity" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
        <Button className="mt-3">{pageName}</Button>
      </Form>
    </>
  )
}
