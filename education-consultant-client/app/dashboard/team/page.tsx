"use client";
import { getTeamMembers } from "@/actions/teamActions";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TeamMemberCard from "./TeamMemberCard";
import TeamMemberForm from "./TeamMemberForm";

const TeamPage = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [editingMember, setEditingMember] = useState<any | null>(null); // State to manage editing member

  useEffect(() => {
    // Fetch team members on page load
    const fetchTeamMembers = async () => {
      try {
        const response = await getTeamMembers();
        setMembers(response);
      } catch (error) {
        toast.error("Error fetching team members");
      }
    };

    fetchTeamMembers();
  }, [members]);

  // Add a new team member
  const handleAddMember = (newMember: any) => {
    setMembers((prev) => [...prev, newMember]);
  };

  // Edit a team member
  const handleEditMember = (member: any) => {
    setEditingMember(member); // Set the member to edit
    document.getElementById("team_modal")?.showModal(); // Show the modal when editing
  };

  // Delete a team member
  const handleDeleteMember = (id: string) => {
    setMembers((prev) => prev.filter((member) => member._id !== id));
  };

  // Reset the editing member when opening the modal for a new member
  const handleOpenAddMemberModal = () => {
    setEditingMember(null); // Clear the editing member data
    document.getElementById("team_modal")?.showModal();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Manage Team Members
      </h1>

      {/* Button to show the add new member modal */}
      <div className="flex items-center justify-center mb-4">
        <button
          className="btn btn-primary"
          onClick={handleOpenAddMemberModal} // Reset and open the modal for adding
        >
          Add New Member
        </button>
      </div>

      {/* Team Member Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {members.map((member) => (
          <TeamMemberCard
            key={member._id}
            member={member}
            onDelete={() => handleDeleteMember(member._id)}
            onEdit={handleEditMember} // Pass edit handler
          />
        ))}
      </div>

      {/* Modal Form for Adding/Editing Team Member */}
      <dialog id="team_modal" className="modal">
        <div className="modal-box">
          <TeamMemberForm
            onAdd={handleAddMember}
            onEdit={handleEditMember}
            member={editingMember}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default TeamPage;
