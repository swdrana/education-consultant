import { FC } from "react";
import Link from "next/link";

const DashboardLayout: FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link href="/dashboard/applicants" className="text-white">
                  Applicant Data
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/dashboard/team" className="text-white">
                  Manage Team Members
                </Link>
              </li>
              {/* Add more sections here */}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
