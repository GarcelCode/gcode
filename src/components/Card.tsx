import { useState } from "react";
import Contact from "../Views/ContactView";
import Knowledge from "../Views/KnowledgeView";
import CardButton from "./CardButton";
import CardHeader from "./CardHeader";

export default function Card() {
  const [knowledgeVisible, setKnowledgeVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <div className="animate-slideUp text-center">
      <div
        className={`bg-gc-secondary p-5 rounded-md animate-slideUp max-w-[19rem] sm:max-w-[23rem] h-[13rem] duration-500 ease-out ${
          knowledgeVisible ? "h-[24.5rem]" : ""
        } ${contactVisible ? "h-[25.5rem]" : ""}`}
      >
        <CardHeader />

        <hr />

        <section className="flex justify-around mt-3">
          <CardButton
            text="Knowledge"
            action={() => {
              setKnowledgeVisible(!knowledgeVisible);
              setContactVisible(false);
            }}
          />
          <CardButton
            text="Contact"
            action={() => {
              setContactVisible(!contactVisible);
              setKnowledgeVisible(false);
            }}
          />
        </section>

        {knowledgeVisible && <Knowledge />}
        {contactVisible && <Contact />}
      </div>
      <footer className="mt-3 text-gray-400 text-xs -z-10">
        GarcelCode 2022
      </footer>
    </div>
  );
}
