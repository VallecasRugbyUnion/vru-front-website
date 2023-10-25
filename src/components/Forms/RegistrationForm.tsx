"use client";
import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import Image from "next/image";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { error } from "console";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptchaAction } from "@/Captcha";
import { auth, dbFirestore } from "@/Firebase";
import { useSession } from "next-auth/react";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { data: session, status } = useSession();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha("onSubmit");
    // validate the token via the server action we've created previously
    const verified = await verifyCaptchaAction(token);

    if (verified) {
      try {
        if (password !== passwordAgain) {
          throw new Error("Passwords do not match.");
        }
        const cred: UserCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (cred) {
          sendEmailVerification(cred.user);
          // Create user document in Firestore

          debugger;
          await setDoc(doc(dbFirestore, "users", cred.user.uid), {
            email: cred.user.email,
          });
        }
      } catch (error) {
        console.error("Error signing in:", error);
        // TODO: Display a user-friendly error message.
      }
    } else {
    }
    // here you would give an error message or just ignore
    // the form submission
  };

  return (
    <section className="grid h-screen items-center lg:grid-cols-2">
      <div className="my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Regístrate
        </Typography>
        <Typography color="gray" className="mb-16">
          Es rápido y fácil
        </Typography>

        <form
          onSubmit={handleSignUp}
          className="mx-auto max-w-[24rem] text-left"
        >
          <div className="mb-8">
            <Input
              color="gray"
              size="lg"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              color="gray"
              size="lg"
              label="Contraseña"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              color="gray"
              size="lg"
              label="Repetir Contraseña"
              type="password"
              name="passwordAgain"
              autoComplete="current-password"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Typography
              as="a"
              href="/signin"
              color="gray"
              className="font-medium"
            >
              ¿Ya tienes cuenta con el VRU?
            </Typography>
          </div>
          <Button
            disabled={
              !email ||
              !password ||
              !passwordAgain ||
              password !== passwordAgain
            }
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
            type="submit"
          >
            Crear Cuenta Nueva
          </Button>
        </form>
      </div>
      <Image
        src="/images/masculino/_DSC0169.jpg"
        alt="Imagen de fondo"
        className="hidden h-screen w-full object-cover lg:block"
        width={900}
        height={700}
      />
    </section>
  );
}

export default RegistrationForm;
