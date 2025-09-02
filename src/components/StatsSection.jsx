"use client";
import { useEffect, useState, useRef } from "react"; // Import useRef
import { TrendingUp, Award, Users, Zap } from "lucide-react";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    products: 0,
    certificate: 0,
  });

  // Use a ref to store whether the animation has already run
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animateCounter = (target, key) => {
      let current = 0;
      const duration = 2000; // Animation duration in ms
      const startTime = performance.now();

      const updateCounter = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1); // Clamp progress between 0 and 1
        current = target * progress;

        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));

        if (progress < 1) {
          requestAnimationFrame(updateCounter); // Use requestAnimationFrame for smoother animation
        }
      };
      requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the section is intersecting and if the animation hasn't run yet
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true; // Mark as animated
            // Start animations with a slight delay
            setTimeout(() => animateCounter(15, "years"), 100);
            setTimeout(() => animateCounter(844, "projects"), 300);
            setTimeout(() => animateCounter(36, "products"), 500);
            setTimeout(() => animateCounter(7, "certificate"), 700);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []); // Empty dependency array means this effect runs once on mount

  const stats = [
    {
      icon: TrendingUp,
      number: counters.years,
      suffix: "+",
      label: "Years of Excellence",
      description: "Industry Leadership",
      gradient: "linear-gradient(to bottom right, #2563eb, #1e40af)", // blue
      delay: "0s",
    },
    {
      icon: Award,
      number: counters.projects,
      suffix: "+",
      label: "Projects Completed",
      description: "Successful Deliveries",
      gradient: "linear-gradient(to bottom right, #f97316, #ca8a04)", // orange-yellow
      delay: "0.2s",
    },
    {
      icon: Users,
      number: counters.products,
      suffix: "+",
      label: "Diverse Product Range",
      description: "Solutions for Every Need",
      gradient: "linear-gradient(to bottom right, #3b82f6, #1d4ed8)", // blue
      delay: "0.4s",
    },
   
  ];

  return (
    <section
      id="stats-section"
      className="py-12 md:py-24 px-8  overflow-hidden bg-[#262626] "
       style={{
        backgroundImage: "url('/assets/product-category-bg.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        
      }}
    >
      <div className="container max-w-7xl mx-auto relative z-10 border-t border-t-gray-300 border-b border-b-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="relative group rounded-2xl   animate-[slide-up_0.9s_ease-out_forwards]"
                style={{ animationDelay: stat.delay }}
              >
                {/* Card */}
                <div
                  className="rounded-2xl  p-8 relative overflow-hidden  transition-all duration-500 "
                 
                >
                  {/* Icon */}
                  {/* <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110 bg-[#DC2621]"
                    style={{
                      color: "#fff",
                    }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div> */}

                  {/* Number + Labels */}
                  <div className="mb-4">
                    <div className="text-4xl md:text-8xl font-semibold text-[#d9dee8] mb-1 transition-transform duration-300 group-hover:scale-105 tracking-wider">
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <div className="text-xl font-semibold text-white mb-1">
                      {stat.label}
                    </div>
                    {/* <div className="text-sm text-white">{stat.description}</div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;