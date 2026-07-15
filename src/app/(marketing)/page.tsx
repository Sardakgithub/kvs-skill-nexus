import AppShell from "@/components/layout/AppShell";

export default function HomePage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          KVS Skill Nexus
        </h1>

        <p className="mt-6 text-xl text-muted-foreground">
          Learn. Build. Connect. Grow.
        </p>
      </div>
    </section>
  );
}