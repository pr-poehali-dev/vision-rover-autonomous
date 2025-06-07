import * as LucideIcons from "lucide-react";

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
