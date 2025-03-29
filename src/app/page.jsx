"use server"

import {permanentRedirect, redirect} from "next/navigation";

export default async function Home() {
  permanentRedirect("/a")

  return (
      <>sssss</>
  );
}
