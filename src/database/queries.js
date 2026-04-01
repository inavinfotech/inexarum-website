import { supabase } from "./supabase";

export const submitSupportQuery = async (queryDetails) => {
  const { data, error } = await supabase.from("query").insert([
    {
      name: queryDetails.name,
      email: queryDetails.email,
      contact_number: queryDetails.contact_number,
      subject: queryDetails.subject,
      message: queryDetails.message,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Error submitting query:", error);
    return "error";
  }

  return data;
};
