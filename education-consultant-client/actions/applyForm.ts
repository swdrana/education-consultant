"use server";

import connectDB from "@/lib/connectDB";
import ApplicationData from "@/models/ApplicationData";
import nodemailer from "nodemailer";

export const fff = async (formData: FormData) => {
  try {
    // ফর্ম ডাটার ভিতর থেকে ডাটা বের করা
    const data = {
      name: formData.get("name"),
      phone: formData.get("tel"),
      email: formData.get("email"),
      birthDate: formData.get("birthDate"),
      gender: formData.get("gender"),
      passport: formData.get("passport"),
      englishTest: formData.get("englishTest"),
      education: formData.get("education"),
      academicDetails: formData.get("academicDetails"),
      studyDestination: formData.get("studyDestination"),
    };

    console.log(data);
    
    // ডাটাবেজ কানেকশন
    await connectDB();
    await ApplicationData.create(data);  // ডাটাবেজে ডাটা সেভ করা

    // ইমেইল পাঠানোর জন্য সেটআপ
    const transporter = nodemailer.createTransport({
      service: "gmail", // গুগল মেইল সার্ভিস
      auth: {
        user: process.env.ADMIN_EMAIL,  // .env ফাইল থেকে ইমেইল
        pass: process.env.ADMIN_EMAIL_PASSWORD,  // .env ফাইল থেকে অ্যাপ পাসওয়ার্ড
      },
    });

    // ইমেইল কনটেন্ট তৈরি করা
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,  // প্রেরক (Admin email)
      to: process.env.ADMIN_EMAIL,    // রিসিভার (Admin email)
      subject: "New Application Received", // ইমেইলের সাবজেক্ট
      text: `
        A new application has been submitted:

        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Birth Date: ${data.birthDate}
        Gender: ${data.gender}
        Passport: ${data.passport}
        English Test: ${data.englishTest}
        Education: ${data.education}
        Academic Details: ${data.academicDetails}
        Study Destination: ${data.studyDestination}

        Please check the admin panel for more details.
      `,
    };

    // ইমেইল পাঠানো
    await transporter.sendMail(mailOptions);
    console.log("Admin email sent successfully");

  } catch (error) {
    console.error("Error processing application:", error);
  }
};
