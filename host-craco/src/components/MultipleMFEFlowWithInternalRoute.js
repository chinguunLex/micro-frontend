import { MultipleMFEDisplay } from "./MultipleMFEDisplay"
import CustomerTableApp from "remote/CustomerTableApp"

export const MultipleMFEFlowWithInternalRoute = () => {
  return (
    <MultipleMFEDisplay>
      <CustomerTableApp />
    </MultipleMFEDisplay>
  )
}
