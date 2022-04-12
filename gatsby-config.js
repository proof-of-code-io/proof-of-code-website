module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup",
      options: {
        meetupName: "Proof of Code",
        meetupHomepageHeadline: "The Web3 meetup for developers 🍵",
        meetupDotComGroupUrlName: "proof-of-code",
        displayVideosLink: false,
        //meetupVideosUrl = 'https://www.youtube.com/channel/UC66eQOycjMnaqzpbRUhEK2w'
        talkProposalUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdCTzRg2X_RhGvDbXIPXtGPmmxP2TOPL7dk2Ujke_jZ2cqj1Q/viewform",
        textBlocksPath: `${__dirname}/src/text-blocks`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`
      }
    }
  ]
};
