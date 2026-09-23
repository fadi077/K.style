import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { InspirationEnquiry } from "@/components/sections/inspiration-enquiry";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { business, confirmedOpeningHours } from "@/data/business";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "K.Style Tiles & Interiors | Donegal Town" },
  description:
    "Explore tiles, flooring, bathrooms, beds, mattresses and interiors at K.Style in Donegal Town. Visit the showroom or call to discuss your project.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "K.Style Tiles & Interiors | Donegal Town",
    description:
      "Tiles, flooring, bathrooms, beds, mattresses and interiors from K.Style in Donegal Town.",
    images: [
      {
        alt: "Stone-tiled living interior",
        height: 941,
        url: "/images/interiors/kstyle-hero-stone-interior.webp",
        width: 1672,
      },
    ],
    locale: "en_IE",
    siteName: business.name,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "K.Style Tiles & Interiors | Donegal Town",
    description:
      "Tiles, flooring, bathrooms, beds, mattresses and interiors from K.Style in Donegal Town.",
    images: ["/images/interiors/kstyle-hero-stone-interior.webp"],
  },
};

const categories = [
  {
    alt: "Warm bathroom finished with large-format stone-effect tiles",
    description:
      "Wall and floor tiles for bathrooms, kitchens, living spaces and more.",
    href: "/tiles",
    hrefLabel: "Explore tiles",
    id: "tiles",
    image: "/images/interiors/kstyle-installed-tile-bathroom.png",
    layout: "categoryWide",
    position: "center 56%",
    ratio: "16 / 10",
    sizes: "(max-width: 768px) calc(100vw - 2rem), 65vw",
    title: "Tiles",
  },
  {
    alt: "Oak-toned plank flooring in a light-filled living room",
    description:
      "Flooring selected with the room, daily use and lasting feel in mind.",
    href: "/flooring",
    hrefLabel: "Explore flooring",
    id: "flooring",
    image: "/images/interiors/kstyle-flooring-living-space.png",
    layout: "categoryTall",
    position: "center 66%",
    ratio: "4 / 5",
    sizes: "(max-width: 768px) 76vw, 25vw",
    title: "Flooring",
  },
  {
    alt: "Charcoal tiled bathroom with timber vanity and walk-in shower",
    description:
      "Tiles and bathroom ware considered as one practical, coherent space.",
    href: "/bathrooms",
    hrefLabel: "Explore bathrooms",
    id: "bathrooms",
    image: "/images/interiors/kstyle-architectural-charcoal-bathroom.png",
    layout: "categoryInset",
    position: "center 50%",
    ratio: "4 / 5",
    sizes: "(max-width: 768px) 76vw, 40vw",
    title: "Bathrooms",
  },
  {
    description:
      "Beds and mattresses to compare in person, with comfort at the centre.",
    href: "/beds-mattresses",
    hrefLabel: "Explore beds and mattresses",
    id: "beds",
    layout: "categoryLow",
    ratio: "3 / 2",
    sizes: "(max-width: 768px) calc(100vw - 2rem), 40vw",
    title: "Beds & Mattresses",
  },
] as const;

const whyKStyle = [
  {
    title: "See it at full scale",
    copy: "Compare materials, finishes and products in the K.Style showroom before deciding.",
  },
  {
    title: "Talk through the room",
    copy: "Bring dimensions, photographs or an idea and discuss the practical requirements in person.",
  },
  {
    title: "Bring your inspiration",
    copy: "Share an image you like and K.Style will help you explore suitable options without promising an exact match.",
  },
  {
    title: "Consider more of the space",
    copy: "Explore tiles, flooring, bathrooms, beds, mattresses and interior products in one showroom.",
  },
] as const;

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@id": `${business.url}/#business`,
  "@type": "HomeGoodsStore",
  address: {
    "@type": "PostalAddress",
    addressCountry: business.address.addressCountry,
    addressLocality: business.address.addressLocality,
    streetAddress: business.address.streetAddress,
  },
  description:
    "K.Style is a tiles and interiors showroom in Donegal Town offering tiles, flooring, bathrooms, beds and mattresses.",
  image: `${business.url}/images/interiors/kstyle-hero-stone-interior.webp`,
  logo: `${business.url}/images/brand/kstyle-logo.png`,
  name: business.name,
  openingHoursSpecification: confirmedOpeningHours,
  telephone: business.phone.display,
  url: business.url,
};

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section aria-labelledby="home-title" className={styles.hero} id="top">
          <div className={styles.heroCopy}>
            <p className={styles.location}>K.Style, Donegal Town</p>
            <h1 id="home-title">Spaces, beautifully considered.</h1>
            <p className={styles.heroIntroduction}>
              Tiles, flooring, bathrooms, beds, mattresses and interiors from
              the K.Style showroom in Donegal Town.
            </p>
            <div className={styles.heroActions}>
              <ActionLink href="/get-a-quote">Get a quote</ActionLink>
              <ActionLink href="/visit-us" variant="text">
                Visit the showroom
              </ActionLink>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <EditorialImage
              alt="Light-filled living space with large-format stone-effect tiles"
              className={styles.heroRoom}
              objectPosition="center 52%"
              preload
              sizes="(max-width: 768px) calc(100vw - 2rem), 68vw"
              src="/images/interiors/kstyle-hero-stone-interior.webp"
            />
            <EditorialImage
              alt="Close view of the edge and surface of a stone-effect tile"
              className={styles.heroDetail}
              objectPosition="center 48%"
              sizes="(max-width: 768px) 52vw, 24vw"
              src="/images/products/kstyle-material-stone-detail.png"
            />
          </div>

          <div className={styles.heroFootnote}>
            <p>For spaces that begin with material.</p>
            <p>Business Centre, Drumlonagher, Donegal Town</p>
          </div>
        </section>

        <section
          aria-labelledby="collections-title"
          className={styles.categorySection}
          id="collections"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Explore by category</p>
            <h2 id="collections-title">The foundations of a complete interior.</h2>
            <p>
              Start with a room, a material or an idea. Visit the showroom to
              compare options and discuss what will work in your space.
            </p>
          </div>

          <div className={styles.categoryAtlas}>
            {categories.map((category) => (
              <article
                className={`${styles.categoryItem} ${styles[category.layout]}`}
                id={category.id}
                key={category.title}
              >
                <div className={styles.categoryEntry}>
                  {"image" in category ? (
                    <EditorialImage
                      alt={category.alt}
                      className={styles.categoryImage}
                      objectPosition={category.position}
                      ratio={category.ratio}
                      sizes={category.sizes}
                      src={category.image}
                    />
                  ) : (
                    <ImagePlaceholder
                      className={styles.categoryImage}
                      detail="Authentic category photography is still required"
                      label="Photography pending"
                      ratio={category.ratio}
                      subject="Beds & mattresses"
                      tone="charcoal"
                    />
                  )}
                  <div className={styles.categoryCopy}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <a href={category.href}>{category.hrefLabel}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="statement-title" className={styles.brandStatement}>
          <div>
            <h2 id="statement-title">
              A room rarely comes together one product at a time.
            </h2>
            <p>
              K.Style brings the materials and interior products that shape a
              complete space into one considered conversation.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="featured-title"
          className={styles.featuredSection}
          id="materials-edit"
        >
          <div className={styles.featuredHeading}>
            <p className={styles.sectionLabel}>The Materials Edit</p>
            <h2 id="featured-title">A closer look at tone, texture and scale.</h2>
            <p>
              Use these details as a starting point, then compare suitable
              samples and combinations in the showroom.
            </p>
          </div>

          <div className={styles.collectionRow}>
            <article className={styles.collectionPrimary}>
              <EditorialImage
                alt="A warm neutral material palette with light and charcoal stone-effect samples"
                ratio="4 / 5"
                sizes="(max-width: 768px) calc(100vw - 2rem), 40vw"
                src="/images/products/kstyle-featured-collections-material-edit.png"
              />
              <div>
                <h3>A considered material palette</h3>
                <p>Compare colour, pattern and finish side by side.</p>
              </div>
            </article>
            <article className={styles.collectionSecondary}>
              <EditorialImage
                alt="Close-up of a taupe stone-effect tiled surface"
                ratio="1 / 1"
                sizes="(max-width: 768px) 82vw, 24vw"
                src="/images/products/kstyle-material-detail-taupe.png"
              />
              <div>
                <h3>Surface and texture</h3>
                <p>See the detail that can be lost on a small screen.</p>
              </div>
            </article>
            <article className={styles.collectionTertiary}>
              <EditorialImage
                alt="Bathroom vanity with basin, stone-effect tiles and material samples"
                ratio="3 / 2"
                sizes="(max-width: 768px) calc(100vw - 2rem), 25vw"
                src="/images/products/kstyle-curated-bathroom-collection.png"
              />
              <div>
                <h3>Bathrooms, considered together</h3>
                <p>Look at surfaces and bathroom ware as one room.</p>
              </div>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="inspiration-title"
          className={styles.inspirationSection}
          id="inspiration"
        >
          <div className={styles.inspirationTitle}>
            <p className={styles.sectionLabel}>Inspiration</p>
            <h2 id="inspiration-title">See how materials live together.</h2>
            <p>
              Look beyond a single sample. Explore how tone, texture, light and
              scale work across a complete room.
            </p>
          </div>

          <div className={styles.inspirationCollage}>
            <EditorialImage
              alt="Open-plan kitchen and dining space with large-format porcelain flooring"
              className={styles.inspirationMain}
              objectPosition="center 62%"
              sizes="(max-width: 768px) calc(100vw - 2rem), 66vw"
              src="/images/interiors/kstyle-inspiration-kitchen-porcelain-flooring.png"
            />
            <EditorialImage
              alt="Light neutral bathroom with textured tiles and walk-in shower"
              className={styles.inspirationPortrait}
              objectPosition="center 50%"
              sizes="(max-width: 768px) 75vw, 32vw"
              src="/images/interiors/kstyle-inspiration-textured-bathroom.png"
            />
            <EditorialImage
              alt="Close-up of stone-effect porcelain floor tiles beside oak furniture"
              className={styles.inspirationDetail}
              objectPosition="center 54%"
              sizes="(max-width: 768px) 50vw, 24vw"
              src="/images/interiors/kstyle-inspiration-porcelain-floor-detail.png"
            />
          </div>

          <div className={styles.inspirationIndex}>
            <p>Ideas for the rooms you live in</p>
            <ul>
              <li>Bathrooms</li>
              <li>Kitchens</li>
              <li>Living spaces</li>
              <li>Flooring</li>
              <li>Tile details</li>
              <li>Material combinations</li>
            </ul>
          </div>
        </section>

        <InspirationEnquiry />

        <section aria-labelledby="offers-title" className={styles.offersSection} id="offers">
          <div className={styles.offerMarker}>Special offers</div>
          <div className={styles.offerVisual}>
            <EditorialImage
              alt="Neutral stone-effect tile samples in natural light"
              ratio="4 / 5"
              sizes="(max-width: 768px) 78vw, 32vw"
              src="/images/products/kstyle-special-offer-tile-collection.png"
            />
          </div>
          <div className={styles.offerContent}>
            <h2 id="offers-title">Special offers without the sales-floor noise.</h2>
            <p>
              Current offers will be added here only when product details,
              pricing and availability have been verified.
            </p>
            <p className={styles.offerStatus}>
              No unverified products, prices or discount claims are shown online.
            </p>
            <ActionLink href={business.phone.href} variant="dark">
              Call about current offers
            </ActionLink>
          </div>
        </section>

        <section aria-labelledby="why-title" className={styles.whySection} id="why-kstyle">
          <div className={styles.whyHeading}>
            <p className={styles.sectionLabel}>Why visit K.Style</p>
            <h2 id="why-title">A more personal route from idea to interior.</h2>
          </div>
          <div className={styles.whyList}>
            {whyKStyle.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="showroom-title"
          className={styles.showroomSection}
          id="showroom"
        >
          <div className={styles.showroomVisual}>
            <ImagePlaceholder
              detail="Real K.Style premises photography is required before launch"
              label="Showroom photography pending"
              ratio="16 / 10"
              subject="K.Style showroom"
              tone="limestone"
            />
            <ImagePlaceholder
              className={styles.showroomDetail}
              compact
              detail="Real consultation or display photograph required"
              label="Showroom detail pending"
              ratio="4 / 5"
              subject="K.Style showroom detail"
              tone="surface"
            />
          </div>
          <div className={styles.showroomCopy}>
            <p className={styles.sectionLabel}>Visit in person</p>
            <h2 id="showroom-title">The showroom is where materials become real.</h2>
            <p>
              Visit K.Style in Donegal Town to compare tiles, flooring,
              bathrooms, beds, mattresses and interiors at full scale.
            </p>
            <address className={styles.address}>
              {business.address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <a className={styles.showroomPhone} href={business.phone.href}>
              {business.phone.display}
            </a>
            <dl className={styles.showroomHours}>
              {business.hours.map((entry) => (
                <div key={entry.day}>
                  <dt>{entry.day}</dt>
                  <dd>{entry.hours}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.showroomActions}>
              <a className={styles.callLink} href={business.phone.href}>Call K.Style</a>
              <button disabled title="A verified directions URL is still required" type="button">
                Get directions — link pending
              </button>
            </div>
          </div>
        </section>

        <section aria-labelledby="quote-title" className={styles.finalCta} id="quote">
          <div>
            <h2 id="quote-title">Planning a room?</h2>
          </div>
          <div className={styles.finalCtaCopy}>
            <p>
              Call K.Style or send the image, room or material idea you are
              working with.
            </p>
            <ActionLink href={business.phone.href}>Get a quote by phone</ActionLink>
            <ActionLink href="#send-inspiration" variant="text">
              Send your inspiration
            </ActionLink>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
        type="application/ld+json"
      />
    </>
  );
}
