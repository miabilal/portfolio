import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Flutter",
    "SwiftUi",
    "XML",
    "jetpack Compose",
  ];

  const backendSkills = ["Dart", "swift","Kotlin", "Firebase", "MongoDB", "Node.js"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate Software Engineer with 4 years of expertise in building scalable Mobile
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - Awkum University
                  (2017-2021)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Algorithms, SE1,SE2,Assembly Language,Operating Systems,Computer Networks,
                  Database Management Systems,Software Engineering,Object Oriented Programming,Computer Organization and Architecture,
                  Data Communication and Computer Networks,Computer Graphics,Artificial Intelligence,Machine Learning,
                  Deep Learning,Computer Vision,Natural Language Processing,Computer Networks,
                  Computer Graphics,Artificial Intelligence,Machine Learning,Deep Learning,Computer Vision,
                  Natural Language Processing,Computer Networks,Computer Graphics,Artificial Intelligence,
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at CodeOrbit (2022 - 2024){" "}
                  </h4>
                  <p>
                  Designing and implementing user interfaces that were both visually appealing and highly
functional.
 Integrating with various backend APIs and services to fetch and display data.
Implementing state management solutions to manage complex application states efficiently.
Optimizing app performance and ensuring smooth user experiences across different devices
and screen sizes.
 Conducting thorough testing and debugging to identify and resolve issues promptly..
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Mobile Developer at Software Ag (2021 - 2022){" "}
                  </h4>
                  <p>
                  During my year-long experience in mobile app development with Software Ag , I've honed my skills in
both Flutter and native Android using Kotlin . I've successfully developed and deployed crossplatform applications, leveraging the power of Flutter to create visually appealing and performant
user interfaces. I've also gained proficiency in Kotlin for native Android development, crafting robust
and scalable applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
