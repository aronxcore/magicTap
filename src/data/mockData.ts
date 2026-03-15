export interface Person {
  id: string;
  name: string;
  rank: string;
  position?: string;
  photo: string;
  company?: string;
  description?: string;
  link?: string;
  grade?: number;
}

export interface AlbumEvent {
  id: string;
  title: string;
  photoCount: number;
  thumbnail: string;
  photos: string[];
}

export interface CompanyItem {
  id: string;
  name: string;
  logo: string;
  image: string;
  color: string;
}

export interface RegimentalGroup {
  title: string;
  officers: Person[];
}

const defaultPersonImage = "/images/fireman.png";
const defaultCompanyLogo = "/images/companyLogo/logo.png";

export const cadetProfile = {
  name: "Danilo Jeramos",
  rank: "Fire Officer 1",
  subtitle: "Philippine Public Safety College | National Fire Training Institute",
  coverPhoto:
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80",
  portrait: defaultPersonImage,
  info: {
    foRank: "FO1",
    class: "Mandasig | 2025-136",
    region: "Region VI",
    campus: "NFTI Bacolod Campus",
    company: "Alpha Company",
    designation: "Trainee",
  },
};

export const classDetails = {
  className: "Class Mandasig | 2025-136",
  campus: "NFTI Bacolod Campus",
  region: "Region VI",
  description:
    "Class Mandasig is the 136th batch of the National Fire Training Institute. This class embodies the spirit of excellence, discipline, and service to the Filipino people through fire prevention and suppression.",
  logo: "M",
  coverPhoto:
    "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1200&q=80",
};

export const companyOfficers: Person[] = [
  {
    id: "co1",
    name: "Marco Santos",
    rank: "SFO",
    position: "Company President",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "co2",
    name: "Elena Cruz",
    rank: "FO1",
    position: "Company Vice President",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "co3",
    name: "Diego Fernandez",
    rank: "FO1",
    position: "Company Secretary",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "co4",
    name: "Maria Gonzales",
    rank: "FO1",
    position: "Company Treasurer",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "co5",
    name: "Antonio Reyes",
    rank: "FO1",
    position: "Company Auditor",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "co6",
    name: "Patricia Lim",
    rank: "FO2",
    position: "Company PRO",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "co7",
    name: "Carlos Aquino",
    rank: "FO1",
    position: "Company Historian",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
];

export const companyRegimentalOfficers: Person[] = [
  {
    id: "cro1",
    name: "Roberto Villanueva",
    rank: "FO1",
    position: "Company Commander",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "cro2",
    name: "Ana Mendoza",
    rank: "FO1",
    position: "Guidon Bearer",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "cro3",
    name: "Jose Garcia",
    rank: "FO1",
    position: "Admin",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "cro4",
    name: "Luz Bautista",
    rank: "FO2",
    position: "Ex-O",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "cro5",
    name: "Ricardo Torres",
    rank: "FO1",
    position: "1st Platoon Leader",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
  {
    id: "cro6",
    name: "Carmen Dela Cruz",
    rank: "FO1",
    position: "2nd Platoon Leader",
    photo: defaultPersonImage,
    company: "Alpha Company",
  },
];

const traineeNames = [
  "Ana Rivera",
  "Carlos Mendoza",
  "Isabella Torres",
  "Rafael Aquino",
  "Sofia Castillo",
  "Miguel Ramos",
  "Beatrice Navarro",
  "Fernando Cruz",
  "Daniela Reyes",
  "Andres Lim",
  "Rosa Santos",
  "Enrique Bautista",
  "Camille Tan",
  "Javier Gonzales",
  "Marie Dela Cruz",
  "Paolo Garcia",
  "Christine Villanueva",
  "Mark Dizon",
  "Angela Aquino",
  "Rico Fernandez",
  "Katrina Lim",
  "Dennis Santos",
  "Gloria Reyes",
  "Vincent Cruz",
  "Patricia Mendoza",
  "Roberto Castillo",
  "Liza Torres",
  "Francis Ramos",
  "Elaine Navarro",
  "Gabriel Tan",
  "Melissa Garcia",
  "Bryan Gonzales",
  "Joyce Bautista",
  "Kenneth Dizon",
  "Aileen Rivera",
  "Raymond Aquino",
  "Diana Santos",
  "Joel Cruz",
  "Marian Fernandez",
  "Edward Lim",
  "Nicole Reyes",
  "Oscar Torres",
  "Grace Mendoza",
  "Larry Castillo",
  "Helen Ramos",
  "Peter Navarro",
  "Susan Tan",
  "George Garcia",
  "Betty Gonzales",
  "Fred Bautista",
];

export const companyTrainees: Person[] = traineeNames.map((name, index) => ({
  id: `t${index + 1}`,
  name,
  rank: index % 3 === 0 ? "FO1" : "FO2",
  photo: defaultPersonImage,
  company: "Alpha Company",
}));

export const courseCoordinators: Person[] = [
  {
    id: "c1",
    name: "Marcos Dizon",
    rank: "SINSF",
    position: "Lead Course Coordinator",
    photo: defaultPersonImage,
  },
  {
    id: "c2",
    name: "Carla Vega",
    rank: "INSPI",
    position: "Fire Technology",
    photo: defaultPersonImage,
  },
  {
    id: "c3",
    name: "Manuel Reyes",
    rank: "SINSF",
    position: "Fire Suppression",
    photo: defaultPersonImage,
  },
  {
    id: "c4",
    name: "Teresa Santos",
    rank: "INSPI",
    position: "Fire Prevention",
    photo: defaultPersonImage,
  },
  {
    id: "c5",
    name: "Ricardo Lim",
    rank: "SINSF",
    position: "HAZMAT",
    photo: defaultPersonImage,
  },
  {
    id: "c6",
    name: "Gloria Cruz",
    rank: "INSPI",
    position: "Rescue Operations",
    photo: defaultPersonImage,
  },
  {
    id: "c7",
    name: "Pedro Aquino",
    rank: "SINSF",
    position: "Physical Training",
    photo: defaultPersonImage,
  },
  {
    id: "c8",
    name: "Maria Fernandez",
    rank: "INSPI",
    position: "Fire Investigation",
    photo: defaultPersonImage,
  },
  {
    id: "c9",
    name: "Jose Torres",
    rank: "SINSF",
    position: "Emergency Medical",
    photo: defaultPersonImage,
  },
  {
    id: "c10",
    name: "Ana Bautista",
    rank: "INSPI",
    position: "Leadership",
    photo: defaultPersonImage,
  },
];

export const guestSpeakers = {
  guestOfHonor: {
    name: "Director Gen. Antonio Reyes",
    description: "Director of Operations & Development",
    photo: defaultPersonImage,
    link: "https://www.bfp.gov.ph",
  },
  speaker: {
    name: "Chief Supt. Maria Santos",
    description: "Regional Fire Director\nClass Mandasig Graduation Ceremony",
    photo: defaultPersonImage,
    link: "https://www.bfp.gov.ph",
  },
};

export const nftiDirector: Person = {
  id: "dir1",
  name: "CSUPT Lino V Escobar",
  rank: "",
  position: "NFTI Director",
  photo: defaultPersonImage,
  description:
    "Chief Superintendent and Director of the National Fire Training Institute",
};

export const topnotchers: Person[] = [
  {
    id: "top1",
    name: "Elena Cruz",
    rank: "FO1",
    company: "Alpha Company",
    grade: 96.5,
    photo: defaultPersonImage,
  },
  {
    id: "top2",
    name: "Marco Santos",
    rank: "SFO",
    company: "Bravo Company",
    grade: 95.2,
    photo: defaultPersonImage,
  },
  {
    id: "top3",
    name: "Diego Fernandez",
    rank: "FO1",
    company: "Charlie Company",
    grade: 94.8,
    photo: defaultPersonImage,
  },
  {
    id: "top4",
    name: "Maria Gonzales",
    rank: "FO2",
    company: "Delta Company",
    grade: 93.7,
    photo: defaultPersonImage,
  },
  {
    id: "top5",
    name: "Antonio Reyes",
    rank: "FO1",
    company: "Echo Company",
    grade: 92.4,
    photo: defaultPersonImage,
  },
  {
    id: "top6",
    name: "Patricia Lim",
    rank: "FO2",
    company: "Foxtrot Company",
    grade: 91.9,
    photo: defaultPersonImage,
  },
  {
    id: "top7",
    name: "Carlos Aquino",
    rank: "FO1",
    company: "Golf Company",
    grade: 91.3,
    photo: defaultPersonImage,
  },
  {
    id: "top8",
    name: "Rosa Mendoza",
    rank: "FO2",
    company: "Hawk Company",
    grade: 90.8,
    photo: defaultPersonImage,
  },
  {
    id: "top9",
    name: "Juan dela Cruz",
    rank: "FO1",
    company: "India Company",
    grade: 90.1,
    photo: defaultPersonImage,
  },
  {
    id: "top10",
    name: "Ana Villanueva",
    rank: "FO2",
    company: "Juliet Company",
    grade: 89.6,
    photo: defaultPersonImage,
  },
];

export const albumEvents: AlbumEvent[] = [
  {
    id: "a1",
    title: "Training Drills",
    photoCount: 24,
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    photos: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    ],
  },
  {
    id: "a2",
    title: "Rescue Operations",
    photoCount: 18,
    thumbnail:
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&q=80",
    photos: [
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=80",
    ],
  },
  {
    id: "a3",
    title: "Team Building",
    photoCount: 32,
    thumbnail:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
    photos: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    ],
  },
  {
    id: "a4",
    title: "Graduation Ceremony",
    photoCount: 45,
    thumbnail:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80",
    ],
  },
];

export const companies: CompanyItem[] = [
  {
    id: "cmp1",
    name: "Alpha Company",
    logo: "α",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp2",
    name: "Bravo Company",
    logo: "β",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp3",
    name: "Charlie Company",
    logo: "γ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp4",
    name: "Delta Company",
    logo: "δ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp5",
    name: "Echo Company",
    logo: "ε",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp6",
    name: "Foxtrot Company",
    logo: "ζ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp7",
    name: "Golf Company",
    logo: "η",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp8",
    name: "Hawk Company",
    logo: "θ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp9",
    name: "India Company",
    logo: "ι",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp10",
    name: "Juliet Company",
    logo: "κ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp11",
    name: "Kilo Company",
    logo: "λ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp12",
    name: "Lima Company",
    logo: "μ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp13",
    name: "Mike Company",
    logo: "ν",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp14",
    name: "November Company",
    logo: "ξ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp15",
    name: "Oscar Company",
    logo: "ο",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp16",
    name: "Papa Company",
    logo: "π",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp17",
    name: "Quebec Company",
    logo: "ρ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp18",
    name: "Romeo Company",
    logo: "σ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp19",
    name: "Sierra Company",
    logo: "τ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
  {
    id: "cmp20",
    name: "Tango Company",
    logo: "υ",
    image: defaultCompanyLogo,
    color: "from-gold to-gold-dark",
  },
];

export const classOfficers: Person[] = [
  {
    id: "clo1",
    name: "Ricardo Torres",
    rank: "SFO",
    position: "Class President",
    photo: defaultPersonImage,
  },
  {
    id: "clo2",
    name: "Carmen Dela Cruz",
    rank: "FO1",
    position: "Class Vice President",
    photo: defaultPersonImage,
  },
  {
    id: "clo3",
    name: "Jose Garcia",
    rank: "FO1",
    position: "Class Secretary",
    photo: defaultPersonImage,
  },
  {
    id: "clo4",
    name: "Luz Bautista",
    rank: "FO2",
    position: "Class Treasurer",
    photo: defaultPersonImage,
  },
  {
    id: "clo5",
    name: "Pedro Aquino",
    rank: "FO1",
    position: "Class Auditor",
    photo: defaultPersonImage,
  },
  {
    id: "clo6",
    name: "Maria Fernandez",
    rank: "FO1",
    position: "Class PRO",
    photo: defaultPersonImage,
  },
  {
    id: "clo7",
    name: "Jose Torres",
    rank: "FO1",
    position: "Class Historian",
    photo: defaultPersonImage,
  },
];

export const classRegimentalOfficers: RegimentalGroup[] = [
  {
    title: "Brigade Commander and Staff",
    officers: [
      {
        id: "br1",
        name: "Alberto Reyes",
        rank: "FO1",
        position: "Brigade Commander",
        photo: defaultPersonImage,
      },
      {
        id: "br2",
        name: "Lisa Santos",
        rank: "FO1",
        position: "Staff 2",
        photo: defaultPersonImage,
      },
      {
        id: "br3",
        name: "Miguel Cruz",
        rank: "FO1",
        position: "Staff 3",
        photo: defaultPersonImage,
      },
      {
        id: "br4",
        name: "Rosa Lim",
        rank: "FO2",
        position: "Staff 4",
        photo: defaultPersonImage,
      },
      {
        id: "br5",
        name: "Carlo Aquino",
        rank: "FO1",
        position: "Staff 5",
        photo: defaultPersonImage,
      },
      {
        id: "br6",
        name: "Anna Mendoza",
        rank: "FO1",
        position: "Staff 6",
        photo: defaultPersonImage,
      },
      {
        id: "br7",
        name: "Joel Fernandez",
        rank: "FO1",
        position: "Staff 7",
        photo: defaultPersonImage,
      },
      {
        id: "br8",
        name: "Grace Bautista",
        rank: "FO2",
        position: "Staff 8",
        photo: defaultPersonImage,
      },
    ],
  },
  {
    title: "1st Battalion",
    officers: [
      {
        id: "1b1",
        name: "Fernando Garcia",
        rank: "FO1",
        position: "1st Battalion Commander",
        photo: defaultPersonImage,
      },
      {
        id: "1b2",
        name: "Diana Cruz",
        rank: "FO1",
        position: "Staff 1",
        photo: defaultPersonImage,
      },
      {
        id: "1b3",
        name: "Ramon Lim",
        rank: "FO1",
        position: "Staff 2",
        photo: defaultPersonImage,
      },
      {
        id: "1b4",
        name: "Elaine Santos",
        rank: "FO2",
        position: "Staff 3",
        photo: defaultPersonImage,
      },
      {
        id: "1b5",
        name: "Bryan Reyes",
        rank: "FO1",
        position: "Staff 4",
        photo: defaultPersonImage,
      },
      {
        id: "1b6",
        name: "Joyce Mendoza",
        rank: "FO1",
        position: "Staff 5",
        photo: defaultPersonImage,
      },
    ],
  },
  {
    title: "2nd Battalion",
    officers: [
      {
        id: "2b1",
        name: "Kenneth Torres",
        rank: "FO1",
        position: "2nd Battalion Commander",
        photo: defaultPersonImage,
      },
      {
        id: "2b2",
        name: "Aileen Aquino",
        rank: "FO1",
        position: "Staff 1",
        photo: defaultPersonImage,
      },
      {
        id: "2b3",
        name: "George Bautista",
        rank: "FO1",
        position: "Staff 2",
        photo: defaultPersonImage,
      },
      {
        id: "2b4",
        name: "Betty Garcia",
        rank: "FO2",
        position: "Staff 3",
        photo: defaultPersonImage,
      },
      {
        id: "2b5",
        name: "Fred Cruz",
        rank: "FO1",
        position: "Staff 4",
        photo: defaultPersonImage,
      },
      {
        id: "2b6",
        name: "Susan Lim",
        rank: "FO1",
        position: "Staff 5",
        photo: defaultPersonImage,
      },
    ],
  },
  {
    title: "3rd Battalion",
    officers: [
      {
        id: "3b1",
        name: "Oscar Fernandez",
        rank: "FO1",
        position: "3rd Battalion Commander",
        photo: defaultPersonImage,
      },
      {
        id: "3b2",
        name: "Helen Santos",
        rank: "FO1",
        position: "Staff 1",
        photo: defaultPersonImage,
      },
      {
        id: "3b3",
        name: "Larry Reyes",
        rank: "FO1",
        position: "Staff 2",
        photo: defaultPersonImage,
      },
      {
        id: "3b4",
        name: "Nicole Mendoza",
        rank: "FO2",
        position: "Staff 3",
        photo: defaultPersonImage,
      },
      {
        id: "3b5",
        name: "Peter Aquino",
        rank: "FO1",
        position: "Staff 4",
        photo: defaultPersonImage,
      },
      {
        id: "3b6",
        name: "Marian Cruz",
        rank: "FO1",
        position: "Staff 5",
        photo: defaultPersonImage,
      },
    ],
  },
  {
    title: "4th Battalion",
    officers: [
      {
        id: "4b1",
        name: "Edward Garcia",
        rank: "FO1",
        position: "4th Battalion Commander",
        photo: defaultPersonImage,
      },
      {
        id: "4b2",
        name: "Gloria Lim",
        rank: "FO1",
        position: "Staff 1",
        photo: defaultPersonImage,
      },
      {
        id: "4b3",
        name: "Vincent Bautista",
        rank: "FO1",
        position: "Staff 2",
        photo: defaultPersonImage,
      },
      {
        id: "4b4",
        name: "Christine Torres",
        rank: "FO2",
        position: "Staff 3",
        photo: defaultPersonImage,
      },
      {
        id: "4b5",
        name: "Dennis Santos",
        rank: "FO1",
        position: "Staff 4",
        photo: defaultPersonImage,
      },
      {
        id: "4b6",
        name: "Katrina Reyes",
        rank: "FO1",
        position: "Staff 5",
        photo: defaultPersonImage,
      },
    ],
  },
];