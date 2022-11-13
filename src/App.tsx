import { Login, List } from "./pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/Routing/PrivateRoute"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <List />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
