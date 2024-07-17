"use client";
import React from "react";
import { Resend } from "resend";

const SendEmail = () => {
  async function send() {
    // "use server";
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data } = await resend.emails.send({
      from: "modakverma.dev@gmail.com",
      to: ["modakverma02@gmail.com"],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });
    console.log(data);
  }
  return (
    <form
      action={send}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <input type="text" />
      <button type="submit" className="bg-red-300 p-2">
        Send email
      </button>
    </form>
  );
};

export default SendEmail;
