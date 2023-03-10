import { Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import { SingleMFEFlow } from "./components/SingleMFEFlow"
import { MultipleMFEFlowWithInternalRoute } from "./components/MultipleMFEFlowWithInternalRoute"
import { MultipleMFEFlowWithExternalRoute } from "./components/MultipleMFEFlowWithExternalRoute"

export const App = () => {
  return (
    <>
      <Navigation />
      <div
        style={{
          paddingTop: "2rem",
          paddingRight: "4rem",
          paddingLeft: "4rem",
        }}
      >
        <Routes>
          <Route path="/single-mfe-flow/*" element={<SingleMFEFlow />} />
          <Route
            path="/multiple-mfe-flow-with-internal-routes/*"
            element={<MultipleMFEFlowWithInternalRoute />}
          />
          <Route
            path="/multiple-mfe-flow-with-external-routes/*"
            element={<MultipleMFEFlowWithExternalRoute />}
          />
        </Routes>
      </div>
    </>
  )
}
