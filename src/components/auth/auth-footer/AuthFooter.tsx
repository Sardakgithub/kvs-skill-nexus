import Link from "next/link";

interface AuthFooterProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthFooter({
  text,
  linkText,
  href,
}: AuthFooterProps) {
  return (
    <p className="mt-8 text-center text-sm text-muted-foreground">
      {text}{" "}
      <Link
        href={href}
        className="font-medium text-primary hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
}