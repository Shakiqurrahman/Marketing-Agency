import pilar1 from '../assets/optimizing ads.jpg'
import pilar2 from '../assets/analyze data.jpg'
import pilar3 from '../assets/media promotion.jpg'
import { service1,service2,service3,service4,service5,service6 } from '../assets';
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "result",
      title: "About",
    },
    {
      id: "about",
      title: "About",
    },
  ];
  
  const pilars = [
    {
      icon: pilar1,
      title: "We Optimize Your Ads",
      description: "We're turning every ad dollar into your loudest cheerleader."
    },
    {
      icon: pilar2,
      title: "We analyze data",
      description: "We collect and analyze data from campaigns to gain insights into their performance, ensuring your ROI."
    },
    {
      icon: pilar3,
      title: "We have media promotion",
      description: "We use paid and free channels, like social media and creating content, to make more people aware of your business"
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Paid Advertising",
      icon:service1
    },
    {
      name: "Content Creation",
      icon:service2
    },
    {
      name: "Website Development & SEO",
      icon:service3
    },
    {
      name: "Social Media Management",
      icon:service4
    },
    {
      name: "Email Marketing",
      icon:service5
    },
    {
      name: "Graphic Brand Design",
      icon:service6
    },
  ];
  
  export { pilars, experiences, testimonials, projects };