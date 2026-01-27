import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";

import PORTFOLIO from "/image/projectImage/PORTFOLIO.png";
import ECOMMERCE from "/image/projectImage/E-Commerce Platform.png";
import PIVOTZONE from "/image/projectImage/PivotZone.png";
import StoreManagementSystemSCI_NEXT from "/image/projectImage/Store Management System SCI_NEXT.png";
import Novacloud from "/image/projectImage/Novacloud.png";
import projectImage5 from "/project5.jpg";
import projectImage6 from "/project6.jpg";

// Skills icons Projects
import { SiTailwindcss, SiFramer } from "react-icons/si";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { FaPython } from "react-icons/fa";

// Skills icons
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

// Tools icons
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io5";
import { SiXampp } from "react-icons/si";
import { SiMamp } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiWarp } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import { SiBruno } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiN8N } from "react-icons/si";

// Database icons
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// Cloud icons
import { SiRailway } from "react-icons/si";
import { SiVercel } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "ผลงาน", href: "#projects" },
  { label: "ประวัติ", href: "#about" },
  { label: "ทักษะ", href: "#skills" },
  { label: "การศึกษา", href: "#education" },
  { label: "ติดต่อ", href: "#contact" },
  {
    /* { label: "ประสบการณ์", href: "#experience" }, */
  },
];

export const HERO = {
  name: "PACHARA",
  greet: "FRONT-END DEVELOPER",
  greet2: "BACK-END DEVELOPER",
  greet3: "FULL-STACK DEVELOPER",
  greet4: "LEAD FRONT-END DEVELOPER",
  description:
    "ฉันเป็น Front-End Developer ที่หลงใหลในการออกแบบและสร้างสรรค์ UI ที่สวยงามและตอบโจทย์ประสบการณ์ผู้ใช้งาน พร้อมมุ่งมั่นพัฒนาทักษะด้านการเขียนโค้ดและแก้ปัญหาอย่างเป็นระบบ เพื่อเติบโตสู่การเป็น Lead Front-End Developer ในอนาคต และเปิดรับความท้าทายใหม่ ๆ อยู่เสมอ",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่ออกแบบให้ดูทันสมัยและใช้งานได้กับทุกอุปกรณ์ แสดงผลงาน ความสามารถ และประสบการณ์ของฉัน พร้อม UI ที่เรียบหรูและแอนิเมชันที่ลื่นไหล",
    image: PORTFOLIO,
    githubLink: "https://github.com/Pachared42/pachara",
    stackIcons: [
      <SiReact key="react" className="text-[#61DAFB]" />,
      <SiTailwindcss key="tailwind" className="text-[#38BDF8]" />,
      <SiFramer key="framer" className="text-[#0055FF]" />,
      <SiVercel key="vercel" className="text-[#FFFFFF]" />,
    ],
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "เว็บไซต์ร้านขายคีย์บอร์ดเกมมิ่งที่ออกแบบมาเพื่อให้ผู้ใช้งานสามารถเลือกซื้อสินค้าได้อย่างสะดวก พร้อมระบบค้นหา เปรียบเทียบรุ่น และดูรายละเอียดสินค้าแบบครบถ้วน รองรับการแสดงผลทั้งบนมือถือและเดสก์ท็อป",
    image: ECOMMERCE,
    githubLink: "https://github.com/Pachared42/melgeeks_shop",
    stackIcons: [
      <SiHtml5 key="html" className="text-[#e34f26]" />,
      <SiCss3 key="css" className="text-[#1572B6]" />,
      <SiJavascript key="js" className="text-[#f7df1e]" />,
      <SiPhp key="php" className="text-[#8892be]" />,
      <SiOracle key="oracle" className="text-[#F80000]" />,
      <SiRailway key="railway" className="text-[#FFFFFF]" />,
    ],
  },
  {
    id: 3,
    name: "PivotZone Desktop App",
    description:
      "เครื่องมือวิเคราะห์หุ้นที่ใช้งานง่าย เหมาะสำหรับนักลงทุนทุกระดับ พัฒนาโดย Python และ Tkinter พร้อมอินเทอร์เฟซเรียบง่าย ทำงานรวดเร็ว และดึงข้อมูลแบบเรียลไทม์จาก Yahoo Finance เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างแม่นยำยิ่งขึ้น มาพร้อมกราฟสวยคมชัดและฟีเจอร์ครบครันในแอปเดียว",
    image: PIVOTZONE,
    githubLink: "https://github.com/Pachared42/PivotZone",
    stackIcons: [<FaPython key="Python" className="text-[#3776AB]" />],
  },
  {
    id: 4,
    name: "Store Management System SCI_NEXT \n (โครงการในมหาวิทยาลัย)",
    description:
      "ระบบบริหารจัดการร้านค้าแบบครบวงจร พัฒนาขึ้นในโครงการภายในมหาวิทยาลัย โดยมีเป้าหมายเพื่อเพิ่มประสิทธิภาพการจัดเก็บข้อมูลสินค้า การขาย และการจัดการสต๊อกให้เป็นระบบมากขึ้น ผ่านเทคโนโลยีสมัยใหม่และโครงสร้างระบบที่ใช้งานง่าย",
    image: StoreManagementSystemSCI_NEXT,
    githubLink: "https://github.com/Pachared42/sci-stock-app",
    stackIcons: [
      <SiReact key="react" className="text-[#61DAFB]" />,
      <SiJavascript key="Javascript" className="text-[#f7df1e]" />,
      <SiTailwindcss key="tailwind" className="text-[#38BDF8]" />,
      <SiMui key="Mui" className="text-[#007FFF]" />,
      <FaGolang key="Golang" className="text-[#00ADD8]" />,
      <SiMysql key="Mysql" className="text-[#4479A1]" />,
      <SiVercel key="vercel" className="text-[#FFFFFF]" />,
      <SiRailway key="railway" className="text-[#FFFFFF]" />,
    ],
  },
  {
    id: 5,
    name: "Nova Cloud",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis. Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.",
    image: Novacloud,
    githubLink: "https://github.com/Pachared42/Nova",
    stackIcons: [
      <SiReact key="react" className="text-[#61DAFB]" />,
      <SiJavascript key="framer" className="text-[#f7df1e]" />,
      <SiTailwindcss key="tailwind" className="text-[#38BDF8]" />,
      <FaGolang key="framer" className="text-[#00ADD8]" />,
    ],
  },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus, inventore deserunt laudantium debitis saepe eius magnam sunt, minus facilis omnis. Debitis, ducimus. Pariatur aut magni consequuntur eveniet ipsum tenetur.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  //   stackIcons: [
  //     <SiReact key="react" className="text-[#61DAFB]" />,
  //     <SiTailwindcss key="tailwind" className="text-[#38BDF8]" />,
  //     <SiFramer key="framer" className="text-[#0055FF]" />,
  //   ],
  // },
];

export const ABOUT = [
  "ผมเป็นนักศึกษาระดับปริญญาตรี จากมหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี มีความหลงใหลในการออกแบบและพัฒนาเว็บไซต์ โดยเฉพาะในสายงาน Front-End Developer พร้อมให้ความสำคัญกับการสร้างสรรค์ผลงานที่สวยงามและตอบโจทย์ผู้ใช้งานอยู่เสมอ",
  "ด้วยความมุ่งมั่นในการเรียนรู้และพัฒนาทักษะอย่างต่อเนื่อง ผมตั้งเป้าหมายในการเติบโตสู่การเป็น Lead Front-End Developer โดยเน้นการออกแบบซอฟต์แวร์ที่มีคุณภาพ และประสบการณ์ผู้ใช้ที่ดีเยี่ยมควบคู่กันไป",
];

export const SKILLS = [
  {
    skill1: (
      <SiReact className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#61DAFB]" />
    ),
    name: "React",
    experience: "",
  },
  // {
  //   skill2: (
  //     <SiNextdotjs className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
  //   ),
  //   name: "Next.js",
  //   experience: "",
  // },
  {
    skill3: (
      <SiVite className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#646CFF]" />
    ),
    name: "Vite",
    experience: "",
  },
  {
    skill4: (
      <SiPhp className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#8892BF]" />
    ),
    name: "PHP",
    experience: "",
  },
  {
    skill5: (
      <RiTailwindCssFill className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#38BDF8]" />
    ),
    name: "Tailwind CSS",
    experience: "",
  },
  {
    skill6: (
      <FaHtml5 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#E34F26]" />
    ),
    name: "HTML",
    experience: "",
  },
  {
    skill7: (
      <FaCss3Alt className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#264DE4]" />
    ),
    name: "CSS",
    experience: "",
  },
  {
    skill8: (
      <SiJavascript className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F7DF1E]" />
    ),
    name: "JavaScript",
    experience: "",
  },
  // {
  //   skill9: (
  //     <SiTypescript className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3178C6]" />
  //   ),
  //   name: "Typescript",
  //   experience: "",
  // },
  {
    skill10: (
      <FaGolang className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#00ADD8]" />
    ),
    name: "GoLang",
    experience: "",
  },
  {
    skill11: (
      <SiMui className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007FFF]" />
    ),
    name: "MUI",
    experience: "",
  },
];

export const TOOLS = [
  {
    tool1: (
      <VscVscodeInsiders className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007ACC]" />
    ),
    name: "Visual Studio Code",
    experience: "",
  },
  {
    tool2: (
      <IoLogoGithub className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#586069]" />
    ),
    name: "GitHub",
    experience: "",
  },
  {
    tool3: (
      <SiXampp className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FF7A00]" />
    ),
    name: "XAMPP",
    experience: "",
  },
  {
    tool4: (
      <SiMamp className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#7D7D7D]" />
    ),
    name: "MAMP",
    experience: "",
  },
  {
    tool5: (
      <SiAdobeillustrator className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FF9A00]" />
    ),
    name: "Adobe Illustrator",
    experience: "",
  },
  {
    tool6: (
      <SiAdobephotoshop className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#31A8FF]" />
    ),
    name: "Adobe Photoshop",
    experience: "",
  },
  {
    tool7: (
      <SiWarp className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FFFFFF]" />
    ),
    name: "Warp",
    experience: "",
  },
  {
    tool8: (
      <SiOpenai className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FFFFFF]" />
    ),
    name: "OpenAI",
    experience: "",
  },
  {
    tool9: (
      <SiGithubcopilot className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#4CB0FB]" />
    ),
    name: "GitHub Copilot",
    experience: "",
  },
  // {
  //   tool10: (
  //     <SiBruno className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#2E3A59]" />
  //   ),
  //   name: "SiBruno",
  //   experience: "",
  // },
  {
    tool11: (
      <SiPostman className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FF6C37]" />
    ),
    name: "SiPostman",
    experience: "",
  },
  {
    tool12: (
      <SiCanva className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#01C3CC]" />
    ),
    name: "Canva",
    experience: "",
  },
  // {
  //   tool13: (
  //     <SiDocker className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#2496ED]" />
  //   ),
  //   name: "Docker",
  //   experience: "",
  // },
  {
    tool14: (
      <SiGit className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#F1502F]" />
    ),
    name: "Git",
    experience: "",
  },
  // {
  //   tool15: (
  //     <SiN8N className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#EA4B71]" />
  //   ),
  //   name: "n8n",
  //   experience: "",
  // },
];

export const DATABASES = [
  {
    database1: (
      <SiMysql className="text-7xl sm:text-7xl md:text-[80px] lg:text-[100px] xl:text-[115px] text-[#4479A1]" />
    ),
    name: "MySQL",
    experience: "",
  },
  // {
  //   database2: (
  //     <SiMongodb className="text-6xl sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[115px] text-[#4DB33D]" />
  //   ),
  //   name: "MongoDB",
  //   experience: "",
  // },
  // {
  //   database3: (
  //     <BiLogoPostgresql className="text-6xl sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[115px] text-[#336791]" />
  //   ),
  //   name: "PostgreSQL",
  //   experience: "",
  // },
];

export const CLOUDS = [
  {
    cloud1: (
      <SiVercel className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FFFFFF]" />
    ),
    name: "Vercel",
    experience: "",
  },
  {
    cloud2: (
      <SiRailway className="text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] xl:text-[85px] text-[#FFFFFF]" />
    ),
    name: "Railway",
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
    institution: "[ THAMMACHOTESUKSALAI SCHOOL ]",
    duration: "May 2558 - May 2561",
    description:
      "เรียนสายทั่วไป โดยมีความสนใจด้านการออกแบบกราฟิกและเริ่มต้นฝึกฝนพื้นฐานด้านการออกแบบตั้งแต่ช่วงมัธยม",
  },
  {
    degree: "ประกาศนียบัตรวิชาชีพชั้นสูง สาขาคอมพิวเตอร์กราฟิก",
    institution: "[ Saraburi Vocational College ]",
    duration: "May 2561 - May 2563",
    description:
      "ศึกษาเกี่ยวกับการออกแบบกราฟิกด้วยโปรแกรมคอมพิวเตอร์ ฝึกปฏิบัติจริงทั้งด้านการออกแบบสื่อสิ่งพิมพ์ ดิจิทัลอาร์ต และพื้นฐานการใช้เครื่องมือกราฟิกอย่างมืออาชีพ เพื่อเตรียมความพร้อมสู่สายงานสร้างสรรค์",
  },
  {
    degree: "ปริญญาตรี สาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล",
    institution:
      "[ Rajamangala University of Technology Suvarnabhumi, Suphanburi Campus ]",
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
