import {
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import PORTFOLIO from "/image/projectImage/PORTFOLIO.png";
import projectImage2 from "/project2.jpg";
import projectImage3 from "/project3.jpg";
import projectImage4 from "/project4.jpg";
import projectImage5 from "/project5.jpg";
import projectImage6 from "/project6.jpg";


// Skills icons
import { RiReactjsLine } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

// Tools icons
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io5";
import { SiXampp } from "react-icons/si";
import { SiLaragon } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

// Database icons
import { SiMysql } from "react-icons/si";


export const NAVIGATION_LINKS = [
  { label: "ผลงาน", href: "#projects" },
  { label: "ประวัติ", href: "#about" },
  { label: "ทักษะ", href: "#skills" },
  { label: "การศึกษา", href: "#education" },
  { label: "ติดต่อ", href: "#contact" },
  {/* { label: "ประสบการณ์", href: "#experience" }, */},
];

export const HERO = {
  name: "Pachara",
  greet: "Front-End Developer",
  greet2: "Back-End Developer",
  greet3: "Full-Stack Developer",
  greet4: "Software Engineer",
  description:
    "ฉันเป็น Front-End Developer ที่หลงใหลในการออกแบบและสร้างสรรค์ UI ที่สวยงามและตอบโจทย์ประสบการณ์ผู้ใช้งาน พร้อมมุ่งมั่นพัฒนาทักษะด้านการเขียนโค้ดและแก้ปัญหาอย่างเป็นระบบ เพื่อเติบโตสู่การเป็น Software Engineer ในอนาคต และเปิดรับความท้าทายใหม่ ๆ อยู่เสมอ",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่ออกแบบให้ดูทันสมัยและใช้งานได้กับทุกอุปกรณ์ แสดงผลงาน ความสามารถ และประสบการณ์ของฉัน พร้อม UI ที่เรียบหรูและแอนิเมชันที่ลื่นไหล",
    image: PORTFOLIO,
    githubLink: "https://github.com/Pachared42/pachara",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis. Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis. Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis. Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis. Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis. Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const ABOUT = [
  "ผมเป็นนักศึกษาระดับปริญญาตรี จากมหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี มีความหลงใหลในการออกแบบและพัฒนาเว็บไซต์ โดยเฉพาะในสายงาน Front-End Developer พร้อมให้ความสำคัญกับการสร้างสรรค์ผลงานที่สวยงามและตอบโจทย์ผู้ใช้งานอยู่เสมอ",
  "ด้วยความมุ่งมั่นในการเรียนรู้และพัฒนาทักษะอย่างต่อเนื่อง ผมตั้งเป้าหมายในการเติบโตสู่การเป็น Software Engineer โดยเน้นการออกแบบซอฟต์แวร์ที่มีคุณภาพ และประสบการณ์ผู้ใช้ที่ดีเยี่ยมควบคู่กันไป"
];

export const SKILLS = [
  {
    skill1: <RiReactjsLine className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#61DAFB]" />,
    name: "React",
    experience: "",
  },
  {
    skill2: <SiPhp className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#8892BF]" />,
    name: "PHP",
    experience: "",
  },
  {
    skill3: <RiTailwindCssFill className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#38BDF8]" />,
    name: "Tailwind CSS",
    experience: "",
  },
  {
    skill4: <FaHtml5 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#E34F26]" />,
    name: "HTML",
    experience: "",
  },
  {
    skill5: <FaCss3Alt className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#264DE4]" />,
    name: "CSS",
    experience: "",
  },
  {
    skill6: <DiJavascript className="text-3xl sm:text-5xl md:text-[75px] lg:text-[90px] xl:text-[105px] text-[#F7DF1E]" />,
    name: "JavaScript",
    experience: "",
  },
];

export const TOOLS = [
  {
    tool1: <VscVscodeInsiders className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007ACC]" />,
    name: "Visual Studio Code",
    experience: "",
  },
  {
    tool2: <IoLogoGithub className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#586069]" />,
    name: "GitHub",
    experience: "",
  },
  {
    tool3: <SiXampp className="text-3xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FF7A00]" />,
    name: "XAMPP",
    experience: "",
  },
  {
    tool4: <SiAdobeillustrator className="text-3xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FF9A00]" />,
    name: "Adobe Illustrator",
    experience: "",
  },
  {
    tool5: <SiAdobephotoshop className="text-3xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#31A8FF]" />,
    name: "Adobe Photoshop",
    experience: "",
  },
];

export const DATABASES = [
  {
    database1: <SiMysql className="text-3xl sm:text-5xl md:text-[80px] lg:text-[100px] xl:text-[115px] text-[#4479A1]" />,
    name: "MySQL",
    experience: "",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "[ บริษัท อินโนเวทีฟ เทค โซลูชั่นส์ ]",
    duration: "กรกฎาคม 2020 - ปัจจุบัน",
    description:
      "ในฐานะหัวหน้าทีม Frontend ฉันเป็นผู้นำในการพัฒนาเว็บแอปพลิเคชันโดยใช้เทคโนโลยีสมัยใหม่ เช่น React, Redux และ TypeScript พร้อมทำงานร่วมกับทีมดีไซน์ ผู้จัดการผลิตภัณฑ์ และทีม Backend เพื่อส่งมอบประสบการณ์ผู้ใช้ที่ลื่นไหลและมีประสิทธิภาพสูง",
  },
  {
    title: "Frontend Engineer",
    company: "[ บริษัท ดิจิทัล ครีเอชั่นส์ ]",
    duration: "กุมภาพันธ์ 2016 - มิถุนายน 2020",
    description:
      "ฉันรับผิดชอบในการพัฒนาอินเทอร์เฟซเว็บที่ตอบสนองและโต้ตอบได้สูง โดยใช้ HTML, CSS, JavaScript และ React พร้อมร่วมมือกับ UX/UI Designer ในการปรับปรุงการออกแบบเพื่อเพิ่มประสบการณ์การใช้งานของผู้ใช้ รวมถึงการเพิ่มประสิทธิภาพเว็บไซต์ให้รองรับทุกเบราว์เซอร์ และเป็นมิตรกับ SEO",
  },
  {
    title: "Junior Web Developer",
    company: "[ บริษัท ไบร์ท ฟิวเจอร์ เทคโนโลยีส์ ]",
    duration: "สิงหาคม 2014 - มกราคม 2016",
    description:
      "ฉันมีส่วนร่วมในการพัฒนาและดูแลระบบเว็บแอปของบริษัท โดยใช้ HTML, CSS และ JavaScript เพื่อสร้างอินเทอร์เฟซที่ใช้งานง่าย รวมถึงมีส่วนร่วมในการวางแผนโปรเจกต์ และเรียนรู้จากนักพัฒนาอาวุโสเพื่อพัฒนาทักษะอย่างต่อเนื่อง",
  },
];

export const EDUCATION = [
  {
    degree: "มัธยมศึกษาตอนปลาย สายทั่วไป",
    institution: "THAMMACHOTESUKSALAI SCHOOL",
    duration: "September 2012 - June 2014",
    description:
      "เรียนสายทั่วไป โดยมีความสนใจด้านการออกแบบกราฟิกและเริ่มต้นฝึกฝนพื้นฐานด้านการออกแบบตั้งแต่ช่วงมัธยม",
  },
  {
    degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาคอมพิวเตอร์กราฟิก",
    institution: "Saraburi Vocational College",
    duration: "May 2561 - May 2563",
    description:
      "ศึกษาเกี่ยวกับการออกแบบกราฟิกด้วยโปรแกรมคอมพิวเตอร์ ฝึกปฏิบัติจริงทั้งด้านการออกแบบสื่อสิ่งพิมพ์ ดิจิทัลอาร์ต และพื้นฐานการใช้เครื่องมือกราฟิกอย่างมืออาชีพ เพื่อเตรียมความพร้อมสู่สายงานสร้างสรรค์",
  },
  {
    degree: "ปริญญาตรี สาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล",
    institution: "Rajamangala University of Technology Suvarnabhumi, Suphanburi Campus",
    duration: "July 2567 - Present",
    description:
      "ศึกษาเกี่ยวกับการพัฒนาเทคโนโลยีสารสนเทศ โดยเน้นด้านการออกแบบและพัฒนาระบบฐานข้อมูล แอปพลิเคชันบนอุปกรณ์พกพา และเว็บแอปพลิเคชัน ได้ฝึกปฏิบัติงานจริงในด้าน Full-stack Development ตั้งแต่การวางโครงสร้างฐานข้อมูล ไปจนถึงการเขียนโปรแกรมและออกแบบส่วนติดต่อผู้ใช้",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/pacharaaaaaaa",
    icon: <FaFacebook fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/axm.pcr/",
    icon: <FaInstagram fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Pachared42",
    icon: <FaGithub fontSize={50} className="hover:opacity-80" />,
  },
];
