import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <span className="text-2xl md:text-3xl 2xl:text-[2vw] uppercase flex items-center justify-center my-5 2xl:my-[2vw]">
        modern image slider
      </span>
      <Slider />
    </main>
  );
}
