import React from "react";
import AuthPlaceholder from "../components/AuthPlaceholder";
import Auth from "../components/Auth";

export default function SignIn() {
  return (
    <section className="flex  justify-center items-center">
      <AuthPlaceholder />
      <Auth />
    </section>
  );
}
