import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from "react-router-dom"

const customerData = [
  {
    name: "Michael Scott",
    ethnicity: "White",
    address: "Yo mamas",
    number: "0231324213",
    company: "Dunder Mifflin",
  },
  {
    name: "Jim Halpert",
    ethnicity: "Asian",
    address: "Yo girlfriends",
    number: "0231324218",
    company: "Dunder Mifflin",
  },
  {
    name: "Dwight Schrute",
    ethnicity: "White",
    address: "Yo daddys",
    number: "0231324214",
    company: "Dunder Mifflin",
  },
]

const CustomerTable = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Row>
        <Col>
          <h2>Customer Table</h2>
        </Col>
        <Col>
          <Button
            onClick={() => navigate("./customer/add-customer")}
            style={{ float: "right" }}
          >
            Add New Customer
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ethnicity</th>
                <th>Company</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr key={customer.name}>
                  <td>{customer.name}</td>
                  <td>{customer.ethnicity}</td>
                  <td>{customer.company}</td>
                  <td>{customer.address}</td>
                  <td>{customer.number}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() =>
                        navigate(`./customer/edit-customer/${customer.name}`)
                      }
                    >
                      Edit Customer
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default CustomerTable
