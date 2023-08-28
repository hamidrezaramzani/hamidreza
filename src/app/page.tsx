import Menu from "@/components/Menu/menu.component";

export default function Home() {
  return (
    <div className="w-full flex h-full-vh bg-neutral-950">
      <Menu />
      <div className="w-9/12 h-full bg-neutral-900">Content</div>
    </div>
  );
}
