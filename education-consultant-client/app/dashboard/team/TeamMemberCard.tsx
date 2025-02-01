"use client";

import { deleteTeamMember } from "@/actions/teamActions";
import Image from "next/image";
import { FC } from "react";
import { toast } from "react-hot-toast";

interface TeamMemberCardProps {
  member: {
    _id: string;
    photoUrl: string;
    name: string;
    position: string;
    description: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  onDelete: () => void;
  onEdit: (member: any) => void;
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ member, onDelete, onEdit }) => {
  const handleDelete = async () => {
    try {
      await deleteTeamMember(member._id); // Call server-side delete action
      toast.success("Team member deleted");
      onDelete(); // Update the UI without reload
    } catch (error) {
      toast.error("Error deleting team member");
    }
  };

  const handleEdit = () => {
    onEdit(member); // Pass member data to parent for editing
  };

  // console.log(`/api${member.photoUrl}`)
  return (
    <div className="card shadow-lg p-4 flex items-center gap-4">
      <Image
        // src={`/api/uploads/${member.photoUrl.split("/").pop()}`}
        src={member.photoUrl}
        alt={member.name}
        width={200}
        height={200}
        className="w-20 h-20 rounded-lg"
      />
      <div>
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-gray-600">{member.position}</p>
        <div className="mt-2 space-x-2">
          <button className="btn btn-sm btn-info" onClick={handleEdit}>
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-sm btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
