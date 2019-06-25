import React from 'react';
import { View, Text } from 'react-native';

const Page = ({ width, height, children }) => (
  <View style={{ width, height, flex: 1 }}>
    {children}
  </View>
);

const PageContent = ({ children }) => (
  <View style={styles.content}>
    <View style={{ flex: 0, justifyContent: 'space-between' }}>
      {children}
    </View>
  </View>
);

const PageData = ({ isLight, image, title, subtitle, titleStyles, subtitleStyles, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <View>
        <Text style={[styles.title, titleStyles, (isLight ? styles.titleLight : {}) ]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, subtitleStyles, (isLight ? styles.subtitleLight : {}) ]}>
          {subtitle}
        </Text>
      </View> 
    </PageContent>
  </Page>
);

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0,
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    color: '#fff',
    paddingBottom: 11,
  },
  titleLight: {
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
};

export default PageData;
