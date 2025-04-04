import About from "@/components/About";
import Banner from "@/components/Banner";
import CertificateSection from "@/components/CertificateSection";
import EducationSection from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        {/* <EducationSection /> */}
        <CertificateSection />
        <Footer />
      </div>
    </main>
  );
}
