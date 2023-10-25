"use client";

import { CaptchaProvider } from "@/CaptchaProvider";
import RegistrationForm from "@/components/Forms/RegistrationForm";

export default function Signup() {
  return (
    <CaptchaProvider>
      <RegistrationForm></RegistrationForm>
    </CaptchaProvider>
  );
}
