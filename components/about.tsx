/* eslint-disable react/no-unescaped-entities */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabCard from "./cards/tab-card";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row h-screen pt-16 mt-16"
    >
      <div className="flex flex-col md:flex-row justify-evenly w-full gap-4">
        <div className="w-full md:w-1/2 break-normal px-4">
          <h3 className="scroll-m-20 text-5xl font-light tracking-tight mb-4">
            About <span className="text-red-500">me</span>
          </h3>
          <p className="leading-7 mt-6">
            I am a 25 years old developer from Finland. I am starting my
            bachelors degree in Computer Science this august.
          </p>
          <p className="leading-7 mt-3">
            I have been working as as security system installer for 4,5 years
            now. I have specialized in critical infrastructure projects such as
            hospitals, banks, and large-scale ventures like office buildings and
            educational institutions. My expertise lies in installing a variety
            of security systems, including access control systems, CCTV, and
            alarm systems. Beyond the technical aspects of my work, I have also
            trained few new installers, passing on the skills and knowledge that
            I've acquired over the years.
          </p>
          <p className="leading-7 mt-3">
            I have been interested in technology always and since early 2022 i
            have been programming as a hobby. I am looking forward to change my
            field of work to web development in the future.
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 md:mt-0 w-full md:w-auto">
          <Tabs defaultValue="skills">
            <TabsList className="px-3 flex justify-center">
              <TabsTrigger
                className="text-red-500 text-lg focus:text-xl md:text-start md:text-xl md:focus:text-2xl"
                value="skills"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                className="text-yellow-500 text-lg focus:text-xl md:text-start md:text-xl md:focus:text-2xl"
                value="expereience"
              >
                Experiences
              </TabsTrigger>
              <TabsTrigger
                className="text-green-500 text-lg focus:text-xl md:text-start md:text-xl md:focus:text-2xl"
                value="education"
              >
                Education
              </TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <TabCard
                title="Skills"
                titleColor="text-red-500"
                listWords={[
                  "Typescript",
                  "Next.js",
                  "TailwindCSS",
                  "Git",
                  "Node.js",
                  "Express.js",
                  "REST",
                  "Prisma",
                  "PostgreSQL",
                  "Access control systems",
                  "CCTV",
                  "Alarm systems",
                ]}
              />
            </TabsContent>
            <TabsContent value="expereience">
              <TabCard
                title="Experiences"
                titleColor="text-yellow-500"
                listWords={[
                  "Internship @Raahen ykköspalvelu (Spring of 2018)",
                  "Security system installer (2019 - present)",
                ]}
              />
            </TabsContent>
            <TabsContent value="education">
              <TabCard
                title="Education"
                titleColor="text-green-500"
                listWords={[
                  "Degree in ICT @RPKK (2015 - 2018)",
                  "BBA in Computer Science @HAMK (2023 - 2026)",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default About;
