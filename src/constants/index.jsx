import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "/project1.jpg";
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
  { label: "ประสบการณ์", href: "#experience" },
  { label: "การศึกษา", href: "#education" },
  { label: "ติดต่อ", href: "#contact" },
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis. Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.",
    image: projectImage1,
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
    skill1: <RiReactjsLine className="text-4xl lg:text-8xl text-[#61DAFB]" />,
    name: "React",
    experience: "",
  },
  {
    skill2: <SiPhp className="text-4xl lg:text-8xl text-[#8892BF]" />,
    name: "PHP",
    experience: "",
  },
  {
    skill3:
      <RiTailwindCssFill className="text-4xl lg:text-8xl text-[#38BDF8]" />,
    name: "Tailwind CSS",
    experience: "",
  },
  {
    skill4: <FaHtml5 className="text-4xl lg:text-8xl text-[#E34F26]" />,
    name: "HTML",
    experience: "",
  },
  {
    skill5: <FaCss3Alt className="text-4xl lg:text-8xl text-[#264DE4]" />,
    name: "CSS",
    experience: "",
  },
  {
    skill6: <DiJavascript className="text-4xl lg:text-[105px] text-[#F7DF1E]" />,
    name: "JavaScript",
    experience: "",
  },
  {
    skill7: <IoLogoGithub className="text-4xl lg:text-8xl text-purple-700" />,
    name: "GitHub",
    experience: "",
  },
];

export const TOOLS = [
  {
    tool1: <VscVscodeInsiders className="text-4xl lg:text-8xl text-[#007ACC]" />,
    name: "Visual Studio Code",
    experience: "",
  },
  {
    tool2: <IoLogoGithub className="text-4xl lg:text-8xl text-[#586069]" />,
    name: "GitHub",
    experience: "",
  },
  {
    tool3: <SiXampp className="text-4xl lg:text-[85px] text-[#FF7A00]" />,
    name: "XAMPP",
    experience: "",
  },
  {
    tool4: <SiLaragon className="text-4xl lg:text-[85px] text-[#1D7A8C]" />,
    name: "Laragon",
    experience: "",
  },
  {
    tool5: <SiAdobeillustrator className="text-4xl lg:text-[85px] text-[#FF9A00]" />,
    name: "Adobe Illustrator",
    experience: "",
  },
  {
    tool6: <SiAdobephotoshop className="text-4xl lg:text-[85px] text-[#31A8FF]" />,
    name: "Adobe Photoshop",
    experience: "",
  },
];

export const DATABASES = [
  {
    database1: <SiMysql className="text-4xl lg:text-[115px] text-[#4479A1]" />,
    name: "MySQL",
    experience: "",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
];

<h1>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore
  deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis.
  Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.
</h1>;
