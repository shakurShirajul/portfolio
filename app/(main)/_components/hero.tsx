import Image from "next/image";
import shakur from "../../../public/shakur.png";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto flex  w-full max-w-4xl flex-col py-20 px-4 md:px-8">
        <div className="flex flex-1 flex-col-reverse items-center justify-center gap-8 md:flex-row md:justify-between">
          {/* Text content */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-gabarito text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              I<span className="text-[#FF6A1C]">&apos;</span>m <span className="font-pacifico font-normal">Shakur</span>
              <br />
              fullstack developer
            </h1>

            <p className="text-sm font-medium leading-relaxed text-muted-foreground">
              Junior Developer at Bit Code.
              <br />
              Based in Chattogram, Bangladesh.
            </p>
          </div>

          {/* Profile image */}
          <div className="relative shrink-0">
            <Image
              src={shakur}
              alt="Shakur"
              width={120}
              height={120}
              priority
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
