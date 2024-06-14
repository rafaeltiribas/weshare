import Category from "./category";

interface NonGovernmentalOrganization {
  id?: number;
  image: string;
  category: Category;
  name: string;
  description: string;
  signupDate: Date;
}
export default NonGovernmentalOrganization;
