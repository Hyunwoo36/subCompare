const dataAll = {
    "OTT / Streaming": {
        "Netflix": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "Hulu": {
            price: 7.99,
            details: "Netflix details goes here"
        },
        "Disney+": {
            price: 7.99,
            details: "Netflix details goes here"
        },
        "Paramount+": {
            price: 5.99,
            details: "Netflix details goes here"
        },
        "Max": {
            price: 9.99,
            details: "Netflix details goes here"
        },
        "Peacock": {
            price: 5.99,
            details: "Netflix details goes here"
        },
        "Discovery+": {
            price: 4.99,
            details: "Discovery+ details goes here"
        },
        "Apple TV+": {
            price: 6.99,
            details: "Netflix details goes here"
        },
        "ESPN+": {
            price: 9.99,
            details: "Netflix details goes here"
        },
        "Amazon Prime Video": {
            price: 8.99,
            details: "Amazon Prime Video details goes here"
        }
    },
    "Music": {
        // https://www.pcmag.com/picks/the-best-online-music-streaming-services
        "Apple Music": {
            price: 10.99,
            details: "Netflix details goes here"
        },
        "Spotify": {
            price: 9.99,
            details: "Netflix details goes here"
        },
        "Tidal": {
            price: 10.99,
            details: "Netflix details goes here"
        },
        "Youtube Music": {
            price: 10.99,
            details: "Youtube Music details goes here"
        },
        "Deezer": {
            price: 9.99,
            details: "Netflix details goes here"
        },
        "SoundCloud Go+": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "LiveOne": {
            price: 0.00,
            details: "LiveOne Details goes here"
        },
        "SiriusXM Internet Radio": {
            price: 10.99,
            details: "SiriusXM Internet Radio Details goes here"
        },
        "Amazon Music Unlimited": {
            price: 9.99,
            details: "Amazon Music Unlimited Details goes here"
        }
    },
    "Fitness": {
        // https://www.verywellfit.com/best-gym-memberships-4780237
        "24 Hour Fitness": {
            price: 20,
            details: "24 hour fitness details goes here"
        },
        "LA Fitness": {
            price: 19.99,
            details: "LA Fitness extensive selection of machines and free weights and its focus on strength training and overall fitness"
        },
        "Gold's Gym": {
            price: 35,
            details: "Netflix details goes here"
        },
        "Planet Fitness": {
            price: 10,
            details: "Planet Fitness details goes here"
        },
        "Anytime Fitness": {
            price: 41,
            details: "Netflix details goes here"
        },
        "Equinox": {
            price: 200,
            details: "Equinox earned the top spot for luxury and because of its lavish environment, expert instructors, top-of-the-line equipment, and endless amenities."
        },
        "Crunch Fitness": {
            price: 14.99,
            details: "budget-friendly package with plenty of group classes. Bump up to a Signature location, and you’ll have access to some of the top fitness classes around."
        }
    },
    "E-Book and Audiobook": {
        // https://www.wired.com/gallery/best-ebook-subscription-services/
        "Audible": {
            price: 8,
            details: "This slick audiobook subscription service boasts countless titles covering modern best sellers, classics, and much more."
        },
        "Kindle Unlimited": {
            price: 10,
            details: "While there are some popular titles and classics on offer, the bulk of the library is self-published and indie titles; best-selling authors generally only offer their back catalogs. Kindle Unlimited also includes some popular magazines, and many of the ebooks support Audible Narration."
        },
        "Scribd": {
            price: 12,
            details: "With an enormous, varied library, Scribd is the best ebook subscription service for most people. You can read or listen via your browser on any device or use the Android or iOS apps, which are clearly laid out, fully configurable, and make for a pleasant reading experience. I had no trouble finding intriguing titles, and there’s a solid mix of classics, best sellers, indie books, and even some Scribd Originals. Progress syncs across devices, so you can pick up where you left off. You can download ebooks to read offline. Scribd also includes podcasts, magazines, and a document section enabling people to upload whatever they like."
        },
        "Kobo Plus": {
            price: 8,
            details: "The Kobo Plus subscription service is now available in the US, Australia, Canada, New Zealand, the UK, and parts of Europe. It currently boasts more than 1.3 million ebooks and around 100,000 audiobooks."
        },
        "Epic!": {
            price: 10,
            details: "Perhaps the largest platform dedicated to kids aged 12 and under, Epic has an interesting mix of content that includes more than 40,000 ebooks"
        }
    },
    "Learning / Course Platforms": {
        // https://www.learnworlds.com/best-online-course-platforms/
        "Udemy": {
            price: 15,
            details: "Netflix details goes here"
        },
        "Coursera": {
            price: 33.25,
            details: "Netflix details goes here"
        },
        "Thinkific": {
            price: 49,
            details: "Thinkific is one of the most popular online course platforms on the market and in general, it’ll be the best option for most course creators. It boasts a ton of cutting-edge features that can take your online courses to the next level, including live lessons and community-building features."
        },
        "Podia": {
            price: 39,
            detials: "Podia is the best course platform for those that want an ‘all-in-one’ solution. It’s an all-in-one ecommerce solution that you can use to build your website and start selling online courses, webinars, memberships, digital downloads, and more from one online storefront. "
        },
        "LearnWorlds": {
            price: 29,
            details: "LearnWorlds is our very own all-in-one best online course platform that allows you to build your online academy from scratch. Its "
        },
        "Teachable": {
            price: 59,
            details: "Teachable is an online teaching platform that serves the everyday instructor. It provides an easy and simple solution for uploading your learning content and creating online courses, customizing your online school, and communicating effectively with your students."
        },
        "Kajabi": {
            price: 149,
            details: "As an all-in-one online platform, Kajabi offers the tools to sell digital products, including online courses. Kajabi specializes in building high-converting funnels, sales pages, landing pages, and webinar pages for your online business, and launching advertising campaigns."
        },
        "EasyGenerator": {
            price: 96,
            details: "EasyGenerator is an easy-to-use platform that has rich interface options. Its simplicity in creating online courses is one of the things it makes it appealing as opposed to other elearning platforms."
        },
        "WizlQ": {
            price: 25,
            details: "WizIQ is a cloud-based education platform for real-time or self-paced training using your own custom-branded domain. It delivers live and on-demand webinars and it’s a very popular tool amongst online course creators who prefer live training, coaching, or a classroom-like feeling."
        }
    },
    "Magazine / News Subscription": {
        "New York Times": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "The Economist": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "National Geographic": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "The Wall Street Journal": {
            price: 8.99,
            details: "Netflix details goes here"
        },
    },
    "Meal Kit / Food Delivery": {
        "Blue Apron": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "HelloFresh": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "DoorDash Pass": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "Uber Eat Pass": {
            price: 8.99,
            details: "Netflix details goes here"
        }
    },
    "Dating App": {
        "Tinder Gold/Plus": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "Bumble Boost": {
            price: 8.99,
            details: "Netflix details goes here"
        },
        "OkCupid A-List": {
            price: 8.99,
            details: "Netflix details goes here"
        }
    },
}

export default dataAll;