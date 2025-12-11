import React from 'react';
import { Stat, Experience, Achievement, Article, TravelDestination, Hobby, SocialLink } from './types';

export const PROFILE = {
  name: "Jayant Jaiswal",
  role: "Engineering Manager at Zeta",
  location: "San Francisco, CA | Building scalable systems",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqH-1VHIkl8V4bEXiVcgHrr5zjIx7tw9WSbD98vUk9ybMY-5-gOo_X7g5HWKVJz26ZuoA9E1soaHwQy8X8QZn0b_YcOzCgNtU1eMKSR2RoyamUN0UjVZlIRpxrMfWOH8EEMDCpQ77Vfe2_QnopSECpEHUHSWXH6S3QdQ5pv6S22JDiuYzkz8gIsr2HSLkIIfNIyFSwIaZ5oYLcJ_DHMrzLzrXXiBFEnc8JU4u8l02akF3bpjSKJL1PvW-KvWVY3h3tWL5b-Y0rDcPy"
};

export const STATS: Stat[] = [
  { value: "9.5+", label: "Years Exp" },
  { value: "50+", label: "Projects" },
  { value: "$40M", label: "Rev Impact" },
  { value: "200%", label: "Growth" }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Zeta",
    role: "Engineering Manager",
    period: "July 2025 - Present",
    description: "Leading engineering squads to scale Zeta's payment stack, driving reliability and delivery velocity while mentoring a multidisciplinary team of engineers and product leads.",
    icon: "storefront",
    metrics: [
      { label: "Transactions", value: "5M+/day", icon: "trending_up" },
      { label: "Team Growth", value: "6 → 15 Eng", icon: "groups" },
      { label: "Uptime", value: "99.99%", icon: "rocket_launch" }
    ]
  },
  {
    company: "Zeta",
    role: "Lead Software Engineer (Mobile)",
    period: "July 2023 - June 2025",
    description: "Owned the mobile engineering roadmap, launching mission-critical payment flows and mentoring senior ICs across iOS and Android squads.",
    icon: "smartphone",
    tags: ["Mobile Platforms", "Payments", "Team Leadership"]
  },
  {
    company: "Zeta",
    role: "Senior Software Engineer (iOS)",
    period: "October 2021 - June 2023",
    description: "Built and optimized Zeta's iOS payments and card management experiences with focus on latency, reliability, and PCI compliance.",
    icon: "apple"
  },
  {
    company: "Grab",
    role: "Senior Software Engineer (iOS)",
    period: "July 2020 - October 2021",
    description: "Shipped high-scale consumer features for Grab's super-app, improving checkout conversion and app performance across SEA markets.",
    icon: "commute"
  },
  {
    company: "Grab",
    role: "Software Engineer (iOS)",
    period: "July 2019 - June 2020",
    description: "Contributed to Grab's iOS ride-hailing and payments modules, focusing on UI performance, offline resilience, and analytics.",
    icon: "directions_car"
  },
  {
    company: "UrbanCompany",
    role: "SDE2 (iOS)",
    period: "April 2018 - June 2019",
    description: "Led end-to-end delivery of iOS features for on-demand services, improving booking funnels and real-time tracking reliability.",
    icon: "handyman"
  },
  {
    company: "Roposo",
    role: "SDE1 (iOS)",
    period: "July 2016 - March 2018",
    description: "Built core iOS experiences for a fast-growing social video platform, focusing on media pipelines and growth loops.",
    icon: "camera_alt"
  }
];

export const HALL_OF_FAME: Achievement[] = [
  {
    title: "Keynote: Scaling Systems at PyCon",
    subtitle: "2023 • New York",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh33-H-SJBsZc-l8SUAMa2i47v8bBW1X4UR9Z7JGs5_j_QBdtRozWlQNCAUe-AxM_01sC9D0cW8LW-AUZS7FwIMR-r1UOpXPagLu1pMMYurbqs_o2O65jYLm_reNfpqCLFxwp9koJe55dEW5tZN-lSqqgt-IRtKmlQ1S4DbyNHEM2f8f6UnuIE0AJ5ZYb-J81zJIkMHf3GN5SLdriGGz5chV3NY76m96esOopb1WeufTj_mBt6KfAz7wu7VaRCtCBNki806G6fvP_p",
    isVideo: true
  },
  {
    title: "Best Engineering Leader",
    subtitle: "Tech Excellence Awards 2022",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBluypX2H0Jx_Epgo-gzQ7IKXTfEt2fTJegAWO5QR9L60J2sbBwuJ_Zcc2b2blD8Z8tqWXwcfttN2xLdqUlIaMB3EmWCH0oSLnHcqenezCh7Ulhr_0lqOlnlhdaoWu0_cwgqXNgqx7-fbOQW_HbcT2QnfaP4xZFHlW4EUDn8vQ0irdqzIfwxQXkcd4YwOttFmiafLZd-UudDGf3-eTIP3pJFvIjUBY21P0Cwqvp4DD7Ij6OiY6FVOJzIWYc1Ik8p_75tBkEVozOk5mx",
    isVideo: false
  }
];

export const WRITING: Article[] = [
  {
    title: "The Future of AI in SaaS Architecture",
    description: "Exploring how Large Language Models are reshaping the way we design microservices and data pipelines in 2024.",
    category: "Featured",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8dx9Rqz7Serlo-VCHMHv0t3x0M7oMXjpjID6--ZSzvqNNL0HrNGlwPiZowxwa4mxlCTlbDpD1JfPgeDg3FapcfyQ_VwxpwF4JwX7gr93aj4_Ah_5t2oR6JNwy1H71vagalhgSgLtlUPcMfApnxc-OdMvD-AtmlzUb6uOLEb-8G3CsyflFoD2uxWVj4EHISLR4jKtWT9l6jDPyDrA4HFqil813xd6BiZj8CG41GOS1w6INKfXG1rzot4KK2549wOPgYeRp2_RjRSAB",
    featured: true
  },
  {
    title: "Building High-Performance Remote Teams",
    category: "Engineering",
    date: "Sep 12, 2023",
    featured: false
  },
  {
    title: "Migrating from REST to GraphQL",
    category: "Tutorial",
    date: "Aug 05, 2023",
    featured: false
  },
  {
    title: "Why I chose Rust for my next project",
    category: "Opinion",
    date: "Jul 20, 2023",
    featured: false
  }
];

export const TRAVEL_DESTINATIONS: TravelDestination[] = [
  {
    name: "Swiss Alps",
    season: "Summer 2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPKqVf9leC8rdfkGSxQFAFCUH1OJhD8xDcZ-_ckY8kncIjzwIrtH-kN070aSMa5tOSUU48Nqufo6M7gMtiyiSDYXNpQFOQe6iqk-MbZFGJuqGOf3-NBBSKvjq_lvqpEAtVTPx6zstxJfWOxJqX-tfbpi48HYLhAHq1A_GalwEOLxYBX2l2fhRESz6op-zjCmeJkhC2S2lDdmMqFSulLkxVooR3oG-PTFhSVeRvvcA1WJpQnHj0jPe_RWkbn7R10Dj3IdLJKWPjF9pp",
    large: true
  },
  {
    name: "Kyoto, Japan",
    season: "Cherry Blossom Season",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRTCnUQeL74EkPOzn3hf0ofkezw4jBclbzEWKjgqZgF-A42MHXH8kEaY4QlgWfnrm7K8bKFbcrZlsINs7gPGs7xP-BY1Bo86MM5BBi3BauWEZERK1uewo8Sp5qyazXID3VAKTTH9aO5zgMJftn4OQ4878jhJEp6TT3VIUHG8mvyeVH10aBzzW-QeJnygViR5CLM9LfHZKBU4WgrGXUWFZkHTqMOZpEisvSxlpoYrZA5u3heXfzFEBn-XsygG3h7OIlSy4qFRqZEEki",
    large: true
  },
  {
    name: "Iceland",
    season: "Northern Lights Hunt",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb8H5RYcBFGdNQim8nEaikNdKqOa5frcfLEf3-RjhwCVh4rITdR2QXHVhwt-TkJCO_HvBwCUg16e1XOQs3ccVUUajrLgEUEm51Rx-r4MqVpEFG3cnlNJBx9kENt-Fh38zOl9O0N0RnJyxallt6-JIAGJz6ekYJwOXKCVsWSmW333h4TnpU1d6kVml_ojwlIssOAoPFB7vDHnX6aNPthI3G4kYdHGWkQvIp-iEf40iGP-yaOg5h-qwJAWIvYqb3N5bDhAY60cNHMBxU",
    large: false
  }
];

export const FLAGS = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇮🇹", name: "Italy" },
  { flag: "🇧🇷", name: "Brazil" },
  { flag: "🇮🇳", name: "India" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇹🇭", name: "Thailand" }
];

export const HOBBIES: Hobby[] = [
  {
    name: "Acoustic Sessions",
    type: "video",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0ePaQgPTSpoW4k7wH5KJJsH8hSUoqJlVL3Dmz2HmC7miUk6co0v7H2UFXaui2iPXdVyurM6zTBcRWMYaeH2C57as2U-l2hSAUSAOS-8G7UuvF1Mo4u0JOs-vgT1rzXz-S-qF3VcwKyn1aKs3Jal0ts9zW3z2bogdn-stN0L1uFt1twgLgWybUGbm71d9qdIENKYOrH01pvCNok_oGNu6qgSO0ByCWPZi9MqxNUHsoXnXL6QrW2sn1LrmTKbE9S-Gr34oXEc8cfwV",
    duration: "3:45"
  },
  {
    name: "Photography",
    description: "Capturing urban landscapes and street life on weekends.",
    type: "card",
    icon: "photo_camera",
    colorClass: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
  },
  {
    name: "Culinary Arts",
    description: "Exploring authentic Italian pasta recipes.",
    type: "card",
    icon: "restaurant",
    colorClass: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
  },
  {
    name: "Salsa Night Performance",
    type: "video",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAUTwa-oIrqCvp2b7iuiRG-icCqHwcCluJR1RCLWbk52Niy8r_Iq52oVXabMaPVZa82-AifyvY6qUfYn3QyJFnvytRsqzlVQBSTOR-A9NgREQ-aN_vSlXmKU1ljBroy3rp9mqTO9gJiIUCasUBhAplMh492YN6Dlr7fa9KqUIot_wfllErS2CpUTDDonX8T-VVFB4L3NmbBFmupwkyIpz28iFz4CN1NlNZwPdN0JGJV-7osSAvdNVzjOAEQzleZhf7ad9BeHHR62cn",
    duration: "2:10"
  },
  {
    name: "Sci-Fi & Philosophy",
    description: "Diving into Asimov's Foundation series and exploring Stoicism.",
    type: "card",
    icon: "auto_stories",
    colorClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    status: "Currently Reading"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "#",
    colorClass: "bg-[#0077b5]",
    svg: (
       <span className="font-bold text-lg">in</span>
    )
  },
  {
    name: "Twitter",
    url: "#",
    colorClass: "bg-[#1DA1F2]",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
    )
  },
  {
    name: "Email Me",
    url: "#",
    colorClass: "bg-gray-800",
    icon: "mail"
  }
];
