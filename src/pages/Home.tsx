import { Intro } from "../components/Intro";
import { ListCoffe } from "../components/ListCoffe";

export function Home() {
  return (
    <div className="flex flex-col w-[100%]">
      <Intro />
      <ListCoffe />
    </div>
  )
}