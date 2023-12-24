import GameForm from "./components/GameForm/GameForm";
import GameTable from "./components/GameTable/GameTable";
import StudentCard from "./components/StudentCard/StudentCard";
import StudentTable from "./components/StudentTable/StudentTable";
import AdminModerators from "./pages/Admin/AdminModerators";
import Adminstudents from "./pages/Admin/AdminStudents";
import AdminTeachers from "./pages/Admin/AdminTeachers";
import ProfileAdmin from "./pages/Admin/ProfileAdmin";
import ModeratorAdmins from "./pages/Moderator/ModeratorAdmins";

function App() {
  return (
    <div className="App">
      {/* NEW===================================== */}
      {/* 1 */}
      {/* <ProfileAdmin></ProfileAdmin> */}
      {/* 2 */}
      <AdminTeachers></AdminTeachers>
      {/* 3 */}
      {/* <Adminstudents></Adminstudents> */}
      {/* 4 */}
      {/* <AdminModerators></AdminModerators> */}
      {/* 5 */}
      {/* <ModeratorAdmins></ModeratorAdmins> */}
    </div>
  );
}

export default App;
