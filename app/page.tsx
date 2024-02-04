import MainAccordion from "@/components/MainAccordion"
import { ModeToggle } from "@/components/ToggleTheme"

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Ensttic Hub</h1>
        <ModeToggle />
      </div>
      <MainAccordion />
    </div>
  );
}

