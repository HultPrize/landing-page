import { Instagram, Linkedin, LucideIcon } from "lucide-react";

type SocialData = {
  name: string;
  link: string;
  icon: LucideIcon;
};

const instagramData: SocialData = {
  name: "Instagram",
  link: "https://www.instagram.com/hultprizeepn/",
  icon: Instagram,
};

const linkedinData: SocialData = {
  name: "Linkedin",
  link: "https://www.linkedin.com/company/hultprizeepn/",
  icon: Linkedin,
};

export const socialData: SocialData[] = [instagramData, linkedinData];
