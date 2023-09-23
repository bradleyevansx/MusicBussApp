// App.js (React Router v6)
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminDashboardView from "./views/adminViews/AdminDashboardView";
import AdminTeacherDetailView from "./views/adminViews/AdminTeacherDetailView";
import LoginView from "./views/sharedViews/LoginView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/admin" element={<AdminDashboardView />} />
        <Route
          path="/admin/teacher/:userId"
          element={<AdminTeacherDetailView />}
        />
        {/* Add routes for student, parent, and teacher */}
        {/* ... */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
