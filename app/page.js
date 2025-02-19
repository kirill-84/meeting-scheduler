import Image from "next/image";
import {Button} from "@/components/ui/button";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default function Home() {
  return (
    <div>
      <Header/>

      <Hero/>
    </div>
  );
}
