export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  type: "champion" | "runner-up" | "award" | "grant";
}

export const achievements: Achievement[] = [
  { title: "BASIS National ICT Award", issuer: "BASIS", year: "2019", type: "award" },
  { title: "Entrepreneur of the Year", issuer: "ICT Division", year: "2019", type: "award" },
  { title: "Startup Grant", issuer: "ICT Division, Bangladesh", year: "2019", type: "grant" },
  { title: "Ideathon Champion", issuer: "National Competition", year: "2018", type: "champion" },
  { title: "BIZ-Fiesta Champion", issuer: "National Competition", year: "2018", type: "champion" },
  { title: "Get in the Ring — Runner-up", issuer: "Global Startup Competition", year: "2019", type: "runner-up" },
  { title: "BRACATHON — Runner-up", issuer: "BRAC Hackathon", year: "2019", type: "runner-up" },
  { title: "National Hackathon — Runner-up", issuer: "ICT Division", year: "2018", type: "runner-up" },
];
