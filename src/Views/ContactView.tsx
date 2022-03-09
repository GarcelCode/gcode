import { contactList } from "../Config/ContactConfig";

export default function Contact() {
  return (
    <article className="animate-fadeIn opacity-0">
      <h2 className="text-gc-text text-center my-3">
        You can find me here! :D
      </h2>
      <article>
        {contactList.map((el) => (
          <a key={el.id} href={el.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-[0.5rem] text-gc-text hover:text-sky-300 mb-3 hover:scale-110 duration-300 cursor-pointer">
            <div className="text-3xl">{el.icon}</div> <p>{el.name}</p>
          </a>
        ))}
      </article>
    </article>
  );
}
