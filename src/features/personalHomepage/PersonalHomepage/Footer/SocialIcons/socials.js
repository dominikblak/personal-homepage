import { styleIcon } from "./styled";
import { ReactComponent as GitHibIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/dominikblak",
    Icon: styleIcon(GitHibIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/dominik.blak.1/",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dominik-blak-060416176/",
    Icon: styleIcon(LinkedInIcon),
  },
];
