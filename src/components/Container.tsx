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
      <div className={cn("px-48 my-10 mx-auto", className)} {...props}>
        {children}
      </div>
    );
  }