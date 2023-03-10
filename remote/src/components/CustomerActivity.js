import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const customerActivity = [
  {
    name: "Dwight Schrute",
    activity: "Dwight Schrute visited yo mamas",
    variant: "danger",
  },
  {
    name: "Michael Scott",
    activity: "Michael Scott claims the correct phrase is turn tables",
    variant: "warning",
  },
  {
    name: "Jim Halpert",
    activity: "Jim Halpert invited everyone to his wedding with Pam",
    variant: "success",
  },
]

const CustomerActivity = () => {
  return (
    <div>
      <Row>
        <Col>
          <h3>Customer Activity</h3>
        </Col>
      </Row>
      {customerActivity.map(({ variant, name, activity }) => (
        <Row style={{ marginBottom: "1rem" }}>
          <Col>
            <Card border={variant} style={{ borderWidth: "2px" }}>
              <Card.Header>{name}'s recent activity</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{activity}</p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  )
}

export default CustomerActivity
