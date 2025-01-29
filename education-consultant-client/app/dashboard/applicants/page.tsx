import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";
import connectDB from "@/lib/connectDB";
import ApplicationData from "@/models/ApplicationData";
import AdminDashboard from "@/components/AdminDashboard"; // Import the Admin Dashboard component

export async function ApplicantsPage({ searchParams }: { searchParams: { page: string } }) {
  const session = await getSession();
  const user = session?.user;

  if (!user || user.role !== "admin") {
    return redirect("/");
  }

  const page = parseInt(searchParams.page || "0");
  const limit = 5;

  try {
    await connectDB();

    const totalApplications = await ApplicationData.countDocuments();
    const applicationsFromDB = await ApplicationData.find()
      .skip(page * limit)
      .limit(limit)
      .lean();

    // Map data and format dates
    const applications = applicationsFromDB.map((application: any) => ({
      _id: application._id.toString(),
      name: application.name,
      phone: application.phone,
      email: application.email,
      birthDate: application.birthDate instanceof Date ? application.birthDate.toLocaleDateString() : application.birthDate,
      gender: application.gender,
      passport: application.passport,
      englishTest: application.englishTest,
      education: application.education,
      academicDetails: application.academicDetails,
      studyDestination: application.studyDestination,
    }));

    const pages = Math.ceil(totalApplications / limit);

    return (
      <AdminDashboard
        applications={applications}
        totalApplications={totalApplications}
        page={page}
        pages={pages}
      />
    );
  } catch (error) {
    console.error("Error fetching applications", error);
    return <div>Error fetching applications</div>;
  }
}

export default ApplicantsPage;
