export interface NavigationItem {
  title: string;
  href: string;
}

export const publicNavigation: NavigationItem[] = [
  { title: "Home", href: "/" },
  { title: "Career Roadmaps", href: "/roadmaps" },
  { title: "Courses", href: "/courses" },
  { title: "Mentors", href: "/mentors" },
  { title: "Jobs", href: "/jobs" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];