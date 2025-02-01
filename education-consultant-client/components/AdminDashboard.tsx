'use client';
import { FC } from "react";

type Application = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  gender: string;
  passport: string;
  englishTest: string;
  education: string;
  academicDetails: string;
  studyDestination: string;
};

type Props = {
  applications: Application[];
  totalApplications: number;
  page: number;
  pages: number;
};

const AdminDashboard: FC<Props> = ({ applications, totalApplications, page, pages }) => {
  const limit = 5;

  // Calculate slice of data for current page
  const startIndex = page * limit;
  const currentApplications = applications.slice(startIndex, startIndex + limit);

  // Handle page change
  const handlePreviousPage = () => {
    if (page > 0) {
      window.location.href = `/admin/applicants?page=${page - 1}`;
    }
  };

  const handleNextPage = () => {
    if (page < pages - 1) {
      window.location.href = `/admin/applicants?page=${page + 1}`;
    }
  };

  // Delete function
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this application?");
    if (confirmDelete) {
      try {
        await fetch(`/api/applications/${id}`, { method: "DELETE" });
        alert("Application deleted successfully");
        window.location.reload(); // Refresh after deletion
      } catch (error) {
        console.error("Error deleting application:", error);
      }
    }
  };

  // View Details Modal
  const handleViewDetails = (application: Application) => {
    alert(`Details for ${application.name}: ${JSON.stringify(application, null, 2)}`);
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
        
        {/* Table */}
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Birth Date</th>
              <th>Gender</th>
              <th>Study Destination</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentApplications.map((application) => (
              <tr key={application._id}>
                <td>{application.name}</td>
                <td>{application.phone}</td>
                <td>{application.email}</td>
                <td>{application.birthDate}</td>
                <td>{application.gender}</td>
                <td>{application.studyDestination}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleViewDetails(application)}
                  >
                    View Details
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => handleDelete(application._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-primary mr-2"
            disabled={page === 0}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            disabled={page === pages - 1}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
