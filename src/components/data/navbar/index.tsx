interface NavbarData {
  id: number;
  text: string;
  arrow?: JSX.Element;
  href?: string;
}

export const navbarData: NavbarData[] = [
  {
    id: 1,
    text: "Services",
  },
  {
    id: 2,
    text: "Insight",
  },
  { id: 3, text: "About Us", href: "/about-us/" },
  { id: 4, text: "Works", href: "/works/" },
  { id: 5, text: "Inside the Lab", href: "/inside-the-lab/" },
];
