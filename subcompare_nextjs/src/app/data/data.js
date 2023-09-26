const dataAll = {
    "OTT / Streaming": {
        "Netflix": {
            price: 6.99,
            details: "Netflix details goes here",
            link: "https://www.netflix.com/signup",
        },
        "Hulu": {
            price: 7.99,
            details: "Netflix details goes here",
            link: "https://help.hulu.com/s/article/how-much-does-hulu-cost"
        },
        "Disney+": {
            price: 7.99,
            details: "Netflix details goes here",
            link: "https://help.disneyplus.com/article/disneyplus-price?redirect=false"
        },
        "Paramount+": {
            price: 5.99,
            details: "Netflix details goes here",
            link: "https://www.paramountplus.com/account/signup/pickplan/"
        },
        "Max": {
            price: 9.99,
            details: "Netflix details goes here",
            link: "https://help.max.com/US/Answer/Detail/000002547"
        },
        "Peacock": {
            price: 5.99,
            details: "Netflix details goes here",
            link: "https://www.peacocktv.com/plans/all-monthly"
        },
        "Discovery+": {
            price: 4.99,
            details: "Discovery+ details goes here",
            link: "https://help.discoveryplus.com/hc/en-us/articles/360058773493-Cost-of-discovery-subscription-plans"
        },
        "Apple TV+": {
            price: 6.99,
            details: "Netflix details goes here",
            link: "https://www.apple.com/apple-tv-plus/?itscg=10000&itsct=atv-0-apl_hp-pmo_lrn-apl-avl-210916"
        },
        "ESPN+": {
            price: 9.99,
            details: "Netflix details goes here",
            link: "https://plus.espn.com"
        },
        "Amazon Prime Video": {
            price: 8.99,
            details: "Amazon Prime Video details goes here",
            link: "https://www.amazon.com/gp/help/customer/display.html?nodeId=G34EUPKVMYFW8N2U"
        }
    },
    "Music": {
        // https://www.pcmag.com/picks/the-best-online-music-streaming-services
        "Apple Music": {
            price: 10.99,
            details: "Netflix details goes here",
            link: "https://www.apple.com/apple-music/#plans"
        },
        "Spotify": {
            price: 9.99,
            details: "Netflix details goes here",
            link: "https://www.spotify.com/us/premium/"
        },
        "Tidal": {
            price: 10.99,
            details: "Netflix details goes here",
            link: "https://tidal.com/pricing"
        },
        "Youtube Music": {
            price: 10.99,
            details: "Youtube Music details goes here",
            link: "https://music.youtube.com/music_premium"
        },
        "Deezer": {
            price: 9.99,
            details: "Netflix details goes here",
            link: "https://www.deezer.com/us/offers"
        },
        "SoundCloud Go+": {
            price: 8.99,
            details: "Netflix details goes here",
            link: "https://checkout.soundcloud.com/go"
        },
        "LiveOne": {
            price: 2.99,
            details: "LiveOne Details goes here",
            link: "https://www.liveone.com/upgrade"
        },
        "SiriusXM Internet Radio": {
            price: 13.99,
            details: "SiriusXM Internet Radio Details goes here",
            link: "https://www.siriusxm.com/plans"
        },
        "Amazon Music Unlimited": {
            price: 9.99,
            details: "Amazon Music Unlimited Details goes here",
            link: "https://www.amazon.com/music/unlimited"
        }
    },
    "Fitness": {
        // https://www.verywellfit.com/best-gym-memberships-4780237
        "24 Hour Fitness": {
            price: 20,
            details: "24 hour fitness details goes here DEPENDS on Location!",
            link: "https://www.24hourfitness.com/membership/membership-options/"
        },
        "LA Fitness": {
            price: 19.99,
            details: "LA Fitness extensive selection of machines and free weights and its focus on strength training and overall fitness DEPENDS on Location!",
            link: "https://www.lafitness.com/Pages/MembershipSignUpSearch.aspx"
        },
        "Gold's Gym": {
            price: 35,
            details: "Netflix details goes here",
            link: "https://www.goldsgym.com/join-golds-gym-now/"
        },
        "Planet Fitness": {
            price: 10,
            details: "Planet Fitness details goes here",
            link: "https://www.planetfitness.com/gym-memberships"
        },
        "Anytime Fitness": {
            price: 41,
            details: "Netflix details goes here",
            link: "https://www.anytimefitness.com/membership/"
        },
        "Equinox": {
            price: 200,
            details: "Equinox earned the top spot for luxury and because of its lavish environment, expert instructors, top-of-the-line equipment, and endless amenities.",
            link: "https://www.equinox.com/clubs?icmp=home-clubs"
        },
        "Crunch Fitness": {
            price: 14.99,
            details: "budget-friendly package with plenty of group classes. Bump up to a Signature location, and you’ll have access to some of the top fitness classes around.",
            link: "https://www.crunch.com/locations"
        }
    },
    "E-Book and Audiobook": {
        // https://www.wired.com/gallery/best-ebook-subscription-services/
        "Audible": {
            price: 8,
            details: "This slick audiobook subscription service boasts countless titles covering modern best sellers, classics, and much more.",
            link: "https://www.audible.com/ep/memberbenefits"
        },
        "Kindle Unlimited": {
            price: 10,
            details: "While there are some popular titles and classics on offer, the bulk of the library is self-published and indie titles; best-selling authors generally only offer their back catalogs. Kindle Unlimited also includes some popular magazines, and many of the ebooks support Audible Narration.",
            link: "https://www.amazon.com/kindle-dbs/hz/subscribe/ku?ref=abpmku_23_3_us_psr_gs_r_mn_x_3mft_lps_GPVRxZMQZq_pbdd&gclid=EAIaIQobChMIj6rrisTIgQMV6CStBh0m5w5FEAAYASAAEgKxZ_D_BwE"
        },
        "Scribd": {
            price: 11.99,
            details: "With an enormous, varied library, Scribd is the best ebook subscription service for most people. You can read or listen via your browser on any device or use the Android or iOS apps, which are clearly laid out, fully configurable, and make for a pleasant reading experience. I had no trouble finding intriguing titles, and there’s a solid mix of classics, best sellers, indie books, and even some Scribd Originals. Progress syncs across devices, so you can pick up where you left off. You can download ebooks to read offline. Scribd also includes podcasts, magazines, and a document section enabling people to upload whatever they like.",
            link: "https://www.scribd.com/subscribe"
        },
        "Kobo Plus": {
            price: 8,
            details: "The Kobo Plus subscription service is now available in the US, Australia, Canada, New Zealand, the UK, and parts of Europe. It currently boasts more than 1.3 million ebooks and around 100,000 audiobooks.",
            link: "https://www.kobo.com/us/en/plus"
        },
        "Epic!": {
            price: 10,
            details: "Perhaps the largest platform dedicated to kids aged 12 and under, Epic has an interesting mix of content that includes more than 40,000 ebooks",
            link: "https://www.getepic.com"
        }
    },
    "Learning / Course Platforms": {
        // https://www.learnworlds.com/best-online-course-platforms/
        "Udemy": {
            price: 15,
            details: "Netflix details goes here",
            link: "https://www.udemy.com"
        },
        "Coursera": {
            price: 33.25,
            details: "Netflix details goes here",
            link: "https://www.coursera.org/courseraplus?utm_medium=sem&utm_source=gg&utm_campaign=B2C_GLOBAL__coursera_FTCOF_courseraplus_coursera-plus-sitelink-2-try-coursera-plus&campaignid=380484307&adgroupid=43726360517&device=c&keyword=coursera%20pricing&matchtype=b&network=g&devicemodel=&adposition=&creativeid=322364123924&hide_mobile_promo&gclid=EAIaIQobChMImcPqmMXIgQMVtSWtBh0urws6EAAYASABEgJ1ofD_BwE"
        },
        "Thinkific": {
            price: 49,
            details: "Thinkific is one of the most popular online course platforms on the market and in general, it’ll be the best option for most course creators. It boasts a ton of cutting-edge features that can take your online courses to the next level, including live lessons and community-building features.",
            link: "https://www.thinkific.com/get-started/free-trial/?utm_source=adwords&utm_medium=cpc&utm_campaign=13519757194&utm_content=139645524936&utm_term=thinkific%20pricing&gclid=EAIaIQobChMItqmvucXIgQMVPM3CBB1efAzaEAAYAiAAEgL82vD_BwE"
        },
        "Podia": {
            price: 39,
            detials: "Podia is the best course platform for those that want an ‘all-in-one’ solution. It’s an all-in-one ecommerce solution that you can use to build your website and start selling online courses, webinars, memberships, digital downloads, and more from one online storefront.",
            link: "https://www.podia.com/pricing"
        },
        "LearnWorlds": {
            price: 29,
            details: "LearnWorlds is our very own all-in-one best online course platform that allows you to build your online academy from scratch. Its ",
            link: "https://www.learnworlds.com/pricing/"
        },
        "Teachable": {
            price: 59,
            details: "Teachable is an online teaching platform that serves the everyday instructor. It provides an easy and simple solution for uploading your learning content and creating online courses, customizing your online school, and communicating effectively with your students.",
            link: "https://teachable.com/pricing"
        },
        "Kajabi": {
            price: 149,
            details: "As an all-in-one online platform, Kajabi offers the tools to sell digital products, including online courses. Kajabi specializes in building high-converting funnels, sales pages, landing pages, and webinar pages for your online business, and launching advertising campaigns.",
            link: "https://kajabi.com/pricing"
        },
        "EasyGenerator": {
            price: 96,
            details: "EasyGenerator is an easy-to-use platform that has rich interface options. Its simplicity in creating online courses is one of the things it makes it appealing as opposed to other elearning platforms.",
            link: "https://www.easygenerator.com/en/pricing/"
        },
        "WiziQ": {
            price: 25,
            details: "WizIQ is a cloud-based education platform for real-time or self-paced training using your own custom-branded domain. It delivers live and on-demand webinars and it’s a very popular tool amongst online course creators who prefer live training, coaching, or a classroom-like feeling.",
            link: "https://www.wiziq.com/pricing/"
        }
    },
    "Magazine / News Subscription": {
        // https://pressgazette.co.uk/news/news-websites-most-subscriptions-ranked-paywalls/
        "New York Times": {
            price: 8.99,
            details: "The New York Times remains the global news industry’s digital subscriptions trailblazer. The company announced last week that it now has more than one million digital subscribers outside of the United States.",
            link: "https://www.nytimes.com/subscription/"
        },
        "The Washington Post": {
            price: 3,
            details: "Owned by Amazon billionaire Jeff Bezos, the Washington Post has built up a large collection of digital subscribers and is thought to be second only to the New York Times. Like the Times, the Post sees opportunity outside of the US. The title opened new hubs in London and Seoul earlier this year to accelerate international subscription growth.",
            link: "https://subscribe.washingtonpost.com/"
        },
        "The Economist": {
            price: 20.99,
            details: "The Economist is headquartered in the UK, but the majority of its digital audience is based in North America. According to the title’s ABC certificate for the first half of 2021, the Economist’s digital edition has an average circulation of 964,518.",
            link: "https://subscribenow.economist.com/"
        },
        "The Wall Street Journal": {
            price: 40,
            details: "The Wall Street Journal’s paywall dates back to the year of its website’s launch – 1996. The Journal today faces digital subs competition from the Financial Times and Bloomberg, both of which are growing fast.",
            link: "https://store.wsj.com/shop/us/us/wsjusspring22/?swg=true&fswg=true&trackingCode=aaqyc22j&cid=WSJ_RD_ALL_ACQ_NA&n2IKsaD9=n2IKsaD9&Pg9aWOPT=Pg9aWOPT&Cp5dKJWb=Cp5dKJWb&APCc9OU1=APCc9OU1"
        },
        "Bloomberg Media": {
            price: 8.99,
            details: "In a recent interview with Press Gazette, Bloomberg Media chief executive Justin B Smith admitted subscriptions growth has been hit this year by “a significant downturn in the news cycle”.  Still, Bloomberg Media’s digital subscriptions have grown 40% over the past year.",
            link: "https://www.bloomberg.com/subscriptions"
        },
        "The Athletic": {
            price: 7.99,
            details: "Founded in 1857, the Atlantic launched its paywall in 2019. Over the past year, it has been the fastest-growing title on the 100k Club list, according to its Alliance for Audited Media certificates. In the first half of 2021, the Atlantic had an average digital circulation of 357,373. The majority of these sales (294,881) came through individual subscriptions, while the Atlantic had an average Apple News+ circulation of 61,078.",
            link: "https://theathletic.com/checkout2/"
        },
        "The Guardian": {
            price: 27.5,
            details: "The London-headquartered Guardian is the only publication in our ranking that has an entirely free website. Its figure, 961,000, includes 560,000 “recurring contributions” from readers who want to support the newsgroup, and 401,000 digital subscriptions to the Guardian’s premium apps.",
            link: "https://support.theguardian.com/us/subscribe/weekly"
        },
        "National Geographic": {
            price: 1.2,
            details: "National Geographic had an average digital issue circulation of 244,454 per month in the first half of 2021, according to its latest Alliance for Audited Media certificate.",
            link: "https://ngmdomsubs.nationalgeographic.com/"
        },

    },
    "Meal Delivery / Kit": {
        // https://www.epicurious.com/expert-advice/every-meal-kit-delivery-service-in-america-article
        "Home Chef": {
            price: 8.99,
            details: "With more than 30 customizable chef-designed recipes available each week, Home Chef strives to keep things interesting. The company also offers extras including breakfasts, desserts, and appetizers that can work well for a light lunch or as a complement to your meal. Customers lock in their meal selection on Friday and all orders are delivered on the following Tuesday.",
            link: "https://www.homechef.com/"
        },
        "HelloFresh": {
            price: 8.99,
            details: "Netflix details goes here",
            link: "https://www.hellofresh.com/"
        },
        "Blue Apron": {
            price: 7.99,
            details: "The easy-to-follow recipes are inspired by unique, seasonal, or hard-to-find ingredients and everything comes pre-measured and precut—a plus for super busy cooks. The weekly box can be tailored for two or four people, and customized based on your dietary needs. All the recipes are beginner-friendly thanks to the picture-heavy, step-by-step instructions. Calorie counts for each recipe are included as well. And Blue Apron has add-on programs for wine delivery and a market feature to shop for kitchen tools. In addition to their weekly box, they also have seasonal boxes for events like an entire Thanksgiving dinner or holiday roast for six to eight.",
            link: "https://cook.blueapron.com/"
        },
        "Martha Stewart & Marley Spoon": {
            price: 40,
            details: "Berlin-based Marley Spoon hit America in 2016 after operating for two years in Europe and Australia. For its United States venture, the company partnered with Martha Stewart to bring carefully tested recipes from Martha’s archives. Like all of the best meal delivery services, you’ve got options: Pick from plans tailored for a variety of dietary choices, including vegetarian and vegan options. There are also plans that are family-friendly, and plans with meals all designed to be prepared in under 30 minutes.",
            link: "https://marleyspoon.com/"
        },
        "Gobble": {
            price: 11.99,
            details: "All meals from the Gobble meal delivery service are designed to take 15 minutes to prepare. Boxed ingredients come prepped—peeled, chopped, and marinated—so all that’s left to do is actually cook the meal. Gobble was voted the number one meal delivery kit by Parents magazine thanks in part, no doubt, to its quick prep time. Dinner kits are available in a two- or four-person plan that each include three different recipes.",
            link: "https://www.gobble.com/"
        },
        "Dinnerly": {
            price: 4.99,
            details: "Dinnerly, a branch of Marley Spoon, launched in early 2017, offers greater simplicity than its parent service, with fewer ingredients and steps in its recipes. The delivery service allows customers to choose up to six weekly meals. This is a super budget-friendly option, and one of the least expensive (on a per meal basis) meal kits on the market. However, it does require a minimum order: Customers must order at least two portions per recipe and at least three recipes per week.",
            link: "https://dinnerly.com/"
        },
        "Green Chef": {
            price: 11.99,
            details: "Whether you're looking for Paleo, keto, pescatarian, vegetarian, or vegan meals, Green Chef has you covered. All recipes include step-by-step instructions, chef’s tips, and photos. The recipes are designed to be whipped up in 30 minutes or less. Green Chef is a USDA-certified organic company that works to use high-quality, sustainable, clean ingredients.",
            link: "https://www.greenchef.com/"
        }
    },
    "Food Delivery": {
        // https://www.cnet.com/tech/services-and-software/best-food-delivery-service/
        "Uber Eats": {
            price: 9.99,
            details: "Uber Eats and Postmates are great options for people who want the most food options and the fastest delivery and don't mind paying for it. Uber bought Postmates in 2020, so both apps are very similar. The main difference is that you can order an Uber in Uber Eats, not Postmates. But you can order food, groceries and even pharmacy items through both apps. Each app also has over 80 food categories you can choose from, including halal and gluten-free.",
            link: "https://www.ubereats.com/"
        },
        "DoorDash Pass": {
            price: 9.99,
            details: "DoorDash lets you order things like beauty products, pet supplies and alcohol, in addition to food and groceries, through the app. There's also a Shipping option on the home screen that lets you order food from partnered restaurants nationwide. So if you live in California and crave Chicago-style pizza, you can order an actual pizza from Chicago -- just don't expect your pizza for a few days.",
            link: "https://www.doordash.com/"
        },
        "Grubhub": {
            price: 9.99,
            details: "Out of all the food delivery service apps on this list, Grubhub is the easiest to find restaurants that offer deals and rewards. Other apps might display a deal over a restaurant's title card, but Grubhub has a tab near the bottom of your screen called Rewards. This tab shows you all the nearby and national restaurant deals, and it shows you rewards for certain restaurants, like if you order three times from a specific restaurant, you can earn a $15 credit. The app is easy to navigate and order with, and there's a search bar over each restaurant's menu if you're searching for something in particular. There's also a helpful 'Orders' tab at the bottom of your screen that shows you your past orders. If you really liked your last order from a restaurant, but you forget what exactly it was, you can quickly navigate back to your old orders and have it delivered again. The app says it partners with over 365,000 restaurants. Delivery and service fees for our order to a suburban area totalled $6.99. Grubhub's estimated delivery window was between 35 and 45 minutes -- only a few minutes longer than Uber Eats/Postmates. When using this app in an urban area, our service fees were between $5.39 and $6.99, and our estimated delivery time was between 25 to 35 minutes for a restaurant 15 minutes away and 35 to 45 minutes for a restaurant 25 minutes away. Grubhub's service fees for delivery to an urban location are noticeably higher than service fees for the same order on Uber Eats/Postmates. Overall, Grubhub makes it easy to find deals on orders to help save you money. You might have to wait a few minutes longer for your delivery in suburban areas, though.",
            link: "https://www.grubhub.com/"
        },
        "Toast takeout": {
            price: 0,
            details: "Toast Takeout can help you support the local restaurants you know and love. Food delivery services usually charge commission fees that some restaurant owners have said hurt their businesses. Toast Takeout, however, doesn't charge these commission fees. That means if you order food from a local restaurant featured on the app, more of your money goes towards supporting the restaurant.",
            link: "https://toasttakeout.com/"
        }
    },
    "Dating App": {
        // https://www.pcmag.com/picks/the-best-dating-apps
        "match": {
            price: 44.99,
            details: "Match makes it smooth and easy to form virtual connections. Rich and robust profiles, not just hot photos, let you know if someone is worth your time before you start talking. Thanks to the Vibe Check feature, potential partners already in a conversation can also begin a live video chat session if they both agree. ",
            link: "https://www.match.com/"
        },
        "Tinder": {
            price: 19.99,
            details: "Tinder’s young, online-oriented users are no strangers to forming virtual connections. It innovated the “hot or not” mobile interface now used by almost all other dating apps. Once swiping gets old, Tinder’s video chat app, Face and Face, lets consenting partners start talking and get real.",
            link: "https://tinder.com/"
        },
        "Kippo": {
            price: 10,
            details: "A gamer-focused dating app potentially sounds like a bad idea, but Kippo pulls it off with execution worthy of an Editors’ Choice pick. You can customize your stylish profile to highlight your geeky interests, and enjoy premium features for affordable prices.",
            link: "https://www.kippoapp.com/"
        },
        "Bumble": {
            price: 16.99,
            details: "Bumble empowers its most vulnerable users to send the first message when looking for dates, knowing that they won’t get unsolicited messages in return. Bumble also offers many ways to communicate beyond text. You can send audio notes, add a Virtual Dating Badge to your profile, and begin a video chat when you’re ready.",
            link: "https://bumble.com/"
        },
        "OkCupid A-List": {
            price: 9.95,
            details: "Dating apps let us learn so much more information about a potential partner than we ever could from a random conversation at a bar. OkCupid’s wide range of questions, from fun tidbits to serious dealbreakers, make your messages that much more informed and your romantic success that much more likely.",
            link: "https://www.okcupid.com/"
        },
        "Hinge": {
            price: 29.99,
            details: "Hinge’s attractive, elaborate profiles give you a good sense of what a person's about, and provide multiple ways to engage with their interests. Take it further through video chat. Use the “Dating From Home” menu to start video calls, and get intimate with audio recordings that answer Hinge’s creative icebreaker prompts.",
            link: "https://hinge.co/"
        }
    },
}

export default dataAll;