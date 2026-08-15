import Image from "next/image";
import { clientMarks } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * One institution on the client wall: its crest, with its name set beneath in
 * our own type rather than in whatever the crest came locked up with.
 *
 * Three rules keep a row of heraldry from fighting a one-ink page. Crests are
 * sized to a common *height*, never a common width, so none dominates by
 * accident. They are desaturated, because a full-colour coat of arms is louder
 * than anything else on this site — colour returns on hover. And the name is
 * always typeset, never part of the image, so institutions whose crests differ
 * wildly in weight still read as one set.
 *
 * Common height is the rule, but it is measured by the wrong thing when the
 * crests disagree about shape: a portrait shield set to the same height as a
 * landscape roundel draws about a third less ink, and reads as the smaller of
 * the two. `scale` is the optical correction — a per-mark multiplier on that
 * common height, set by eye against the rest of the row, not computed.
 *
 * With no file supplied the name stands alone, which is what the wall did
 * before any crest existed — so this degrades to the old design, not to a gap.
 * The row it sits in should align to `items-end`, which is what keeps a
 * crested name on the same baseline as an uncrested one.
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
          // 3.5rem/56px: these are engraved crests, not wordmarks — below about
          // this they stop resolving into anything and read as grey smudges.
          style={{ height: `calc(3.5rem * ${mark.scale ?? 1})` }}
          className={cn(
            "mb-5 w-auto object-contain object-left",
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
