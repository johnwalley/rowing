declare module "react-rowing-blades" {
  export const Blade: React.ComponentType<{
    club: string;
    size?: number;
    className?: string;
  }>;
  export const clubs: { [category: string]: string[] };
  export const names: { [category: string]: { [club: string]: string } };
  export const shortNames: { [category: string]: { [club: string]: string } };
}
