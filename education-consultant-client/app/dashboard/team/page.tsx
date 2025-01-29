'use client'
import { FC, useEffect, useState } from "react";
import axios from "axios";

interface TeamMember {
  _id: string;
  photoUrl: string;
  name: string;
  position: string;
  description: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

const TeamPage: FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [editingTeamMember, setEditingTeamMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState({
    photoUrl: "",
    name: "",
    position: "",
    description: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  });

  useEffect(() => {
    // Fetch team members
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/api/team");
        setTeamMembers(response.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  const handleEdit = (teamMember: TeamMember) => {
    setEditingTeamMember(teamMember);
    setFormData({
      photoUrl: teamMember.photoUrl,
      name: teamMember.name,
      position: teamMember.position,
      description: teamMember.description,
      facebook: teamMember.facebook || "",
      linkedin: teamMember.linkedin || "",
      twitter: teamMember.twitter || "",
      instagram: teamMember.instagram || "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingTeamMember) {
        await axios.put("/api/team", { ...formData, _id: editingTeamMember._id });
        setEditingTeamMember(null); // Reset the edit state
      } else {
        await axios.post("/api/team", formData);
      }

      // After submit, fetch updated data
      const response = await axios.get("/api/team");
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error saving team member:", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Manage Team Members</h1>

      {/* Team member list */}
      <ul>
        {teamMembers.map((teamMember) => (
          <li key={teamMember._id} className="mb-4">
            <div className="flex items-center space-x-4">
              <img src={teamMember.photoUrl} alt={teamMember.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-semibold">{teamMember.name}</h3>
                <p>{teamMember.position}</p>
                <button onClick={() => handleEdit(teamMember)} className="text-blue-500">Edit</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit form */}
      {editingTeamMember && (
        <form onSubmit={handleSubmit} className="mt-6">
          <h2 className="text-lg font-bold">Edit Team Member</h2>
          <div>
            <label>Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300"
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300"
            />
          </div>
          <div>
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300"
            />
          </div>
          <div>
            <label>Facebook</label>
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300"
            />
          </div>
          <div>
            <label>LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300"
            />
          </div>
          <div>
            <label>Twitter</label>
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300"
            />
          </div>
          <div>
            <label>Instagram</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300"
            />
          </div>

          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Save</button>
        </form>
      )}
    </div>
  );
};

export default TeamPage;
