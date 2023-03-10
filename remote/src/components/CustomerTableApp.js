import { Routes, Route, Outlet } from "react-router-dom"
import CustomerTable from "./CustomerTable"
import { Container } from "./Container"
import { CustomerAction } from "./CustomerAction"

const CustomerTableApp = () => (
  <Routes>
    <Route path="/" element={<CustomerTable />} />
    <Route
      path="/customer/*"
      element={
        <Container>
          <Outlet />
        </Container>
      }
    >
      <Route
        path="add-customer"
        element={<CustomerAction pageName="Add Customer" />}
      />
      <Route
        path="edit-customer/:name"
        element={<CustomerAction pageName="Edit Customer" />}
      />
    </Route>
  </Routes>
)

export default CustomerTableApp
