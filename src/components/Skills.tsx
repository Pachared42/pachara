import { type ReactNode, useRef } from "react";
import { SKILL_CATEGORIES } from "../constants/SkillsConstants";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";
import type { SkillIconItem } from "../types";

type SkillSectionProps = {
  title: string;
  data: SkillIconItem[];
  extractItems: (_item: SkillIconItem) => ReactNode[];
  isSubSection?: boolean;
  showDescription?: boolean;
};

const SkillSection = ({
  title,
  data,
  extractItems,
  isSubSection = false,
  showDescription = true,
}: SkillSectionProps) => (
  <div className="skill-section pt-20 first:pt-0">
    <h1
      className={`skill-reveal mb-1 text-center font-bold ${
        isSubSection ? "text-2xl sm:text-3xl lg:text-4xl" : "text-3xl sm:text-4xl lg:text-6xl"
      }`}
    >
      {isSubSection ? title.toUpperCase() : title}
    </h1>
    {showDescription && (
      <p className="skill-reveal pb-5 text-center text-base font-light tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-lg">
      ดูรายละเอียดเพิ่มเติม
      </p>
    )}
    <div className="skill-group flex flex-wrap items-center justify-center gap-8 pt-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="skill-icon rounded-3xl pl-3 pr-3 flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          {extractItems(item).map((content, i) => (
            <div
              key={i}
              className="skill-icon-body flex items-center justify-center"
              aria-label="Item icon"
            >
              {content}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (shouldReduceMotion()) return;

      gsap.utils.toArray<HTMLElement>(".skill-section").forEach((section) => {
        const revealItems = section.querySelectorAll(".skill-reveal");
        const icons = section.querySelectorAll(".skill-icon");
        const iconBodies = section.querySelectorAll(".skill-icon-body");

        revealInSequence(gsap, revealItems, {
          trigger: section,
          start: "top 82%",
          stagger: 0.1,
        });

        if (icons.length > 0) {
          gsap.fromTo(
            icons,
            {
              x: (index) => {
                const direction = index % 2 === 0 ? -1 : 1;
                return direction * (24 + (index % 4) * 10);
              },
              y: (index) => {
                const direction = index % 3 === 0 ? -1 : 1;
                return direction * (18 + (index % 5) * 7);
              },
              rotation: (index) => (index % 2 === 0 ? -1 : 1) * (4 + (index % 3) * 2),
              autoAlpha: 0,
              filter: "blur(6px)",
              scale: 0.9,
            },
            {
              x: 0,
              y: 0,
              rotation: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              scale: 1,
              duration: 0.9,
              ease: "expo.out",
              stagger: {
                each: 0.035,
                from: "center",
              },
              clearProps: "transform,filter,opacity,visibility",
              scrollTrigger: {
                trigger: section.querySelector(".skill-group"),
                start: "top 82%",
                once: true,
              },
            },
          );
        }

        if (iconBodies.length > 0) {
          gsap.to(iconBodies, {
            y: -4,
            duration: 2.4,
            delay: 0.95,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: {
              each: 0.12,
              from: "random",
            },
          });
        }
      });
    },
    { scope: skillsRef },
  );

  return (
    <section
      ref={skillsRef}
      className="relative mx-auto w-full max-w-4xl flex flex-col pt-28 md:pt-32 overflow-visible"
      id="skills"
    >
      <SkillSection title="SKILL" data={[]} extractItems={() => []} />
      {SKILL_CATEGORIES.map((category) => (
        <SkillSection
          key={category.title}
          title={category.title}
          data={category.data}
          extractItems={category.extractItems}
          isSubSection
        />
      ))}
    </section>
  );
};

export default Skills;
