import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CustomerActivity from "remote/CustomerActivity"

export const MultipleMFEDisplay = ({ children }) => {
  return (
    <Row>
      <Col md={8}>
        <div style={{ border: "2px solid red", padding: "5px" }}>
          {children}
        </div>
      </Col>
      <Col>
        <div style={{ border: "2px solid red", padding: "5px" }}>
          <CustomerActivity />
        </div>
      </Col>
    </Row>
  )
}
