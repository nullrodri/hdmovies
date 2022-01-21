import { createContext } from "react";

export interface IAPIConfig {
  images: Images;
  change_keys: string[];
}

type BackdropSize = "w300" | "w780" | "w1280" | "original";
type LogoSize = "w45" | "w92" | "w154" | "w185" | "w300" | "w500" | "original";
export type PosterSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";
type ProfileSize = "w45" | "w185" | "h632" | "original";
type StillSize = "w92" | "w185" | "w300" | "original";

interface Images {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: BackdropSize;
  logo_sizes: LogoSize;
  poster_sizes: PosterSize;
  profile_sizes: ProfileSize;
  still_sizes: StillSize;
}

export const APIConfigContext = createContext<IAPIConfig | {}>({});
