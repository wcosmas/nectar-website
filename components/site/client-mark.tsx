import Image from "next/image";
import { clientMarks } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * One institution on the client wall: its crest, with its name set beneath in
 * our own type rather than in whatever the crest came locked up with.
 *
 * Three rules keep a row of heraldry from fighting a one-ink page. Crests are
 * sized to a common *height*, never a common width, so none dominates by
 * accident. They are desaturated, because five full-colour coats of arms are
 * louder than anything else on this site — colour returns on hover. And the
 * name is always typeset, never part of the image, which is what lets Makerere
 * and its Endowment Fund share a crest without reading as a duplicate.
 *
 * With no file supplied the name stands alone, which is what the wall did
 * before any crest existed — so this degrades to the old design, not to a gap.
 */
export function ClientMark({ name }: { name: string }) {
  const mark = clientMarks[name];

  return (
    <span className="flex flex-col items-start">
      {mark && (
        <Image
          src={mark.src}
          alt=""
          width={mark.width}
          height={mark.height}
          className={cn(
            // 56px: these are engraved crests, not wordmarks — below about
            // this they stop resolving into anything and read as grey smudges.
            "mb-5 h-14 w-auto object-contain object-left",
            "grayscale transition duration-300 hover:grayscale-0",
          )}
        />
      )}
      <span className="type-title text-[clamp(0.9375rem,1.3vw,1.0625rem)] text-ink">
        {name}
      </span>
    </span>
  );
}
