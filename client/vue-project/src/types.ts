export type AWSUser = {
  username: string;
  userSub: string;
};

declare global {
  interface Window {
    cloudinary: any;
  }
}

export type Dish = {
  img: string;
  title: string;
  description: string;
  price: string;
  category: "mains" | "starters" | "desserts" | "drinks";
}