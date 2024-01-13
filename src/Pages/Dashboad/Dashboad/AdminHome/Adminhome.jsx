import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";

import axios from "axios";
const dataLoad = axios.create({
  baseURL: "https://server-assingment-12.vercel.app", // Replace this with your base URL
  // Other configurations like headers can be added here if needed
});
const Adminhome = () => {
  const { user } = useAuth();
  //  ----------data load --------------------
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      try {
        const res = await dataLoad.get("/admin-stats");
        return res.data;
      } catch (error) {
        throw new Error("Error fetching admin stats");
      }
    },
  });

  // const { data: stats = {} } = useQuery({
  //   queryKey: ["admin-stats"],
  //   queryFn: async () => {
  //     try {
  //       const res = await axiosPublic.get("/admin-stats");
  //       return res.data;
  //     } catch (error) {
  //       throw new Error("Error fetching admin stats");
  //     }
  //   },
  // });
  console.log(stats.length);
  return (
    <div className="">
      <div>{user?.displayName ? user.displayName : "Back"}</div>
      {/* -------------------stat------------------- */}
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">users</div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
