import "bootstrap/dist/css/bootstrap.min.css"
import CustomerTableApp from "./components/CustomerTableApp"
import CustomerActivity from "./components/CustomerActivity"
import Container from "react-bootstrap/Container"

export const App = () => {
  return (
    <Container>
      <h1>Customer MFE</h1>
      <p>This MFE is built to manage a customer base.</p>
      <p>
        The contents inside the <strong>red border</strong> and{" "}
        <strong>blue border</strong> are exposed to consumers as seperate MFE's
      </p>
      <div style={{ border: "2px solid red" }}>
        <CustomerTableApp />
      </div>
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          border: "2px solid blue",
        }}
      >
        <CustomerActivity />
      </div>
    </Container>
  )
}
