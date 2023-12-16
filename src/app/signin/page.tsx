import { CaptchaProvider } from '@/CaptchaProvider';
import SignInForm from '@/components/Forms/SignInForm';

export default function Signin() {
  return (
    <CaptchaProvider>
      <SignInForm></SignInForm>
    </CaptchaProvider>
  );
}
