export type CategoryImage = {
  alt: string;
  objectPosition?: string;
  ratio: string;
  sizes: string;
  src: string;
};

export type CategoryPageData = {
  description: string;
  eyebrow: string;
  explore: readonly { title: string; copy: string }[];
  hero?: CategoryImage;
  intro: string;
  metaDescription: string;
  metaTitle: string;
  path: `/${string}`;
  related: readonly { label: string; href: `/${string}` }[];
  secondaryImages?: readonly [CategoryImage, CategoryImage];
  title: string;
};

export const categoryPages = {
  tiles: {
    description:
      "Explore wall and floor tiles with the room, light, scale and practical use in mind. K.Style is a place to compare material options in person before you decide.",
    eyebrow: "Tiles · Donegal Town",
    explore: [
      {
        title: "Room and use",
        copy: "Start with where the tile will be used and what the surface needs to handle day to day.",
      },
      {
        title: "Tone and scale",
        copy: "Compare proportions and colours against the size and natural light of your room.",
      },
      {
        title: "Surface and finish",
        copy: "See texture, pattern and finish at full scale rather than relying on a screen alone.",
      },
      {
        title: "The complete room",
        copy: "Consider wall and floor choices alongside flooring, bathroom ware and interior details.",
      },
    ],
    hero: {
      alt: "Warm bathroom finished with large-format stone-effect tiles",
      objectPosition: "center 57%",
      ratio: "16 / 10",
      sizes: "(max-width: 768px) calc(100vw - 2rem), 62vw",
      src: "/images/interiors/kstyle-installed-tile-bathroom.png",
    },
    intro: "Tiles are best understood as part of a room, not as an isolated sample.",
    metaDescription:
      "Explore tiles for bathrooms, kitchens and living spaces at K.Style Tiles & Interiors in Donegal Town. Visit the showroom or call to discuss your room.",
    metaTitle: "Tiles in Donegal Town",
    path: "/tiles",
    related: [
      { label: "Bathrooms", href: "/bathrooms" },
      { label: "Flooring", href: "/flooring" },
      { label: "Inspiration", href: "/inspiration" },
    ],
    secondaryImages: [
      {
        alt: "Close view of the edge and surface of a light stone-effect tile",
        ratio: "4 / 5",
        sizes: "(max-width: 768px) 72vw, 31vw",
        src: "/images/products/kstyle-material-stone-detail.png",
      },
      {
        alt: "Warm neutral tile samples arranged in natural light",
        ratio: "4 / 5",
        sizes: "(max-width: 768px) 72vw, 31vw",
        src: "/images/products/kstyle-featured-collections-material-edit.png",
      },
    ],
    title: "Tiles for rooms you live in.",
  },
  flooring: {
    description:
      "Explore flooring in room context and compare tone, grain, format and how it will connect one space to the next. Bring photographs and measurements to the K.Style showroom.",
    eyebrow: "Flooring · Donegal Town",
    explore: [
      {
        title: "The room",
        copy: "Begin with the scale, light and character of the space rather than a sample in isolation.",
      },
      {
        title: "Daily life",
        copy: "Talk through how the room is used so suitable options can be explored together.",
      },
      {
        title: "Tone and direction",
        copy: "Consider colour, grain and plank direction as part of the room’s architecture.",
      },
      {
        title: "Room transitions",
        copy: "Think about adjoining spaces and the way flooring choices meet other materials.",
      },
    ],
    hero: {
      alt: "Oak-toned plank flooring in a light-filled living room",
      objectPosition: "center 64%",
      ratio: "4 / 5",
      sizes: "(max-width: 768px) calc(100vw - 2rem), 48vw",
      src: "/images/interiors/kstyle-flooring-living-space.png",
    },
    intro: "A floor sets the rhythm for everything that follows.",
    metaDescription:
      "Explore flooring at K.Style Tiles & Interiors in Donegal Town. Compare options in the showroom and discuss the room, daily use and material transitions.",
    metaTitle: "Flooring in Donegal Town",
    path: "/flooring",
    related: [
      { label: "Tiles", href: "/tiles" },
      { label: "Inspiration", href: "/inspiration" },
      { label: "Visit the showroom", href: "/visit-us" },
    ],
    secondaryImages: [
      {
        alt: "Close-up of stone-effect porcelain floor tiles beside oak furniture",
        objectPosition: "center 56%",
        ratio: "1 / 1",
        sizes: "(max-width: 768px) 78vw, 31vw",
        src: "/images/interiors/kstyle-inspiration-porcelain-floor-detail.png",
      },
      {
        alt: "Open-plan kitchen with large-format porcelain flooring",
        objectPosition: "center 62%",
        ratio: "3 / 2",
        sizes: "(max-width: 768px) calc(100vw - 2rem), 43vw",
        src: "/images/interiors/kstyle-inspiration-kitchen-porcelain-flooring.png",
      },
    ],
    title: "Flooring that belongs to the room.",
  },
  bathrooms: {
    description:
      "Bring the surfaces, bathroom ware and practical decisions into one conversation. K.Style helps you explore the room as a complete composition without treating each choice in isolation.",
    eyebrow: "Bathrooms & bathroom ware · Donegal Town",
    explore: [
      {
        title: "Start with the room",
        copy: "Bring dimensions, photographs and any practical constraints you already know.",
      },
      {
        title: "Choose surfaces together",
        copy: "Compare wall and floor materials in relation to light, scale and the room’s layout.",
      },
      {
        title: "Consider bathroom ware",
        copy: "Explore bathroom ware as part of the overall room rather than a separate decision.",
      },
      {
        title: "Bring a reference",
        copy: "Share a screenshot or room image and use it as a starting point for suitable options.",
      },
    ],
    hero: {
      alt: "Charcoal tiled bathroom with timber vanity and walk-in shower",
      objectPosition: "center 52%",
      ratio: "4 / 5",
      sizes: "(max-width: 768px) calc(100vw - 2rem), 48vw",
      src: "/images/interiors/kstyle-architectural-charcoal-bathroom.png",
    },
    intro: "A bathroom works best when every material is considered together.",
    metaDescription:
      "Explore bathrooms, bathroom ware and tiles at K.Style Tiles & Interiors in Donegal Town. Visit the showroom or call to discuss your room.",
    metaTitle: "Bathrooms in Donegal Town",
    path: "/bathrooms",
    related: [
      { label: "Tiles", href: "/tiles" },
      { label: "Inspiration", href: "/inspiration" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
    secondaryImages: [
      {
        alt: "Light neutral bathroom with textured tiles and walk-in shower",
        objectPosition: "center 50%",
        ratio: "4 / 5",
        sizes: "(max-width: 768px) 72vw, 31vw",
        src: "/images/interiors/kstyle-inspiration-textured-bathroom.png",
      },
      {
        alt: "Bathroom vanity with basin, stone-effect tiles and material samples",
        objectPosition: "center 50%",
        ratio: "3 / 2",
        sizes: "(max-width: 768px) calc(100vw - 2rem), 43vw",
        src: "/images/products/kstyle-curated-bathroom-collection.png",
      },
    ],
    title: "Bathrooms, considered as a whole.",
  },
  beds: {
    description:
      "Explore beds and mattresses through a practical conversation about comfort, room size and what you are looking for. Visit the K.Style showroom in Donegal Town to compare in person.",
    eyebrow: "Beds & mattresses · Donegal Town",
    explore: [
      {
        title: "Comfort first",
        copy: "Begin with how you sleep and what feels comfortable rather than a list of unsupported claims.",
      },
      {
        title: "Room measurements",
        copy: "Bring the dimensions of the room and the space available around the bed.",
      },
      {
        title: "Compare in person",
        copy: "Visit the showroom to discuss current options instead of relying on a screen alone.",
      },
      {
        title: "Ask what is current",
        copy: "Call K.Style for verified information on the beds and mattresses available to explore.",
      },
    ],
    intro: "Comfort is personal. It deserves more than a quick online guess.",
    metaDescription:
      "Explore beds and mattresses at K.Style Tiles & Interiors in Donegal Town. Visit the showroom or call to discuss current options and what suits you.",
    metaTitle: "Beds & Mattresses in Donegal Town",
    path: "/beds-mattresses",
    related: [
      { label: "Visit the showroom", href: "/visit-us" },
      { label: "Interiors inspiration", href: "/inspiration" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
    title: "Beds and mattresses, chosen in person.",
  },
} as const satisfies Record<string, CategoryPageData>;
