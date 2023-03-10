import customerRoutes from "remote/customerRoutes"
import { useRoutes } from "react-router-dom"
import { MultipleMFEDisplay } from "./MultipleMFEDisplay"
import CustomerTable from "remote/CustomerTable"
import { Container } from "./Container"

export const MultipleMFEFlowWithExternalRoute = () => {
  const Routes = () =>
    useRoutes([
      {
        path: "/",
        element: (
          <MultipleMFEDisplay>
            <CustomerTable />
          </MultipleMFEDisplay>
        ),
      },
      ...customerRoutes(Container),
    ])
  return <Routes />
}
