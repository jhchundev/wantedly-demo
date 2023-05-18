interface Project {
    id: number;
    title: string;
    coverImageUrl: string;
    lookingFor: string;
    hiringType: string;
    howDescription: string;
    description: string;
    publishedAt: string;
    updatedAt: string;
  }
  
  interface ProjectFilterInput {
    keyword?: string;
    lookingFor?: string;
  }
  
  interface Staffing {
    id: number;
    user: User;
    userId: number;
  }
  
  interface User {
    id: number;
    name: string;
    avatar: string;
  }
  
  interface ProjectData {
    projects: Project[];
  }
  
  export type { Project ,ProjectFilterInput, ProjectData };
  