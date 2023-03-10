import { CustomerAction } from "./CustomerAction"
import { Outlet } from "react-router-dom"

const customerRoutes = (WrapperElement) => [
  {
    path: "/customer/*",
    element: WrapperElement ? (
      <WrapperElement>
        <Outlet />
      </WrapperElement>
    ) : (
      <Outlet />
    ),
    children: [
      {
        path: "add-customer",
        element: <CustomerAction pageName="Add Customer" />,
      },
      {
        path: "edit-customer/:name",
        element: <CustomerAction pageName="Edit Customer" />,
      },
    ],
  },
  // {
  //   path: "/edit-customer/:name",
  //   element: WrapperElement ? (
  //     <WrapperElement>
  //       <CustomerAction pageName="Edit Customer" />
  //     </WrapperElement>
  //   ) : (
  //     <CustomerAction pageName="Edit Customer" />
  //   ),
  // },
]

export default customerRoutes
