import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  article = [
    {
      source: { id: "associated-press", name: "Associated Press" },
      author:
        "JULIE CARR SMYTH, JILL COLVIN, COLLEEN LONG, MICHAEL BALSAMO, ERIC TUCKER, MICHELLE L. PRICE",
      title:
        "Trump heads to convention as authorities investigate motive, security in assassination attempt - The Associated Press",
      description:
        "Former President Donald Trump is calling for unity and resilience after an attempt on his life added fresh uncertainty to a tumultuous presidential campaign. His opponent, President Joe Biden, implored Americans to “cool it down” in the final stretch of the c…",
      url: "https://apnews.com/article/trump-rally-assassination-attempt-db24c5bfbbe7d09fa2437c3c836bb434",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b3b6875/2147483647/strip/true/crop/4189x2356+0+218/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F%5B-%2F57%2F%2C%20-80%2C%2031%2C%2038%2C%20-86%2C%2061%2C%2053%2C%2080%2C%20-109%2C%2031%2C%2080%2C%20-117%2C%20-101%2C%20-37%2C%20-122%2C%20104%2C%20-49%2C%2039%2C%20-54%2C%2089%2C%20-80%2C%20-24%2C%2033%2C%20-126%2C%20-3%2C%2025%2C%20-122%2C%20-85%5D%2Fd964c24c093f4639afc081a07571025d",
      publishedAt: "2024-07-15T03:49:00Z",
      content:
        "BUTLER, Pa. (AP) Former President Donald Trump called for unity and resilience Sunday after an attempt on his life injected fresh uncertainty into an already tumultuous presidential campaign, while P… [+8774 chars]",
    },
    {
      source: { id: "espn", name: "ESPN" },
      author: "ESPN News Services",
      title: "Messi forced off in tears in Copa América final - ESPN",
      description:
        "Lionel Messi was forced off with an apparent right ankle injury in the second half of the Copa América final between Argentina and Colombia at Miami's Hard Rock Stadium.",
      url: "https://www.espn.com/soccer/story/_/id/40564886/lionel-messi-argentina-injury-tears-copa-america-final",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0715%2Fr1358815_1296x729_16%2D9.jpg",
      publishedAt: "2024-07-15T03:02:00Z",
      content:
        "Jul 14, 2024, 11:02 PM ET\r\nLionel Messi was forced off with an apparent right ankle injury in the second half of Argentina's 1-0 Copa América final win over Colombia at Miami's Hard Rock Stadium on S… [+1908 chars]",
    },
    {
      source: { id: null, name: "HuffPost" },
      author: "Krissy Brady",
      title:
        "If You're Doing This In Your Sleep, It's Time To See A Doctor - BuzzFeed",
      description:
        "Experts reveal symptoms that strike during nighttime rest and what those signs might mean for your health.",
      url: "https://www.huffpost.com/entry/sleep-signs-health-problem_l_629f7d88e4b07aa9389e9dcd",
      urlToImage:
        "https://img.huffingtonpost.com/asset/629fa6a0250000950f4731cc.jpeg?cache=HOxhrhr9Ur&ops=1200_630",
      publishedAt: "2024-07-15T02:16:02Z",
      content:
        "Stress. Anxiety. Noisy neighbors. Blanket-hogging partners. With the list of things that can disturb a persons sleep being more of a scroll, its no wonder an estimated 50 to 70 million Americans are … [+13691 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author:
        "MICHAEL BIESECKER, ALANNA DURKIN RICHER, JIM MUSTIAN, MICHAEL BALSAMO",
      title:
        "Authorities hunt for clues, but motive of man who tried to assassinate Donald Trump remains elusive - The Associated Press",
      description:
        "Investigators are hunting for any clues about what may have drove Thomas Matthew Crooks to try to assassinate former President Donald Trump. The FBI said Sunday that they were investigating it as a potential act of domestic terrorism, but the absence of a cle…",
      url: "https://apnews.com/article/trump-assassination-attempt-thomas-matthew-crooks-shooter-881581c46c07025898027143fc9132e5",
      urlToImage:
        "https://dims.apnews.com/dims4/default/101d557/2147483647/strip/true/crop/5384x3029+0+280/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F%5B3%2F0%2C%2F%20-16%2C%20-69%2C%20-110%2C%20-41%2C%20-104%2C%2027%2C%208%2C%20-68%2C%20-54%2C%20-49%2C%20117%2C%20-8%2C%20-74%2C%20108%2C%2043%2C%20-102%2C%20-11%2C%20-95%2C%20105%2C%20108%2C%20110%2C%2047%2C%2099%2C%2029%2C%20-122%2C%20-33%2C%20121%5D%2F21293c5e596d4f9c8ba1e3a4f1cbead9",
      publishedAt: "2024-07-15T02:07:00Z",
      content:
        "WASHINGTON (AP) The 20-year-old man who tried to assassinate former President Donald Trump first came to law enforcements attention at Saturdays rally when spectators noticed him acting strangely out… [+7036 chars]",
    },
    {
      source: { id: null, name: "Vulture" },
      author: "Brian Grubb",
      title: "House of the Dragon Scorecard: Burn Notice - Vulture",
      description:
        "While everyone else is raising armies and rounding up dragons, Mysaria is fighting the battle of hot gossip, landing her at the top of this week’s HOTD Scorecard.",
      url: "http://www.vulture.com/article/house-of-the-dragon-s3-episode-5-regent-character-scorecard-rankings.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/fbc/e53/9b2077c26a58befae2096f63b698a77357-sonoya-mizuno.1x.rsocial.w1200.jpg",
      publishedAt: "2024-07-15T02:00:37Z",
      content:
        "The House of the Dragon Scorecard is an accounting of the events of this weeks episode, in which points are awarded to characters on a scale of 0 to 10. Points will be awarded for any or no reason.\r\n… [+11584 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Glenn Garner",
      title:
        "James B. Sikking Dies: ‘Hill Street Blues’, ‘Doogie Howser, M.D.’ Actor Was 90 - Deadline",
      description:
        "James B. Sikking died of Dementia on Saturday at his Los Angeles home, surrounded by family.",
      url: "http://deadline.com/2024/07/james-b-sikking-dies-90-hill-street-blues-doogie-howser-md-actor-1236010148/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2024/07/James-B-Sikking-149602493.jpg?w=1024",
      publishedAt: "2024-07-15T01:53:00Z",
      content:
        "James B. Sikking, the actor known for his roles on shows like Hill Street Blues and Doogie Howser, M.D., has died. He was 90.\r\nSikking died of dementia Saturday at his Los Angeles home, where his pub… [+1630 chars]",
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: "Joel Reuter",
      title:
        "2024 MLB Draft Picks: Live Team-by-Team Day 1 Grades and Analysis - Bleacher Report",
      description:
        "Welcome to Bleacher Report's 2024 MLB draft tracker! Once again, the draft is being held during the MLB All-Star festivities, with this year's event spanning…",
      url: "https://bleacherreport.com/articles/10128170-2024-mlb-draft-picks-live-team-by-team-day-1-grades-and-analysis",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/x_0,y_0,w_1800,h_1195,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1720978637/thknfxjdifihxr0vm2s2.jpg",
      publishedAt: "2024-07-15T01:47:34Z",
      content:
        "First Round (No. 17 Overall): Braylon Payne, OF, Elkins HS (TX)\r\nPayne has three plus tools with elite speed, a terrific glove in center field and a solid hit tool that gives him a top-of-the-order, … [+2763 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title:
        "Rwanda election: Paul Kagame seeks fourth term as president - BBC.com",
      description:
        "The leader of the East African country has won over 90% of the vote in all the elections he has run in.",
      url: "https://www.bbc.com/news/articles/cx02l558wkqo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/ec1f/live/3198f820-4073-11ef-96a8-e710c6bfc866.jpg",
      publishedAt: "2024-07-15T01:41:13Z",
      content:
        "By Danai Nesta Kupemba, BBC News, London\r\nRwanda's President Paul Kagame, feared and admired in equal measure, is seeking to extend his 24-year rule in an election analysts say he will win by a lands… [+4737 chars]",
    },
    {
      source: { id: null, name: "LA Daily News" },
      author: "City News Service, Luca Evans",
      title:
        "Former USC receiver Jordan Addison, now with Vikings, arrested near LAX on suspicion of DUI - LA Daily News",
      description:
        "The player was found asleep at the wheel of a Rolls-Royce, authorities said Sunday.",
      url: "https://www.dailynews.com/2024/07/14/former-usc-receiver-jordan-addison-now-with-vikings-arrested-near-lax-for-alleged-dui/",
      urlToImage:
        "https://www.dailynews.com/wp-content/uploads/2024/07/LDN-L-USC-FBC-0805-KB4.jpg?w=1024&h=690",
      publishedAt: "2024-07-15T01:30:19Z",
      content:
        "EL SEGUNDO — Former USC wide receiver and current Minnesota Vikings star Jordan Addison was arrested on suspicion of driving under the influence after being caught asleep at the wheel near LAX, autho… [+2216 chars]",
    },
    {
      source: { id: null, name: "Vogue" },
      author: "Elise Taylor",
      title:
        "Exclusive: Inside Anant Ambani and Radhika Merchant’s Final Wedding Celebration in Mumbai - Vogue",
      description:
        "From custom fashions to priceless jewels, here's an unprecedented look inside the highly anticipated Ambani wedding of Anant Ambani and Radhika Merchant.",
      url: "https://www.vogue.com/slideshow/anant-ambani-radhika-merchant-wedding-exclusive",
      urlToImage:
        "https://assets.vogue.com/photos/6693c284cc89c91f4aa2c016/16:9/w_2580,c_limit/RADHIKA%20MERCHNAT%20AMBANI%20By%20LUIS%20MONTEIRO%202.jpg",
      publishedAt: "2024-07-15T01:00:00Z",
      content:
        "Pinned on his chest was a cheetah brooch, a nod to his 3,000-acre animal rescue sanctuary Vantara in Gujarat. Isha, meanwhile, wore a custom Schiaparelli saree: a first for the French haute couture h… [+2252 chars]",
    },
    {
      source: { id: null, name: "Minneapolis Star Tribune" },
      author: "Kent Youngblood, Star Tribune",
      title:
        "Lynx fall to Fever 81-74 in front of Target Center packed to see Caitlin Clark - Star Tribune",
      description:
        "Indiana dominated the fourth quarter, outscoring the home team 28-14 to send the Lynx to their fifth loss in eight games.",
      url: "https://www.startribune.com/wnba-minnesota-lynx-indiana-fever-caitlin-clark-target-center/600380717/",
      urlToImage:
        "https://arc.stimg.co/startribunemedia/YC3EJNOB6BEKXFO32FHF7QTTPA.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
      publishedAt: "2024-07-15T00:43:17Z",
      content:
        "Target Center was full Sunday, but the Lynx offense hit empty after 30 minutes.\r\nThis is becoming an issue.\r\nAn announced crowd of 18,978 the biggest in Lynx regular-season history came out to watch … [+3148 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Harrison Smith",
      title:
        "Shannen Doherty, a star of ‘90210’ and ‘Charmed,’ dies at 53 - The Washington Post",
      description:
        "She starred in the dark comedy “Heathers” before playing an impulsive teenager on “Beverly Hills, 90210.”",
      url: "https://www.washingtonpost.com/obituaries/2024/07/14/shannen-doherty-90210-actress-dead/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/X4LOFLXBFQI63J4OTJ6CIGFQBQ_size-normalized.jpg&w=1440",
      publishedAt: "2024-07-15T00:36:40Z",
      content:
        "Shannen Doherty, a raven-haired actress best known for portraying an impulsive teenager on the TV drama Beverly Hills, 90210 and a flirty witch in the popular fantasy series Charmed, died July 13 in … [+6865 chars]",
    },
    {
      source: { id: null, name: "NPR" },
      author: "NPR",
      title:
        "A would-be assassin targets Trump. What it could mean for America. - NPR",
      description:
        "Shortly after 6pm on Saturday, a would-be assassin took aim at former President Donald Trump at a campaign rally in Butler, Pennsylvania.<br><br>Trump and two others were injured and one person was killed before the Secret Service shot and killed the alleged …",
      url: "https://www.npr.org/2024/07/14/1198912902/would-be-assassin-targets-trump",
      urlToImage:
        "https://media.npr.org/assets/img/2024/07/14/gettyimages-2161923146_wide-4bf54bea2fe861dbed270ab765f1dde2d6e58ae3.jpg?s=1400&c=100&f=jpeg",
      publishedAt: "2024-07-15T00:18:53Z",
      content:
        "Republican presidential candidate former President Donald Trump pumps his fist as he is rushed offstage during a rally on July 13, 2024 in Butler, Pennsylvania.\r\nAnna Moneymaker/Getty Images\r\nShortly… [+1015 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Maya Davis",
      title:
        "After ‘historic backslide’ during pandemic, global childhood immunization rates stall, new data shows - CNN",
      description:
        "Although the Covid-19 pandemic saw unprecedented speed in the development and distribution of coronavirus vaccines, experts say it was also marked by a significant and concerning drop in the rate of routine vaccinations. New data from the World Health Organiz…",
      url: "https://www.cnn.com/2024/07/14/health/immunization-rates-report/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/ap24063369852876.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-07-15T00:01:00Z",
      content:
        "Although the Covid-19 pandemic saw unprecedented speed in the development and distribution of coronavirus vaccines, experts say it was also marked by a significant and concerning drop in the rate of … [+7623 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Milana Vinn, Steven Scheer",
      title:
        "Google parent in talks to buy cybersecurity startup Wiz for $23 billion - Reuters",
      description:
        "Google parent Alphabet is in advanced talks to acquire cybersecurity startup Wiz for roughly $23 billion, a person familiar with the matter said on Sunday, in a deal that would represent the technology giant's biggest acquisition ever.",
      url: "https://www.reuters.com/markets/deals/google-parent-close-23-billion-deal-buy-cybersecurity-startup-wiz-wsj-reports-2024-07-14/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/JOZ65T3WQVLQ5DUIDTWKTKP3UA.jpg?auth=6f351298cc5d5af7d443e3641762ea564453ff5f37f9ff702890a13bbf348a72&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-07-14T23:56:00Z",
      content: null,
    },
    {
      source: { id: null, name: "CNET" },
      author: null,
      title:
        "Best Prime Day Headphone Deals: Jam Along to Big Savings on Apple, Beats, JBL and More - CNET",
      description:
        "Prime Day is heating up, and you can save money now on quality headphones from top brands.",
      url: "https://www.cnet.com/deals/best-prime-day-headphone-deals-2024-07-14/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/f325962cf29c1abe84571e74d57f775f32a7396e/hub/2024/07/11/8bc1142f-5afa-4b58-a577-94d75de907db/headphone-deals.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-07-14T23:44:00Z",
      content:
        "Sony/Apple/CNET\r\nA quality pair of headphones will elevate the quality of your music, cut down on background noise and so much more. This Prime Day, you can save big on some of our favorite headphone… [+4364 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Yun Li",
      title:
        "Stock futures rise slightly as investors look to earnings to keep lifting market to records: Live updates - CNBC",
      description:
        "The major benchmarks just came off another solid week as easing inflation data fueled rate-cut bets.",
      url: "https://www.cnbc.com/2024/07/14/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107099147-NYSE-Trading-Floor-OB-Photo-220804-CC-PRESS-4.jpg?v=1708556665&w=1920&h=1080",
      publishedAt: "2024-07-14T23:02:00Z",
      content:
        "Stock futures were slightly higher in overnight trading Sunday as investors gear up for a big week of key corporate earnings.\r\nFutures on the Dow Jones Industrial Average rose 60 points, or 0.2%. S&a… [+2038 chars]",
    },
    {
      source: { id: null, name: "VOA News" },
      author: "VOA Learning English",
      title:
        "NASA Researchers End One-year Mars Habitat Mission - VOA Learning English",
      description:
        "Four scientists have left a model Mars environment where they lived in isolation for more than a year. The project is designed to help NASA planners better understand how living on another world could affect human health and performance.",
      url: "https://learningenglish.voanews.com/a/nasa-researchers-end-one-year-mars-habitat-mission/7694318.html",
      urlToImage:
        "https://gdb.voanews.com/01000000-0aff-0242-d4e4-08dca1eef65a_cx0_cy2_cw0_w1200_r1.jpg",
      publishedAt: "2024-07-14T22:05:00Z",
      content:
        "Four scientists have left a model Mars environment where they lived in isolation for more than a year.\r\nThe crew took part in the experiment for the American space agency NASA. Team members included … [+4346 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Wes Davis",
      title:
        "AT&T reportedly gave $370,000 to a hacker to delete its stolen customer data - The Verge",
      description:
        "AT&T negotiated with a liaison to pay a hacker hundreds of thousands of dollars to delete customer data that had been stolen in a mass-cyberattack earlier this year.",
      url: "https://www.theverge.com/2024/7/14/24198294/att-paid-370000-ransom-hacked-customer-data-deleted-may",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/njRxlZ86sgSJgQZRrBbnyslkd1A=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23318438/akrales_220309_4977_0305.jpg",
      publishedAt: "2024-07-14T21:36:15Z",
      content:
        "AT&amp;T reportedly gave $370,000 to a hacker to delete its stolen customer data\r\nAT&amp;T reportedly gave $370,000 to a hacker to delete its stolen customer data\r\n / The company negotiated through a… [+1437 chars]",
    },
    {
      source: { id: null, name: "The Texas Tribune" },
      author: "By Pooja Salhotra",
      title:
        "Abbott reprimands CenterPoint and calls for an investigation into the utility’s response to Beryl blackouts - The Texas Tribune",
      description:
        "Abbott demanded that the utility company produce a plan by the end of July outlining how it will improve power reliability ahead of future storms.",
      url: "https://www.texastribune.org/2024/07/14/abbott-centerpoint-energy-hurricane-beryl/",
      urlToImage:
        "https://thumbnails.texastribune.org/7OWEyxYtf21rOo_qWpIRNI7D2dg=/1200x630/filters:quality(95):focal(0x0:3000x2000)/static.texastribune.org/media/files/5f82b486a30c5c531d8372bb9676127e/0714%20Abbott%20Beryl%20Presser%20DS%20TT%2001.jpg",
      publishedAt: "2024-07-14T21:24:43Z",
      content:
        "Were testing using AI-powered tools to provide an audio version of this story. While this audio recording is machine-generated, the story was written by human journalists. Read more on our AI policy.… [+7606 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>News - Top Headlines </h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newsitem
                  title={element.title.slice(0, 20)}
                  description={element.description.slice(0, 80)}
                  url={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

// 916dbe69585b478aa27c27f9d66e0aed
