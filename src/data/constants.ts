import {
  Brain,
  Music,
  Briefcase,
  Globe,
  Code,
  Video,
  Rocket,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Events", to: "events" },
  { label: "Rules", to: "rules" },
  { label: "Committee", to: "committee" },
  { label: "Contact", to: "footer" },
];

export const EVENTS = [
  {
    id: 1,
    name: "TECH-KNOW",
    subtitle: "IT Quiz",
    icon: Brain,
    team: "2 per team",
    rounds: "3 Rounds",
    fee: "₹300/team",
    description: "Put your tech & general knowledge to the ultimate test across 3 electrifying rounds.",
    coordinators: [
      { name: "Amurth Kumar", phone: "8722622761" },
      { name: "Sahana", phone: "8197235527" },
    ],
  },
  {
    id: 2,
    name: "RHYTHM",
    subtitle: "Cultural Dance",
    icon: Music,
    team: "8-10 per team",
    rounds: "Indian Folk",
    fee: "₹500/team",
    description: "Celebrate Indian folk dance tradition. 5+1 minutes to mesmerize the audience.",
    coordinators: [
      { name: "Urvi", phone: "9611292993" },
      { name: "Samyagda", phone: "7259600418" },
    ],
  },
  {
    id: 3,
    name: "TECH-TIX",
    subtitle: "IT Manager",
    icon: Briefcase,
    team: "1 participant",
    rounds: "3 Rounds",
    fee: "₹150",
    description: "Showcase your managerial prowess across 3 rounds. Carry updated resumes.",
    coordinators: [
      { name: "Sushmitha", phone: "6363589707" },
      { name: "Varshith KS", phone: "7624925507" },
    ],
  },
  {
    id: 4,
    name: "PIXEL-CRAFT",
    subtitle: "Web Designing",
    icon: Globe,
    team: "2 per team",
    rounds: "2 Rounds",
    fee: "₹300/team",
    description: "Design stunning websites using HTML, CSS & JavaScript in a timed challenge.",
    coordinators: [
      { name: "Neha Hegde", phone: "9632614493" },
      { name: "Shivakumar", phone: "9481290878" },
    ],
  },
  {
    id: 5,
    name: "BYTE-BATTLE",
    subtitle: "Coding",
    icon: Code,
    team: "2 per team",
    rounds: "3 Rounds",
    fee: "₹300/team",
    description: "Battle it out in C, Java, or Python across 3 intense coding rounds.",
    coordinators: [
      { name: "Punith", phone: "8088076080" },
      { name: "Kavya", phone: "8762096367" },
    ],
  },
  {
    id: 6,
    name: "CINE-SCOPE",
    subtitle: "Videography",
    icon: Video,
    team: "1 participant",
    rounds: "3 Rounds",
    fee: "₹150",
    description: "Shoot cinematic content on-site. Bring your own equipment and creativity.",
    coordinators: [
      { name: "Samith", phone: "9480762153" },
      { name: "Sagar", phone: "6366660598" },
    ],
  },
  {
    id: 7,
    name: "TECH-REVEAL",
    subtitle: "Product Launch",
    icon: Rocket,
    team: "3 per team",
    rounds: "1 Round",
    fee: "₹300/team",
    description: "Present and launch your innovative product idea. Bring laptops for presentation.",
    coordinators: [
      { name: "Nishitha", phone: "9353899056" },
      { name: "Adhitya", phone: "8320019796" },
    ],
  },
];

export const RULES = [
  "Open to all engineering and degree college students.",
  "Maximum 21 participants per college team.",
  "Must participate in all events for overall championship eligibility.",
  "Maximum 2 teams per college allowed.",
  "No event overlap — a participant cannot be in two events simultaneously.",
  "College ID card and permission letter are mandatory.",
  "Judge's decision is final and binding.",
];

export const REGISTRATION_DEADLINE = "25th February 2026";

export const STAFF_COORDINATORS = [
  { name: "Mr. Sagar Rai" },
  { name: "Ms. Sayed Ansifa" },
  { name: "Mr. Sebastian PJ" },
];

export const STUDENT_COORDINATORS = [
  { name: "Mr. Nishith Kumar Jain", phone: "+91 8431050905" },
  { name: "Ms. Rashmi D C", phone: "+91 9483538319" },
];

export const CONTACT_EMAIL = "techotsav26@gmail.com";
