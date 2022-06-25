import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Concepts",
    src: require("@site/static/img/concepts.jpg").default,
    href: "/docs/category/concepts",
    description: (
      <>
        Jainism being a scientific and logical religion, there are tons of
        fundamentals and concepts to understand. This section focusses on
        exactly them!
      </>
    ),
  },
  {
    title: "Scriptures",
    href: "/docs/category/scriptures",
    src: require("@site/static/img/scriptures.jpg").default,
    description: (
      <>
        Hundreds of Jainism Scriptures to read and implement what's taught in
        them. Summary of some of those scriptures can be found here!
      </>
    ),
  },
  {
    title: "Biographies",
    href: "/docs/category/biographies",
    src: require("@site/static/img/biographies.jpg").default,
    description: (
      <>
        We all are indebted to the great Acharyas and Vidvaans. Know who were
        they, about their life and lessons from them!
      </>
    ),
  },
  {
    title: "Insights",
    href: "/docs/category/insights",
    src: require("@site/static/img/insights.jpg").default,
    description: (
      <>
        There are a lot of interesting and depth things in Jainism. `Insights`
        portrays them in a beautiful and simplified way so that we can grasp
        them easily.
      </>
    ),
  },
  {
    title: "Stories",
    href: "/docs/category/stories",
    src: require("@site/static/img/stories.jpg").default,
    description: (
      <>
        We all love stories, ain't we? Historical events teach us a lot about
        Jainism. Read those mythological stories in this section!
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
