export const business = {
  name: "K.Style Tiles & Interiors",
  shortName: "K.Style",
  descriptor: "Tiles & Interiors",
  url: "https://kstyle.ie",
  phone: {
    display: "+353 (0) 74 9724602",
    href: "tel:+353749724602",
  },
  address: {
    streetAddress: "Business Centre, Drumlonagher",
    addressLocality: "Donegal Town",
    addressCountry: "IE",
    lines: ["Business Centre", "Drumlonagher", "Donegal Town", "Ireland"],
  },
  categories: [
    "Tiles",
    "Flooring",
    "Bathrooms",
    "Bathroom ware",
    "Beds",
    "Mattresses",
    "Interiors",
  ],
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "9:30 AM – 5:00 PM" },
    { day: "Wednesday", hours: "9:30 AM – 5:00 PM" },
    { day: "Thursday", hours: "9:30 AM – 5:00 PM" },
    { day: "Friday", hours: "9:30 AM – 5:00 PM" },
    { day: "Saturday", hours: "10:30 AM – 5:00 PM" },
    { day: "Sunday", hours: "Hours to be confirmed", unconfirmed: true },
  ],
} as const;

export const confirmedOpeningHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "https://schema.org/Tuesday",
      "https://schema.org/Wednesday",
      "https://schema.org/Thursday",
      "https://schema.org/Friday",
    ],
    opens: "09:30",
    closes: "17:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "https://schema.org/Saturday",
    opens: "10:30",
    closes: "17:00",
  },
] as const;
