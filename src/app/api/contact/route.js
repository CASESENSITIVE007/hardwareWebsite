import { NextResponse } from 'next/server';
import { sendContactEmails } from '@/lib/mail';

function validate(body) {
  const errors = {};
  function req(field, label = field) {
    if (!body[field] || String(body[field]).trim() === '') {
      errors[field] = `${label} is required`;
    }
  }
  req('name', 'Name');
  req('email', 'Email');
  req('subject', 'Subject');
  req('message', 'Message');
  if (body.phone && !/^\d{10}$/.test(body.phone)) {
    errors.phone = 'Phone must be 10 digits';
  }
  if (body.email && !/^\S+@\S+$/.test(body.email)) {
    errors.email = 'Invalid email format';
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { valid, errors } = validate(body);
    if (!valid) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    await sendContactEmails(body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
