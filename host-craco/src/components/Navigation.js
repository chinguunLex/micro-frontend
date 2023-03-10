import Nav from "react-bootstrap/Nav"
import { useNavigate } from "react-router-dom"

export const Navigation = () => {
  const navigate = useNavigate()
  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/single-mfe-flow"
      onSelect={(key) => navigate(key)}
    >
      <Nav.Item>
        <Nav.Link eventKey="/single-mfe-flow">Single MFE FLow</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/multiple-mfe-flow-with-internal-routes">
          Multiple MFE Flow With Internal Routing
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/multiple-mfe-flow-with-external-routes">
          Multiple MFE Flow With External Routing
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
