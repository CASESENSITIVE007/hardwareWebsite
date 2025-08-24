import nodemailer from 'nodemailer';

let cached = global._mailTransport;

if (!cached) {
  cached = global._mailTransport = {
    transporter: null,
    lastConfigSignature: null,
  };
}

function buildSignature(cfg) {
  return [cfg.host, cfg.port, cfg.secure, cfg.user].join('|');
}

export function getTransporter() {
  const {
    SMTP_HOST: host,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER: user,
    SMTP_PASS: pass,
  } = process.env;

  if (!host || !SMTP_PORT || !user || !pass) {
    throw new Error('Missing required SMTP environment variables.');
  }
  const port = Number(SMTP_PORT);
  const secure = SMTP_SECURE === 'true' || port === 465; 
  const signature = buildSignature({ host, port, secure, user });

  if (!cached.transporter || cached.lastConfigSignature !== signature) {
    cached.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
    cached.lastConfigSignature = signature;
  }
  return cached.transporter;
}

export async function sendContactEmails({ name, email, phone, subject, message }) {
  const toAddress = process.env.MAIL_TO || process.env.SMTP_USER;
  const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;

  if (!toAddress) throw new Error('MAIL_TO or SMTP_USER must be set.');

  const transporter = getTransporter();

  const htmlBody = `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br/>${message?.replace(/\n/g, '<br/>')}</p>
    <hr/>
    <p>Sent from website contact form.</p>
  `;

  const plainBody = `New Contact Submission\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage:\n${message}`;

  // Send notification to site owner
  await transporter.sendMail({
    from: fromAddress,
    to: toAddress,
    subject: `[Contact] ${subject || 'No subject'}`,
    text: plainBody,
    html: htmlBody,
    replyTo: email,
  });

  if (process.env.MAIL_REPLY_DISABLE !== 'true' && email) {
    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: 'We received your message',
      text: `Hi ${name || ''},\n\nThanks for contacting us. We have received your message and will respond shortly.\n\nSummary:\nSubject: ${subject}\nMessage:\n${message}\n\nRegards,\nThe Team`,
      html: `<p>Hi ${name || ''},</p><p>Thanks for contacting us. We have received your message and will respond shortly.</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message?.replace(/\n/g, '<br/>')}</p><p>Regards,<br/>The Team</p>`
    });
  }

  return { ok: true };
}
