import React from "react";
import { ToastContainer } from "react-toastify";
import MyTable from "../components/MyTable";

const AdminPannel = () => {
  return (
    <div className="admin-pannel">
      <MyTable />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AdminPannel;
