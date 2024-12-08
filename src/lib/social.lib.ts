import {
  Facebook,
  // Instagram,
  // Linkedin,
  Music2,
  LucideIcon,
  // Twitter,
  // Youtube,
} from "lucide-react";

type SocialData = {
  name: string;
  link: string;
  icon: LucideIcon;
};

// const instagramData: SocialData = {
//   name: "Instagram",
//   link: "https://www.instagram.com/oncampus_programepn",
//   icon: Instagram,
// };

const tiktokData: SocialData = {
  name: "TikTok",
  link: "https://www.tiktok.com/@hult.prize.epn",
  icon: Music2,
};

// const linkedinData: SocialData = {
//   name: "Linkedin",
//   link: "https://www.linkedin.com/company/hultprizeepn/",
//   icon: Linkedin,
// };

const facebookData: SocialData = {
  name: "Facebook",
  link: "https://www.facebook.com/oncampusprogramepn",
  icon: Facebook,
};

// const twitterData: SocialData = {
//   name: "Twitter",
//   link: "https://twitter.com/hultprizeepn",
//   icon: Twitter,
// };

// const youtubeData: SocialData = {
//     name: "Youtube",
//     link: "https://www.youtube.com/channel/UCZQ2phf8d-YkPcp4Iv9PxkA",
//     icon: Youtube,
// }

export const socialData: SocialData[] = [
  // linkedinData,
  // twitterData,
  facebookData,
  // instagramData,
  tiktokData,
  // youtubeData,
];

