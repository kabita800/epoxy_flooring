import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const IMGS = [
  "/src/assets/image7.jpg",
  "/src/assets/epoxycoatingforpoolsurrounds.png",
  "/src/assets/image3.jpg",
  "/src/assets/flake.jpg",
  "/src/assets/image11.jpg",
  "/src/assets/image23.jpg",
  "/src/assets/image25.jpg",
  "/src/assets/image21.jpg",
  "/src/assets/image20.jpg",
  "/src/assets/industrial.jpg",
  "/src/assets/image24.jpg",
  "/src/assets/image19.jpg",
  "/src/assets/image18.jpg",
  "/src/assets/image12.jpg",
  "/src/assets/image13.jpg",
  "/src/assets/image14.jpg",
  "/src/assets/image15.jpg",
  "/src/assets/image16.jpg",
  "/src/assets/image17.jpg",
  "/src/assets/image18.jpg",


];
const img = (i) => IMGS[i % IMGS.length];

const posts = [
  // ── 1 ──────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "How Important is Epoxy Flooring in Your Garage?",
    excerpt:
      "Having a beautiful house is one of the aspirations of any homeowner. Discover why epoxy flooring is the smartest investment for your garage space.",
    category: "Garage",
    readTime: "5 min",
    featured: true,
    image: img(5),
    body: [
      {
        text: "Having a beautiful house is one of the aspirations of any homeowner. Usually, they want to spend wisely for their homes, and ensure to put their resources and efforts into the right investment. Just like choosing the best flooring for your home especially in your garage, as this is one of the most prone to damage.",
      },
      {
        heading: "Easy to Maintain & Clean",
        text: "The main reason in the list is that epoxy floors are quite easy to maintain and clean. As many homeowners find it difficult to keep their garage tidy and organised all the time, having the epoxy floor applied would make cleaning and upkeep possible without a fuss. Once installed, you will notice how easy and fast it will be to mop or sweep any kind of dirt, whether it's solid or liquid — grease or any kind of oils won't be problems any longer.",
      },
      {
        heading: "Outstanding Benefits for Your Home",
        text: "When your garage floors were installed with epoxy, dirt and unusual stains and scratches will be avoided. The coatings are used to produce quality, impressive and highly durable garage floorings. It withstands the different kinds of accidents or drops which may create cracks and surface damages and any chemical spills.",
      },
      {
        heading: "Safe from All Kinds of Damage",
        text: "Your garage epoxy floor is safe from scratches, shocks, heat (can resist up to 200 degrees), water and other chemicals. Also, epoxy itself is safe since it is composed of non-VOC (no Volatile Organic Compounds) and not harmful to humans — you don't have to worry about possible odour during epoxy coating installation.",
      },
      {
        heading: "Affordability & Value",
        text: "The most important reason for having garage epoxy flooring is the affordability since it can be installed directly on the existing other floorings without the need to spend time and resources to install different floor systems. For concrete floors, the epoxy coating may lengthen its longevity. You may also choose the type of epoxy to install in your garage such as oil and water based epoxy or hybrid (mixed) which differ on the cost and durability. Oil based is the most expensive but the most durable.",
      },
      {
        heading: "Slip Resistant & Stylish",
        text: "Garage epoxy floors if well dried are slip resistant. It can only be slippery when applied with oil, but you may still add anti slip materials to avoid it and maintain its elegance. You may also explore the different designs that will complement the beauty of the interior of your house.",
      },
      {
        heading: "Installation Needs an Expert",
        text: "Epoxy flooring installation is complicated and requires technical knowledge to ensure durability. The preparation of epoxy coating is tedious and can be properly done by professionals for better results. Grab your phone now and dial 1300 037 699 for a free consultation with a Sydney Epoxy Floors expert.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "The Downside of Epoxy Floors for Pool Areas",
    excerpt:
      "Epoxy flooring for pool surrounds faces a tough environment. Exposure to UV rays, chlorine and salt can exacerbate wear over time.",
    category: "Outdoor",
    readTime: "5 min",
    featured: false,
    image: img(1),
    body: [
      {
        text: "Epoxy flooring for pool surrounds often finds itself in a difficult predicament. Exposure to UV rays, chlorine, and salt exacerbates the wear and tear on epoxy surfaces, leading to rapid degradation and maintenance challenges. Despite its inherent durability in controlled environments, outdoor conditions are overwhelmingly tough for epoxy flooring.",
      },
      {
        heading: "Understanding Epoxy Flooring",
        text: "Epoxy flooring is highly versatile. Renowned for its robustness and attractive finish, this type of flooring is crafted from a blend of resin and hardeners that create a strong plastic material. Particularly ideal for industrial and commercial spaces, epoxy flooring is cherished for its capacity to withstand heavy foot traffic and its seamless, glossy appearance.",
      },
      {
        heading: "Challenges of Using Epoxy for Pool Surrounds",
        text: "Epoxy flooring is not ideal for pool surrounds due to its vulnerability to UV rays, leading to fading and discolouration. Additionally, it struggles with chlorinated and saltwater exposure, increasing maintenance costs and safety concerns.",
      },
      {
        heading: "UV Exposure and Discolouration",
        text: "UV exposure breaks down epoxy polymers, causing fading and compromising structural integrity — particularly concerning in settings where aesthetics are vital, such as luxury homes or public recreation centres.",
      },
      {
        heading: "Chemical Resistance Issues",
        text: "Epoxy flooring, though durable, struggles with the chemical environment of pools, including salts and chlorine. These chemicals cause surface wear, discolouration, and structural weakening. The alkaline nature of pool chemicals accelerates this breakdown.",
      },
      {
        heading: "Effects of Salt on Epoxy Flooring",
        text: "Salt crystals penetrate the surface, causing degradation, unsightly blemishes, and structural weakening. Pool surrounds frequently exposed to saltwater face accelerated deterioration — epoxy's chemical structure is not resistant to salt's corrosive effects, resulting in peeling and flaking.",
      },
      {
        heading: "Alternative Flooring Options for Pools",
        text: "Textured tiles and pavers offer durable, slip-resistant surfaces that resist fading and chemical damage. Travertine and limestone remain cool underfoot while combining elegance with practicality. Specialised composite decking systems offer versatility and resilience against UV exposure and pool chemicals.",
      },
      {
        text: "Contact Sydney Epoxy Floors for honest advice on your upcoming epoxy flooring project.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Flake Polyaspartic Flooring for Sydney Garages",
    excerpt:
      "Imagine your garage as a blank canvas ready for transformation. Flake polyaspartic flooring offers a sophisticated blend of durability and design.",
    category: "Innovation",
    readTime: "8 min",
    featured: false,
    image: img(2),
    body: [
      {
        text: "Imagine your garage as a blank canvas, ready for transformation. SEF Seamless flake flooring offers a sophisticated blend of durability and style, perfect for garages. Flake polyaspartic flooring boasts exceptional strength and resilience, enduring time, spills, and temperature variations.",
      },
      {
        heading: "Understanding Flake Polyaspartic Flooring",
        text: "This innovative system combines polyaspartic resins with decorative flakes, creating a durable surface resistant to abrasions, chipping, and chemical spills. Its quick curing time means minimal disruption, with your garage ready for use swiftly. With customisable aesthetics including various flake colours and sizes, it transforms garages into spaces reflecting individual style without compromising efficiency.",
      },
      {
        heading: "Key Benefits for Garages",
        text: "Known for its robust composition, this flooring ensures a resilient surface that withstands heavy weights and climate unpredictability. With resistance to UV exposure, stains, and chemicals, your garage maintains its pristine appearance. These floors offer a slip-resistant texture, promoting safety. The seamless surface repels dust and dirt, making cleaning easy, while quick installation ensures minimal disruption.",
      },
      {
        heading: "Durability and Longevity",
        text: "Polyaspartic solutions resist scratches, chips, and impacts, keeping your garage impeccable. Thriving in harsh environments, polyaspartic surfaces withstand extreme temperature changes, ideal for varied climates. This longevity saves significant costs over time, minimising the need for frequent repairs or replacements.",
      },
      {
        heading: "Resistance to Stains and Chemicals",
        text: "Advances in polyaspartic technology have enhanced resilience against common garage hazards. Spills that mar other surfaces are effortlessly repelled. Oil and grease spills cause no discolouration or damage. Thanks to a seamless, non-porous finish, these floors prevent substances from seeping in, offering peace of mind.",
      },
      {
        heading: "Customisation Options",
        text: "A standout benefit is the extensive customisation available. Whether you prefer a subtle look or a bold aesthetic, the wide range of colour flakes and finishes can match your unique preferences.",
        list: [
          "Classic Neutrals — Timeless shades like grey and beige for a chic look.",
          "Bold and Brights — Energise your space with vivid blues and reds.",
          "Natural Earth Tones — Reflect nature with terracotta and pine green hues.",
        ],
      },
      {
        heading: "Comparing to Traditional Options",
        orderedList: [
          "Installation Speeds: Unlike traditional coatings with long drying times, polyaspartic floors install quickly, reducing downtime.",
          "Durability and Wear Resistance: While concrete may chip and tiles can break, polyaspartic withstands heavy use under constant vehicular traffic.",
          "Aesthetic Versatility: With a vast palette of flake colours and designs, homeowners can truly personalise their garages.",
          "Maintenance and Cleanliness: Polyaspartic's non-porous finish simplifies maintenance and repels oils and grime.",
          "Environmental Resilience: Resists UV exposure and temperature fluctuations under Sydney's sun or cooler seasons.",
          "Safety Features: Offers natural slip resistance, ensuring safety for families and DIY enthusiasts.",
        ],
      },
      {
        heading: "Contact Sydney Epoxy Floors",
        text: "For those seeking to transform their garage with the unparalleled benefits of flake polyaspartic flooring, reaching out to Sydney Epoxy Floors is a step towards achieving a space that combines functionality with aesthetic appeal.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Flake Epoxy vs Solid Colour Epoxy Flooring",
    excerpt:
      "Both options deliver a durable, long-lasting finish — but they serve very different purposes. Here's how to choose the right one.",
    category: "Comparison",
    readTime: "5 min",
    featured: false,
    image: img(3),
    body: [
      {
        text: "Flake epoxy flooring and solid colour epoxy flooring are both popular choices for commercial and industrial flooring projects. Both types offer a durable, long-lasting finish that can withstand heavy foot traffic and equipment, but there are key differences that may make one a better choice for your business.",
      },
      {
        heading: "What is Flake Epoxy Flooring?",
        text: "Flake epoxy flooring is rapidly growing in popularity thanks to its long lifespan, resistance to wear and tear, and environmental safety. Small flakes are broadcasted onto a wet film of epoxy resin which then cures. All loose flakes are vacuumed afterwards and followed with an extra durable layer for added protection.",
      },
      {
        heading: "Benefits of Flake Epoxy Flooring",
        list: [
          "Decorative appeal: Creates a unique, multicoloured finish that can add visual interest to any space.",
          "Durability: Resistant to stains, chemicals, and wear and tear, making it a long-lasting flooring option.",
          "Easy to maintain: Has a smooth, sealed surface that does not trap dirt or debris.",
          "Hides imperfections: The flakes help to hide imperfections and blemishes in the underlying concrete.",
          "Non-slip surface: The textured surface can help to improve safety by providing a non-slip surface.",
        ],
      },
      {
        heading: "What is Solid Colour Epoxy Flooring?",
        text: "Solid colour epoxy flooring is created by applying multiple coats of epoxy resin mixed with a pigment to a floor surface. The first layer (the base coat or primer) is applied and allowed to cure before a second, top coat is applied. It is commonly used in commercial and industrial settings for its durability and ability to withstand heavy foot traffic and equipment.",
      },
      {
        heading: "Benefits of Solid Colour Epoxy Flooring",
        list: [
          "Economical: Usually costs less than flake epoxy flooring — perfect for large warehouses, retail spaces and workshops.",
          "Durability: Resistant to stains, chemicals, and wear and tear.",
          "Easy to maintain: Has a smooth, sealed surface that does not trap dirt or debris.",
          "Easy to repair: Any scratches or chips can be easily touched up with a matching colour.",
          "Non-slip surface: Can provide a non-slip surface by adding anti-slip media.",
        ],
      },
      {
        heading: "Which is Right for You?",
        text: "With over 20 years of experience in the coatings industry, the following spaces would benefit from a flake epoxy system: Residential garage floors, Lobbies, Showrooms, Retail stores, Stone range for inside homes. Solid colour epoxy flooring is recommended for: Warehouses, DFO style retail settings, Workshops, Storage units, Commercial Kitchens, Large carparks, Production areas.",
      },
      {
        text: "Contact Sydney Epoxy Floors for more information on the various types of resin-based floor coatings.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Is Garage Epoxy Flooring a Good Choice for Residential Garages?",
    excerpt:
      "Epoxy flooring for garages is an increasingly popular option among homeowners wanting to enhance the appearance of their garage.",
    category: "Garage",
    readTime: "6 min",
    featured: false,
    image: img(4),
    body: [
      {
        text: "Epoxy flooring for garages is becoming an increasingly popular option among homeowners who want to enhance the appearance of their garages. Epoxy garage flooring is an exceptionally durable surface that resists scratches, hot tyre pick up and abrasions, making it ideal for daily use and heavy-duty projects. This resilient protective layer is a permanent dust proofing sealer, keeps your garage dry and eliminates any existing stains or odours. It is also simple to keep clean and maintain for the duration of its life.",
      },
      {
        heading: "Main Benefits of Using Epoxy Flooring in a Garage",
        list: [
          "Durability: Epoxy coatings are extremely durable and can withstand heavy weights and frequent foot and vehicular traffic, making them ideal for use in garages.",
          "Low maintenance: Epoxy flooring is easy to clean and maintain. It is resistant to stains, spills, and other types of damage.",
          "Improved appearance: Epoxy coatings can give your garage floor an aesthetically pleasing, professional look. They come in a variety of colours and finishes.",
          "Safety: Epoxy flooring is slip-resistant, which can be especially important in a garage where there may be oil or other slippery substances present.",
          "Increased value: A well-maintained garage floor can increase the value of your home. Epoxy flooring is a cost-effective way to improve the appearance and functionality of your garage.",
        ],
      },
      {
        text: "Contact Sydney Epoxy Floors today for a free quote or come into our showrooms to see our great range of finishes. Visit our Garage Epoxy Flooring Page for more comprehensive information about garage floor coating options.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Why Preparation is the Most Important Stage",
    excerpt:
      "Epoxy applications are durable, easy to clean and aesthetically pleasing — but none of that matters without meticulous surface preparation.",
    category: "Process",
    readTime: "7 min",
    featured: false,
    image: img(5),
    body: [
      {
        text: "Epoxy flooring systems have grown popular for a wide variety of reasons. An epoxy application is durable, easy to clean, aesthetically pleasing, and simple to install. It's cost-effective, safe, and chemical resistant, and it holds up to commercial and industrial wear and tear. The biggest challenge is in the floor preparation stage.",
      },
      {
        heading: "Early Surface Preparations",
        text: "The first step is to ensure the concrete floors are structurally sound. A reliable contractor will take steps to test the flooring. A water vapour transmission test is one of the most common steps as too much water will impact the adherence of the coat.",
      },
      {
        heading: "Clean",
        text: "Before you add any floor finish, sweep up, grab a vacuum, and remove any dust, dirt, and debris that may be present. You should also take steps to clean any oil stains as this can impact the adherence of your new flooring.",
      },
      {
        heading: "Diamond Grind",
        text: "Unlike painting the floor, epoxy needs to penetrate so it can bond and adhere properly. This process reduces the concrete's porosity to allow for the epoxy to properly soak into the surface. When it comes to resinous flooring, there are three options — diamond grinding, shot blasting, or acid etching. Diamond grinding gives a much better surface for the floor's coating to stick to and ensures consistency.",
      },
      {
        heading: "On The Level",
        text: "You will need to ensure your floor is flat and level. Those are two very different things, but you achieve them in concert with each other. It can be an expensive step in the process, but it is the best way to get great results.",
      },
      {
        heading: "Patchwork",
        text: "If your concrete flooring has gaps, cracks, and holes there is no need to worry. You can patch all of these with the right product. Often, these will set just as hard as concrete. The patchwork will hold, and the epoxy coating will cover them just like it does the rest of the flooring.",
      },
      {
        heading: "Sydney Epoxy Floors Can Help",
        text: "At Sydney Epoxy Floors, we have the knowledge and expertise necessary to prepare your floors for their new coating. Once we prepare the floor, we can lay your coating as well to ensure you get to enjoy your new floor for as long as possible. Reach out to Sydney Epoxy Floors today to learn more about how we can help you.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Benefits of Epoxy Flooring for Commercial Kitchens",
    excerpt:
      "Few environments are as chaotic as commercial kitchens. Floors need to be slip-resistant and durable to handle constant traffic.",
    category: "Commercial",
    readTime: "5 min",
    featured: false,
    image: img(6),
    body: [
      {
        text: "Few environments are as chaotic as commercial kitchens — it's a fast-paced work environment, and they see a lot of traffic. So, kitchen floors need to be slip-resistant and durable flooring that meets safety standards. While there is a wide variety of floor solutions for commercial kitchen flooring, none can match the benefits of epoxy.",
      },
      {
        heading: "Easy to Clean",
        text: "Epoxy provides seamless floors with a smooth surface — it's easy to sweep up and mop. Because it seeps into the surface, it is also a hygienic solution as it prevents bacteria from building up. Being able to quickly clean up a spill is a boon in a commercial kitchen setting.",
      },
      {
        heading: "Heat Resistant",
        text: "A high-grade epoxy floor coating is a heat-resistant solution that will make your kitchen safer. It will stand up to falling hot pans, and spilling boiling water, and can also reduce the likelihood of a fire. Generally rated for permanent heat of up to 65 degrees and occasional exposure to temperatures of up to 100 degrees!",
      },
      {
        heading: "Heavy Duty",
        text: "A commercial kitchen is one of those heavy traffic areas where flooring really matters. Choosing epoxy flooring will provide you with the heavy-duty solution you need — it won't just last for years to come, it will also help prevent slips, trips, and falls.",
      },
      {
        heading: "Slip-Resistant",
        text: "You can select an epoxy coating that has an anti-skid additive, which will make your flooring more slip-resistant. It adds a bit of grit to the floor so footwear can gain better traction. Accidents in the kitchen are common, but epoxy coatings help reduce the likelihood of those incidents.",
      },
      {
        heading: "Durable",
        text: "A commercial kitchen is heavily trafficked, which is why they are subject to wear and tear. Opting for epoxy flooring will increase its durability and strengthen floors. An epoxy coat will reduce the risk of chips and cracks, and protect your floors for years to come.",
      },
      {
        heading: "Cost-Effective Solution",
        text: "The epoxy coating is a cost-effective, affordable option to upgrade your existing substrate, protect against damage, and increase safety. It will also save you money when it comes to maintenance and cleaning. Epoxy flooring is one of the most efficient ways to maintain hygiene in the kitchen. Reach out to Sydney Epoxy Floors to learn more.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "The Benefits of Epoxy Flooring for Garages",
    excerpt:
      "The garage is changing — gone are the days of a haphazard space full of rusty toolboxes. People want a polished, usable area.",
    category: "Garage",
    readTime: "5 min",
    featured: false,
    image: img(7),
    body: [
      {
        text: "The garage is changing. The days of it being a haphazard space full of rusty toolboxes, spiderwebs, and mismatched Christmas decorations are becoming a thing of the past. People everywhere are transforming these spaces and taking pride in their appearance, with a fundamental aspect of the presentation being the quality of the garage flooring installations.",
      },
      {
        heading: "What is Epoxy Flooring?",
        text: "Epoxy flooring for your garage is a durable coating consisting primarily of epoxy resin and polyamine hardener. When these two parts combine, an intense chemical reaction follows, with the resulting mixture becoming a thick and long-lasting substance. When applied to a well-prepared concrete floor, a tough bond is formed, with the polyamine hardener giving the essence its true resilience.",
      },
      {
        heading: "1. Superior Resilience",
        text: "In an environment that will inevitably see a high level of traffic and constant buffering from tyres and corrosive chemical residues, the floor surface must be able to stand up to it. The unique properties of the epoxy chemical reaction will result in a resilient and long-lasting substance superior to concrete alone. There is no risk of cracking or chipping. Epoxy also reinforces concrete floors that have seen better days, sealing and curing existing cracks and crevices.",
      },
      {
        heading: "2. Cost and Time Effective",
        text: "Not only is the coating itself an affordable option, but the fact that it can be applied over existing flooring installation will save on additional installation costs and gives it an advantage over most tile and vinyl choices. The process is also time-effective.",
      },
      {
        heading: "3. Enhanced Safety",
        text: "Once the epoxy flooring installation has been completed, you will have a coating that is reflective of light. This will lighten the space, reducing the risk of trip falls and hidden slipping hazards. Anti-slip additives such as polymer grit can be added during the installation process.",
      },
      {
        heading: "4. Pleasing on the Eye",
        text: "Epoxy coating is a practical solution, offering a wide range of aesthetic choices to compliment your existing environment. The coating's inherent sparkle and reflective nature will enhance your garage space's appearance in colour, texture, and finishes. Epoxy coating can also act as a cover for blemishes and inconsistencies on the existing floor.",
      },
      {
        heading: "5. Ease of Maintenance",
        text: "Epoxy coating is mainly indestructible. It cannot be damaged by heat, water, or weight and can easily withstand corrosive chemicals. It is not affected by road salt, and any stains that do appear can be removed with water. Simple soap and water is the best way to clean epoxy coating.",
      },
      {
        text: "It is tough to find any drawbacks to using epoxy flooring for your garage. Contact us today and let us find your ideal flooring solution.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Why Epoxy Coating is Best for Food Industry Flooring",
    excerpt:
      "The food processing business, like many industrial structures, must follow strict government flooring regulations.",
    category: "Industrial",
    readTime: "6 min",
    featured: false,
    image: img(8),
    body: [
      {
        text: "The food processing business must follow government regulations. Food processing industry maintenance managers are responsible for ensuring that the government's health criteria are met. Installing a specific sort of floor coating is one technique to protect a food processing industry's floor and avoid problems. Epoxy floor coating is used by many food processing companies to improve the hygienic standards of their facilities and, as a result, their products.",
      },
      {
        heading: "The Most Crucial Aspects in Food Industry Flooring",
        list: [
          "Safeguarding the concrete substrate against problems like cracking, peeling, and bubbling, which can all provide a trip hazard and allow bacteria to thrive.",
          "In a wet environment, creating traction for a steady flow of pedestrian and vehicular traffic.",
          "Having the ability to withstand heat stress, particularly in chilled regions.",
          "Keeping the environment as clean and sanitary as feasible.",
        ],
      },
      {
        heading: "Why Flooring Solutions in the Food Industry Matters",
        text: "Getting the floor space just right is critical to ensuring that the site can operate hygienically, safely, and efficiently. The flooring is the foundation on where all the equipment is housed, all the crew moves around, and all the product is created and kept. If harmful germs can permeate the floor area, produce will get infected and spoiled. To avoid this, flooring in food manufacturing areas should be smooth and waterproof, with coving flowing around the perimeter.",
      },
      {
        heading: "Why Epoxy Coating is the Best for the Food Industry",
        text: "Businesses in the sector exclusively use epoxy flooring to fulfill the most stringent international, federal, and municipal food safety regulations. Epoxy flooring products provide a continuous surface that prevents dirt from accumulating. Because epoxy flooring has a nonporous surface, these particulates are much easier to clean. This type of flooring's seamless and nonporous structure inhibits the growth and development of microbes such as fungus and bacteria, ensuring the general public's safety.",
      },
      {
        heading: "Recommended Epoxy Products for Food Industry",
        text: "Sika and Hychem Australia are at the forefront of superb epoxy coating products. One product that stands out is the Sikafloor 264 (Sika Australia) because of the following qualities:",
        list: [
          "Chemical and mechanical resilience is excellent",
          "Application is simple",
          "Proof against liquids",
          "The finish is glossy",
          "It is feasible to have a non-slip surface",
        ],
      },
      {
        heading: "Conclusion",
        text: "Epoxy floor coverings are a suitable choice for high-protection areas in food processing facilities, such as areas for packing, maintenance, and staff breaks, along with corridors, lobbies, and office spaces. Grab your phone now and dial 1300 037 699 for a free consultation with Sydney Epoxy Floors experts.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "How to Determine High-Quality Epoxy",
    excerpt:
      "Epoxy floor coatings make rooms feel more full and modern. Learn what separates a high-quality coating from a poor one.",
    category: "Guide",
    readTime: "4 min",
    featured: false,
    image: img(9),
    body: [
      {
        text: "Epoxy floor coatings make rooms feel more full and modern. An epoxy coating will provide an attractive look whether the garage is used for commercial or residential needs. The gleaming surface goes well with whatever decorative lighting you have. The area will take on a new dimension when light bounces off the epoxy.",
      },
      {
        text: "Epoxy resin application is best to use in different spaces, either residential, commercial or industrial:",
        list: [
          "Interior Finish for houses",
          "Hotels and business offices",
          "Laboratories",
          "Manufacturing plants",
          "Storage and warehouses",
          "Parking areas or garage",
          "High foot traffic establishments such as hospitals, schools & sports centres",
        ],
      },
      {
        heading: "Determining the Quality of Epoxy",
        text: "There are many different brands in the market offered by many epoxy paint suppliers in Sydney. When you choose to use the top brands like Sika, Hychem and Ultrakote to name a few, you are assured that you installed high-quality epoxy flooring.",
      },
      {
        heading: "Sika — World Leader",
        text: "Sika has consistently ranked as the world's leading manufacturer of construction chemicals. Sika has established a strong commitment to supplying flooring and coating solutions for a variety of applications. For more than 50 years, Sika has also been a global pioneer in seamless flooring technology, making significant contributions to the advancement of flooring building material technology across the world.",
      },
      {
        heading: "Hychem — Australian Market Leader",
        text: "Hychem was founded in 1987 and has since grown to become one of Australia's most well-known and respected resin and flooring brands. Hychem develops, manufactures, and sources cutting-edge flooring, infrastructure, and waterproofing technologies. Hychem was one of the first Australian firms to supply the epoxy-flooring market and continues to be the market leader today.",
      },
      {
        text: "Before dwelling on the implementation, as a practical homeowner or business owner, you must know the brands you plan to use first. Grab your phone now and dial 1300 037 699 for a free consultation with Sydney Epoxy Floors experts.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Kitchen Floor Ideas for Residential & Commercial Kitchens",
    excerpt:
      "With so many flooring types and design trends to consider, choosing the perfect kitchen floor can be tough — here's where to start.",
    category: "Commercial",
    readTime: "6 min",
    featured: false,
    image: img(10),
    body: [
      {
        text: "Are you thinking about kitchen remodelling? With so many flooring types and interior design trends to consider, it's tough to choose the perfect kitchen. From colours and decorative aspects to durability, there are many considerations.",
      },
      {
        heading: "1. Vinyl Flooring",
        text: "Kitchen vinyl flooring is an excellent option for anyone on a budget. You can buy flooring vinyl in wide planks or luxury vinyl tile. The flexibility and availability of the vinyl flooring system enable you to create bold floors, playing around with colours and patterns. However, while luxury vinyl flooring looks good, it's not as durable as other kitchen flooring options.",
      },
      {
        heading: "2. Wooden Flooring",
        text: "Hardwood floors are a never-ending kitchen flooring trend. Whether you opt for rustic natural wood kitchen flooring or engineered hardwood, this flooring material feels warm and welcoming. While wood kitchen flooring looks attractive, it's not particularly practical — it is often more expensive, scratches easily, and is particularly vulnerable to water.",
      },
      {
        heading: "3. Tile Flooring",
        text: "Tile floors are the traditional hard flooring option. Ceramic tiles contain natural clay, and the tile is robust and water-resistant. In most types of kitchens, tiles will last indefinitely. The two main types of kitchen flooring tiles include Porcelain tiles and Stone tiles. The disadvantage of tiled floors for kitchens is the cold.",
      },
      {
        heading: "4. Bamboo Flooring",
        text: "To create a modern kitchen, consider bamboo kitchen flooring ideas. Bamboo is one of the most versatile natural materials. There are three types of bamboo floor coverings: Strand woven bamboo, Engineered bamboo, and Solid bamboo. Some types of bamboo are more robust and more durable than wood, but it's also more expensive.",
      },
      {
        heading: "5. Epoxy Resin Flooring",
        text: "Kitchen epoxy is a robust, cost-effective type of flooring. It covers any surface, from cork flooring to a concrete surface. Its protective coatings and heat resistant properties make it a popular floor trend. Get playful with epoxy colours and patterns — for example, opt for a metallic epoxy floor.",
      },
      {
        heading: "Benefits of Epoxy Resin Floors",
        list: [
          "Chemically resistant.",
          "Decorative — e.g. flake flooring and colour variation.",
          "Slip-resistant.",
          "Easy installation.",
          "Waterproof flooring.",
          "Effortless to maintain.",
          "Compatible with underfloor heating.",
          "Suitable for heavy use and mechanical loads.",
        ],
      },
      {
        heading: "How Long Does Each Flooring Last?",
        list: [
          "Vinyl should last 5-20 years.",
          "An epoxy floor should last 10 to 20 years.",
          "Engineered timber and bamboo should last 20-30 years.",
          "Tiles should last 20-50 years.",
        ],
      },
      {
        text: "Contact Sydney Epoxy Floors today to find out more information and arrange a free site visit and proposal for your epoxy flooring service requirements.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Understanding P and R Slip Rating in Epoxy Floor Coating",
    excerpt:
      "Epoxy resin flooring stands out from other flooring solutions for numerous reasons, especially when it comes to slip safety ratings.",
    category: "Safety",
    readTime: "5 min",
    featured: false,
    image: img(11),
    body: [
      {
        text: "Epoxy resin flooring stands out from other flooring solutions for numerous reasons when it comes to picking new flooring systems for industrial usage, garage floor coating or any other outdoor surfaces. Epoxy flooring is appealing because of its resilience to high levels of wear and tear, making it one of the longest lasting flooring solutions.",
      },
      {
        heading: "What is Slip Resistance?",
        text: "The relative force that prevents the shoe or foot from sliding over the pathway surface is known as slip resistance. Slip resistance is determined by several elements, including the surface of the pathway, the bottom of the footwear and the presence of foreign objects between them.",
      },
      {
        heading: "What is the P Rating in Epoxy Floor Coating?",
        text: "When the flooring is moist, the P3 grade implies a moderate danger of sliding. This slip rating indicates that the product may be used on stairs without adding additional traction. P2 is the industry standard and signifies a high danger of sliding on damp flooring. A Pendulum Friction Tester and a rubber slider are used in the Wet Pendulum Test.",
      },
      {
        heading: "What is the R Rating in Epoxy Floor Coating?",
        text: "The R9 to R13 Rating for Shod Feet (and an ABC Rating for Bare Feet) measures the slip resistance of a surface before purchasing flooring. These R ratings refer to the non-portable DIN Standard Floor RAMP Test. The Ramp Test involves attaching a certain floor type to a ramp and applying oil. The ramp is then elevated and the human test subject goes backwards and forward until they slide on the floor while wearing boots.",
      },
      {
        heading: "How Important are P and R Ratings?",
        text: "A variable angle ramp walking test is used to rate the slip resistance of flooring, which ranges from R9 (low slip resistance) to R13 (high slip resistance). When determining the degree of slip resistance required, there is a trade off to be made — cleaning your epoxy floor system becomes more difficult as it becomes more slip resistant.",
      },
      {
        text: "In an epoxy floor system, there are three approaches to regulate slip resistance:",
        list: [
          "Rate of topcoat coverage",
          "Aggregate is added to the epoxy resin",
          "The natural finish of the topcoats",
        ],
      },
      {
        text: "For more information, grab your phone now and dial 1300 037 699 for a free consultation with Sydney Epoxy Floors experts.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "Available Types of Garage Epoxy Flooring and Its Benefits",
    excerpt:
      "Garage tiles, unlike ceramic tiles in the home, are a simple alternative to install — explore the full range of options available.",
    category: "Garage",
    readTime: "6 min",
    featured: false,
    image: img(12),
    body: [
      {
        heading: "Traditional Garage Flooring",
        text: "Garage tiles are a very simple alternative to install. You may create elaborate patterns or designs in your room, such as a checkerboard effect. Garage tiles, which are often comprised of a durable and moisture resistant material such as polypropylene or PVC, can withstand liquids, dirt, traction and the weight of a car. If damaged, they are simple to repair — you can simply replace those few squares without having to replace the whole area.",
      },
      {
        heading: "What is Garage Epoxy Flooring?",
        text: "Epoxy flooring is a type of thermosetting resin that is put to concrete as a coating. One part coloured or clear epoxide resin is mixed with one part polyamine hardener. The hardener works as a catalyst, initiating the exothermic curing process by causing a chemical reaction. Epoxy's great strength and endurance are due to the tight cross linking of polymer structures created during the curing process. On a garage floor, commercial grade systems can last ten to twenty years.",
      },
      {
        heading: "Why Choose Epoxy for Garage Flooring?",
        text: "Epoxy is a substance that functions as a glue, paint and sealer when applied to your garage floor. This all-in-one solution is by far the most cost effective. You may customise the sealant with flecks, a high gloss finish, or texture. Some epoxy compounds have additional anti slip properties — great for garages where there may be fluids or risk of slipping.",
      },
      {
        heading: "Types of Epoxy Flooring for Garage",
        text: "1. Epoxy Floor Coating — Epoxy floor coatings, perhaps the most common epoxy flooring choice for garages, are applied by painting layers of epoxy over concrete floors. There are three types: water based, solvent based and 100 percent solids.\n\n2. Epoxy Chip Floors — Employ three layers of various materials. Vinyl chips are uniformly distributed over the epoxy while it is still wet and then a durable polyaspartic sealer is applied on top.\n\n3. Epoxy Slurry Floors — The greatest and most cost effective solution if your garage flooring is in bad shape. They cover overaged floors that have seen a lot of use, successfully concealing existing concrete pits and fissures.",
      },
      {
        heading: "Benefits of Applying Epoxy to Your Garage",
        text: "Aside from looking great, epoxy's strong and thick coating offers a decorative surface that is extremely durable and easy to maintain. Chemicals, stains, impacts, chipping, and surface abrasion are all resistant to it. Epoxy also serves as a concrete sealant, keeping moisture away from the surface. Epoxy floor finishes are very simple to clean — all that is necessary is a moderate cleaning solution and some water.",
      },
      {
        text: "For more information, grab your phone now and dial 1300 037 699 for a free consultation with Sydney Epoxy Floors experts.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "How to Maintain Epoxy Floors",
    excerpt:
      "Epoxy floors are robust, resilient and long-lasting — found in garages, sunrooms, corridors and warehouses. Here's how to keep them that way.",
    category: "Process",
    readTime: "5 min",
    featured: false,
    image: img(13),
    body: [
      {
        text: "Epoxy floors are robust, resilient, and long-lasting floor coverings that may be found in garages, sunrooms, high traffic corridors and pathways, and warehouses. Epoxy flooring is quite simple to maintain if you follow a few guidelines.",
      },
      {
        heading: "Caring for Your Epoxy Floors",
        list: [
          "Do spot cleaning — When something has been spilled or tracked in, suck up the spilt liquid with a shop vac then clean the surface with a mop and warm water. Epoxy flooring is very water resistant and easy to clean.",
          "Don't use soap-based cleaners — Soap-based floor cleaners generate an unsightly haze on epoxy floors that accumulates over time. Epoxy flooring only needs warm water and a decent mop or deck scrubbing brush.",
          "Maintain the surface grit and dirt free — If dirt and grit are permitted to remain on an epoxy floor, they will embed or damage it. Using a shop vacuum with a soft brush attachment is the best method to resolve this.",
          "Regularly check for stains — Some stains such as rust may be softly washed with warm water with a kitchen cleaning sponge or a soft deck brush. Never use any cleaning products that include citrus or acid.",
          "For heavily soiled floors — Sweep and vacuum the entire area thoroughly, then use a firm foam mop and warm/hot water to remove all built-up dirt. After that, mop with a clear ammonia/water solution (2-3 ounces ammonia per gallon of hot water).",
          "Fix car chemicals immediately — Wipe up antifreeze, oil and other car-related substances with shop towels and dispose of them properly. Don't let them stay on the floor for too long.",
          "Choose the best mop — A microfiber mop with a wide enough width to cover the majority of the floor is ideal. Look for a mop that takes up dirt without leaving any liquid or cleaning solution behind.",
          "Choose the best cleaning products — Ammonia is at the top of the list since it is effective for both routine and planned cleaning. Combine half a cup of ammonia with 4 litres of water and mop with a microfiber mop.",
        ],
      },
      {
        text: "Epoxy flooring is an excellent option for a variety of light industrial and residential applications. While epoxy flooring has been tried and tested to be durable, it still needs some minimal maintenance. Give us a call today on 1300 037 699 to have epoxy floor coating installed in your home or business.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────────────────────
  {
    id: 15,
    title: "Benefits of Using Epoxy Flake Flooring System",
    excerpt:
      "Some of the most popular ornamental flooring styles, like mosaic terrazzo, can be costly to install and repair if damaged.",
    category: "Innovation",
    readTime: "6 min",
    featured: false,
    image: img(14),
    body: [
      {
        text: "Some of the most popular ornamental flooring styles such as mosaic-like terrazzo may be costly to install and repair if damaged, making them unsuitable for many commercial, industrial and institutional environments. Decorative flake epoxy flooring may be laid to provide a long lasting terrazzo-like look with great benefits and value for money.",
      },
      {
        heading: "A Floor Coating That Adds Decoration to Any Facility",
        text: "Resinous floor coatings are fluid applied coatings that form a completely seamless surface over a concrete slab and are available in a variety of textures and colours. Decorative flake floor coatings are made up of colourful flakes suspended in a transparent resin so their distribution is genuinely random and organic.",
      },
      {
        heading: "Known Advantages of Epoxy Flake Flooring",
        list: [
          "Cleaning is very easy — The almost seamless surface eliminates the majority of cracks and creases where dust, mildew and bacteria tend to collect and thrive. It is simple to clean with a hose if necessary.",
          "Features are fully customisable — Decorative flake systems may be tailored to better meet the functional demands of a specific location, with applications in a variety of sectors.",
          "Proven to be durable and strong — Epoxy and urethane floor coatings provide a strong barrier over the concrete substrate, resulting in increased scratch resistance, improved load bearing capabilities and a longer concrete floor lifespan.",
        ],
      },
      {
        heading: "Areas Where Epoxy Flake System Can Be Applied",
        list: [
          "Garage floors",
          "Car showrooms",
          "Schools and educational institutions",
          "Hospitals, clinics and laboratories",
          "Hotels and other accommodations",
          "Theme parks and amusement parks",
          "Rescue, Emergency Medical Service (EMS) and fire stations",
          "Retail stores",
          "Showrooms",
          "Airports, seaports and bus stations",
          "Supermarkets and grocery stores",
        ],
      },
      {
        heading: "The Colour Chip Flakes",
        text: "Polyester resin has been combined with colour to create the epoxy flakes. The flakes have a glossy sheen that makes them scratch and scuff resistant once set. They're also water resistant. Epoxy flake system comes in a range of hues allowing you to adapt it to your home's colour scheme. This system's epoxy flakes and colour chips are made up of microscopic glass shards that reflect light attractively.",
      },
      {
        heading: "Epoxy Flooring Contractor You Can Trust",
        text: "Sydney Epoxy Floors has been the industry leader in industrial and commercial epoxy flooring solutions for years. Sydney Epoxy Floors' decorative flake flooring systems are a long lasting, visually beautiful alternative for a broad range of settings and can be modified to match your facility's specific requirements. Call us right away on 1300 037 699 to get a free quote.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: "Warehouse Epoxy Flooring",
    excerpt:
      "For many years, epoxy flooring has received excellent reviews from homeowners and professionals across different businesses alike.",
    category: "Industrial",
    readTime: "7 min",
    featured: false,
    image: img(15),
    body: [
      {
        text: "For so many years, epoxy flooring has received a lot of excellent and positive reviews from homeowners and professionals from different businesses alike. Although there is a great range of floor solutions and coating choices, epoxy flooring is still the best option for commercial and industrial facilities.",
      },
      {
        heading: "Safety Won't Be Compromised",
        text: "Epoxy flooring products are resistant to impact, slippage, and fire. Different zones in your warehouse such as safety zones, work zones and forklift traffic zones can also be designated using different colours. Moreover, the application of an epoxy coating to your concrete floors will help in preventing concrete dusting. Slip resistance should be given utmost importance especially for areas frequented by employees.",
      },
      {
        heading: "Cost Effective",
        text: "Epoxy flooring is cheaper because it lasts longer and resists damage due to impact much better than other floor finishes. This is the reason why it's the most cost effective flooring option for warehouses. In addition, epoxy flooring is known to reduce lighting costs and reflect light.",
      },
      {
        heading: "Durability That Will Last",
        text: "Floor coatings made of epoxy provide durable, hard wearing flooring solutions that can tolerate extreme foot traffic and common warehouse equipment such as forklifts without revealing any signs of tear and wear. Epoxy flooring solutions formulated to become industrial grade also have a long lifespan and will make concrete floors become chemical resistant.",
      },
      {
        heading: "Easy to Maintain",
        text: "Your regular concrete floor will be transformed using epoxy coating into a stain repellent, non-porous smooth surface that can simply be cleaned from debris, dirt and dust. You don't have to worry anymore about bacteria typically hiding in porous concrete surfaces. Just mopping the floor with an antimicrobial solution is all that it needs to get a contaminant-free floor.",
      },
      {
        heading: "Productivity Improvement",
        text: "Epoxy flooring can significantly improve productivity in your warehouse because it allows faster inventory movement, minimises machine breakdown, and reflects light significantly to brighter and safer working areas.",
      },
      {
        heading: "Improved Appearance",
        text: "Being available in a wide selection of styles and colors, the ugly, boring, hard concrete floor along with small deformities can be covered by epoxy floor coatings, making it more appealing to the eyes. If you opt for the high gloss finish, your warehouse will be perceived with qualities of class and elegance.",
      },
      {
        heading: "Warehouse Flooring by Sydney Epoxy Floors",
        text: "At Sydney Epoxy Floors, our floor specialists have broad experience working with epoxy coatings in a wide assortment of business and modern settings, including distribution centers, fabricating plants, labs and so forth. Call us today on 1300 037 699 for a free quote.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────────────────────
  {
    id: 17,
    title: "Epoxy Flooring for Industrial Use",
    excerpt:
      "Epoxy flooring is one of the most adaptable floor coverings available, suitable for industrial, commercial and even domestic settings.",
    category: "Industrial",
    readTime: "6 min",
    featured: false,
    image: img(16),
    body: [
      {
        text: "Epoxy flooring is one of the most adaptable floor coverings available, suitable for use in industrial, commercial and even domestic settings. Epoxy not only offers great durability and comes in a variety of colors, but it also has a long lifespan and requires little care.",
      },
      {
        text: "It takes a lot of thought to decide which industrial floor coating to use in your operation. Flooring in many industrial environments, such as airline hangars, distribution centers, and assembly factories, can experience severe wear and tear. It's critical that your industrial floor coating be long lasting and resilient so that you can keep working productively and efficiently.",
      },
      {
        heading: "Why Choose Epoxy?",
        text: "When carefully developed and implemented, specialty epoxy and other resin based polymers can preserve concrete floors that might otherwise deteriorate due to day to day facility use. Unique floor coating technologies that hinder bacterial development and meet with the severe sanitary criteria of each facility are essential for enterprises that manufacture food and pharmaceutical products.",
      },
      {
        heading: "Advantages of Epoxy in Industrial Facilities",
        list: [
          "Forklift and vehicle friendly: A properly covered concrete floor has a safe, monolithic surface that is devoid of fractures, potholes, and unevenness.",
          "Safer than other flooring solutions: To assist reduce slips and falls, epoxy and other resin based coatings offer adjustable skid resistance. Some contain static control features, and the majority have a fire rating of 'self extinguishing.'",
          "Cost effective: Concrete floors coated with resinous finishes such as epoxy endure longer and are more resistant to wear.",
          "Chemically impervious: Epoxy floor coatings may withstand exposure to harsh chemicals, solvents and pH extremes.",
          "Easy to clean: Concrete is no longer porous once it has been properly prepped and covered with a high quality resin or epoxy floor coating.",
          "Good looking finish: Epoxy coatings come in a range of colors, patterns and even bespoke logos to match the aesthetic of each institution.",
          "Brighter than other options: High-gloss coatings may improve illumination by reflecting light.",
          "Environmentally friendly: Epoxy eliminates tile and rolled products installation cut-off waste and the majority of liquid flooring components are VOC-free.",
          "Time saver: Epoxy flooring and other resinous systems may usually be installed rapidly, minimising or even eliminating lost production time.",
        ],
      },
      {
        text: "Contact Sydney Epoxy Floors today on 1300 037 699 to discuss the best option for your manufacturing facility.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────────────────────
  {
    id: 18,
    title: "Epoxy Flooring for Mechanical Workshops",
    excerpt:
      "Whether in large facilities or a unified operation, workshops are where things get started and finished — and floors take a beating.",
    category: "Industrial",
    readTime: "6 min",
    featured: false,
    image: img(17),
    body: [
      {
        text: "Whether in big and multiple locations, manufacturing plants or in a unified facility operation, workshops are where things get started and finished — and workshop flooring is the foundation.",
      },
      {
        text: "There is a line of heavy duty workshop floors that promotes a generally safer and cleaner surrounding because of their slip and oil resistant properties. Misplaced tools, trip hazards and spills are simpler to spot on a brighter floor. Epoxy floor coatings for industrial use are designed to fulfill a variety of performance requirements, including:",
        list: [
          "After a complete cure, there are no emissions",
          "Adhesion to prepared concrete surfaces is tenacious",
          "Options for quick turnaround to reduce downtime",
          "Abrasion and impact resistance are exceptional",
          "Chemical, acid/caustic, solvent and stain resistance are excellent",
          "Options for concrete crack repair and resurfacing",
          "Improved safety using anti slip flooring solutions",
          "With zero to extremely low V.O.C. resins there is no formaldehyde",
          "Compressive strength that is impressive",
          "Waterproof mezzanine and upper level flooring",
        ],
      },
      {
        heading: "Benefits of Epoxy Floor Finishes in Workshops",
        text: "Epoxy floor treatments for factories and machine shops make spill cleanup a breeze, give a slip resistant surface with exceptional durability and improve the overall aesthetic of the business. Epoxy floor coatings are quite strong and can withstand daily abuse such as:",
        list: [
          "Moisture and chemicals",
          "Cutting oils and machining fluids spilled",
          "Particulate matter with metal shavings",
          "Heavy machinery whether stationary or on wheels",
          "Impact of heavy production loads",
          "Tools or components that have been dropped",
        ],
      },
      {
        heading: "Why Mechanical Workshops Use Epoxy Flooring",
        text: "In workshops a strong surface that can endure large weights and movement is required. Epoxy coating has a wide range of applications. It has also been shown to be particularly excellent for underfloor heating; as a result, floor coatings have a propensity to maintain the temperature of the floor efficiently, making walking simple and pleasant in both the winter and summer seasons.",
      },
      {
        heading: "Conclusion",
        text: "Sydney Epoxy Floors is a prominent epoxy floor installer in Sydney, with skilled specialists that can do the job quickly. We can provide the highest durable, personalised flooring value — exactly what machine shops want and need — while staying under budget. With rapid turnaround choices, Sydney Epoxy Floors offers some of the greatest long term machine shop flooring value. Let's get your mechanical workshop ready by calling us on 1300 037 699.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────────────────────
  {
    id: 19,
    title: "Epoxy Flooring for Hospitals",
    excerpt:
      "A hospital has hundreds of moving parts, so picking the best flooring system for clinics, corridors and operating rooms is no easy task.",
    category: "Healthcare",
    readTime: "6 min",
    featured: false,
    image: img(18),
    body: [
      {
        text: "A hospital has hundreds of moving parts, therefore picking the best hospital flooring system is no easy task. Clinic offices, corridors, operating rooms, labs and imaging rooms are all used on a regular basis. During a 24 hour period hospital floors see a lot of foot traffic, wheelchairs, hospital beds, carts and machinery movement. Because of the large amount of square footage and continual mobility, it is critical to have flooring that adds to the facility's performance.",
      },
      {
        text: "Hospitals strive for a serene environment. Your floor's comfort is just as vital as its durability. According to studies, a visually appealing setting might help patients feel more satisfied and decrease tension. Staff and patient morale both benefit from a relaxing, inviting environment.",
      },
      {
        heading: "Epoxy Coating Solution for Hospital Floors",
        text: "Medical institutions use epoxy coating from epoxy flooring contractors for their flooring demands, as they give the finest benefits in terms of sanitation that can pass medical regulations. Because it fits all of the aforementioned criteria, epoxy is the most extensively utilised flooring system in hospitals. Slips and falls are the most common accident in hospitals — epoxy floor coatings reduce the risk of slipping and sliding by enhancing slip and skid resistance.",
      },
      {
        heading: "Control of Pathogens",
        text: "The non-porous epoxy coating prevents germs and other pathogens from adhering to or seeping into the flooring, allowing them to be cleaned and eradicated swiftly. Another option to strengthen resistance of an epoxy coated floor to bacteria and pathogens is to use an anti-bacterial floor coating, which may prevent the spread of bacteria and other hazardous substances, greatly improving the health and cleanliness of a clinic or hospital.",
      },
      {
        heading: "Patients and Employees Are Safer",
        text: "Uneven floor surfaces can lead to a variety of slip and fall dangers, as well as other inconveniences that can impede medical procedures and activities. An epoxy coated floor will provide a durable and safe surface on which to operate and move, reducing the risk of accidents. Epoxy coated floors provide a slip resistant surface that is excellent for numerous wheeled equipment found in a medical institution.",
      },
      {
        heading: "Strong Cleaning Solution Resistance",
        text: "Hospitals and clinics require regular clean ups using powerful cleaning solutions to eliminate numerous types of hazardous germs. These cleaning solutions have strong formulas that can damage regular types of floors, which is why epoxy coating is recommended to provide a strong surface that can withstand the rigors of daily operation while also being resistant to some of the most powerful cleaning materials.",
      },
      {
        heading: "Conclusion",
        text: "Medical institutions, such as hospitals and clinics, must always guarantee that their premises are safe and hygienic. Epoxy coated flooring is the greatest flooring solution for any medical institution since it prevents the transmission of hazardous diseases while also providing a safe surface to work and move about on. Give us a call on 1300 037 699 or send us an e-mail at admin@sydneyepoxyfloors.com.au for a free quote.",
      },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────────────────────
  {
    id: 20,
    title: "Cementitious Polyurethane as a Flooring Solution",
    excerpt:
      "Floors in industrial buildings must be easy to maintain while being robust enough to resist tough working conditions.",
    category: "Industrial",
    readTime: "7 min",
    featured: false,
    image: img(7),
    body: [
      {
        text: "Floors in industrial buildings must be easy to maintain while still being robust enough to resist hard working conditions. The correct sort of floor can ensure compliance with industry specific health and safety laws in addition to keeping the facility running smoothly. For every demanding environment, industrial painting contractors prefer cementitious polyurethane flooring.",
      },
      {
        heading: "Everything About Cementitious Polyurethane",
        text: "Cementitious polyurethane, often known as polyurethane concrete or polyurethane mortar, is a coating system made up of cement, water, aggregate and other additives that are used to:",
      },
      {
        list: [
          "Improve the urethane floor's adherence to the substrate. Without worrying about residual moisture, cementitious polyurethane flooring may be put immediately over green concrete or in cold and humid areas.",
          "Increase the resistance of the floor against cracking or crazing, which can develop as a result of high temperature changes. Temperature changes of -201°C to +116°C can be tolerated by cementitious urethane flooring.",
          "Reduce the bacterial population on the floor's surface (e.g., silver-ion-based antimicrobial additives).",
        ],
      },
      {
        text: "Cementitious polyurethane can also be used to create a totally seamless floor. As a consequence, there is no place for dirt, bacteria, or hazardous substances to accumulate. Cementitious polyurethane flooring creates a strong bond since it expands and compresses at the same pace as the concrete slab underneath it. The danger of buckling, bending, cracking and detaching is greatly decreased as a result.",
      },
      {
        heading: "More Advantages of Cementitious Polyurethane",
        list: [
          "These floorings are particularly adaptable since they offer a variety of customised slip-resistance solutions.",
          "They may also be used to resurface and repair existing concrete floors.",
          "Depending on the needs of each project, they can be put in a variety of thicknesses ranging from 6.35mm to 9.25mm.",
        ],
      },
      {
        text: "When cementitious polyurethane finishes are mixed with epoxy primers, they effectively produce a smooth protective layer on any surface. Because this barrier is essentially impervious to atmospheric factors including moisture, salts and ultraviolet radiation, it keeps weathering elements away from the item it is covering.",
      },
      {
        heading: "Aesthetic Benefits",
        text: "Cementitious polyurethane coatings may enhance the natural beauty and aesthetics of substrates. Cementitious polyurethanes may make surfaces seem moist or reflect with a mirror finish in solid colour and metallics. They may also be used to produce a glaze for stones that adds a sheen and a deeper reflecting aspect to the stone surfaces.",
      },
      {
        heading: "Contact Sydney Epoxy Floors",
        text: "At Sydney Epoxy Floors, we can handle all of your floor coating requirements. We can assist you whether you are searching for a whole new industrial flooring solution or simply need a coating applied to one that you already have. Please contact Sydney Epoxy Floors by calling 1300 037 699 or by visiting our showrooms at 6 Giffard Street, Silverwater NSW 2128 or 283 Victoria Road Rydalmere NSW 2128.",
      },
    ],
  },

  // ── 21 ─────────────────────────────────────────────────────────────────────
  {
    id: 21,
    title: "Cost of Epoxy Flooring in Sydney",
    excerpt:
      "We're frequently asked how much epoxy flooring costs. We believe in transparency and honesty when it comes to our rates.",
    category: "Pricing",
    readTime: "9 min",
    featured: false,
    image: img(8),
    body: [
      {
        text: "We're frequently asked how much epoxy flooring costs. We believe in transparency and honesty when it comes to our rates. The cost of epoxy flooring in Sydney depends on several factors including the size of the area, the type of epoxy system chosen, the condition of the existing floor, and the level of preparation required.",
      },
      {
        heading: "Factors That Affect Epoxy Flooring Cost",
        list: [
          "Floor size: Larger areas generally cost less per square metre than smaller ones due to economies of scale.",
          "Surface preparation: If your concrete needs extensive grinding, crack repair, or levelling, this will add to the overall cost.",
          "Type of epoxy system: Options range from basic solid colour coatings to premium flake or metallic systems — each with different price points.",
          "Number of coats: More coats mean better durability and finish, but also higher cost.",
          "Access and logistics: Difficult-to-access areas or jobs requiring special equipment may incur additional charges.",
        ],
      },
      {
        heading: "General Price Ranges",
        text: "As a general guide for Sydney, here are approximate price ranges per square metre:",
        list: [
          "Basic solid colour epoxy: $30–$50 per m²",
          "Premium flake epoxy (SEF Seamless Flake System): $70–$110 per m²",
          "Metallic epoxy: $90–$140 per m²",
          "Cementitious polyurethane: $90–$160 per m²",
          "Polyaspartic flake system: $80–$130 per m²",
        ],
      },
      {
        heading: "Why Cheap Epoxy Can Cost You More",
        text: "Cheaper epoxy products often have a lower solids content — sometimes as low as 45–55% solids — which means a much thinner film build. This results in a shorter lifespan, more frequent recoating, and ultimately higher long-term costs. We recommend avoiding any product with less than 80% solids content.",
      },
      {
        heading: "Is Epoxy Flooring Worth the Investment?",
        text: "Absolutely. A professionally installed epoxy floor from Sydney Epoxy Floors can last 15–20+ years with minimal maintenance. Compared to replacing tiles, timber, or other flooring options every 5–10 years, epoxy flooring delivers outstanding value for money — particularly for garages, warehouses, commercial kitchens and industrial spaces.",
      },
      {
        text: "For an accurate quote tailored to your specific project, contact Sydney Epoxy Floors today. Grab your phone and dial 1300 037 699 for a free consultation with one of our experts.",
      },
    ],
  },

  // ── 22 ─────────────────────────────────────────────────────────────────────
  {
    id: 22,
    title: "What is Epoxy Coating?",
    excerpt:
      "An epoxy flooring is one of the toughest and most durable finishes you can have. The term refers to both the material and the process.",
    category: "Basics",
    readTime: "4 min",
    featured: false,
    image: img(9),
    body: [
      {
        text: "An epoxy flooring is one of the toughest and most durable finishes you can have. The term 'epoxy' refers to the materials used and the application process. Not only does it provide good aesthetics for the floor, it can protect it by resisting considerable wear and saving you thousands of dollars on repairs and replacements.",
      },
      {
        heading: "Where Are Epoxy Floors Used?",
        text: "Epoxy floors are used by many industrial sites, warehouses, commercial kitchens and residential garages as they:",
        list: [
          "Require little to no maintenance",
          "Are resistant to oil and water stains, UV fading, chipping, peeling, chemicals and heavy weight",
          "Make maintaining clean and safe conditions for workers and equipment easy and more efficient",
          "Are anti-slip (great choice for swimming pool decks and kitchens)",
        ],
      },
      {
        heading: "Epoxy Coating vs Epoxy Paint",
        text: "It is important to note that there is a difference between epoxy coating and epoxy paint. Epoxy coatings are highly tolerant of weight and regular usage and for this reason they are a common choice for commercial, industrial and manufacturing industries. Epoxy coating is made up of a resin component that is mixed with a polyamine hardener. It is then applied under specific temperature and time conditions after it has sufficiently dried.",
      },
      {
        heading: "What Epoxy Coating Offers",
        list: [
          "Provides an attractive surface to use inside offices, residential homes and showrooms",
          "Is easy to apply and quick drying",
          "Is a great choice for bright interior areas as it creates a high-gloss surface",
          "Can be applied over concrete floors to provide a durable and smooth surface suitable for withstanding heavy loads and continuous traffic",
          "Can help prevent chemical breakdowns",
          "Can mask off chips and cracks when combined with paint",
          "Can be applied to cement and garage floors, as well as walls and ceilings in some cases",
        ],
      },
      {
        heading: "Hygiene-Grade Epoxy",
        text: "Some environments require specific levels of hygiene including hospitals, food preparation facilities and veterinary clinics. A specific epoxy coating can be created to provide antimicrobial/antibacterial protection while maintaining the common benefits of an attractive epoxy flooring.",
      },
      {
        text: "If you have any questions or need help finding the best concrete epoxy for your specific needs, call our office on 1300 037 699 or visit our website.",
      },
    ],
  },

  // ── 23 ─────────────────────────────────────────────────────────────────────
  {
    id: 23,
    title: "Why Epoxy Flooring is Best for Your Garage",
    excerpt:
      "One of the most fulfilling achievements in life is to own a car. Your garage deserves the same care and investment as the vehicle inside.",
    category: "Garage",
    readTime: "6 min",
    featured: false,
    image: img(10),
    body: [
      {
        text: "One of the most fulfilling achievements to have in life is to own a car. A car can be an important part of people's daily lives for it can serve many purposes: whether a daily drive to the office; a service for fetching children from school; a workhorse for some daily errands; or the most exciting part — being used for long drives during weekends and holidays.",
      },
      {
        heading: "Flooring is as Important as Everything Else",
        text: "It might be a surprise for some to consider the garage flooring to be important. It's understandable because the flooring is just the part where the tires make contact. But try considering this — shouldn't the ground where the car stands be the first thing to be considered?",
      },
      {
        heading: "Many Options but Which One to Pick?",
        text: "Garage flooring could be made of concrete, ceramic tiles, marble or just rough surface depending on the owner's preference. Each has its own pros and cons. In this modern age where technology keeps on progressing, there are more options which are practical, economical, long lasting and stylish, which are all available at Sydney Epoxy Floors.",
      },
      {
        heading: "Why Epoxy Flooring is Good for Your Garage",
        text: "Due to the strong bond it creates with the concrete floor, epoxy coating provides a very durable top coating that could last for decades when installed properly. Epoxy flooring won't easily crack, adding a layer of protection to pipes and drainage located underneath a garage. Because of its water resistant property, it won't absorb water or leaks from fluids that drip under the car, making it easier to clean with just a flush of water from a high-pressure hose.",
      },
      {
        heading: "Strength with Style",
        text: "While strength, durability, and longevity are some of the main advantages of garage epoxy flooring, it doesn't compromise style. Epoxy flooring could be customised according to the owner's preference in colour and design. You can even match your garage floor to the colour of your car. And it is even possible to recoat your garage floor with another colour and design in case you wanted to change it.",
      },
      {
        heading: "Surprising Benefits",
        text: "Light reflects on epoxy floors, improving visibility and making parking your car in your garage a breeze. No accidental damages from bumping into random things in the garage means saving money on untimely paint jobs. An epoxy flooring completely seals off the surface, preventing pest infestation in your garage.",
      },
      {
        heading: "Application is Easy!",
        text: "The application process is so fast with the assistance of garage epoxy flooring professionals. Once the garage floor has been inspected and pre-application preparation has been completed, priming will commence and the coating will be next. Grab your phone and dial 1300 037 699 for a free consultation with a Sydney Epoxy Floors expert.",
      },
    ],
  },

  // ── 24 ─────────────────────────────────────────────────────────────────────
  {
    id: 24,
    title: "What Type of Epoxy Flooring is Best for Your Space?",
    excerpt:
      "Epoxy is the most widely used flooring solution for protection and beautification. Learn which system suits your environment.",
    category: "Guide",
    readTime: "7 min",
    featured: false,
    image: img(18),
    body: [
      {
        text: "As we all know, epoxy flooring is used to protect our floors and at the same time beautify and decorate the floors. Epoxy is the most widely used flooring solution as it has amazing mechanical resistance properties. There are different types of epoxy flooring and as a homeowner or business owner, you need to know first the most appropriate kind to use for your space.",
      },
      {
        heading: "Self Leveling Epoxy Flooring",
        text: "For concrete floors, this type of epoxy floor coating can be used specifically for commercial and industrial floors. Self leveling epoxy is applied on damaged and cracked floors to become smooth and spotless, producing long lasting and low maintenance flooring. This is highly recommended for showrooms, commercial kitchens and garages, manufacturing facilities, aircraft hangars, hospitals and warehouses. High gloss appearance, very attractive seamless surface, and resistance to heat, chemicals and scratches are some of the benefits.",
      },
      {
        heading: "Quartz Filled Epoxy Flooring",
        text: "A combination of stained or multiple coloured quartz grains and epoxy polymer resin. It is advisable for use in medium traffic areas and is available in a very striking floor design and shine. In terms of durability, Quartz filled is one of the top choices of most professionals. This type of epoxy flooring is best for locker rooms, restrooms, offices and guest lounge areas.",
      },
      {
        heading: "Epoxy Flake Flooring",
        text: "For sports venues or event centres, lobbies and laboratories, Epoxy Flake flooring is the best option. Flakes (usually coloured) are positioned in between epoxy forming colourful, durable and slightly textured surfaces to prevent floor accidents. Also you may come up with various styles and designs that can be used to match your product or brand's colour.",
      },
      {
        heading: "Epoxy Mortar Flooring",
        text: "Any industrial facility may need a heavy duty flooring system to be able to withstand the heavy loads and movement of storage vehicles and forklifts. Only Epoxy Mortar is a strong flooring with this capacity which can provide an extra level of protection to your floors. Another effective use of epoxy mortar is it can repair existing damage, making it a more economical option.",
      },
      {
        heading: "Anti Static Epoxy Flooring",
        text: "Anti static epoxy flooring is quite appropriate for offices, retail stores, laboratories, electronic manufacturing facilities and even at home since this may prevent many accidents such as fire or explosions caused by electrostatic discharge.",
      },
      {
        heading: "Epoxy Terrazzo Flooring",
        text: "Epoxy Terrazzo floor coating is highly recommended for commercial spaces such as buildings and schools with very large and busy hallways. It is also easy to maintain and with exceptional resistance to bacteria or any chemicals, though can be a little costly because of its aesthetic appeal.",
      },
      {
        heading: "Vapour Barrier Epoxy Flooring",
        text: "The Vapour Barrier epoxy flooring is also known as Moisture Barrier. The vapour barrier prevents the destruction of the floors, allowing them to be dried at all times. This is best to use in areas prone to dampness or high humidity such as the ceiling and basement.",
      },
      {
        text: "Grab your phone now and dial 1300 037 699 for a free consultation with Sydney Epoxy Floors.",
      },
    ],
  },

  // ── 25 ─────────────────────────────────────────────────────────────────────
  {
    id: 25,
    title: "5 Known Benefits of Epoxy Floor Coating",
    excerpt:
      "When planning to revamp your commercial or living space, find a floor solution that stands up to everyday activity without losing style.",
    category: "Benefits",
    readTime: "5 min",
    featured: false,
    image: img(19),
    body: [
      {
        text: "When planning to revamp your commercial or living space it's essential to find a floor solution that can stand the brunt of your everyday activities, and resist any wear and tear without calling for too much maintenance. Epoxy Flooring is known for functionality, aesthetics, safety, low-maintenance, and may be the perfect reason to ditch your old flooring system.",
      },
      {
        heading: "1 — Hard Wearing Durable Surface",
        text: "Epoxy floor coating has the ability to resist considerable wear and lasts longer than many other floor types, meaning you don't have to worry about damaging the floor every time you drop something! While concrete is a competitively strong material, an epoxy floor coating can make concrete more durable and is tougher than your conventional flooring.",
      },
      {
        heading: "2 — Chemical & Slip Resistant",
        text: "Epoxy flooring can resist the corrosive action of chemical agents which is perfect for facilities that deal with significant levels of chemical exposure. An epoxy flooring system that withstands constant foot traffic can also be customised to have anti slip properties to help prevent slip accidents and ensure the safety of your family, customers and staff.",
      },
      {
        heading: "3 — Relatively Low Maintenance",
        text: "The most popular benefit of installing an epoxy flooring system is that it requires very little maintenance. Its smooth resin and glossy finish allows you to clean any stains, liquids or blotches in seconds. Hospitality establishments benefit from added epoxy covings, that prevent bacteria from thriving in the corners of the floor.",
      },
      {
        heading: "4 — Aesthetically Pleasing",
        text: "Gone are the days when epoxy floors were only used in industrial spaces. With finishes like flake, metallic, and polished concrete, epoxy flooring easily enhances the aesthetic value of your space and can be handmade works of art! With the complete capability to customise, we can fulfil your requirements and bring your vision to life.",
      },
      {
        heading: "5 — Cost Effective with Short Curing Periods",
        text: "Having a professional install your epoxy flooring will mean less investment and production downtime. The epoxy installation can be completed overnight and still be trafficable by the morning (unlike other flooring solutions) meaning you can continue with your day as planned with interruptions being minimal to none!",
      },
      {
        text: "Eager to get Epoxy? Sydney Epoxy Floors is here to help. If you are located in Sydney, require a strong, affordable and long lasting flooring solution, contact Sydney Epoxy Floors today!",
      },
    ],
  },

  // ── 26 ─────────────────────────────────────────────────────────────────────
  {
    id: 26,
    title: "Is Garage Epoxy Floor Coating Slippery?",
    excerpt:
      "Any wet floor will be slippery — but anti-slip media additives can transform your epoxy floor into a safe, reliable surface.",
    category: "Safety",
    readTime: "4 min",
    featured: false,
    image: img(11),
    body: [
      {
        text: "Generally speaking, any wet floor covering will be slippery and you need to take extra care when stepping over it. Anti slip media is an additive available in different sizes and types that can be added to epoxy system topcoats to provide slip resistance. Smooth floors are more slippery than textured or rough floors but generally the rougher the floor, the harder it is to keep it clean.",
      },
      {
        heading: "Common Anti-Slip Media Options",
        list: [
          "Sand — Specialised sand is the cheapest form of anti slip media and comes in different grades.",
          "Aluminum Oxide — This type of antislip media will last much longer than sand and will provide better slip resistance. A good size to be mixed in or broadcasted over an epoxy system applied to a garage floor or workshop floor is 60 mesh.",
          "Floating Antislip media — The most suitable type of antislip media for the Garage floor Epoxy Coating project. This type of media is not too harsh and can be easily cleaned while it provides a safe surface to walk on.",
        ],
      },
      {
        heading: "Smooth Epoxy Finishes",
        text: "Metallic epoxy floors are generally very smooth and have a scratch resistance coating protecting them. These are great for indoor environments but can be very slippery in wet conditions. The 100% Solids Epoxies have self-levelling properties and tend to be more slippery than lower solid products. We suggest staying away from any epoxy product with less than 80% Solids content.",
      },
      {
        heading: "Full Flake Epoxy Coating — The Recommended Choice",
        text: "This system is the real deal and most suitable type for residential garage floor coating. A properly applied finish will have a 15+ year life expectancy. A typical garage coating is made of the following stages: diamond grinding, priming, a base coat of high solids epoxy or Polyaspartic, broadcast flake until point of rejection, cleaning and vacuuming the flake, then applying one or multiple clear coats.",
      },
      {
        text: "The gentle texture of SEF Premium Seamless Flake floor, top-coated with Elite Crete's VR1 will provide the ultimate protection for your garage floor — safe to walk on, oil, fuel, and hot tyre pick-up resistant, and easy to keep clean and maintain.",
      },
    ],
  },

  // ── 27 ─────────────────────────────────────────────────────────────────────
  {
    id: 27,
    title: "What are the Most Popular Flooring Materials?",
    excerpt:
      "Choosing the right flooring material for your home is quite difficult when you aren't well informed on each type and its trade-offs.",
    category: "Guide",
    readTime: "6 min",
    featured: false,
    image: img(2),
    body: [
      {
        text: "Choosing the right and the best flooring materials for your home is quite difficult when you are not well informed and knowledgeable on each type and what are the factors that need to be considered. You may need to check the room or the part of your home, how much is your budget, the requirements of the installation, the style or design, and your family members' situation (if you have babies, kids or pets at home).",
      },
      {
        heading: "Vinyl Flooring",
        text: "Vinyl is one of the most affordable flooring materials though it is only synthetic flooring. This material is great for high traffic areas, very easy to maintain and known for its versatility. The designs of wood, ceramic or stone are effectively imitated by this material. Vinyl is as durable as the other flooring material to use in any part of your home and is also easier to install.",
      },
      {
        heading: "Stone Tile",
        text: "A classic flooring with granite, marble and sandstone or travertine are the well-known natural stone tile flooring materials. They are quite durable, come in different colours and shapes that homeowners can choose from. Stone tile is eco friendly and best for radiant heating. With all its features, this flooring material is one of the most expensive in terms of installation and repairs or maintenance.",
      },
      {
        heading: "Ceramic and Porcelain Tile",
        text: "For too much moisture and high traffic areas at home, ceramic and porcelain tiles are best to use. Durable and water proof, they are highly recommended for kitchens, entrances and bathrooms, with a variety of designs and styles. This material is very difficult to install also making the installation process quite expensive.",
      },
      {
        heading: "Hardwood",
        text: "Still the top choice for many homes due to its appearance. With different colours and styles, hardwood flooring is really attractive and beautiful which can also be resurfaced every 3-5 years. Hardwood has a high return of investment (ROI) though it is expensive at first compared with other top flooring materials. Through time, scratches and dents can be developed and it can also encounter moisture damage.",
      },
      {
        heading: "Laminate",
        text: "For easy installation, you might want to try Laminate flooring material, with lower cost than Hardwood, durable, and comes in many colours and styles. This is recommended to areas with high traffic as it can withstand damages caused by people movement. This material should not be used in bathroom or kitchen areas since the repair or maintenance is quite expensive.",
      },
      {
        heading: "Epoxy Resin Flooring — The Top Choice",
        text: "In choosing the new and most preferred flooring system for homes and other commercial or industrial spaces, Epoxy resin flooring is on the top list. This is due to its durability, resistance to high levels of wear and tear, customisability, and its ability to fit whatever design or style homeowners might want to achieve. Different types include Self levelling, Quartz-filled, Epoxy mortar, Epoxy flake and Anti static epoxy floors. Dial 1300 037 699 for a free consultation.",
      },
    ],
  },

  // ── 28 ─────────────────────────────────────────────────────────────────────
  {
    id: 28,
    title: "The Importance of Epoxy Flooring to Business",
    excerpt:
      "In manufacturing, food processing, warehouses and retail stores, the right flooring is a critical business asset, not just a surface.",
    category: "Commercial",
    readTime: "6 min",
    featured: false,
    image: img(16),
    body: [
      {
        text: "In the building industry and businesses such as manufacturing, facilities, food processing plants or warehouses, showrooms, retail stores and hotels, epoxy flooring is the most popular flooring type used by many business owners in Sydney. Epoxy resins act as protective layers from fire and water or any other damage that would likely occur in commercial and industrial spaces through time.",
      },
      {
        heading: "Manufacturing Facility",
        text: "In a factory or manufacturing facility, a flooring system is critical since it exposes many chemicals, intense heat and forklift trucks with heavy loads. Safety is also resolved by having an epoxy floor — it reduces workplace or fall accidents with brighter and non-slip flooring. It also improves visibility in the manufacturing plant areas for factory workers and forklift truck drivers.",
      },
      {
        heading: "Hotels",
        text: "Hotels reception areas and hallways are very much exposed to high foot traffic with a lot of travel bags and luggage movement day and night. Substandard flooring systems will not last long or even endure these tough floor requirements every day. With the qualities of epoxy, hotel flooring can be protected with a top coating that will surely resist and prevent damage occurring naturally and unavoidably.",
      },
      {
        heading: "Medical Plant or Research Laboratory",
        text: "With many destructive mixing chemicals and perilous liquids that can spill over the medical plant grounds, damage such as cracking and breakage are expected to occur at any given time. With the help of epoxy, even high temperatures or too much heat can never be a problem. Also, epoxy coats have spill and waterproof features in which liquid or spills can be easily cleaned up without leaving stains or damage.",
      },
      {
        heading: "Retail Stores",
        text: "For a retail store owner, the floor's life expectancy of the shop or showroom is vital. Through epoxy flooring treatment, the lifespan will be extended after being coated, expectedly 10-20 years or more if the floors are clean and re-coated regularly. Also, epoxy coatings provide a fresh appearance and are shiny, leaving the floors with a brand new look. Customers will be impressed and will want to visit the shop repeatedly.",
      },
      {
        heading: "Warehouse",
        text: "A specific floor coating is required in warehouses for the protection from the heavy duty equipment, vehicular traffic and some cleaning aids with chemicals or oils. It is necessary so as not to interrupt the day to day warehouse operation. Also in a large warehouse heavy worker traffic requires a hassle free safe workplace.",
      },
      {
        heading: "Garage",
        text: "Imagine how many vehicles come and go every day in a shopping centre garage. Garage floor coatings are a protective layer that provides protection from spills or some scratches. The floor also becomes crack resistant and moisture resistant once coated with epoxy.",
      },
      {
        heading:
          "Epoxy Flooring Ensures Safety, Productivity and Smooth Operation",
        text: "With all the circumstances and harsh conditions in the working environment in the mentioned businesses, the flooring system is one crucial part that needs to be taken care of throughout the stages of the business. Safety, productivity and smooth operation are the 3 basic results if you can manage a great flooring system. Dial 1300 037 699 for a free consultation with Sydney Epoxy Floors experts.",
      },
    ],
  },

  // ── 29 ─────────────────────────────────────────────────────────────────────
  {
    id: 29,
    title: "Why Do You Need Epoxy Flooring in Your Home and Business?",
    excerpt:
      "Flooring is one of the crucial parts of any house and building construction — and the type you choose matters more than you'd think.",
    category: "Benefits",
    readTime: "5 min",
    featured: false,
    image: img(13),
    body: [
      {
        text: "Flooring is one of the crucial parts of any house and building construction. The question as to which type and/or kind of flooring to be used is the next thing to think about. There are many factors to consider such as costs, time, durability and maintenance. Many people especially business owners believe that Epoxy is one of the most affordable commercial flooring options because preventative maintenance is the best way to save money if you plan to have it long term.",
      },
      {
        heading: "Residential",
        text: "You may need epoxy flooring in the different parts of your house such as garage, kitchen, bathroom, basement, living room and backyard. It is best to use epoxy for your garage and kitchen since these 2 parts of the house are most likely very prone to floor cracking or peeling and chemical damage caused by acids and oils from cooking and cleaning materials. Epoxy flooring is extremely resistant to all kinds of breakage or floor damage. The epoxy coating can withstand excessive heat and is also water resistant preventing damage and cracking to the untreated concrete floor. You can also create customised designs by choosing different colours, materials with patterns or shapes, or whatever texture look you prefer.",
      },
      {
        heading: "Commercial",
        text: "One important advantage of using epoxy coating in your business is the professional look it gives to any retail or commercial establishment. With a high-gloss finish, the floors' brightness can be increased by up to 200%. When your business location is exposed to extreme weather conditions, epoxy flooring is highly recommended since it can resist moisture and too much heat. In retail stores, hotels, restaurants and cafes, epoxy is a strong material that can sustain and hold up heavy foot traffic.",
      },
      {
        heading: "Industrial",
        text: "Warehouses, manufacturing facilities or factories of food and non food products and big storage areas are greatly in need of durable and heavy duty flooring. Only epoxy floors can resist different chemical substances including oil, water, fluids and other chemicals — easy to clean by just using mops or other cleaning tools. Also, they can withstand heavy loads of products and materials and heavy traffic of factory workers passing by all areas daily.",
      },
      {
        heading: "The Three Main Reasons",
        text: "The three main and important reasons for having epoxy flooring in your residential, commercial and even industrial properties are durability, easy maintenance and affordability. Consult now with Sydney Epoxy experts to help you out with your flooring needs. Hurry! Grab your phone now and dial 1300 037 699 for a free consultation with Sydney Epoxy Floors experts.",
      },
    ],
  },
];

const categories = [
  "All",
  "Garage",
  "Commercial",
  "Industrial",
  "Guide",
  "Benefits",
  "Safety",
  "Healthcare",
  "Process",
  "Innovation",
  "Comparison",
  "Pricing",
  "Basics",
  "Outdoor",
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function HeroGrid({ post, onOpen }) {
  const [ref, inView] = useInView(0.05);
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div
      ref={ref}
      onClick={() => onOpen(post)}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[200px] lg:h-[240px] overflow-hidden cursor-pointer rounded-xl"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div className="flex flex-col justify-center px-6 py-7 lg:px-9 bg-white border border-[#f0e8e8] border-r-0 rounded-l-xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 bg-[#A11717] text-white text-[8px] font-bold tracking-[1.5px] uppercase px-2 py-1 rounded-full">
            <span className="w-1 h-1 rounded-full bg-white/70 animate-pulse" />
            Featured
          </span>
          <span className="text-[11px] text-[#b08080] font-medium tracking-wide">
            {post.category} · {post.readTime} read
          </span>
        </div>
        <h2
          className="text-[#0f0505] font-black leading-[1.15] mb-2.5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(17px, 2vw, 24px)",
          }}
        >
          {post.title}
        </h2>
        <p className="text-[12px] leading-[1.6] text-[#6b5050] mb-4 max-w-[420px] line-clamp-3">
          {post.excerpt}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen(post);
          }}
          className="group inline-flex items-center gap-2 self-start cursor-pointer"
        >
          <span className="px-4 py-2 bg-[#A11717] text-white text-[10px] font-bold tracking-[1.2px] uppercase rounded-md transition-all duration-200 group-hover:bg-[#8a1313] group-hover:shadow-md">
            Read Article
          </span>
          <span className="text-[#A11717] text-sm transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
      <div className="relative overflow-hidden rounded-r-xl min-h-[200px] lg:min-h-0 lg:max-h-[220px]">
        <div
          className="absolute inset-0 bg-[#e8d5d5]"
          style={{ opacity: imgLoaded ? 0 : 1, transition: "opacity 0.5s" }}
        />
        <img
          src={post.image}
          alt={post.title}
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover"
          style={{
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-[#A11717] text-[8px] font-bold tracking-[1.2px] uppercase px-2 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post, index, onOpen }) {
  const [ref, inView] = useInView(0.05);
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(post)}
      className="group flex flex-col cursor-pointer bg-white rounded-lg overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        border: "1px solid #f0e8e8",
        boxShadow:
          hovered ?
            "0 14px 32px rgba(161,23,23,0.1), 0 3px 10px rgba(0,0,0,0.06)"
          : "0 1px 6px rgba(0,0,0,0.04)",
        transition: `opacity 0.5s ease ${(index % 12) * 40}ms, transform 0.5s ease ${(index % 12) * 40}ms, box-shadow 0.3s ease`,
      }}
    >
      <div className="relative overflow-hidden h-32 bg-[#f5eded]">
        <img
          src={post.image}
          alt={post.title}
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover"
          style={{
            opacity: imgLoaded ? 1 : 0,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "opacity 0.5s ease, transform 0.6s ease",
          }}
        />
        <div
          className="absolute left-0 top-0 w-1 h-full bg-[#A11717]"
          style={{
            transform: hovered ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 0.3s ease",
          }}
        />
        <div className="absolute top-2 left-2">
          <span className="bg-white/90 backdrop-blur-sm text-[#A11717] text-[8px] font-bold tracking-[1.2px] uppercase px-2 py-0.5 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-3.5">
        <div className="flex items-center justify-between mb-1.5">
          <span
            className="text-[8px] font-bold tracking-[1.2px] uppercase transition-colors duration-200"
            style={{ color: hovered ? "#A11717" : "#b08080" }}
          >
            {post.category}
          </span>
          <span className="text-[9px] text-[#c0a0a0] font-medium">
            {post.readTime} read
          </span>
        </div>
        <h3
          className="text-[12.5px] font-bold leading-snug text-[#0f0505] mb-1.5 flex-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {post.title}
        </h3>
        <p className="text-[10.5px] leading-relaxed text-[#7a6060] mb-2.5 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-2.5 border-t border-[#f5eded]">
          <span
            className="text-[9px] font-bold tracking-[1px] uppercase transition-colors duration-200"
            style={{ color: hovered ? "#A11717" : "#c0a0a0" }}
          >
            Read article
          </span>
          <span
            className="text-[#A11717] text-[13px] transition-transform duration-200"
            style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

function CTABanner() {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className="relative mt-14 rounded-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f0505 0%, #1a0a0a 50%, #2a0f0f 100%)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(161,23,23,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(161,23,23,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute left-0 top-0 w-1 h-full bg-[#A11717]" />
      <span
        className="absolute -bottom-3 right-6 select-none pointer-events-none font-black"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "90px",
          color: "rgba(161,23,23,0.07)",
          lineHeight: 1,
        }}
      >
        SEF
      </span>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-7 py-9 md:px-11">
        <div>
          <p className="text-[9px] font-bold tracking-[2.5px] uppercase text-[#A11717] mb-2">
            Ready to transform your space?
          </p>
          <h2
            className="font-black text-white leading-tight mb-1.5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(17px, 2.4vw, 25px)",
            }}
          >
            Get a free quote today
          </h2>
          <p className="text-[12px] text-[#7a5a5a] leading-relaxed max-w-sm">
            Sydney's most trusted epoxy flooring specialists. Professional
            installation, unmatched durability.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
          <a
            href="https://www.sydneyepoxyfloors.com.au/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#A11717] text-white text-[10px] font-bold tracking-[1.2px] uppercase rounded-lg cursor-pointer hover:bg-[#8a1313] transition-all duration-200 text-center no-underline"
          >
            Request a Quote
          </a>
          <a
            href="https://www.sydneyepoxyfloors.com.au/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white/5 text-white border border-white/15 text-[10px] font-bold tracking-[1.2px] uppercase rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200 text-center no-underline"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  );
}

function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-1.5 mt-9">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="text-[10px] font-bold uppercase tracking-[1px] px-3 py-1.5 rounded-md border border-[#e8dada] text-[#8a6a6a] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#A11717] hover:text-[#A11717] transition-colors cursor-pointer"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className="text-[10px] font-bold w-7 h-7 rounded-md border transition-colors cursor-pointer"
          style={{
            background: p === page ? "#A11717" : "white",
            borderColor: p === page ? "#A11717" : "#e8dada",
            color: p === page ? "white" : "#8a6a6a",
          }}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="text-[10px] font-bold uppercase tracking-[1px] px-3 py-1.5 rounded-md border border-[#e8dada] text-[#8a6a6a] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#A11717] hover:text-[#A11717] transition-colors cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

function ArticleView({ post, related, onBack, onOpen }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [post]);
  return (
    <div
      className="min-h-screen bg-[#fafafa]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <main className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 py-10 pb-24">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1px] uppercase text-[#A11717] mb-6 cursor-pointer hover:text-[#8a1313] transition-colors"
        >
          <span>←</span> Back to all articles
        </button>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#A11717] text-white text-[9px] font-bold tracking-[1.2px] uppercase px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-[11px] text-[#b08080] font-medium">
            {post.readTime} read
          </span>
        </div>
        <h1
          className="text-[#0f0505] font-black leading-[1.15] mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(24px, 4vw, 38px)",
          }}
        >
          {post.title}
        </h1>
        <div className="rounded-xl overflow-hidden mb-8 bg-[#e8d5d5]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[280px] md:h-[380px] object-cover"
          />
        </div>
        <article className="space-y-5 max-w-3xl">
          {post.body.map((block, i) => (
            <div key={i} className="mb-4">
              {block.heading && (
                <h2
                  className="text-[#0f0505] font-bold mb-2 mt-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(16px, 2vw, 20px)",
                  }}
                >
                  {block.heading}
                </h2>
              )}
              {block.text && (
                <p className="text-[14px] leading-[1.8] text-[#4a3838] mb-2">
                  {block.text}
                </p>
              )}
              {block.list && (
                <ul className="list-disc pl-5 mb-2 space-y-1.5 text-[14px] leading-[1.8] text-[#4a3838]">
                  {block.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {block.orderedList && (
                <ol className="list-decimal pl-5 mb-2 space-y-1.5 text-[14px] leading-[1.8] text-[#4a3838]">
                  {block.orderedList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </article>
        <div className="mt-10 pt-6 border-t border-[#f0e8e8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-[#8a6a6a]">
            Have a flooring project in mind?
          </p>
          <a
            href="https://www.sydneyepoxyfloors.com.au/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start sm:self-auto no-underline"
          >
            <span className="px-5 py-2.5 bg-[#A11717] text-white text-[11px] font-bold tracking-[1.2px] uppercase rounded-md hover:bg-[#8a1313] transition-colors">
              Get a Free Quote
            </span>
          </a>
        </div>
        {related.length > 0 && (
          <div className="mt-14">
            <h3
              className="text-[15px] font-black text-[#0f0505] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              You might also like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} onOpen={onOpen} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const PAGE_SIZE = 9;

export default function EpoxyBlog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const filtered =
    activeCategory === "All" ? posts : (
      posts.filter((p) => p.category === activeCategory)
    );
  const featured = posts.find((p) => p.featured);
  const regularPosts = filtered.filter((p) => !p.featured);
  const totalPages = Math.max(1, Math.ceil(regularPosts.length / PAGE_SIZE));
  const pageItems = regularPosts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };
  const handleOpenPost = (post) => {
    if (post?.id === 21) {
      navigate("/cost-guide");
      return;
    }
    setSelectedPost(post);
  };

  if (selectedPost) {
    const related = posts
      .filter(
        (p) => p.id !== selectedPost.id && p.category === selectedPost.category,
      )
      .slice(0, 3);
    const fallback =
      related.length > 0 ?
        related
      : posts.filter((p) => p.id !== selectedPost.id).slice(0, 3);
    return (
      <ArticleView
        post={selectedPost}
        related={fallback}
        onBack={() => setSelectedPost(null)}
        onOpen={handleOpenPost}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-[#fafafa]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <main className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 py-10 pb-24">
        {activeCategory === "All" && page === 1 && featured && (
          <div className="mb-9">
            <HeroGrid post={featured} onOpen={handleOpenPost} />
          </div>
        )}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 mb-5">
          <div>
            <h3
              className="text-[16px] font-black text-[#0f0505] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Latest Articles
            </h3>
            <p className="text-[10.5px] text-[#b08080] mt-0.5">
              <span className="text-[#A11717] font-bold">
                {regularPosts.length}
              </span>{" "}
              articles
              {activeCategory !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <span className="text-[#A11717] font-semibold">
                    {activeCategory}
                  </span>
                </>
              )}
            </p>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className="text-[9px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-md border transition-all duration-150 cursor-pointer"
                style={{
                  background: activeCategory === cat ? "#A11717" : "white",
                  borderColor: activeCategory === cat ? "#A11717" : "#e8dada",
                  color: activeCategory === cat ? "white" : "#8a6a6a",
                  boxShadow:
                    activeCategory === cat ?
                      "0 2px 6px rgba(161,23,23,0.25)"
                    : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-[#A11717]/20 via-[#e8dada] to-transparent mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageItems.map((post, i) => (
            <BlogCard
              key={post.id}
              post={post}
              index={i}
              onOpen={handleOpenPost}
            />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        <CTABanner />
      </main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800;900&display=swap');
        .line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
        .line-clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        .animate-pulse{animation:pulse 2s infinite}
      `}</style>
    </div>
  );
}
