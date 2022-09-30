import { Intro } from "../components/Intro";

export function Home() {
  return (
    <div className="flex px-[10rem] py-[5.75rem] w-[90rem] min-w-full h-[34rem]">
      {/* intro component */}
      <Intro />
      {/* coffe list component */}
    </div>
  )
}