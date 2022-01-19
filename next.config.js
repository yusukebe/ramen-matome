module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</favicon.ico>; rel=preload',
          },
        ],
      },
    ]
  },
}