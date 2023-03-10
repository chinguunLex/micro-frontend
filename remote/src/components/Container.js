import Card from "react-bootstrap/Card"

export const Container = ({ children }) => {
  return (
    <div style={{ marginInline: "30%" }}>
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </div>
  )
}
