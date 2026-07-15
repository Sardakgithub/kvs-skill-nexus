import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KVS Skill Nexus. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Learn • Build • Connect • Grow
          </p>
        </div>
      </Container>
    </footer>
  );
}