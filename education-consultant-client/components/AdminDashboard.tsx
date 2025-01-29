"use client"
import { FC, useMemo } from "react";
import { useTable, usePagination } from "react-table";

type Application = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  birthDate: string; // Now a string
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
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Birth Date",
        accessor: "birthDate",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Study Destination",
        accessor: "studyDestination",
      },
      {
        Header: "Actions",
        Cell: ({ row }: { row: any }) => (
          <div>
            <button
              className="btn btn-info"
              onClick={() => handleViewDetails(row.original)}
            >
              View Details
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => handleDelete(row.original._id)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => applications, [applications]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setPageSize,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: page, pageSize: 5 },
    },
    usePagination
  );

  // Handle page change
  const handlePreviousPage = () => {
    if (page > 0) {
      window.location.href = `/dashboard?page=${page - 1}`;
    }
  };

  const handleNextPage = () => {
    if (page < pages - 1) {
      window.location.href = `/dashboard?page=${page + 1}`;
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

  // View Details Modal - Can be handled here as well
  const handleViewDetails = (application: Application) => {
    alert(`Details for ${application.name}: ${JSON.stringify(application, null, 2)}`);
  };

  return (
    <div className="  container mx-auto">

    <div className="overflow-x-auto">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      
      {/* Table */}
      <table {...getTableProps()} className="table table-zebra w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
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
