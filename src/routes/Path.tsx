import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@/module/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

const Path = () => {
  return (
    <div className=" relative">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Dashboard Page */}
          <Route index element={<Dashboard />} />
          {/* Dashboard Page */}
        </Route>
      </Routes>
    </div>
  );
};

export default Path;
