import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={styles.heroBanner}>
          <h1>Welcome to Insight Jainism 🙏</h1>
          <p>
            Your one-stop destination to get the true insights of Jainism's core
            concepts, cosmos, spirituality, mythologies and a lot more - curated
            and simplified for the future Siddhas!
          </p>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
