import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate>Concepts</Translate>,
    src: require("@site/static/img/concepts.jpg").default,
    href: "/docs/category/concepts",
    description: (
      <>
      <Translate>
        Jainism being a scientific and logical religion contains tons of
        fundamentals and concepts to understand. This section focuses on
        them!
      </Translate>
      </>
    ),
  },
  {
    title: <Translate>Scriptures</Translate>,
    href: "/docs/category/scriptures",
    src: require("@site/static/img/scriptures.jpg").default,
    description: (
      <>
      <Translate>
      There are hundreds of Jainism Scriptures to read and we need to
      implement what's taught in them. Summary of some of those 
      scriptures can be found here!
      </Translate>
      </>
    ),
  },
  {
    title: <Translate>Biographies</Translate>,
    href: "/docs/category/biographies",
    src: require("@site/static/img/biographies.jpg").default,
    description: (
      <>
      <Translate>
        We all are indebted to the great Acharyas and Vidvaans. Know who were
        they, about their life and lessons from them!
      </Translate>
      </>
    ),
  },
  {
    title: <Translate>Insights</Translate>,
    href: "/docs/category/insights",
    src: require("@site/static/img/insights.jpg").default,
    description: (
      <>
      <Translate>
        There are a lot of interesting and in-depth things in Jainism. `Insights`
        portrays them in a beautiful and simplified way so that we can grasp
        them easily.
      </Translate>
      </>
    ),
  },
  {
    title: <Translate>Stories</Translate>,
    href: "/docs/category/stories",
    src: require("@site/static/img/stories.jpg").default,
    description: (
      <>
      <Translate>
        We all love stories, ain't we? Historical events teach us a lot about
        Jainism. Read those mythological stories in this section!
      </Translate>
      </>
    ),
  },
];

function Feature({ href, src, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <img src={src} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center">
        <a href={href}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
