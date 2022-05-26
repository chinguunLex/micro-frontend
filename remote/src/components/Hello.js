import {
  Routes,
  Route,
} from "react-router-dom";
const Hello = () => {
  return <div>hello world</div>
}

// export {Hello}

export default () => (
  <Routes>
      <Route path="hello/world" element={<Hello />} />
  </Routes>
)