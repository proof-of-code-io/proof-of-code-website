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
        talkProposalUrl: "#",
        //textBlocksPath: `${__dirname}/src/text-blocks`,
        currentMeetupColor: "#EFCC74",
        pastMeetupColors: ["#E6BB91", "#DDDEC4", "#F3DBD1"]
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
