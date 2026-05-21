import {
  HERO_CAROUSEL_SHELL_CLASS,
  HERO_MEDIA_LAYER_CLASS,
} from "@/lib/media";

export default function HeroMediaFrame({ children, className = "", ...props }) {
  return (
    <div
      className={`${HERO_CAROUSEL_SHELL_CLASS} ${className}`.trim()}
      {...props}
    >
      <div className={`${HERO_MEDIA_LAYER_CLASS} relative`}>{children}</div>
    </div>
  );
}
