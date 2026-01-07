export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export interface Doctor {
  name: string;
  designation: string;
  department: string;
  college: string;
  phone: string;
  website: string;
  imageUrl: string;
  welcomeMessage: string;
}