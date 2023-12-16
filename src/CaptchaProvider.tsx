'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export function CaptchaProvider({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.RECAPTCHA_SITE_KEY || '6LfVYNAnAAAAAJZ8x4Sq54XASF5InNFwNjoheZsj'}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
