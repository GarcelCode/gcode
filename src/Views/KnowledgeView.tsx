import { topics } from "../Config/KnowledgeConfig";

export default function Knowledge () {
    
    return <article className="animate-fadeIn opacity-0">
        <p className="text-gc-text text-center my-3">I have experience working with the following tools</p>
        <>
            <ul className="grid grid-cols-auto gap-5">
                {topics.map((el)=><li key={el.id} className="flex justify-center text-sky-300 text-5xl animate-appear">{el.icon}</li>)}
            </ul>
        </>
    </article>
}