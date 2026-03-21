export interface Project {
  slug: string;
  name: string;
  description: string;
  date: string;
  tags?: string[];
  url?: string;
  status?: "active" | "archived" | "wip";
}
