import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import Translate, {translate} from '@docusaurus/Translate';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Jai Jinendra from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={styles.heroBanner}>
          <h1>
            <Translate>
              Welcome to Insight Jainism 🙏
            </Translate>
          </h1>
          <p>
            <Translate>
              Your one-stop destination to get the true insights of Jainism's core
              concepts, cosmos, spirituality, mythologies and a lot more - curated
              and simplified for the future Siddhas!
            </Translate>
          </p>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
