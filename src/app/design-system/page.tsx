import type { Metadata } from "next";
import { ActionLink } from "@/components/ui/action-link";
import styles from "./design-system.module.css";

export const metadata: Metadata = {
  title: "Design system preview",
  robots: {
    index: false,
    follow: false,
  },
};

const swatches = [
  {
    name: "Porcelain paper",
    value: "#F7F5F0",
    className: "paper",
    use: "Primary canvas",
  },
  {
    name: "Warm surface",
    value: "#FFFDF9",
    className: "surface",
    use: "Raised content fields",
  },
  {
    name: "Limestone",
    value: "#D5CEC2",
    className: "limestone",
    use: "Material blocks",
  },
  {
    name: "Grout",
    value: "#AAA197",
    className: "grout",
    use: "Secondary structure",
  },
  {
    name: "Charcoal",
    value: "#2E2E2E",
    className: "charcoal",
    use: "Text and dark fields",
  },
  {
    name: "K.Style orange",
    value: "#FF7A00",
    className: "brand",
    use: "Conversion accent only",
  },
] as const;

const categories = ["Tiles", "Flooring", "Bathrooms", "Beds & mattresses"];

export default function DesignSystemPreview() {
  return (
    <>
      <a className={styles.skipLink} href="#design-preview">
        Skip to design preview
      </a>

      <main className={styles.page} id="design-preview">
        <header className={styles.masthead}>
          <div className={styles.mastheadMeta}>
            <p>Internal design preview</p>
            <p>K.Style · Tiles & Interiors</p>
          </div>

          <div className={styles.brandRule} aria-hidden="true" />

          <div className={styles.mastheadTitle}>
            <h1>
              <span>Spaces,</span>
              <span>beautifully considered.</span>
            </h1>
            <p>
              A material-led editorial system for a premium, approachable
              interiors retailer. This is direction-setting—not a homepage.
            </p>
          </div>

          <nav className={styles.previewNav} aria-label="Design preview sections">
            <a href="#colour">Colour</a>
            <a href="#type">Typography</a>
            <a href="#composition">Composition</a>
            <a href="#conversion-preview">Conversion</a>
          </nav>
        </header>

        <section className={styles.section} id="colour" aria-labelledby="colour-title">
          <div className={styles.sectionHeading}>
            <p>01 · Foundation</p>
            <h2 id="colour-title">Colour drawn from material, not decoration.</h2>
            <p>
              Photography supplies richness. The interface stays quiet, with
              orange reserved for action, offers, and orientation.
            </p>
          </div>

          <div className={styles.swatchGrid}>
            {swatches.map((swatch) => (
              <article className={styles.swatch} key={swatch.name}>
                <div
                  className={`${styles.swatchColour} ${styles[swatch.className]}`}
                  aria-hidden="true"
                />
                <div className={styles.swatchDetails}>
                  <h3>{swatch.name}</h3>
                  <p>{swatch.use}</p>
                  <code>{swatch.value}</code>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.typeSection}`} id="type" aria-labelledby="type-title">
          <div className={styles.typeIntroduction}>
            <p>02 · Typography</p>
            <h2 id="type-title">Editorial character. Retail clarity.</h2>
            <p>
              Newsreader shapes the visual voice; Work Sans handles navigation,
              details, pricing, and forms with quiet precision.
            </p>
          </div>

          <div className={styles.typeSpecimens}>
            <div className={styles.displaySpecimen}>
              <p className={styles.specimenName}>Newsreader Variable</p>
              <p className={styles.displaySample}>Material changes a room.</p>
              <p className={styles.specimenNote}>
                Display 200–800 · optical editorial forms · short measures
              </p>
            </div>

            <div className={styles.bodySpecimen}>
              <p className={styles.specimenName}>Work Sans Variable</p>
              <p className={styles.bodySample}>
                Tiles, flooring, bathrooms, beds and interior products—selected
                with personal service in Donegal Town.
              </p>
              <p className={styles.specimenNote}>
                Body and UI 400–650 · 60–75 character measure
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="composition" aria-labelledby="composition-title">
          <div className={styles.sectionHeading}>
            <p>03 · Composition</p>
            <h2 id="composition-title">A sample board, translated into space.</h2>
            <p>
              Large room views establish atmosphere. Narrow crops reveal grain,
              glaze, edge, and texture. Type aligns to the same underlying grid.
            </p>
          </div>

          <div className={styles.compositionGrid}>
            <div className={`${styles.imagePlaceholder} ${styles.imageLandscape}`}>
              <span>Landscape interior photography</span>
              <small>16:10 · room context · restrained negative space</small>
            </div>
            <div className={`${styles.imagePlaceholder} ${styles.imageDetail}`}>
              <span>Material detail</span>
              <small>4:5 · surface, edge, grain</small>
            </div>
            <div className={styles.categoryIndex}>
              <p>Category discovery study</p>
              <ol>
                {categories.map((category) => (
                  <li key={category}>
                    <a href="#preview-actions">{category}</a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.offerSection}`} aria-labelledby="offer-title">
          <div className={styles.offerMarker}>Special offer</div>
          <div className={styles.offerCopy}>
            <p>Offer treatment preview</p>
            <h2 id="offer-title">Commercial, without becoming promotional noise.</h2>
            <p>
              Genuine product imagery and verified pricing will sit here. The
              orange marker signals value while the layout keeps the product
              presentation calm.
            </p>
          </div>
          <dl className={styles.offerPrices}>
            <div>
              <dt>Previous price</dt>
              <dd>To be supplied</dd>
            </div>
            <div>
              <dt>Current offer</dt>
              <dd>To be supplied</dd>
            </div>
          </dl>
        </section>

        <section
          className={styles.conversionSection}
          id="conversion-preview"
          aria-labelledby="conversion-title"
        >
          <div className={styles.conversionIntro}>
            <p>Signature enquiry concept</p>
            <h2 id="conversion-title">Seen something you love?</h2>
            <p>
              Send K.Style an inspiration image and explain what you are looking
              for. The future flow should feel as considered as choosing the
              material itself.
            </p>
            <ActionLink href="#preview-actions">Send us your inspiration</ActionLink>
          </div>

          <ol className={styles.conversionSteps}>
            <li>
              <span>1</span>
              <div>
                <h3>Add a photo</h3>
                <p>Camera or photo library, with clear file guidance.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <h3>Tell us what caught your eye</h3>
                <p>A short, optional description—not an overwhelming form.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <h3>Choose how to hear back</h3>
                <p>Visible labels, useful input types, and explicit consent.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className={`${styles.section} ${styles.actionsSection}`} id="preview-actions" aria-labelledby="actions-title">
          <div>
            <p>04 · Actions</p>
            <h2 id="actions-title">One clear action at each decision point.</h2>
          </div>
          <div className={styles.actionSamples}>
            <ActionLink href="#conversion-preview">Request a quote</ActionLink>
            <ActionLink href="#composition" variant="dark">
              Visit the showroom
            </ActionLink>
            <ActionLink href="#type" variant="text">
              Explore the system
            </ActionLink>
          </div>
        </section>

        <footer className={styles.previewFooter}>
          <p>K.Style design foundation · Phase 2</p>
          <p>Internal preview · Not production content</p>
        </footer>
      </main>
    </>
  );
}
