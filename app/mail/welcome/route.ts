
import WelcomeEmail from '@/mails/Welcome';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
  try {
    const { to, username, subUrl } = body;
    const { data, error } = await resend.emails.send({
      from: 'SkidGod <skidgod@mail.devwtf.in>',
      to: [to],
      subject: 'Surprising! Welcome to my portfolio! 🎉',
      react: WelcomeEmail({ username: username, subUrl: subUrl}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
