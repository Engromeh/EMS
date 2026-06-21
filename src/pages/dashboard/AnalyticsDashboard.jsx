import Button from "../../Commponents/Ui/Button";
import { TbCalendarMonthFilled } from "react-icons/tb";
import { CiExport } from "react-icons/ci";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { FaUsers, FaUserPlus, FaChartLine } from "react-icons/fa";
const AnalyticsDashboard = () => {
  const growthData = [
    { month: "Jan", active: 850, projected: 900 },
    { month: "Feb", active: 950, projected: 1000 },
    { month: "Mar", active: 920, projected: 1050 },
    { month: "Apr", active: 1150, projected: 1200 },
    { month: "May", active: 1100, projected: 1250 },
    { month: "Jun", active: 1400, projected: 1450 },
    { month: "Jul", active: 1550, projected: 1700 },
  ];

  const departments = [
    { name: "Engineering", employees: 500, attendance: 98 },
    { name: "Sales", employees: 370, attendance: 92 },
    { name: "Marketing", employees: 250, attendance: 90 },
    { name: "HR", employees: 128, attendance: 96 },
  ];

  const totalEmployees = departments.reduce(
    (acc, item) => acc + item.employees,
    0,
  );

  const attendanceAvg =
    departments.reduce((acc, item) => acc + item.attendance, 0) /
    departments.length;

  const pieColors = ["#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"];
  return (
    <>
      <div className="flex items-start justify-between w-full">
        {" "}
        <div>
          <h1 className="text-4xl font-bold">Analytics & Insights</h1>
          <p className="text-gray-500 mt-2">
            Real-time organizational performance and workforce trends.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            Text="Last 6 Months"
            Icon={<TbCalendarMonthFilled />}
            className="bg-gray-100 text-gray-700"
            style={{ width: "14rem", padding: "0.5rem 1rem" }}
          />

          <Button
            Text="Export Report"
            Icon={<CiExport />}
            className="bg-blue-500 text-white"
          />
        </div>
      </div>

      <div className="p-6 bg-slate-100 min-h-screen">
        <div className="grid grid-cols-12 gap-5">
          {/* Growth Chart */}
          <div className="col-span-8 bg-white rounded-2xl p-5 shadow-sm border">
            <h2 className="font-semibold text-lg mb-4">Headcount Growth</h2>

            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={growthData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="active"
                  stroke="#2563EB"
                  fill="#DBEAFE"
                />

                <Area
                  type="monotone"
                  dataKey="projected"
                  stroke="#94A3B8"
                  fillOpacity={0}
                  strokeDasharray="5 5"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="col-span-4 bg-white rounded-2xl p-5 shadow-sm border">
            <h2 className="font-semibold text-lg mb-4">
              Department Distribution
            </h2>

            <div className="flex justify-center">
              <PieChart width={250} height={250}>
                <Pie
                  data={departments}
                  dataKey="employees"
                  innerRadius={65}
                  outerRadius={95}
                >
                  {departments.map((item, index) => (
                    <Cell key={index} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            <div className="text-center -mt-32">
              <h3 className="text-3xl font-bold">{totalEmployees}</h3>
              <p className="text-gray-500 text-sm">Total</p>
            </div>
          </div>

          {/* Attendance */}
          <div className="col-span-7 bg-white rounded-2xl p-5 shadow-sm border">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-lg">Attendance Rate</h2>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Avg: {attendanceAvg.toFixed(1)}%
              </span>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={departments}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Bar dataKey="attendance" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Departments */}
          <div className="col-span-5 bg-white rounded-2xl p-5 shadow-sm border">
            <h2 className="font-semibold text-lg mb-5">Top Departments</h2>

            <div className="space-y-5">
              {departments
                .sort((a, b) => b.attendance - a.attendance)
                .map((dept) => (
                  <div key={dept.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{dept.name}</span>

                      <span>{dept.attendance}%</span>
                    </div>

                    <div className="h-2 bg-slate-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{
                          width: `${dept.attendance}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Cards */}
          <div className="col-span-3 bg-white rounded-2xl p-5 shadow-sm border">
            <div className="flex justify-between">
              <span className="text-gray-500">Turnover Rate</span>

              <FaChartLine />
            </div>

            <h2 className="text-4xl font-bold mt-4">2.4%</h2>

            <p className="text-green-600 mt-2">+0.5%</p>
          </div>

          <div className="col-span-3 bg-white rounded-2xl p-5 shadow-sm border">
            <div className="flex justify-between">
              <span className="text-gray-500">Avg Tenure</span>

              <FaUsers />
            </div>

            <h2 className="text-4xl font-bold mt-4">3.8 yr</h2>

            <p className="text-blue-600 mt-2">+0.2 yr</p>
          </div>

          <div className="col-span-3 bg-white rounded-2xl p-5 shadow-sm border">
            <div className="flex justify-between">
              <span className="text-gray-500">New Hires</span>

              <FaUserPlus />
            </div>

            <h2 className="text-4xl font-bold mt-4">42</h2>

            <p className="text-gray-500 mt-2">This Month</p>
          </div>

          <div className="col-span-3 bg-white rounded-2xl p-5 shadow-sm border">
            <span className="text-gray-500">Gender Ratio</span>

            <h2 className="text-4xl font-bold mt-4">48:52</h2>

            <p className="text-gray-500 mt-2">Male / Female</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboard;
