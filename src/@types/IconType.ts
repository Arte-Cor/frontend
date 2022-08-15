import HeartIcon from "@components/Icons/Heart";
import LocationPinIcon from "@components/Icons/LocationPin";
import LockKeyIcon from "@components/Icons/LockKey";
import StarIcon from "@components/Icons/Star";

export const DefaultIcons = {
  'location-pin': LocationPinIcon,
  heart: HeartIcon,
  star: StarIcon,
  'lock-key': LockKeyIcon
}

export type IconTypes = keyof typeof DefaultIcons;