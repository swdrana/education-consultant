"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { addTeamMember, updateTeamMember } from "@/actions/teamActions";

const TeamMemberForm = ({ onAdd, onEdit, member }: { onAdd: (member: any) => void; onEdit: (member: any) => void; member?: any }) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    description: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        position: member.position,
        description: member.description,
        facebook: member.facebook || "",
        linkedin: member.linkedin || "",
        twitter: member.twitter || "",
        instagram: member.instagram || "",
      });
    }
  }, [member]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      // Check if the file is an image        accept="image/*" // শুধুমাত্র ছবি ফাইল অনুমোদিত
      
      if (file.type.startsWith("image/")) {
        setPhoto(file);
      } else {
        toast.error("Please upload a valid image file.");
        setPhoto(null); // Clear the invalid file
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!photo && !member) {
      toast.error("Please upload a photo");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (photo) data.append("photo", photo);

    try {
      if (member) {
        // Update team member if editing
        const updatedMember = await updateTeamMember(member._id, data);
        toast.success("Team member updated!");
        onEdit(updatedMember); // Update the UI dynamically without reload
      } else {
        // Add new member
        const newMember = await addTeamMember(data);
        toast.success("Team member added!");
        onAdd(newMember); // Update the UI dynamically without reload
      }
      document.getElementById("team_modal")?.close();
    } catch (error) {
      toast.error("Error submitting form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="position"
        required
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        className="input input-bordered w-full"
      />
      <textarea
        name="description"
        required
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="textarea textarea-bordered w-full"
      ></textarea>
      <input
        type="file"
        name="photo"
        required
        accept="image/*" // Restrict file input to images only
        onChange={handleFileChange}
        className="file-input w-full"
      />
      
      {/* Social Media Links - Optional */}
      <input
        type="text"
        name="facebook"
        value={formData.facebook}
        onChange={handleChange}
        placeholder="Facebook (Optional)"
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn (Optional)"
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="twitter"
        value={formData.twitter}
        onChange={handleChange}
        placeholder="Twitter (Optional)"
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="instagram"
        value={formData.instagram}
        onChange={handleChange}
        placeholder="Instagram (Optional)"
        className="input input-bordered w-full"
      />
      
      <button type="submit" className="btn btn-primary w-full">
        {member ? "Update" : "Save"} Member
      </button>
    </form>
  );
};

export default TeamMemberForm;
