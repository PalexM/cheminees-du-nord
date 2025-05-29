import Hero from "./hero";
import Expertises from "./expertise";
import { cookies } from "next/headers";
import Environement from "./environement";
import InfoSection from "./cards";
import SeoServices from "./services";
import SeoFaq from "./faq";

export default function Campaign() {
  console.log(cookies())
  return (
    <>

      <Hero />
      <SeoServices />
      <SeoFaq />
      <Environement />

    </>
  );
}
