export default function AuthDivider() {
  return (
    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />

      <span className="text-sm text-muted-foreground">
        OR
      </span>

      <div className="h-px flex-1 bg-border" />
    </div>
  );
}