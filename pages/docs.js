import React from 'react';
import Page from '../components/page';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SocialMeta from '../components/social-meta';
import { MediaQueryConsumer } from '../components/media-query';

import Docs from '../components/docs/docs';

export default class DocsPage extends React.Component {
  static async getInitialProps({ query }) {
    let docs = '';

    const version = query.v || '0.1.0';
    
    if (!process.browser) {
      const fs = require('fs');
      const root = `./components/docs/versions/${version}/`;
      
      const jsonPath = root + 'pages.json';
      if (fs.existsSync(jsonPath)) {
        const pages = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        pages.forEach(page => {
          const path = root + page;
          if (fs.existsSync(path)) {
            docs += fs.readFileSync(path, 'utf8');
          }
        });
      }
    }

    return { docs, version };
  }

  render() {
    const { docs, version } = this.props;
    return (
      <Page title="CameraKit | Documentation">
        <MediaQueryConsumer>
          {({ isMobile }) => (
            <Header
              height={0}
              offset={0}
              distance={32}
              shadow
              active={0}
            >
              <Navbar />
            </Header>
          )}
        </MediaQueryConsumer>
        <Docs docs={docs} version={version} />
        <Footer />
      </Page>
    );
  }
}
