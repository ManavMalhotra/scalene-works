type ContainerProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div className={cn("px-32 my-10", className)} {...props}>
      {children}
    </div>
  );
}