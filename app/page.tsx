import AirPollution from "./Components/AirPollution/AirPollution";
import Navbar from "./Components/Navbar";
import SunSet from "./Components/SunSet/SunSet";
import Wind from "./Components/Wind/Wind";
import Temperature from "./Components/Temperature/Temperature";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import UvIndex from "./Components/UvIndex/UvIndex";
import Population from "./Components/Population/Population";
export const metadata = {
  title: "Weather App",
  description: "So Cool",
};
export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx=[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <SunSet />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
          </div>
        </div>
      </div>
    </main>
  );
}
