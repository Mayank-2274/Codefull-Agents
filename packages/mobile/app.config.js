module.exports = {
  name: "Seva Sahayak",
  slug: "seva-sahayak",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#F0E6D2"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.sevasahayak.app"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#F0E6D2"
    },
    package: "com.sevasahayak.app"
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "seva-sahayak"
    }
  }
}
