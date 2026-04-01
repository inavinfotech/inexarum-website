import {
  Globe,
  Code,
  MonitorCog,
  Smartphone,
  Cpu,
  TrendingUp,
  Workflow,
  Brain,
} from "lucide-react";

export const SERVICES = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Custom websites designed to enhance user engagement, boost performance, and represent your brand with modern, responsive, and visually appealing design.",
    icon: <Globe className="w-8 h-8" />,
    accentColor: "from-[#2a498c] to-[#8c97e7]",
  },
  {
    id: 2,
    title: "Web App Development",
    description:
      "Scalable and secure web applications built with advanced technologies to deliver seamless functionality, smooth user experience, and high performance.",
    icon: <Code className="w-8 h-8" />,
    accentColor: "from-[#8c97e7] to-[#a4afff]",
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "Tailor-made software solutions crafted to simplify business processes, improve efficiency, and support long-term growth with reliable and secure systems.",
    icon: <MonitorCog className="w-8 h-8" />,
    accentColor: "from-[#2a498c] to-[#a4afff]",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Intuitive and high-performing mobile applications designed for Android and iOS, ensuring seamless usability, scalability, and engaging user experiences.",
    icon: <Smartphone className="w-8 h-8" />,
    accentColor: "from-[#8c97e7] to-[#2a498c]",
  },
  {
    id: 5,
    title: "IoT Solutions",
    description:
      "Smart IoT solutions that connect devices, automate operations, and provide real-time insights to enhance productivity and operational efficiency.",
    icon: <Cpu className="w-8 h-8" />,
    accentColor: "from-[#a4afff] to-[#8c97e7]",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies that increase online visibility, generate leads, and strengthen your brand presence across digital platforms.",
    icon: <TrendingUp className="w-8 h-8" />,
    accentColor: "from-[#2a498c] to-[#8c97e7]",
  },
  {
    id: 7,
    title: "Business Automation",
    description:
      "Intelligent automation solutions that streamline workflows, reduce manual effort, and improve accuracy for smarter and faster business operations.",
    icon: <Workflow className="w-8 h-8" />,
    accentColor: "from-[#8c97e7] to-[#a4afff]",
  },
  {
    id: 8,
    title: "AI Solutions",
    description:
      "Advanced AI-powered solutions including chatbots, automation, and analytics to transform businesses with intelligent decision-making and innovation.",
    icon: <Brain className="w-8 h-8" />,
    accentColor: "from-[#a4afff] to-[#2a498c]",
  },
];
