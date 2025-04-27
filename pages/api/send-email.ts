// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailersend = new MailerSend({
  apiKey:
    "mlsn.6ada987918e67d62d1158c330a0346a3b50cbc2c22fcf17db8d2806bf5427fd5",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }
  const { email, name, message } = req.body;
  if (!email || !name || !message) {
    return res.status(400).json({ success: false });
  }

  let senderName = "abectiv";
  let senderEmail = "MS_CVTlPj@test-eqvygm001ndl0p7w.mlsender.net";

  const sentFrom = new Sender(senderEmail, senderName);
  const recipients = [
    new Recipient("obchod@abectiv.com", "Ondrej"),
    new Recipient("mdmarufbinsalim@gmail.com", "Maruf"),
  ];
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject("Someone Contacted you from ABECTIV website form!")
    .setHtml(
      `
      <body>
        <h1 style="">Hello,</h1>
        <p style="">You have received a new message from your website (ABECTIV) contact form.</p>
        <p style="">Here are the details:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    ).setText(`
      Hello,
      You have received a new message from your website (ABECTIV) contact form.
      Here are the details:
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `);
  try {
    const mailData = await mailersend.email.send(emailParams);
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false });
  }
  res.status(200).json({ success: true });
}
