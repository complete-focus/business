/* ============================================================
   COMPLETEFOCUS — data
   ============================================================ */
const BEACONS_URL = "https://website.beacons.ai/completefocus";
const SELLDONE_URL = "https://selldone.com/?ref=rf_apt4Uu8aWf2yEGoK";

const businessModels = [
  {
    id:"clothing-brand", name:"Clothing Brand", url:"clothing-brand.html", free:true,
    desc:"Start a clothing brand with one product, a small first order and a phone — no warehouse required.",
    icon:'<path d="M8 3l4 3 4-3 3 5-3 2v11H5V10L2 8z"/>',
    ratings:{cost:6, difficulty:7, potential:6}
  },
  {
    id:"reselling", name:"Reselling", url:"reselling.html", free:true,
    desc:"Buy undervalued items, list them well and sell for a profit on Vinted, eBay, Depop or Facebook Marketplace.",
    icon:'<path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2M3 8l2 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-12M3 8h18"/><path d="M9 12a3 3 0 0 0 6 0"/>',
    ratings:{cost:2, difficulty:5, potential:8}
  },
  {
    id:"affiliate-marketing", name:"Affiliate Marketing", url:"affiliate-marketing.html", free:true,
    desc:"Recommend products you like, earn commission — no inventory, no shipping, no customer complaints.",
    icon:'<circle cx="8" cy="8" r="3"/><circle cx="17" cy="17" r="3"/><path d="M9.8 9.8 15.2 15.2"/>',
    ratings:{cost:1, difficulty:4, potential:6}
  },
  {
    id:"luxury-clipping", name:"Luxury Lifestyle Clipping", url:null, free:false,
    desc:"A premium business model. Full breakdown, sourcing and system available in the COMPLETEFOCUS store.",
    icon:'<path d="m12 2 3 6.5 7 .9-5.1 5 1.3 7-6.2-3.4L5.8 21.4l1.3-7-5.1-5 7-.9L12 2z"/>',
    ratings:null
  }
];

/* ---- guide content ---- */
const guides = {
  "clothing-brand": {
    title:"The Free Clothing Brand Guide",
    subtitle:"How to start a clothing brand with a small budget — one product, a small first order and a phone.",
    pipeline:["Product","Content","Audience","Sales","Reinvestment"],
    readMins:11,
    sections:[
      {id:"intro", h:"Introduction", body:[
        {t:"p", c:"Starting a clothing brand might seem like something that costs thousands of pounds. It doesn't have to. You can start with a small amount of money, test your idea, build an audience and reinvest as you grow."},
        {t:"p", c:"You don't need a warehouse, hundreds of products, 100,000 followers, an expensive camera or a massive advertising budget. You need a good idea, a product people actually want, and a way of getting that product in front of the right people."},
        {t:"callout", label:"Want the full system?", amber:true, c:"This free guide covers the basics. The COMPLETEFOCUS Premium Clothing Brand Guide covers finding manufacturers, managing stock, growing on TikTok, working with creators, managing your money and scaling your brand."}
      ]},
      {id:"example", h:"A Real Example: OUTSDR.CLO", body:[
        {t:"p", c:"Before getting into the process, look at OUTSDR.CLO on TikTok — a clothing brand that has used the process covered in this guide to build and develop its brand."},
        {t:"p", c:"The brand has stayed under 10,000 TikTok followers while having days where it generated hundreds of pounds in sales. That doesn't mean you will automatically make hundreds of pounds a day — every brand is different."},
        {t:"p", c:"The important lesson is that you don't necessarily need a huge following to start generating sales. You need the right people seeing the right product."},
        {t:"flow", items:["Product","Content","Audience","Sales","Reinvestment"]}
      ]},
      {id:"why", h:"Why Start A Clothing Brand?", body:[
        {t:"p", c:"One of the biggest advantages of starting a clothing brand today is that you can start relatively small — with one product, a small first order, a phone, free design software, TikTok, Instagram and an online store."},
        {t:"p", c:"Instead of spending thousands immediately, you can test your idea first. If people like it, you can put some of the money back into the business."}
      ]},
      {id:"idea", h:"Choose Your Brand Idea", body:[
        {t:"p", c:"Don't start by thinking “I'm going to sell hoodies.” Start by thinking “What type of person is my brand for?”"},
        {t:"ul", items:["Streetwear","Football","Fitness","Outdoor clothing","Vintage fashion","Minimalist fashion","Gaming","Music","Oversized clothing"]},
        {t:"p", c:"The more specific your identity is, the easier it becomes to create content for the right audience."}
      ]},
      {id:"product", h:"Choose Your First Product", body:[
        {t:"p", c:"You don't need an entire collection. Start with one strong product that represents what your brand is about."},
        {t:"ul", items:["T-shirt","Hoodie","Joggers","Cap","Jacket"]},
        {t:"p", c:"Think about: fit, material, colour, graphics, embroidery, print and labels."}
      ]},
      {id:"manufacturer", h:"Find A Manufacturer", body:[
        {t:"p", c:"This is one of the most important parts. You need a manufacturer that can actually produce the quality you're looking for."},
        {t:"ul", items:["Minimum order quantity","Sample prices","Fabric","Printing","Embroidery","Custom labels","Sizing","Production time","Shipping","Packaging"]},
        {t:"callout", label:"OUTSDR.CLO Manufacturer", c:"OUTSDR.CLO used a manufacturer during its own brand journey, and this is the type of sourcing process covered in this guide. To enquire about the manufacturer OUTSDR.CLO used, contact OUTSDR.CLO on +44 7392 010096. This is the OUTSDR.CLO contact number, not the manufacturer's direct number — contact OUTSDR.CLO first."},
        {t:"p", c:"Don't immediately order hundreds of products. Get a sample first."}
      ]},
      {id:"sample", h:"Check Your Sample", body:[
        {t:"p", c:"When your sample arrives, check material, fit, sizing, stitching, print quality, embroidery, colour, labels and packaging."},
        {t:"p", c:"If something isn't right, fix it before ordering more. This is one of the easiest ways to avoid wasting money."}
      ]},
      {id:"brand", h:"Build Your Brand", body:[
        {t:"p", c:"Your brand isn't just your logo. Think about logo, colours, fonts, photography, packaging, product style, social media style, brand name and tone of voice."},
        {t:"p", c:"Everything should feel like it belongs to the same brand."}
      ]},
      {id:"apps", h:"Apps & Websites To Use", body:[
        {t:"p", c:"You don't need hundreds of apps."},
        {t:"table", headers:["Purpose","Tool"], rows:[
          ["Design","Canva — graphics, mockups and basic designs"],
          ["Video","CapCut — editing TikToks and Reels"],
          ["Research","Google, Google Trends, Pinterest"],
          ["Social Media","TikTok, Instagram, YouTube"],
          ["Organisation","Google Sheets"],
          ["Store","Selldone"]
        ]}
      ]},
      {id:"store", h:"Build Your Store With Selldone", body:[
        {t:"p", c:"Once you've got your product, you need somewhere customers can buy it. This guide uses Selldone — it currently provides tools for creating an online store, managing products and inventory, handling orders and viewing business data."},
        {t:"ul", items:["Store name","Logo","Homepage","Products & product photos","Prices & sizes","Shipping & returns","Payment methods","Contact information"]},
        {t:"p", c:"Make sure you check the store yourself on your phone before launching."},
        {t:"cta_selldone"}
      ]},
      {id:"price", h:"Work Out Your Price", body:[
        {t:"p", c:"Don't randomly choose a price. Work out your costs first."},
        {t:"table", headers:["Item","Cost"], rows:[["Product","£12"],["Packaging","£2"],["Other costs","£2"],["Total","£16"],["Selling price","£30"],["Profit (£30 − £16)","£14"]]},
        {t:"p", c:"That's only an example — your actual costs could be very different, and other expenses can affect what you actually keep."}
      ]},
      {id:"content", h:"Start Creating Content", body:[
        {t:"p", c:"You don't need a professional camera. Your phone is enough to start."},
        {t:"ul", items:["Designing the product","Receiving the sample","Trying it on","Packaging an order","Behind the scenes","Outfit videos","Product details","Brand story","Preparing for launch"]}
      ]},
      {id:"advert", h:"Don't Make Every Video An Advertisement", body:[
        {t:"p", c:"Don't make every post “BUY MY HOODIE.” Give people something worth watching — for example “Here's how I designed my first hoodie” or “What I learned from ordering my first clothing sample.”"},
        {t:"p", c:"People can discover the brand without feeling like they're being constantly sold to."}
      ]},
      {id:"audience", h:"Build Your Audience", body:[
        {t:"p", c:"TikTok can be particularly useful for a new clothing brand. Post consistently, and test different types of content."},
        {t:"ul", items:["Views","Likes","Comments","Shares","Profile visits","Website visits","Sales"]},
        {t:"p", c:"Don't obsess over followers — OUTSDR.CLO is a good example of why, having operated with under 10,000 followers while still having days with hundreds of pounds in sales."}
      ]},
      {id:"launch", h:"Launch Your Product", body:[
        {t:"p", c:"Don't randomly put your product online one day. Build anticipation."},
        {t:"chain", items:[
          {l:"7 days before", d:"Start showing the product."},
          {l:"5 days before", d:"Show more details."},
          {l:"3 days before", d:"Show the fit."},
          {l:"1 day before", d:"Announce the launch."},
          {l:"Launch day", d:"Release it."},
          {l:"After launch", d:"Show orders, customer feedback and the product being worn."}
        ]}
      ]},
      {id:"stock", h:"Don't Buy Too Much Stock", body:[
        {t:"p", c:"This is one of the biggest beginner mistakes. You might think “if I order 200, I'll make loads of money” — but what if they don't sell?"},
        {t:"ul", items:["Start small","Test demand","Learn","Reinvest","Increase stock when it makes sense"]}
      ]},
      {id:"track", h:"Track Your Money", body:[
        {t:"p", c:"Use Google Sheets to record product cost, selling price, orders, revenue, packaging, shipping, advertising, other expenses, profit and stock."},
        {t:"p", c:"If you don't track your numbers, it's difficult to know whether your brand is actually doing well. The Premium Guide includes a much more detailed system for managing all of this."}
      ]},
      {id:"premium-adds", h:"What The Premium Guide Adds", body:[
        {t:"p", c:"The Free Guide gets you started. The COMPLETEFOCUS Premium Clothing Brand Guide goes much further — covering manufacturers professional in their part of fashion (e.g. streetwear or sportswear), supplier questions, pricing, profit margins, stock management, cash flow, Selldone setup, TikTok growth, content systems, influencer marketing, customer retention, email marketing, product launches, paid advertising, scaling and brand management."}
      ]},
      {id:"process", h:"The Complete Process", body:[
        {t:"flow", items:["Idea","Brand","Product","Manufacturer","Sample","Store","Content","Launch","Sales","Reinvest","Grow"]}
      ]},
      {id:"checklist", h:"Free Guide Checklist", body:[
        {t:"ul", items:["Brand name","Target audience","Logo","Product","Manufacturer","Sample","Price","Product photos","Selldone store","TikTok","Instagram","Shipping information","Returns information","Launch plan","Stock plan","Money tracker"]},
        {t:"p", c:"You don't need to start with thousands of pounds, 100,000 followers or 50 products. Start small, make something good, find a manufacturer, order a sample, build your Selldone store, create content, launch, track what happens — then improve."}
      ]}
    ]
  },
  "reselling": {
    title:"The Free Reselling Guide",
    subtitle:"Start reselling, find products, make sales and learn the basics — buy, list, sell, profit.",
    pipeline:["Find","Research","Calculate","Buy","List","Sell","Track"],
    readMins:10,
    sections:[
      {id:"intro", h:"Introduction", body:[
        {t:"p", c:"Reselling is simple: buy, list, sell, profit. But finding profitable products isn't about randomly buying cheap things — you need to know what sells, where to find it, how much it's worth, how much profit you'll make and how to list it."},
        {t:"callout", label:"Want the full system?", amber:true, c:"The COMPLETEFOCUS Premium Reselling Guide + Reselling Spreadsheet goes much further, including detailed sourcing methods, pricing strategies and a complete spreadsheet system."}
      ]},
      {id:"platform", h:"Start With A Platform", body:[
        {t:"table", headers:["Platform","Best for"], rows:[
          ["Vinted","Clothing, shoes and various second-hand items"],
          ["eBay","Electronics, collectibles, clothing, games and almost everything else"],
          ["Depop","Fashion and vintage clothing"],
          ["Facebook Marketplace","Local deals, larger items and bundles"]
        ]},
        {t:"p", c:"Don't try to use everything immediately. Start with one or two platforms and learn them properly."}
      ]},
      {id:"own", h:"Start With What You Already Own", body:[
        {t:"p", c:"Before spending money on stock, look around your home — clothes, games, books, sports equipment, electronics, collectibles."},
        {t:"p", c:"Take photos, research the item and create your first listings. This lets you learn without putting much money at risk."}
      ]},
      {id:"find", h:"Find Products", body:[
        {t:"p", c:"Once you've sold some of your own items, start looking for stock: charity shops, car boot sales, Vinted, eBay, Facebook Marketplace, local sellers, clearance sections."},
        {t:"p", c:"The important part isn't where you find it — it's whether you can buy it for a price that leaves room for profit."}
      ]},
      {id:"research", h:"Research Before Buying", body:[
        {t:"ul", items:["Google Lens — identify products, brands and similar items","Google — search the exact product name and model","eBay — check completed / sold listings to understand actual selling prices","Vinted — search similar items to see current competition and asking prices"]},
        {t:"p", c:"Don't just look at what sellers want. Try to find evidence of what buyers are actually paying."}
      ]},
      {id:"profit", h:"Calculate Your Profit", body:[
        {t:"callout", label:"Formula", c:"Selling price − purchase price − fees − postage − other costs = profit"},
        {t:"table", headers:["Item","Amount"], rows:[["Buy","£10"],["Sell","£25"],["Costs","£8"],["Profit","£7"]]},
        {t:"p", c:"That £7 is much more important than saying “I sold it for £25.”"}
      ]},
      {id:"spreadsheet", h:"Use The COMPLETEFOCUS Reselling Spreadsheet", body:[
        {t:"p", c:"This is one of the most important parts of reselling. Don't rely on your memory — use Google Sheets or Microsoft Excel to track purchase price, selling price, fees, postage, profit, date bought, date sold and product."},
        {t:"p", c:"The COMPLETEFOCUS Reselling Spreadsheet is designed to make this much easier, keeping your stock, sales and profit organised."},
        {t:"callout", label:"Want the full system?", amber:true, c:"Get the COMPLETEFOCUS Premium Reselling Guide + Reselling Spreadsheet — it explains exactly how to use the spreadsheet, including how to track inventory, profit, selling speed and your best products."}
      ]},
      {id:"photos", h:"Take Better Photos", body:[
        {t:"p", c:"You don't need an expensive camera — a phone is enough."},
        {t:"ul", items:["Good lighting","Clean background","Several angles","Close-ups","Photos of labels","Photos of defects"]},
        {t:"p", c:"You can use Canva for simple graphics. Don't hide damage — being honest protects you."}
      ]},
      {id:"listings", h:"Write Better Listings", body:[
        {t:"p", c:"A good title should tell people exactly what you're selling. Instead of “Nice Nike shirt” try “Nike Football Shirt Men's Medium Black Training Top.”"},
        {t:"ul", items:["Brand","Product","Size","Colour","Condition","Measurements where useful","Defects"]}
      ]},
      {id:"pricing", h:"Price Properly", body:[
        {t:"p", c:"Don't automatically choose the highest price — research similar products first."},
        {t:"ul", items:["Price competitively — sell around the normal market price","Price for speed — slightly lower to encourage a quicker sale","Price higher — when your item has something that justifies it"]},
        {t:"p", c:"The best price depends on demand, condition, competition, your costs and how quickly you want to sell."}
      ]},
      {id:"stock", h:"Keep Track Of Your Stock", body:[
        {t:"p", c:"If you have ten items, remembering them might be easy. If you have fifty, it becomes much harder."},
        {t:"p", c:"Your COMPLETEFOCUS Reselling Spreadsheet can track what you own, what you've listed, what's sold, what's still waiting to sell and how much money is tied up in stock."}
      ]},
      {id:"cheap", h:"Don't Buy Something Just Because It's Cheap", body:[
        {t:"p", c:"This is probably the biggest beginner mistake. A £3 product isn't automatically better than a £20 product."},
        {t:"ul", items:["Is there demand?","What does it actually sell for?","How much profit is left?","How quickly might it sell?","How much risk am I taking?"]},
        {t:"p", c:"If the numbers don't make sense, don't buy it."}
      ]},
      {id:"apps", h:"Use The Right Apps", body:[
        {t:"table", headers:["Job","App / Website"], rows:[
          ["Sell clothing","Vinted"],["General marketplace","eBay"],["Fashion","Depop"],["Local deals","Facebook Marketplace"],
          ["Research products","Google"],["Identify products","Google Lens"],["Track money","Google Sheets / Excel"],
          ["Design graphics","Canva"],["Postage","Royal Mail / Parcel2Go"]
        ]},
        {t:"p", c:"Always check the current fees, rules and available services on each platform before using them."}
      ]},
      {id:"learn", h:"Learn From Every Sale", body:[
        {t:"ul", items:["How much did I actually make?","How long did it take?","Where did I find it?","Was the price right?","Would I buy another one?"]},
        {t:"p", c:"Put the information into your Reselling Spreadsheet. After enough sales, patterns will start appearing."}
      ]},
      {id:"premium-adds", h:"The Premium Guide", body:[
        {t:"p", c:"The free guide gives you the foundation. The COMPLETEFOCUS Premium Reselling Guide + Reselling Spreadsheet covers finding profitable products, advanced sourcing, pricing, profit calculations, inventory management, sell-through, tracking your best categories, using the spreadsheet properly, analysing your results and scaling your reselling."}
      ]},
      {id:"system", h:"Your Simple Reselling System", body:[
        {t:"flow", items:["Find","Research","Calculate","Buy","List","Sell","Track","Improve"]},
        {t:"p", c:"Start with things you already own, learn one platform, use tools like Google Lens, Google, Google Sheets and Canva, track every sale — and most importantly, don't guess your profit. Know your numbers."}
      ]}
    ]
  },
  "affiliate-marketing": {
    title:"The Free Affiliate Marketing Guide",
    subtitle:"Learn how affiliate marketing works, find products, create content and start building an audience.",
    pipeline:["Find","Create","Link","Track","Analyse","Improve","Scale"],
    readMins:10,
    sections:[
      {id:"intro", h:"Introduction", body:[
        {t:"p", c:"Affiliate marketing lets you make money by recommending products you like, without the risk or cost of creating them yourself: find something useful, recommend it, someone clicks, they complete a qualifying action, you may earn commission."},
        {t:"p", c:"You don't create the product yourself. Your job is to find the right audience, create useful content and recommend things that genuinely fit."},
        {t:"callout", label:"Want the full system?", amber:true, c:"The COMPLETEFOCUS Premium Affiliate Marketing Guide + Affiliate Spreadsheet goes much deeper into finding products, creating content, tracking clicks and improving your results."}
      ]},
      {id:"why", h:"Why It Works So Well", body:[
        {t:"ul", items:[
          "No overhead costs — you don't invent products, store inventory, ship packages, or handle customer complaints. The company handles the physical work.",
          "Work from anywhere — all you need is an internet connection and a platform like a blog, social account or YouTube channel.",
          "Passive income — a single video or article can keep earning for months or years after you post it.",
          "Total freedom — you can work with thousands of brands across any topic you enjoy: gaming, fitness, fashion or tech."
        ]}
      ]},
      {id:"niche", h:"Pick A Niche", body:[
        {t:"p", c:"A niche is the main subject your content focuses on."},
        {t:"ul", items:["Football","Gaming","Technology","Fashion","Student productivity","Reselling","Hobbies","Fitness equipment","Photography"]},
        {t:"p", c:"Don't try to promote completely unrelated things. Build an audience around something first."}
      ]},
      {id:"programmes", h:"Choose Your Affiliate Programmes", body:[
        {t:"ul", items:[
          "Amazon Associates — physical products and buying recommendations; Amazon's UK programme lets qualifying creators earn from qualifying purchases and other qualifying actions.",
          "ClickBank — a marketplace where affiliates can browse products and create tracking links; currently advertises free affiliate account registration.",
          "Temu — product and referral-based affiliate opportunities.",
          "Dropshipping platforms — some also offer affiliate programmes, letting you promote the software/service rather than selling products yourself."
        ]},
        {t:"p", c:"Always check the current programme rules and eligibility before signing up."},
        {t:"callout", label:"Temu Affiliate Marketing", c:"Use this link for £10 free just for starting: temu.to/k/e83gykdtrcn"}
      ]},
      {id:"apps", h:"Your Basic App & Website List", body:[
        {t:"table", headers:["Job","App / Website"], rows:[
          ["Find products","Amazon"],["Affiliate marketplace","ClickBank"],["Research","Google"],["Product research","Google Lens"],
          ["Create videos","CapCut"],["Design","Canva"],["Short-form content","TikTok"],["Photos/content","Instagram"],
          ["Longer content","YouTube"],["Link page","Linktree"],["Track results","Google Sheets"],["Advanced tracking","COMPLETEFOCUS Affiliate Spreadsheet"]
        ]},
        {t:"p", c:"The exact tools you need depend on your niche."}
      ]},
      {id:"spam", h:"Don't Start By Spamming Links", body:[
        {t:"p", c:"This is probably the biggest beginner mistake — an account that only ever says “BUY THIS, LINK IN BIO.”"},
        {t:"p", c:"Instead, create content people actually want, for example “5 useful products I wish I knew about earlier” — then naturally mention the products. Your affiliate link becomes useful because somebody already wants to know more."}
      ]},
      {id:"content", h:"Create Useful Content", body:[
        {t:"p", c:"Good affiliate content usually solves a problem, teaches something, reviews something, compares products, shows useful products, or saves people time."},
        {t:"ul", items:["Gaming — “5 accessories that make gaming easier”","Football — “3 things I use for football training”","Reselling — “5 things I'd buy before starting reselling”"]},
        {t:"p", c:"The product should fit the content."}
      ]},
      {id:"formula", h:"Use The Hook → Value → CTA Formula", body:[
        {t:"chain", items:[
          {l:"Hook", d:"Get attention — “Don't start reselling before checking these 3 things.”"},
          {l:"Value", d:"Actually teach something."},
          {l:"Recommendation", d:"Introduce a relevant product."},
          {l:"CTA", d:"Tell people where they can find it — “I've put the products I mentioned in my bio.”"}
        ]},
        {t:"p", c:"That's much better than constantly shouting “CLICK MY LINK!”"}
      ]},
      {id:"track", h:"Track Your Results", body:[
        {t:"p", c:"This is where the COMPLETEFOCUS Affiliate Spreadsheet becomes important — track content, views, clicks, conversions and commission."},
        {t:"table", headers:["Content","Views","Clicks","Sales","Commission"], rows:[
          ["Video 1","8,000","120","5","£15"],["Video 2","15,000","80","2","£7"],["Video 3","5,000","200","9","£28"]
        ]},
        {t:"p", c:"Video 3 got fewer views than Video 2 but generated more clicks and sales — that's the type of information you want to notice."}
      ]},
      {id:"views", h:"Don't Only Chase Views", body:[
        {t:"p", c:"A video getting 100,000 views doesn't automatically mean it's successful. What matters is what happens afterwards: views → clicks → conversions → commission."},
        {t:"p", c:"The Premium COMPLETEFOCUS Affiliate Spreadsheet can help you organise these numbers so you can see which content is actually worth repeating."}
      ]},
      {id:"disclosure", h:"Affiliate Disclosure", body:[
        {t:"callout", label:"Always disclose", c:"AD / AFFILIATE LINK — I may earn a commission if you purchase through this link."},
        {t:"p", c:"The UK ASA treats affiliate marketing as a form of performance-based advertising, and affiliate content needs to be identifiable as advertising. Amazon also requires clear and conspicuous disclosures near affiliate links."}
      ]},
      {id:"findwhat", h:"Find What Works", body:[
        {t:"ul", items:["Which videos got clicks?","Which products converted?","Which topics performed best?","Which products earned the most commission?"]},
        {t:"p", c:"Then make more content around the strongest ideas — don't just keep creating random content."}
      ]},
      {id:"premium-adds", h:"The COMPLETEFOCUS Premium Guide", body:[
        {t:"p", c:"The Free Guide gives you the foundation. The COMPLETEFOCUS Premium Affiliate Marketing Guide goes further into finding profitable niches, choosing affiliate programmes, finding products, creating content, writing hooks, building a content system, tracking clicks and commissions, analysing conversion rates, finding winning content and using the Affiliate Spreadsheet."}
      ]},
      {id:"system", h:"The COMPLETEFOCUS System", body:[
        {t:"flow", items:["Find","Create","Link","Track","Analyse","Improve","Scale"]}
      ]},
      {id:"checklist", h:"Final Checklist", body:[
        {t:"ul", items:["Does this content help someone?","Does the product fit my niche?","Have I researched the product?","Is my affiliate disclosure clear?","Is my link correct?","Am I following the programme's rules?","Have I added the content to my Affiliate Spreadsheet?","Will I be able to measure the result?"]},
        {t:"p", c:"Affiliate marketing isn't about finding one magical link. It's about finding an audience, creating useful content, recommending relevant products, tracking what happens and improving over time."}
      ]}
    ]
  }
};

const toolsList = [
  {id:"profit-calculator", url:"profit-calculator.html", name:"Profit Calculator", desc:"Work out revenue, total costs and profit margin from a selling price and units sold.", icon:'<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'},
  {id:"breakeven-calculator", url:"breakeven-calculator.html", name:"Break-Even Calculator", desc:"Find out how many units you need to sell before you cover your fixed costs.", icon:'<path d="M3 3v18h18"/><path d="M18 8l-5 5-4-4-4 4"/>'},
  {id:"pricing-calculator", url:"pricing-calculator.html", name:"Pricing Calculator", desc:"Turn your total cost into a recommended selling price using a target margin or markup.", icon:'<path d="M3 12h18M3 6h18M3 18h18"/>'},
  {id:"startup-cost-calculator", url:"startup-cost-calculator.html", name:"Startup Cost Calculator", desc:"Build a custom list of expenses to estimate what it'll cost to get started.", icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/>'},
  {id:"revenue-calculator", url:"revenue-calculator.html", name:"Revenue Calculator", desc:"Project revenue across multiple products by price and quantity sold.", icon:'<path d="M4 19h16M8 19V9M13 19V5M18 19v-7"/>'},
  {id:"cashflow-calculator", url:"cashflow-calculator.html", name:"Cash-Flow Calculator", desc:"Track money in and money out to see your net cash flow and ending balance.", icon:'<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>'},
];
const checklistToolEntry = {id:"checklist", url:"checklist.html", name:"Custom Checklist", desc:"Build your own launch checklist from scratch and track your progress.", icon:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'};

/* search index */
const searchIndex = [
  {title:"Clothing Brand — Free Guide", cat:"Guide", url:"clothing-brand.html"},
  {title:"Reselling — Free Guide", cat:"Guide", url:"reselling.html"},
  {title:"Affiliate Marketing — Free Guide", cat:"Guide", url:"affiliate-marketing.html"},
  {title:"Luxury Lifestyle Clipping — Premium", cat:"Business Idea", url:"premium.html"},
  {title:"Business Ideas", cat:"Page", url:"business-ideas.html"},
  {title:"Profit Calculator", cat:"Tool", url:"profit-calculator.html"},
  {title:"Break-Even Calculator", cat:"Tool", url:"breakeven-calculator.html"},
  {title:"Pricing Calculator", cat:"Tool", url:"pricing-calculator.html"},
  {title:"Startup Cost Calculator", cat:"Tool", url:"startup-cost-calculator.html"},
  {title:"Revenue Calculator", cat:"Tool", url:"revenue-calculator.html"},
  {title:"Cash-Flow Calculator", cat:"Tool", url:"cashflow-calculator.html"},
  {title:"Custom Checklist", cat:"Tool", url:"checklist.html"},
  {title:"Free Tools Hub", cat:"Page", url:"tools.html"},
  {title:"Premium Resources", cat:"Page", url:"premium.html"},
  {title:"COMPLETEFOCUS Store", cat:"Store", external:BEACONS_URL},
];

/* ============================================================
   COMPLETEFOCUS — app shell (theme, sidebar, page rendering)
   ============================================================ */
const $ = (sel, ctx) => (ctx||document).querySelector(sel);
const $$ = (sel, ctx) => Array.from((ctx||document).querySelectorAll(sel));
const appEl = document.getElementById('app');

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function fmtMoney(n){
  if(!isFinite(n)) return '£0.00';
  const neg = n < 0;
  const v = Math.abs(n).toLocaleString('en-GB', {minimumFractionDigits:2, maximumFractionDigits:2});
  return (neg? '-£':'£') + v;
}
function fmtNum(n, d){
  if(!isFinite(n)) return '0';
  return Number(n).toLocaleString('en-GB', {maximumFractionDigits:(d===undefined?1:d)});
}
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._tm);
  showToast._tm = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ---------- theme ---------- */
function initTheme(){
  let saved = null;
  try{ saved = localStorage.getItem('completefocus_theme'); }catch(e){}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme, false);
  document.getElementById('themeLight').addEventListener('click', ()=>applyTheme('light', true));
  document.getElementById('themeDark').addEventListener('click', ()=>applyTheme('dark', true));
}
function applyTheme(theme, persist){
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeLight').setAttribute('aria-pressed', String(theme==='light'));
  document.getElementById('themeDark').setAttribute('aria-pressed', String(theme==='dark'));
  if(persist){
    try{ localStorage.setItem('completefocus_theme', theme); }catch(e){}
  }
}

/* ---------- sidebar ---------- */
function initSidebar(){
  const shell = document.getElementById('shell');
  const collapseBtn = document.getElementById('collapseBtn');
  let collapsed = false;
  try{ collapsed = localStorage.getItem('completefocus_sidebar') === 'collapsed'; }catch(e){}
  if(collapsed && window.innerWidth > 900){
    shell.classList.add('collapsed');
    collapseBtn.setAttribute('aria-pressed','true');
    collapseBtn.setAttribute('aria-label','Expand sidebar');
  }

  collapseBtn.addEventListener('click', ()=>{
    shell.classList.toggle('collapsed');
    const isCollapsed = shell.classList.contains('collapsed');
    collapseBtn.setAttribute('aria-pressed', String(isCollapsed));
    collapseBtn.setAttribute('aria-label', isCollapsed ? 'Expand sidebar' : 'Collapse sidebar');
    try{ localStorage.setItem('completefocus_sidebar', isCollapsed ? 'collapsed' : 'expanded'); }catch(e){}
  });

  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const hamburger = document.getElementById('hamburgerBtn');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer(){
    sidebar.classList.add('open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded','true');
    hamburger.setAttribute('aria-label','Close menu');
    document.body.style.overflow = 'hidden';
    const firstNav = sidebar.querySelector('.nav-item');
    if(firstNav) firstNav.focus();
  }
  function closeDrawer(){
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
    hamburger.setAttribute('aria-label','Open menu');
    document.body.style.overflow = '';
    hamburger.focus();
  }
  hamburger.addEventListener('click', ()=>{
    if(sidebar.classList.contains('open')) closeDrawer(); else openDrawer();
  });
  drawerClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape' && sidebar.classList.contains('open')) closeDrawer();
  });
  window._closeDrawer = closeDrawer;
}

/* ============================================================
   Page Renderer
   ============================================================ */
const calcRoutes = ['profit-calculator','breakeven-calculator','pricing-calculator','startup-cost-calculator','revenue-calculator','cashflow-calculator'];
const guideRoutes = Object.keys(guides);

function currentPage(){
  return document.body.dataset.page || 'home';
}
function setActiveNav(page){
  let navKey = page;
  if(guideRoutes.includes(page)) navKey = 'guides';
  if(calcRoutes.includes(page)) navKey = 'tools';
  $$('.nav-item[data-nav]').forEach(link=>{
    if(link.dataset.nav === navKey) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
}
function renderPage(){
  const page = currentPage();
  setActiveNav(page);
  const progress = document.getElementById('readingProgress');

  if(page === 'home') { appEl.innerHTML = renderHome(); if(progress) progress.hidden = true; }
  else if(page === 'business-ideas') { appEl.innerHTML = renderBusinessIdeas(); if(progress) progress.hidden = true; }
  else if(page === 'guides') { appEl.innerHTML = renderGuidesList(); if(progress) progress.hidden = true; }
  else if(guideRoutes.includes(page)) { appEl.innerHTML = renderGuide(page); afterRenderGuide(); if(progress) progress.hidden = false; }
  else if(page === 'tools') { appEl.innerHTML = renderToolsHub(); if(progress) progress.hidden = true; }
  else if(calcRoutes.includes(page)) { appEl.innerHTML = renderCalculatorPage(page); afterRenderCalculator(page); if(progress) progress.hidden = true; }
  else if(page === 'checklist') { appEl.innerHTML = renderChecklistPage(); afterRenderChecklist(); if(progress) progress.hidden = true; }
  else if(page === 'premium') { appEl.innerHTML = renderPremium(); if(progress) progress.hidden = true; }
  else if(page === 'store') { appEl.innerHTML = renderStore(); if(progress) progress.hidden = true; }
  else { appEl.innerHTML = renderHome(); if(progress) progress.hidden = true; }
}

/* ============================================================
   Home
   ============================================================ */
function renderHome(){
  const ideaCards = businessModels.map((m,i)=>ideaCardHtml(m,i)).join('');
  const toolCards = toolsList.slice(0,3).map(t=>toolCardHtml(t)).join('') + toolCardHtml(checklistToolEntry);
  return `
  <section class="hero">
    <div class="wrap hero-inner">
      <p class="eyebrow">COMPLETEFOCUS</p>
      <h1>Build your business with <em>COMPLETEFOCUS</em>.</h1>
      <p class="lead">Business ideas, free tools, practical guides and premium resources designed to help you turn an idea into a real business.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="business-ideas.html">Explore Business Ideas</a>
        <a class="btn btn-outline" href="tools.html">Explore Free Tools</a>
        <a class="btn btn-amber" href="${BEACONS_URL}" target="_blank" rel="noopener">BUY PREMIUM GUIDE</a>
      </div>
      <div class="pipeline" aria-hidden="true">
        ${['Product','Content','Audience','Sales','Reinvestment'].map((s,i,arr)=>`<div class="pipeline-step"><span class="pipeline-dot"></span><span class="pipeline-label">${s}</span></div>${i<arr.length-1?'<span class="pipeline-arrow">→</span>':''}`).join('')}
      </div>
    </div>
  </section>

  <section class="section" id="ideas">
    <div class="wrap">
      <div class="section-head">
        <div>
          <p class="eyebrow">Start here</p>
          <h2>Business ideas</h2>
          <p>Four real business models. Three have free step-by-step guides — hover a card to see the numbers.</p>
        </div>
        <a class="view-all-link" href="business-ideas.html">See all ratings &rarr;</a>
      </div>
      <div class="idea-grid">${ideaCards}</div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="wrap">
      <div class="section-head">
        <div>
          <p class="eyebrow">No signup needed</p>
          <h2>Free business tools</h2>
          <p>Six calculators and a custom checklist. Everything saves to this device automatically.</p>
        </div>
        <a class="view-all-link" href="tools.html">View all tools &rarr;</a>
      </div>
      <div class="tool-grid">${toolCards}</div>
    </div>
  </section>
  `;
}

function ideaCardHtml(m, i){
  const badge = m.free ? `<span class="badge badge-free">Free Guide</span>` : `<span class="badge badge-premium">Premium</span>`;
  const ratings = m.ratings ? `
    <div class="idea-ratings">
      ${ratingMini('Startup cost', m.ratings.cost)}
      ${ratingMini('Difficulty', m.ratings.difficulty)}
      ${ratingMini('Potential', m.ratings.potential)}
    </div>` : `<div class="idea-ratings"><p class="est-note" style="grid-column:1/-1;">Ratings available on request in the premium store.</p></div>`;
  const cta = m.free ? `Read the free guide` : `Buy premium guide`;
  const href = m.free && m.url ? m.url : BEACONS_URL;
  const targetAttr = m.free && m.url ? '' : ' target="_blank" rel="noopener"';
  return `
  <a class="idea-card${m.free?'':' premium'}" href="${href}"${targetAttr} style="animation-delay:${i*70}ms" aria-label="${m.name}${m.free?', free guide':', premium'}">
    <div class="idea-card-top">
      <div class="idea-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${m.icon}</svg></div>
      ${badge}
    </div>
    <div>
      <h3>${m.name}</h3>
      <p class="desc">${m.desc}</p>
    </div>
    ${ratings}
    <p class="est-note">Ratings are estimates, not guaranteed outcomes.</p>
    <div class="idea-card-cta">${cta} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
  </a>`;
}
function ratingMini(label, val){
  return `<div class="rating-mini"><span class="r-label">${label}</span><div class="r-track"><div class="r-fill" style="--pct:${val*10}%"></div></div><span class="r-val">${val} / 10</span></div>`;
}
function toolCardHtml(t){
  return `<a class="tool-card" href="${t.url}">
    <div class="idea-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t.icon}</svg></div>
    <h4>${t.name}</h4>
    <p>${t.desc}</p>
    <span class="go">Open tool &rarr;</span>
  </a>`;
}

/* ============================================================
   Business Ideas page
   ============================================================ */
function renderBusinessIdeas(){
  const cards = businessModels.map((m,i)=>ideaCardHtml(m,i)).join('');
  return `
  <section class="section" style="padding-top:48px;">
    <div class="wrap">
      <p class="eyebrow">Business ideas</p>
      <h1 style="font-size:clamp(28px,4vw,42px);margin-bottom:10px;">Four ways to start.</h1>
      <p style="color:var(--ink-soft);max-width:560px;margin-bottom:34px;">Every model below is ranked on three things — startup cost, difficulty and money-making potential — so you can judge the trade-offs before you pick one. Ratings are estimates based on the general shape of each model, not a promise of results.</p>
      <div class="idea-grid">${cards}</div>
    </div>
  </section>`;
}

/* ============================================================
   Guides list
   ============================================================ */
function renderGuidesList(){
  const items = guideRoutes.map((r, i)=>{
    const g = guides[r];
    return `<a class="idea-card" href="${r}.html" style="animation-delay:${i*70}ms">
      <div class="idea-card-top"><div class="idea-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><span class="badge badge-free">Free Guide</span></div>
      <div><h3>${g.title.replace('The Free ','')}</h3><p class="desc">${g.subtitle}</p></div>
      <p class="est-note">${g.readMins} min read · ${g.sections.length} sections</p>
      <div class="idea-card-cta">Read the guide <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
    </a>`;
  }).join('');
  return `
  <section class="section" style="padding-top:48px;">
    <div class="wrap">
      <p class="eyebrow">Guides</p>
      <h1 style="font-size:clamp(28px,4vw,42px);margin-bottom:10px;">Free, full-length guides.</h1>
      <p style="color:var(--ink-soft);max-width:560px;margin-bottom:34px;">The complete text of each free guide, right here on the site — no downloads, no signup.</p>
      <div class="idea-grid">${items}</div>
    </div>
  </section>`;
}

/* ============================================================
   Guide detail
   ============================================================ */
function renderSectionBody(item){
  if(item.t==='p') return `<p>${item.c}</p>`;
  if(item.t==='ul') return `<ul>${item.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
  if(item.t==='callout') return `<div class="callout${item.amber?' amber':''}">${item.label?`<strong>${item.label}</strong>`:''}${item.c}</div>`;
  if(item.t==='chain') return `<div class="step-chain">${item.items.map((s,i)=>`<div class="step-chain-item"><span class="sc-num">${String(i+1).padStart(2,'0')}</span><div><div class="sc-label">${s.l}</div><div class="sc-desc">${s.d}</div></div></div>`).join('')}</div>`;
  if(item.t==='table') return `<div class="g-table-wrap"><table class="g-table"><thead><tr>${item.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${item.rows.map(r=>`<tr>${r.map((c,i)=>`<td${/^[£\d]/.test(c)?' class="num"':''}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if(item.t==='flow') return `<div class="mini-flow">${item.items.map((s,i,arr)=>`<div class="mf-step">${s}</div>${i<arr.length-1?'<div class="mf-arrow">↓</div>':''}`).join('')}</div>`;
  if(item.t==='cta_selldone') return `<a class="btn btn-primary" href="${SELLDONE_URL}" target="_blank" rel="noopener" style="margin-bottom:16px;">BUILD YOUR STORE WITH SELLDONE</a>`;
  return '';
}
function renderGuide(route){
  const g = guides[route];
  const toc = g.sections.map((s,i)=>`<li><a href="#sec-${s.id}" data-jump="${s.id}"><span class="n">${String(i+1).padStart(2,'0')}</span>${s.h}</a></li>`).join('');
  const body = g.sections.map((s,i)=>`
    <section class="g-section" id="sec-${s.id}">
      <h2><span class="snum">${String(i+1).padStart(2,'0')}</span>${s.h}</h2>
      ${s.body.map(renderSectionBody).join('')}
    </section>`).join('');
  const related = toolsList.slice(0,3).map(t=>`<a href="${t.url}">${t.name} <span>&rarr;</span></a>`).join('') + `<a href="checklist.html">Custom Checklist <span>&rarr;</span></a>`;
  return `
  <div class="reading-progress-bar-wrap"></div>
  <header class="guide-head">
    <div class="wrap">
      <span class="badge badge-free">Free Guide</span>
      <h1>${g.title}</h1>
      <p>${g.subtitle}</p>
      <div class="guide-meta">
        <span>${g.readMins} min read</span><span>${g.sections.length} sections</span><span>By COMPLETEFOCUS</span>
      </div>
      <div class="hero-ctas" style="margin-top:22px;margin-bottom:0;">
        <a class="btn btn-amber" href="${BEACONS_URL}" target="_blank" rel="noopener">BUY PREMIUM GUIDE</a>
        <a class="btn btn-outline" href="guides.html">All guides</a>
        <a class="btn btn-outline" href="index.html">Home</a>
      </div>
    </div>
  </header>

  <div class="wrap guide-body-wrap">
    <div class="guide-content">
      <div class="guide-toc">
        <h5>On this page</h5>
        <ol>${toc}</ol>
      </div>
      ${body}
      <div class="tool-cta-strip">
        <a class="btn btn-amber" href="${BEACONS_URL}" target="_blank" rel="noopener">BUY PREMIUM GUIDE</a>
        <a class="btn btn-outline" href="checklist.html">Start a launch checklist</a>
      </div>
      <h5 class="mono" style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-faint);margin-bottom:12px;">Related tools</h5>
      <div class="related-tools">${related}</div>
      <a class="btn btn-amber btn-block" href="${BEACONS_URL}" target="_blank" rel="noopener">BUY PREMIUM GUIDE</a>
    </div>
    <aside class="premium-card" aria-label="Premium guide">
      <span class="badge badge-premium">Premium</span>
      <h3>Go further with the Premium Guide</h3>
      <p>This free guide covers the basics. The premium version adds the full system:</p>
      <ul>
        <li>Sourcing &amp; supplier questions</li>
        <li>Pricing &amp; profit margins</li>
        <li>Stock &amp; cash-flow management</li>
        <li>Content &amp; growth systems</li>
        <li>Scaling once it's working</li>
      </ul>
      <a class="btn btn-amber btn-block" href="${BEACONS_URL}" target="_blank" rel="noopener">BUY PREMIUM GUIDE</a>
    </aside>
  </div>`;
}
function afterRenderGuide(){
  const bar = document.getElementById('readingProgressBar');
  function onScroll(){
    if(!bar) return;
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    bar.style.width = height>0 ? Math.min(100, (scrolled/height)*100) + '%' : '0%';
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
  $$('[data-jump]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.getElementById('sec-' + a.dataset.jump);
      if(target) target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
    });
  });
}

/* ============================================================
   Tools hub
   ============================================================ */
function renderToolsHub(){
  const cards = toolsList.map(t=>toolCardHtml(t)).join('') + toolCardHtml(checklistToolEntry);
  return `
  <section class="section" style="padding-top:48px;">
    <div class="wrap">
      <p class="eyebrow">Free tools</p>
      <h1 style="font-size:clamp(28px,4vw,42px);margin-bottom:10px;">Do the maths before you spend.</h1>
      <p style="color:var(--ink-soft);max-width:560px;margin-bottom:34px;">Six calculators plus a custom checklist. Nothing is sent anywhere — figures stay in this browser.</p>
      <div class="tool-grid">${cards}</div>
    </div>
  </section>`;
}

/* ============================================================
   Premium & Store
   ============================================================ */
function renderPremium(){
  const tiles = [
    {n:"Premium Clothing Brand Guide", d:"Manufacturers, supplier questions, pricing, stock, cash flow, Selldone setup, TikTok growth and scaling."},
    {n:"Premium Reselling Guide + Spreadsheet", d:"Advanced sourcing, pricing strategy, inventory management, sell-through and a full spreadsheet system."},
    {n:"Premium Affiliate Marketing Guide + Spreadsheet", d:"Finding profitable niches, content systems, click and commission tracking, and conversion analysis."},
    {n:"Luxury Lifestyle Clipping", d:"A separate premium business model, fully broken down in the COMPLETEFOCUS store."},
  ];
  return `
  <section class="section" style="padding-top:48px;">
    <div class="wrap">
      <div class="premium-hero">
        <span class="badge badge-premium">Premium</span>
        <h1 style="margin-top:14px;">The complete COMPLETEFOCUS system.</h1>
        <p>Every free guide on this site covers the basics. The premium guides go further — the full sourcing, pricing, tracking and growth systems behind each business model.</p>
        <a class="btn btn-amber" href="${BEACONS_URL}" target="_blank" rel="noopener">BUY PREMIUM GUIDE</a>
      </div>
      <div class="premium-grid">
        ${tiles.map(t=>`<div class="premium-tile locked">
          <div class="lock-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg><span class="badge badge-premium">Premium</span></div>
          <h4>${t.n}</h4><p>${t.d}</p>
          <a class="btn btn-amber btn-sm btn-block" href="${BEACONS_URL}" target="_blank" rel="noopener">BUY PREMIUM GUIDE</a>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}
function renderStore(){
  return `
  <section class="section" style="padding-top:48px;">
    <div class="wrap">
      <div class="premium-hero">
        <span class="badge badge-premium">COMPLETEFOCUS Store</span>
        <h1 style="margin-top:14px;">Everything premium lives on Beacons.</h1>
        <p>All premium guides, spreadsheets and the Luxury Lifestyle Clipping breakdown are sold through the COMPLETEFOCUS store.</p>
        <a class="btn btn-amber" href="${BEACONS_URL}" target="_blank" rel="noopener">BUY PREMIUM GUIDE</a>
      </div>
      <div class="premium-tile" style="max-width:480px;">
        <h4>Building a clothing brand?</h4>
        <p>Set up your own store with Selldone — the platform used throughout the free Clothing Brand Guide.</p>
        <a class="btn btn-primary btn-sm" href="${SELLDONE_URL}" target="_blank" rel="noopener">BUILD YOUR STORE WITH SELLDONE</a>
      </div>
    </div>
  </section>`;
}

/* ============================================================
   Calculators — shared shell
   ============================================================ */
function calcHeader(title, desc){
  return `
  <section class="section" style="padding-top:48px;">
    <div class="wrap">
      <a class="btn btn-outline btn-sm" href="tools.html" style="margin-bottom:18px;">&larr; All tools</a>
      <p class="eyebrow">Free tool</p>
      <h1 style="font-size:clamp(26px,3.6vw,36px);margin-bottom:8px;">${title}</h1>
      <p style="color:var(--ink-soft);max-width:520px;margin-bottom:30px;">${desc}</p>
  `;
}
const calcFooter = `</div></section>`;

function fieldHtml(id, label, hint, prefix){
  return `<div class="field">
    <label for="${id}">${label}</label>
    <div class="input-wrap${prefix?' has-prefix':''}">
      ${prefix?`<span class="prefix" aria-hidden="true">${prefix}</span>`:''}
      <input type="number" id="${id}" inputmode="decimal" step="0.01" placeholder="0.00">
    </div>
    <div class="err-msg" id="${id}-err">Enter a valid number.</div>
    ${hint?`<div class="field-hint">${hint}</div>`:''}
  </div>`;
}
function readNum(id){
  const el = document.getElementById(id);
  const errEl = document.getElementById(id+'-err');
  const raw = el.value.trim();
  if(raw===''){ el.classList.remove('invalid'); if(errEl) errEl.classList.remove('show'); return null; }
  const n = parseFloat(raw);
  if(isNaN(n) || n < 0){
    el.classList.add('invalid'); if(errEl) errEl.classList.add('show');
    return NaN;
  }
  el.classList.remove('invalid'); if(errEl) errEl.classList.remove('show');
  return n;
}
function emptyState(text){
  return `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v5M12 16h.01"/><circle cx="12" cy="12" r="9"/></svg><p>${text}</p></div>`;
}
function storageNote(){
  return `<div class="storage-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span>Figures are calculated in your browser and, where saved, stored only on this device — not in a cloud database.</span></div>`;
}

/* ============================================================
   1. Profit Calculator
   ============================================================ */
function renderProfitCalculator(){
  return calcHeader('Profit Calculator', 'Work out revenue, total costs, profit and profit margin.') + `
  <div class="calc-shell">
    <div class="calc-panel">
      <h3>Your figures</h3>
      ${fieldHtml('pc-price','Selling price per unit','', '£')}
      ${fieldHtml('pc-units','Units sold')}
      ${fieldHtml('pc-cost','Cost per unit','', '£')}
      ${fieldHtml('pc-extra','Additional expenses','Packaging, ads, fees etc.','£')}
      <button class="reset-link" id="pc-reset">Reset calculator</button>
    </div>
    <div id="pc-result">${emptyState('Enter your figures to see the result.')}</div>
  </div>
  ${storageNote()}
  ${calcFooter}`;
}
function wireProfitCalculator(){
  const ids = ['pc-price','pc-units','pc-cost','pc-extra'];
  const out = document.getElementById('pc-result');
  function update(){
    const price = readNum('pc-price'), units = readNum('pc-units'), cost = readNum('pc-cost'), extra = readNum('pc-extra') || 0;
    if([price,units,cost].some(v=>Number.isNaN(v))){ out.innerHTML = emptyState('Check the highlighted field — enter a valid, positive number.'); return; }
    if(price===null || units===null || cost===null){ out.innerHTML = emptyState('Enter your figures to see the result.'); return; }
    const revenue = price*units;
    const productCosts = cost*units;
    const totalCosts = productCosts + (extra||0);
    const profit = revenue - totalCosts;
    const margin = revenue>0 ? (profit/revenue)*100 : 0;
    out.innerHTML = `<div class="result-panel">
      <div class="result-row"><span class="rl">Revenue</span><span class="rv">${fmtMoney(revenue)}</span></div>
      <div class="result-row"><span class="rl">Product costs</span><span class="rv">${fmtMoney(productCosts)}</span></div>
      <div class="result-row"><span class="rl">Total costs</span><span class="rv">${fmtMoney(totalCosts)}</span></div>
      <div class="result-row hero-result${profit<0?' neg':''}"><span class="rl">Profit</span><span class="rv">${fmtMoney(profit)}</span></div>
      <div class="result-row"><span class="rl">Profit margin</span><span class="rv">${fmtNum(margin)}%</span></div>
    </div>`;
  }
  ids.forEach(id=>document.getElementById(id).addEventListener('input', update));
  document.getElementById('pc-reset').addEventListener('click', ()=>{ ids.forEach(id=>document.getElementById(id).value=''); update(); });
  update();
}

/* ============================================================
   2. Break-Even Calculator
   ============================================================ */
function renderBreakevenCalculator(){
  return calcHeader('Break-Even Calculator', 'Find out how many units you need to sell before your fixed costs are covered.') + `
  <div class="calc-shell">
    <div class="calc-panel">
      <h3>Your figures</h3>
      ${fieldHtml('be-fixed','Fixed costs','One-off or monthly costs that do not change with sales.','£')}
      ${fieldHtml('be-price','Selling price per unit','', '£')}
      ${fieldHtml('be-variable','Variable cost per unit','Cost that scales with each sale.','£')}
      <button class="reset-link" id="be-reset">Reset calculator</button>
    </div>
    <div id="be-result">${emptyState('Enter your figures to see the result.')}</div>
  </div>
  ${storageNote()}
  ${calcFooter}`;
}
function wireBreakevenCalculator(){
  const ids = ['be-fixed','be-price','be-variable'];
  const out = document.getElementById('be-result');
  function update(){
    const fixed = readNum('be-fixed'), price = readNum('be-price'), variable = readNum('be-variable');
    if([fixed,price,variable].some(v=>Number.isNaN(v))){ out.innerHTML = emptyState('Check the highlighted field — enter a valid, positive number.'); return; }
    if(fixed===null || price===null || variable===null){ out.innerHTML = emptyState('Enter your figures to see the result.'); return; }
    const contribution = price - variable;
    if(contribution <= 0){
      out.innerHTML = `<div class="result-panel"><div class="warn-box show">Your selling price is at or below your variable cost per unit, so you can't break even by selling more — every unit loses money. Raise your price or lower your variable cost.</div></div>`;
      return;
    }
    const units = fixed/contribution;
    const revenue = units*price;
    out.innerHTML = `<div class="result-panel">
      <div class="result-row"><span class="rl">Contribution per unit</span><span class="rv">${fmtMoney(contribution)}</span></div>
      <div class="result-row hero-result"><span class="rl">Break-even units</span><span class="rv">${fmtNum(units,1)}</span></div>
      <div class="result-row"><span class="rl">Break-even revenue</span><span class="rv">${fmtMoney(revenue)}</span></div>
    </div>`;
  }
  ids.forEach(id=>document.getElementById(id).addEventListener('input', update));
  document.getElementById('be-reset').addEventListener('click', ()=>{ ids.forEach(id=>document.getElementById(id).value=''); update(); });
  update();
}

/* ============================================================
   3. Pricing Calculator
   ============================================================ */
function renderPricingCalculator(){
  return calcHeader('Pricing Calculator', 'Turn your total cost into a recommended selling price.') + `
  <div class="calc-shell">
    <div class="calc-panel">
      <h3>Your costs</h3>
      ${fieldHtml('pr-product','Product cost','', '£')}
      ${fieldHtml('pr-packaging','Packaging','', '£')}
      ${fieldHtml('pr-shipping','Shipping','', '£')}
      ${fieldHtml('pr-fees','Fees','', '£')}
      ${fieldHtml('pr-other','Other costs','', '£')}
      <div class="toggle-pair" role="group" aria-label="Pricing method">
        <button id="pr-mode-margin" aria-pressed="true" data-mode="margin">Profit margin</button>
        <button id="pr-mode-markup" aria-pressed="false" data-mode="markup">Markup</button>
      </div>
      <div class="field" id="pr-target-field">
        <label for="pr-target">Target profit margin</label>
        <div class="input-wrap"><input type="number" id="pr-target" inputmode="decimal" step="1" placeholder="30"><span class="prefix" style="left:auto;right:12px;">%</span></div>
        <div class="field-hint" id="pr-target-hint">Margin = profit as a % of the selling price. Markup = profit as a % of your cost — the two give different prices for the same target number.</div>
      </div>
      <button class="reset-link" id="pr-reset">Reset calculator</button>
    </div>
    <div id="pr-result">${emptyState('Enter your figures to see the result.')}</div>
  </div>
  ${storageNote()}
  ${calcFooter}`;
}
function wirePricingCalculator(){
  const costIds = ['pr-product','pr-packaging','pr-shipping','pr-fees','pr-other'];
  const out = document.getElementById('pr-result');
  let mode = 'margin';
  const mMargin = document.getElementById('pr-mode-margin'), mMarkup = document.getElementById('pr-mode-markup');
  function setMode(m){
    mode = m;
    mMargin.setAttribute('aria-pressed', String(m==='margin'));
    mMarkup.setAttribute('aria-pressed', String(m==='markup'));
    document.getElementById('pr-target-field').querySelector('label').textContent = m==='margin' ? 'Target profit margin' : 'Target markup';
    update();
  }
  mMargin.addEventListener('click', ()=>setMode('margin'));
  mMarkup.addEventListener('click', ()=>setMode('markup'));
  function update(){
    const vals = costIds.map(id => readNum(id));
    if(vals.some(v=>Number.isNaN(v))){ out.innerHTML = emptyState('Check the highlighted field — enter a valid, positive number.'); return; }
    const target = readNum('pr-target');
    if(Number.isNaN(target)){ out.innerHTML = emptyState('Check the highlighted field — enter a valid, positive number.'); return; }
    const anyEntered = vals.some(v=>v!==null) || target!==null;
    if(!anyEntered){ out.innerHTML = emptyState('Enter your figures to see the result.'); return; }
    const totalCost = vals.reduce((a,v)=>a+(v||0),0);
    const t = (target||0)/100;
    let sellingPrice;
    if(mode==='margin'){
      if(t>=1){ out.innerHTML = `<div class="result-panel"><div class="warn-box show">A target margin of 100% or more isn't possible from a fixed cost — try a number under 100.</div></div>`; return; }
      sellingPrice = totalCost / (1 - t);
    } else {
      sellingPrice = totalCost * (1 + t);
    }
    const profit = sellingPrice - totalCost;
    const margin = sellingPrice>0 ? (profit/sellingPrice)*100 : 0;
    out.innerHTML = `<div class="result-panel">
      <div class="result-row"><span class="rl">Total cost</span><span class="rv">${fmtMoney(totalCost)}</span></div>
      <div class="result-row hero-result"><span class="rl">Recommended selling price</span><span class="rv">${fmtMoney(sellingPrice)}</span></div>
      <div class="result-row"><span class="rl">Expected profit</span><span class="rv">${fmtMoney(profit)}</span></div>
      <div class="result-row"><span class="rl">Resulting profit margin</span><span class="rv">${fmtNum(margin)}%</span></div>
    </div>`;
  }
  costIds.forEach(id=>document.getElementById(id).addEventListener('input', update));
  document.getElementById('pr-target').addEventListener('input', update);
  document.getElementById('pr-reset').addEventListener('click', ()=>{ costIds.forEach(id=>document.getElementById(id).value=''); document.getElementById('pr-target').value=''; update(); });
  update();
}

/* ============================================================
   4. Startup Cost Calculator
   ============================================================ */
let startupRows = [];
function renderStartupCalculator(){
  try{ startupRows = JSON.parse(localStorage.getItem('completefocus_startup_rows')||'null') || []; }catch(e){ startupRows = []; }
  if(startupRows.length===0) startupRows = [{name:'Stock', cost:''},{name:'Packaging', cost:''}];
  return calcHeader('Startup Cost Calculator', 'Build a custom list of expenses to estimate what it will cost to get started.') + `
  <div class="calc-shell">
    <div class="calc-panel">
      <h3>Expenses</h3>
      <div class="row-list" id="sc-rows"></div>
      <button class="btn btn-outline btn-sm" id="sc-add">+ Add expense</button>
      <button class="reset-link" id="sc-reset">Reset all expenses</button>
    </div>
    <div id="sc-result"></div>
  </div>
  ${storageNote()}
  ${calcFooter}`;
}
function saveStartupRows(){ try{ localStorage.setItem('completefocus_startup_rows', JSON.stringify(startupRows)); }catch(e){} }
function wireStartupCalculator(){
  const rowsEl = document.getElementById('sc-rows');
  const out = document.getElementById('sc-result');
  function paintRows(){
    if(startupRows.length===0){
      rowsEl.innerHTML = `<p style="font-size:13px;color:var(--ink-faint);">No expenses yet — add your first one below.</p>`;
    } else {
      rowsEl.innerHTML = startupRows.map((r,i)=>`
        <div class="row-item" data-i="${i}">
          <input type="text" class="sc-name" value="${escapeHtml(r.name)}" placeholder="Expense name" aria-label="Expense name">
          <div class="input-wrap has-prefix"><span class="prefix">£</span><input type="number" class="sc-cost" value="${r.cost}" step="0.01" placeholder="0.00" aria-label="Cost"></div>
          <button class="icon-btn sc-del" aria-label="Delete expense"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg></button>
        </div>`).join('');
    }
    wireRowEvents();
    updateResult();
  }
  function wireRowEvents(){
    $$('.sc-name', rowsEl).forEach(inp=>inp.addEventListener('input', e=>{
      const i = +e.target.closest('.row-item').dataset.i; startupRows[i].name = e.target.value; saveStartupRows();
    }));
    $$('.sc-cost', rowsEl).forEach(inp=>inp.addEventListener('input', e=>{
      const i = +e.target.closest('.row-item').dataset.i; startupRows[i].cost = e.target.value; saveStartupRows(); updateResult();
    }));
    $$('.sc-del', rowsEl).forEach(btn=>btn.addEventListener('click', e=>{
      const i = +e.target.closest('.row-item').dataset.i; startupRows.splice(i,1); saveStartupRows(); paintRows();
    }));
  }
  function updateResult(){
    if(startupRows.length===0){ out.innerHTML = emptyState('Add an expense to see your total estimated startup cost.'); return; }
    const total = startupRows.reduce((sum,r)=> sum + (parseFloat(r.cost)||0), 0);
    out.innerHTML = `<div class="result-panel">
      ${startupRows.map(r=>`<div class="result-row"><span class="rl">${escapeHtml(r.name)||'Untitled expense'}</span><span class="rv" style="font-size:14px;">${fmtMoney(parseFloat(r.cost)||0)}</span></div>`).join('')}
      <div class="result-row hero-result"><span class="rl">Total estimated startup cost</span><span class="rv">${fmtMoney(total)}</span></div>
    </div>`;
  }
  document.getElementById('sc-add').addEventListener('click', ()=>{ startupRows.push({name:'', cost:''}); saveStartupRows(); paintRows(); rowsEl.querySelector('.row-item:last-child .sc-name').focus(); });
  document.getElementById('sc-reset').addEventListener('click', ()=>{ startupRows = []; saveStartupRows(); paintRows(); });
  paintRows();
}

/* ============================================================
   5. Revenue Calculator
   ============================================================ */
let revenueRows = [];
function renderRevenueCalculator(){
  try{ revenueRows = JSON.parse(localStorage.getItem('completefocus_revenue_rows')||'null') || null; }catch(e){ revenueRows = null; }
  if(!revenueRows || revenueRows.length===0) revenueRows = [{name:'Product 1', price:'', qty:''}];
  return calcHeader('Revenue Calculator', 'Project revenue across one or more products by price and quantity sold.') + `
  <div class="calc-shell">
    <div class="calc-panel">
      <h3>Products</h3>
      <div class="row-list" id="rv-rows"></div>
      <button class="btn btn-outline btn-sm" id="rv-add">+ Add product</button>
      <button class="reset-link" id="rv-reset">Reset all products</button>
    </div>
    <div id="rv-result"></div>
  </div>
  <p class="field-hint" style="max-width:520px;">Revenue projections are estimates based on the figures you enter — actual sales may differ.</p>
  ${storageNote()}
  ${calcFooter}`;
}
function saveRevenueRows(){ try{ localStorage.setItem('completefocus_revenue_rows', JSON.stringify(revenueRows)); }catch(e){} }
function wireRevenueCalculator(){
  const rowsEl = document.getElementById('rv-rows');
  const out = document.getElementById('rv-result');
  function paintRows(){
    rowsEl.innerHTML = `<div class="row-item rev-item" style="font-size:10.5px;font-family:var(--font-mono);color:var(--ink-faint);text-transform:uppercase;">
      <span>Product</span><span>Price</span><span>Qty</span><span></span></div>` +
      revenueRows.map((r,i)=>`
      <div class="row-item rev-item" data-i="${i}">
        <input type="text" class="rv-name" value="${escapeHtml(r.name)}" placeholder="Product name" aria-label="Product name">
        <div class="input-wrap has-prefix"><span class="prefix">£</span><input type="number" class="rv-price" value="${r.price}" step="0.01" placeholder="0.00" aria-label="Price"></div>
        <input type="number" class="rv-qty" value="${r.qty}" step="1" placeholder="Qty" aria-label="Quantity">
        <button class="icon-btn rv-del" aria-label="Delete product"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg></button>
      </div>`).join('');
    wireRowEvents();
    updateResult();
  }
  function wireRowEvents(){
    $$('.rv-name', rowsEl).forEach(inp=>inp.addEventListener('input', e=>{ const i=+e.target.closest('.row-item').dataset.i; revenueRows[i].name=e.target.value; saveRevenueRows(); }));
    $$('.rv-price', rowsEl).forEach(inp=>inp.addEventListener('input', e=>{ const i=+e.target.closest('.row-item').dataset.i; revenueRows[i].price=e.target.value; saveRevenueRows(); updateResult(); }));
    $$('.rv-qty', rowsEl).forEach(inp=>inp.addEventListener('input', e=>{ const i=+e.target.closest('.row-item').dataset.i; revenueRows[i].qty=e.target.value; saveRevenueRows(); updateResult(); }));
    $$('.rv-del', rowsEl).forEach(btn=>btn.addEventListener('click', e=>{ const i=+e.target.closest('.row-item').dataset.i; revenueRows.splice(i,1); saveRevenueRows(); paintRows(); }));
  }
  function updateResult(){
    if(revenueRows.length===0){ out.innerHTML = emptyState('Add a product to see your projected revenue.'); return; }
    const total = revenueRows.reduce((s,r)=> s + (parseFloat(r.price)||0)*(parseFloat(r.qty)||0), 0);
    out.innerHTML = `<div class="result-panel">
      ${revenueRows.map(r=>`<div class="result-row"><span class="rl">${escapeHtml(r.name)||'Untitled product'}</span><span class="rv" style="font-size:14px;">${fmtMoney((parseFloat(r.price)||0)*(parseFloat(r.qty)||0))}</span></div>`).join('')}
      <div class="result-row hero-result"><span class="rl">Total projected revenue</span><span class="rv">${fmtMoney(total)}</span></div>
    </div>`;
  }
  document.getElementById('rv-add').addEventListener('click', ()=>{ revenueRows.push({name:'', price:'', qty:''}); saveRevenueRows(); paintRows(); });
  document.getElementById('rv-reset').addEventListener('click', ()=>{ revenueRows = [{name:'Product 1', price:'', qty:''}]; saveRevenueRows(); paintRows(); });
  paintRows();
}

/* ============================================================
   6. Cash-Flow Calculator
   ============================================================ */
let cfState = {starting:'', moneyIn:[], moneyOut:[]};
function renderCashflowCalculator(){
  try{ cfState = JSON.parse(localStorage.getItem('completefocus_cashflow')||'null') || null; }catch(e){ cfState = null; }
  if(!cfState) cfState = {starting:'', moneyIn:[{label:'Sales', amount:''}], moneyOut:[{label:'Stock', amount:''}]};
  return calcHeader('Cash-Flow Calculator', 'Track money in and money out to see your net cash flow and ending balance.') + `
  <div class="calc-shell">
    <div class="calc-panel">
      <h3>Starting balance</h3>
      ${fieldHtml('cf-start','Starting balance','', '£')}
      <h3 style="margin-top:22px;">Money in</h3>
      <div class="row-list" id="cf-in-rows"></div>
      <button class="btn btn-outline btn-sm" id="cf-add-in">+ Add money in</button>
      <h3 style="margin-top:22px;">Money out</h3>
      <div class="row-list" id="cf-out-rows"></div>
      <button class="btn btn-outline btn-sm" id="cf-add-out">+ Add money out</button>
      <button class="reset-link" id="cf-reset">Reset calculator</button>
    </div>
    <div id="cf-result"></div>
  </div>
  <p class="field-hint" style="max-width:520px;">Cash flow and profit are not the same thing — cash flow tracks money moving in and out, while profit accounts for all revenue and costs regardless of timing.</p>
  ${storageNote()}
  ${calcFooter}`;
}
function saveCf(){ try{ localStorage.setItem('completefocus_cashflow', JSON.stringify(cfState)); }catch(e){} }
function cfRowsHtml(list, prefix){
  return list.map((r,i)=>`
    <div class="row-item" data-i="${i}">
      <input type="text" class="${prefix}-label" value="${escapeHtml(r.label)}" placeholder="Label" aria-label="Label">
      <div class="input-wrap has-prefix"><span class="prefix">£</span><input type="number" class="${prefix}-amount" value="${r.amount}" step="0.01" placeholder="0.00" aria-label="Amount"></div>
      <button class="icon-btn ${prefix}-del" aria-label="Delete row"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg></button>
    </div>`).join('');
}
function wireCashflowCalculator(){
  const inRows = document.getElementById('cf-in-rows'), outRows = document.getElementById('cf-out-rows');
  const out = document.getElementById('cf-result');
  document.getElementById('cf-start').value = cfState.starting;
  function paint(){
    inRows.innerHTML = cfRowsHtml(cfState.moneyIn, 'cfi');
    outRows.innerHTML = cfRowsHtml(cfState.moneyOut, 'cfo');
    wireRows(inRows, cfState.moneyIn, 'cfi');
    wireRows(outRows, cfState.moneyOut, 'cfo');
    update();
  }
  function wireRows(container, list, prefix){
    $$(`.${prefix}-label`, container).forEach(inp=>inp.addEventListener('input', e=>{ const i=+e.target.closest('.row-item').dataset.i; list[i].label=e.target.value; saveCf(); }));
    $$(`.${prefix}-amount`, container).forEach(inp=>inp.addEventListener('input', e=>{ const i=+e.target.closest('.row-item').dataset.i; list[i].amount=e.target.value; saveCf(); update(); }));
    $$(`.${prefix}-del`, container).forEach(btn=>btn.addEventListener('click', e=>{ const i=+e.target.closest('.row-item').dataset.i; list.splice(i,1); saveCf(); paint(); }));
  }
  function update(){
    const starting = parseFloat(document.getElementById('cf-start').value) || 0;
    const totalIn = cfState.moneyIn.reduce((s,r)=>s+(parseFloat(r.amount)||0),0);
    const totalOut = cfState.moneyOut.reduce((s,r)=>s+(parseFloat(r.amount)||0),0);
    const net = totalIn - totalOut;
    const ending = starting + net;
    out.innerHTML = `<div class="result-panel">
      <div class="result-row"><span class="rl">Total money in</span><span class="rv">${fmtMoney(totalIn)}</span></div>
      <div class="result-row"><span class="rl">Total money out</span><span class="rv">${fmtMoney(totalOut)}</span></div>
      <div class="result-row"><span class="rl">Net cash flow</span><span class="rv">${fmtMoney(net)}</span></div>
      <div class="result-row hero-result${ending<0?' neg':''}"><span class="rl">Ending balance</span><span class="rv">${fmtMoney(ending)}</span></div>
    </div>`;
  }
  document.getElementById('cf-start').addEventListener('input', e=>{ cfState.starting = e.target.value; saveCf(); update(); });
  document.getElementById('cf-add-in').addEventListener('click', ()=>{ cfState.moneyIn.push({label:'', amount:''}); saveCf(); paint(); });
  document.getElementById('cf-add-out').addEventListener('click', ()=>{ cfState.moneyOut.push({label:'', amount:''}); saveCf(); paint(); });
  document.getElementById('cf-reset').addEventListener('click', ()=>{ cfState = {starting:'', moneyIn:[{label:'Sales', amount:''}], moneyOut:[{label:'Stock', amount:''}]}; saveCf(); document.getElementById('cf-start').value=''; paint(); });
  paint();
}

const calculatorRenderers = {
  'profit-calculator': renderProfitCalculator,
  'breakeven-calculator': renderBreakevenCalculator,
  'pricing-calculator': renderPricingCalculator,
  'startup-cost-calculator': renderStartupCalculator,
  'revenue-calculator': renderRevenueCalculator,
  'cashflow-calculator': renderCashflowCalculator,
};
const calculatorWirers = {
  'profit-calculator': wireProfitCalculator,
  'breakeven-calculator': wireBreakevenCalculator,
  'pricing-calculator': wirePricingCalculator,
  'startup-cost-calculator': wireStartupCalculator,
  'revenue-calculator': wireRevenueCalculator,
  'cashflow-calculator': wireCashflowCalculator,
};
function renderCalculatorPage(route){ return calculatorRenderers[route](); }
function afterRenderCalculator(route){ calculatorWirers[route](); }

/* ============================================================
   Checklist
   ============================================================ */
function loadChecklist(){
  try{
    const raw = localStorage.getItem('completefocus_checklist');
    if(!raw) return null;
    const parsed = JSON.parse(raw);
    if(!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.tasks)) return null;
    return parsed;
  }catch(e){ return null; }
}
function saveChecklist(cl){
  try{ localStorage.setItem('completefocus_checklist', JSON.stringify(cl)); flashSaved(); }catch(e){}
}
function flashSaved(){
  const el = document.getElementById('cl-saved');
  if(!el) return;
  el.classList.add('show');
}
let checklistState = null;
function renderChecklistPage(){
  checklistState = loadChecklist();
  return `
  <section class="section" style="padding-top:48px;">
    <div class="wrap checklist-shell">
      <p class="eyebrow">Free tool</p>
      <h1 style="font-size:clamp(26px,3.6vw,36px);margin-bottom:8px;">Custom checklist</h1>
      <p style="color:var(--ink-soft);margin-bottom:26px;">Build your own launch checklist from scratch. Nothing is pre-filled — you decide what belongs on it.</p>
      <div id="cl-mount"></div>
    </div>
  </section>`;
}
function checklistCreateFormHtml(){
  return `<div class="checklist-card">
    <h2 style="font-size:20px;margin-bottom:6px;">Create your checklist</h2>
    <p style="font-size:13.5px;color:var(--ink-soft);margin-bottom:18px;">Give it a name to get started — for example “My Clothing Brand.”</p>
    <div class="add-task-row">
      <input type="text" id="cl-new-name" placeholder="Checklist name" aria-label="Checklist name" style="flex:1;">
      <button class="btn btn-primary btn-sm" id="cl-create-btn">Create checklist</button>
    </div>
  </div>`;
}
function checklistViewHtml(cl){
  const total = cl.tasks.length;
  const completed = cl.tasks.filter(t=>t.done).length;
  const pct = total ? Math.round((completed/total)*100) : 0;
  return `<div class="checklist-card">
    <div class="checklist-title-row">
      <h2 id="cl-name-display">${escapeHtml(cl.name)}</h2>
      <button class="rename-btn" id="cl-rename-btn" aria-label="Rename checklist" title="Rename">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
      </button>
    </div>
    <div class="checklist-stats">
      <span><b>${completed}</b> / ${total} completed</span>
      <span><b>${total-completed}</b> remaining</span>
      <span><b>${pct}%</b> complete</span>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="add-task-row">
      <input type="text" id="cl-new-task" placeholder="Add a task, e.g. Find a manufacturer" aria-label="New task" style="flex:1;">
      <button class="btn btn-primary btn-sm" id="cl-add-task-btn">Add task</button>
    </div>
    <div class="task-list" id="cl-task-list">
      ${total===0 ? `<p style="font-size:13px;color:var(--ink-faint);">No tasks yet — add your first task above.</p>` : cl.tasks.map((t,i)=>`
        <div class="task-item${t.done?' done':''}" data-i="${i}" draggable="true">
          <button class="task-check" role="checkbox" aria-checked="${t.done}" aria-label="Mark task complete">${t.done?'✓':''}</button>
          <input type="text" class="task-text" value="${escapeHtml(t.text)}" aria-label="Task text">
          <div class="task-actions">
            <button class="icon-btn cl-del" aria-label="Delete task"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg></button>
          </div>
        </div>`).join('')}
    </div>
    <div class="checklist-footer-row">
      <span class="save-indicator" id="cl-saved"><span class="dot"></span> Saved automatically</span>
      <div class="footer-actions">
        <button class="reset-link" id="cl-clear-completed">Clear completed</button>
        <button class="reset-link" id="cl-export">Export</button>
        <button class="reset-link" id="cl-import">Import</button>
        <button class="reset-link" id="cl-new-checklist" style="color:var(--red);">New checklist</button>
      </div>
    </div>
    <input type="file" id="cl-import-file" accept="application/json" style="display:none;">
  </div>`;
}
function afterRenderChecklist(){
  const mount = document.getElementById('cl-mount');
  function paint(){
    if(!checklistState){
      mount.innerHTML = checklistCreateFormHtml();
      const nameInput = document.getElementById('cl-new-name');
      function create(){
        const name = nameInput.value.trim();
        if(!name){ nameInput.focus(); return; }
        checklistState = {name, tasks:[]};
        saveChecklist(checklistState);
        paint();
      }
      document.getElementById('cl-create-btn').addEventListener('click', create);
      nameInput.addEventListener('keydown', e=>{ if(e.key==='Enter') create(); });
      nameInput.focus();
    } else {
      mount.innerHTML = checklistViewHtml(checklistState);
      wireChecklistView();
    }
  }
  function wireChecklistView(){
    const listEl = document.getElementById('cl-task-list');
    document.getElementById('cl-rename-btn').addEventListener('click', ()=>{
      const newName = prompt('Rename checklist', checklistState.name);
      if(newName && newName.trim()){ checklistState.name = newName.trim(); saveChecklist(checklistState); paint(); }
    });
    const newTaskInput = document.getElementById('cl-new-task');
    function addTask(){
      const text = newTaskInput.value.trim();
      if(!text) return;
      checklistState.tasks.push({text, done:false});
      saveChecklist(checklistState);
      paint();
      document.getElementById('cl-new-task').focus();
    }
    document.getElementById('cl-add-task-btn').addEventListener('click', addTask);
    newTaskInput.addEventListener('keydown', e=>{ if(e.key==='Enter') addTask(); });

    $$('.task-check', listEl).forEach(btn=>btn.addEventListener('click', e=>{
      const i = +e.target.closest('.task-item').dataset.i;
      checklistState.tasks[i].done = !checklistState.tasks[i].done;
      saveChecklist(checklistState); paint();
    }));
    $$('.task-text', listEl).forEach(inp=>{
      inp.addEventListener('change', e=>{
        const i = +e.target.closest('.task-item').dataset.i;
        checklistState.tasks[i].text = e.target.value;
        saveChecklist(checklistState);
      });
    });
    $$('.cl-del', listEl).forEach(btn=>btn.addEventListener('click', e=>{
      const i = +e.target.closest('.task-item').dataset.i;
      checklistState.tasks.splice(i,1);
      saveChecklist(checklistState); paint();
    }));
    /* drag reorder */
    let dragIndex = null;
    $$('.task-item', listEl).forEach(item=>{
      item.addEventListener('dragstart', e=>{ dragIndex = +item.dataset.i; e.dataTransfer.effectAllowed='move'; });
      item.addEventListener('dragover', e=>{ e.preventDefault(); });
      item.addEventListener('drop', e=>{
        e.preventDefault();
        const dropIndex = +item.dataset.i;
        if(dragIndex===null || dragIndex===dropIndex) return;
        const moved = checklistState.tasks.splice(dragIndex,1)[0];
        checklistState.tasks.splice(dropIndex,0,moved);
        saveChecklist(checklistState); paint();
      });
    });

    document.getElementById('cl-clear-completed').addEventListener('click', ()=>{
      checklistState.tasks = checklistState.tasks.filter(t=>!t.done);
      saveChecklist(checklistState); paint();
    });
    document.getElementById('cl-new-checklist').addEventListener('click', ()=>{
      if(confirm('Start a new checklist? This clears the current one from this device.')){
        checklistState = null;
        try{ localStorage.removeItem('completefocus_checklist'); }catch(e){}
        paint();
      }
    });
    document.getElementById('cl-export').addEventListener('click', ()=>{
      const blob = new Blob([JSON.stringify(checklistState,null,2)], {type:'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = (checklistState.name || 'checklist').replace(/[^a-z0-9]+/gi,'-').toLowerCase() + '.json';
      document.body.appendChild(a); a.click(); a.remove();
      showToast('Checklist exported');
    });
    const fileInput = document.getElementById('cl-import-file');
    document.getElementById('cl-import').addEventListener('click', ()=> fileInput.click());
    fileInput.addEventListener('change', e=>{
      const file = e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = ()=>{
        try{
          const parsed = JSON.parse(reader.result);
          if(parsed && typeof parsed==='object' && Array.isArray(parsed.tasks) && typeof parsed.name==='string'){
            checklistState = parsed; saveChecklist(checklistState); paint(); showToast('Checklist imported');
          } else { showToast('That file does not look like a COMPLETEFOCUS checklist'); }
        }catch(err){ showToast('Could not read that file'); }
      };
      reader.readAsText(file);
      fileInput.value = '';
    });
  }
  paint();
}

/* ============================================================
   Search
   ============================================================ */
function initSearch(){
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  const resultsEl = document.getElementById('searchResults');
  const openBtn = document.getElementById('openSearchBtn');
  const closeBtn = document.getElementById('closeSearchBtn');
  let activeIndex = -1;
  let currentResults = [];

  function open(){
    overlay.classList.add('open');
    input.value = '';
    paint('');
    setTimeout(()=>input.focus(), 30);
  }
  function close(){
    overlay.classList.remove('open');
    openBtn.focus();
  }
  function highlight(text, q){
    if(!q) return escapeHtml(text);
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if(idx===-1) return escapeHtml(text);
    return escapeHtml(text.slice(0,idx)) + '<mark>' + escapeHtml(text.slice(idx,idx+q.length)) + '</mark>' + escapeHtml(text.slice(idx+q.length));
  }
  function paint(q){
    const query = q.trim();
    currentResults = query ? searchIndex.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.cat.toLowerCase().includes(query.toLowerCase())) : searchIndex;
    activeIndex = -1;
    if(currentResults.length===0){
      resultsEl.innerHTML = `<div class="search-empty">No results found.</div>`;
      return;
    }
    resultsEl.innerHTML = currentResults.map((r,i)=>`
      <button class="search-result-item" data-i="${i}">
        <div class="sr-title">${highlight(r.title, query)}</div>
        <div class="sr-cat">${r.cat}</div>
      </button>`).join('');
    $$('.search-result-item', resultsEl).forEach(btn=>{
      btn.addEventListener('click', ()=>selectResult(+btn.dataset.i));
    });
  }
  function selectResult(i){
    const r = currentResults[i];
    if(!r) return;
    close();
    if(r.external){ window.open(r.external, '_blank', 'noopener'); }
    else { window.location.href = r.url; }
  }
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) close(); });
  input.addEventListener('input', e=> paint(e.target.value));
  document.addEventListener('keydown', e=>{
    if(e.key === '/' && !overlay.classList.contains('open') && document.activeElement.tagName!=='INPUT' && document.activeElement.tagName!=='TEXTAREA'){
      e.preventDefault(); open();
    } else if(e.key === 'Escape' && overlay.classList.contains('open')){ close(); }
    else if(overlay.classList.contains('open') && (e.key==='ArrowDown' || e.key==='ArrowUp')){
      e.preventDefault();
      const items = $$('.search-result-item', resultsEl);
      if(items.length===0) return;
      activeIndex = e.key==='ArrowDown' ? Math.min(activeIndex+1, items.length-1) : Math.max(activeIndex-1,0);
      items.forEach((it,i)=>it.classList.toggle('active', i===activeIndex));
      items[activeIndex].scrollIntoView({block:'nearest'});
    } else if(overlay.classList.contains('open') && e.key==='Enter' && activeIndex>=0){
      selectResult(activeIndex);
    }
  });
}

/* ============================================================
   Simple info modals (privacy / terms / contact)
   ============================================================ */
function initInfoModals(){
  const content = {
    privacy: {title:'Privacy', body:'COMPLETEFOCUS does not require an account. Tool figures and your checklist are stored only in this browser using localStorage and are never sent to a server.'},
    terms: {title:'Terms', body:'Guides, ratings and calculator results on COMPLETEFOCUS are estimates for general educational purposes, not guarantees of income or outcome.'},
    contact: {title:'Contact', body:'For premium guides and the full COMPLETEFOCUS system, visit the store link in the navigation.'}
  };
  document.addEventListener('click', e=>{
    const trigger = e.target.closest('[data-modal]');
    if(!trigger) return;
    e.preventDefault();
    const key = trigger.dataset.modal;
    const c = content[key];
    if(c) alert(c.title + '\n\n' + c.body);
  });
}

/* ---------- back to top ---------- */
function initBackToTop(){
  const btn = document.getElementById('backToTop');
  document.addEventListener('scroll', ()=>{
    btn.classList.toggle('show', window.scrollY > 500);
  }, {passive:true});
  btn.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  });
}

/* ============================================================
   Init
   ============================================================ */
function initApp(){
  document.getElementById('yearNow').textContent = new Date().getFullYear();
  initTheme();
  initSidebar();
  initSearch();
  initInfoModals();
  initBackToTop();
  renderPage();
  requestAnimationFrame(()=> document.body.classList.add('ready'));
}
initApp();
