import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#0B1120] text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center text-blue-300">Welcome to My Portfolio</h1>
        <p className="mt-6 text-lg text-center max-w-2xl">
        Proficient in Groovy and Java, with hands-on experience in analyzing scalable API services using cloud-based architecture. 
        Passionate about data-driven solutions, performance optimization, and cross-functional collaboration. Currently exploring prompt-based LLM integrations.
        </p>
      </div>
    </div>
  );
}

