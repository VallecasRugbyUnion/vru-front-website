"use client"
import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Error signing in:", error);
      // TODO: Display a user-friendly error message.
    }
  };

  return (
    <section className="grid h-screen items-center lg:grid-cols-2">
      <div className="my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Iniciar sesión
        </Typography>
        <Typography color="gray" className="mb-16">
          Ingresa tu correo electrónico y contraseña para iniciar sesión.
        </Typography>

        <form onSubmit={handleSignIn} className="mx-auto max-w-[24rem] text-left">
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
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Typography
              as="a"
              href="/forgot-password"
              color="gray"
              className="font-medium"
            >
              ¿Has olvidado la contraseña?
            </Typography>
          </div>
          <Button
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
            type="submit"
          >
            Iniciar sesión
          </Button>
          {/* TODO: Implement Google Sign-In */}
          <Button
            variant="outlined"
            color="gray"
            size="lg"
            className="mt-4 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src="/logos/logo-google.png"
              alt="Iniciar sesión con Google"
              className="-mt-0.5 h-7 w-7"
            />
            Iniciar sesión con Google
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

export default SignInForm;
