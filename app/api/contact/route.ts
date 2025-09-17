import EmailTemplate from "@/util/email-template";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, senderEmail, subject, message } = await req.json();

    await resend.emails.send({
      from: `Portfolio Contact <${process.env.RESEND_EMAIL}>`, // your verified sender email
      to: `${process.env.MY_EMAIL}`,                           // your email
      subject: subject,
      react: React.createElement(EmailTemplate, { senderName: name, senderEmail, subject, message })
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
