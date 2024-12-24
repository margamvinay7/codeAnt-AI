import {
  Cloud,
  Home,
  Code,
  Book,
  Gear,
  Github,
  Bitbucket,
  Azure,
  Gitlab,
  Sso,
} from "./images";

export const navItems = [
  { icon: Home, label: "Repositories", path: "/" },
  { icon: Code, label: "AI Code Review", path: "/aiCodeReview" },
  {
    icon: Cloud,
    label: "Cloud Security",
    path: "/cloudSecurity",
  },
  {
    icon: Book,
    label: "Security Scanning",
    path: "/securityScanning",
  },
  { icon: Gear, label: "Settings", path: "/settings" },
  { icon: "/icons/phone.svg", label: "Support", path: "/support" },
  { icon: "/icons/sign-out.svg", label: "Logout", path: "/login" },
];

export const users = [
  { value: "utkarshdhairyapanwar", label: "Utkarsh Dhairya Panwar" },
  { value: "margamvinay7", label: "Margam Vinay" },
];

export const repos = [
  {
    id: "1",
    html_url: "",
    name: "design-system",
    visibility: "Public",
    language: "React",
    updated_at: "Updated 1 day ago",
    size: "7320",
  },
  {
    id: "2",
    html_url: "",
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    updated_at: "Updated 2 days ago",
    size: "5871",
  },
  {
    id: "3",
    html_url: "",
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    updated_at: "Updated 5 days ago",
    size: "4521",
  },
  {
    id: "4",
    html_url: "",
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    updated_at: "Updated 3 days ago",
    size: "3096",
  },
  {
    id: "5",
    html_url: "",
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    updated_at: "Updated 6 days ago",
    size: "6210",
  },
  {
    id: "6",
    html_url: "",
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    updated_at: "Updated 4 days ago",
    size: "1876",
  },
  {
    id: "7",
    html_url: "",
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    updated_at: "Updated 7 days ago",
    size: "5432",
  },
];

export const saas = [
  {
    label: "Sign in with Github",
    icon: Github,
  },
  {
    label: "Sign in with Bitbucket",
    icon: Bitbucket,
  },
  {
    label: "Sign in with Azure Devops",
    icon: Azure,
  },
  {
    label: "Sign in with GitLab",
    icon: Gitlab,
  },
];

export const selfHosted = [
  {
    label: "Sign in with Gitlab",
    icon: Gitlab,
  },
  {
    label: "Sign in with SSO",
    icon: Sso,
  },
];

export const analytics = [
  {
    heading: "30+",
    subheading: "Langauges Support",
  },
  {
    heading: "10K+",
    subheading: "Developers",
  },
  {
    heading: "100K+",
    subheading: "Hours Saved",
  },
];
