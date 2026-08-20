"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(name, email, message);

  await resend.emails.send({
    from: "contact@branover9000.com",
    to: "branover9000@gmail.com",
    subject: `New message from ${name}`,
    text: `${message}\n\nFrom: ${name} (${email})`,
  });
}
