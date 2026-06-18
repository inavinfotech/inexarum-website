import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Award, Clock } from "lucide-react";

const STATS = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    value: 10,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: <Users className="w-5 h-5" />,
    value: 7,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    value: 3,
    suffix: "+",
    label: "Years Experience",
  },
];

const CountUp = ({ target, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-10 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon - Smaller and neutral color */}
              <div className="text-[#2a498c] mb-2">
                {stat.icon}
              </div>

              {/* Number - Sleek, dark color */}
              <div className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label - Smaller text */}
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
