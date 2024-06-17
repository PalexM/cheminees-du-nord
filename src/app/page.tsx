// components
import { Footer } from "@/components";

// sections
import Hero from "./hero";
import Posts from "./posts";
import Articles from "./articles";
import Expertises from "./expertise";
import { cookies } from "next/headers";
import Environement from "./environement";
import InfoSection from "./cards";

export default function Campaign() {
  console.log(cookies())
  return (
    <>

      <Hero />
      <Expertises />
      <InfoSection />
      <Environement />
      {/* <Posts />
      <Articles /> */}
      <Footer />
    </>
  );
}
