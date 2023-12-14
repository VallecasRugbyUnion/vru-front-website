'use server';

export async function verifyCaptchaAction(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(url, {
    next: { revalidate: 0 },
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const data = await response.json();

  if (data.score > 0.5) {
    return true;
  } else {
    return false;
  }
}
