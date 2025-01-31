import { services } from "@/app/lib/data/services/marketing";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { cn } from "@/lib/utils";

export function MarketingBento() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 relative">
      <div className="w-[600px] h-[600px] bg-ziverium-blue/10 blur-3xl rounded-full absolute top-96 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="flex  items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>📢 Marketing</span>
          </AnimatedShinyText>
        </div>
      </div>
      <h1 className="scroll-m-20 text-4xl font-normal tracking-tight lg:text-6xl mt-6 mb-4 text-center w-full sm:w-[700px]">
        Comprehensive Marketing Solutions
      </h1>
      <p className="text-lg font-light text-neutral-400 text-center px-5 sm:px-0">
        Our Tailored strategies to boost your brands visibility and growth.
      </p>
      <BentoGrid className="lg:grid-rows-3 p-5 sm:p-20">
        {services.map((service) => (
          <BentoCard key={service.name} {...service} />
        ))}
      </BentoGrid>
    </div>
  );
}
