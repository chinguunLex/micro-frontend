import Card from "react-bootstrap/Card"

export const Container = ({ children }) => {
  return (
    <div style={{ marginInline: "8rem" }}>
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </div>
  )
}
