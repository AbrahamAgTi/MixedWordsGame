/* Array of words generated by chatGPT, not my fault if there's too much difficoult */

const words = [
  { word: "Apple", hint: "A red or green fruit often used in pies and cider.", category: "Fruit" },
  { word: "Banana", hint: "Yellow, curved fruit with a soft, sweet flesh.", category: "Fruit" },
  { word: "Orange", hint: "Citrus fruit with a bright, tangy flavor.", category: "Fruit" },
  { word: "Strawberry", hint: "Small, red fruit with seeds on the outside.", category: "Fruit" },
  { word: "Pineapple", hint: "Tropical fruit with a tough, spiky outer shell.", category: "Fruit" },
  { word: "Mango", hint: "Sweet and juicy tropical fruit with a large seed.", category: "Fruit" },
  { word: "Watermelon", hint: "Large, juicy fruit with a green rind and red flesh.", category: "Fruit" },
  { word: "Grape", hint: "Small, round fruit often used to make wine.", category: "Fruit" },
  { word: "Kiwi", hint: "Small, brown, and fuzzy on the outside, green on the inside.", category: "Fruit" },
  { word: "Blueberry", hint: "Small, round, and blue with a sweet taste.", category: "Fruit" },
  { word: "Raspberry", hint: "Small, red or black fruit with a sweet-tart flavor.", category: "Fruit" },
  { word: "Peach", hint: "Fuzzy fruit with a juicy, sweet taste.", category: "Fruit" },
  { word: "Pear", hint: "Juicy fruit with a crisp texture and a sweet flavor.", category: "Fruit" },
  { word: "Plum", hint: "Small, round fruit with a smooth skin and sweet or tart flavor.", category: "Fruit" },
  { word: "Avocado", hint: "Creamy fruit with a green outer skin and large seed inside.", category: "Fruit" },
  { word: "Lemon", hint: "Tart and citrusy yellow fruit often used for its juice.", category: "Fruit" },
  { word: "Lime", hint: "Small, green citrus fruit with a zesty flavor.", category: "Fruit" },
  { word: "Papaya", hint: "Tropical fruit with orange flesh and black seeds.", category: "Fruit" },
  { word: "Fig", hint: "Sweet fruit with a unique, teardrop shape.", category: "Fruit" },
  { word: "Grapefruit", hint: "Citrus fruit with a tangy and slightly bitter taste.", category: "Fruit" },
  { word: "Cherry", hint: "Small, round fruit often found in red or black varieties.", category: "Fruit" },
  { word: "Cantaloupe", hint: "Sweet melon with orange flesh and a netted rind.", category: "Fruit" },
  { word: "Coconut", hint: "Large, brown fruit with a hard shell and white flesh inside.", category: "Fruit" },
  { word: "Passionfruit", hint: "Round fruit with a tough outer rind and aromatic, juicy seeds.", category: "Fruit" },
  { word: "Dragonfruit", hint: "Vibrant pink or yellow fruit with green scales on the outside.", category: "Fruit" },
  { word: "Blackberry", hint: "Dark purple-black fruit with a sweet and tart flavor.", category: "Fruit" },
  { word: "Cranberry", hint: "Small, red fruit often used in juices and sauces.", category: "Fruit" },
  { word: "Persimmon", hint: "Orange fruit with a sweet and honey-like taste.", category: "Fruit" },
  { word: "Pomegranate", hint: "Red fruit with juicy seeds inside, known for its antioxidants.", category: "Fruit" },
  { word: "Guava", hint: "Tropical fruit with a green or yellow skin and pink or white flesh.", category: "Fruit" },
  { word: "Nectarine", hint: "Smooth-skinned fruit similar to a peach but without the fuzz.", category: "Fruit" },
  { word: "Tangerine", hint: "Small citrus fruit with a sweet and tangy flavor.", category: "Fruit" },
  { word: "Apricot", hint: "Small, yellow-orange fruit with a smooth skin and sweet taste.", category: "Fruit" },
  { word: "Elderberry", hint: "Small, dark purple berries often used in jams and syrups.", category: "Fruit" },
  { word: "Lychee", hint: "Small, translucent fruit with a sweet and floral flavor.", category: "Fruit" },
  { word: "Kiwifruit", hint: "Fuzzy brown fruit with green flesh and tiny black seeds.", category: "Fruit" },
  { word: "Mulberry", hint: "Dark purple or red fruit with a sweet and tart taste.", category: "Fruit" },
  { word: "Ackee", hint: "Tropical fruit with red skin and white or yellow flesh.", category: "Fruit" },
  { word: "Date", hint: "Sweet and chewy fruit that grows on date palms.", category: "Fruit" },
  { word: "Olive", hint: "Small, oval-shaped fruit commonly used to produce olive oil.", category: "Fruit" },
  { word: "Persimmon", hint: "Orange fruit with a sweet and honey-like taste.", category: "Fruit" },
  { word: "Plantain", hint: "Similar to a banana but larger and often cooked before eating.", category: "Fruit" },
  { word: "Starfruit", hint: "Yellow-green fruit with a star-shaped cross-section.", category: "Fruit" },
  { word: "Quince", hint: "Fragrant fruit with a golden-yellow skin and a tough flesh.", category: "Fruit" },
  { word: "Boysenberry", hint: "Cross between a raspberry, blackberry, and loganberry.", category: "Fruit" },
  { word: "Currant", hint: "Small, round berries often used in jams and desserts.", category: "Fruit" },
  { word: "Pomelo", hint: "Large citrus fruit similar to grapefruit but sweeter.", category: "Fruit" },
  { word: "Persimmon", hint: "Orange fruit with a sweet and honey-like taste.", category: "Fruit" },
  { word: "Jabuticaba", hint: "Brazilian fruit that grows directly on the trunk of the tree.", category: "Fruit" },
  { word: "Coffee", hint: "A popular caffeinated beverage made from roasted beans.", category: "Beverage" },
  { word: "Tea", hint: "A hot or cold drink made by infusing dried tea leaves in water.", category: "Beverage" },
  { word: "Water", hint: "Clear, colorless, tasteless liquid essential for life.", category: "Beverage" },
  { word: "Juice", hint: "Liquid extracted from fruits or vegetables.", category: "Beverage" },
  { word: "Soda", hint: "Carbonated beverage available in various flavors.", category: "Beverage" },
  { word: "Lemonade", hint: "Sweetened beverage made from lemon juice, water, and sugar.", category: "Beverage" },
  { word: "Milk", hint: "White liquid produced by mammals and consumed as a beverage.", category: "Beverage" },
  { word: "Hot Chocolate", hint: "Warm, sweet beverage made from cocoa powder and milk.", category: "Beverage" },
  { word: "Smoothie", hint: "Blended beverage typically made with fruits, yogurt, and ice.", category: "Beverage" },
  { word: "Iced Tea", hint: "Chilled tea served over ice, often sweetened.", category: "Beverage" },
  { word: "Coca-Cola", hint: "Popular carbonated soft drink brand.", category: "Beverage" },
  { word: "Green Tea", hint: "Tea made from Camellia sinensis leaves and buds.", category: "Beverage" },
  { word: "Orange Juice", hint: "Juice extracted from oranges.", category: "Beverage" },
  { word: "Mineral Water", hint: "Bottled water containing minerals or gases.", category: "Beverage" },
  { word: "Iced Coffee", hint: "Chilled coffee served over ice.", category: "Beverage" },
  { word: "Mango Lassi", hint: "Indian beverage made with yogurt and mango.", category: "Beverage" },
  { word: "Beer", hint: "Alcoholic beverage made from fermented grains, typically barley.", category: "Beverage" },
  { word: "Wine", hint: "Alcoholic beverage made from fermented grapes or other fruits.", category: "Beverage" },
  { word: "Limeade", hint: "Refreshing beverage made from lime juice, water, and sugar.", category: "Beverage" },
  { word: "Coconut Water", hint: "Clear liquid from inside young green coconuts.", category: "Beverage" },
  { word: "Fruit Punch", hint: "Mixed beverage with various fruit juices.", category: "Beverage" },
  { word: "Espresso", hint: "Strong, concentrated coffee brewed by forcing hot water through finely-ground coffee beans.", category: "Beverage" },
  { word: "Iced Tea", hint: "Chilled tea served over ice, often sweetened.", category: "Beverage" },
  { word: "Hot Cocoa", hint: "Hot chocolate made with milk or water and cocoa powder.", category: "Beverage" },
  { word: "Pina Colada", hint: "Tropical cocktail made with coconut cream, pineapple juice, and rum.", category: "Beverage" },
  { word: "Ginger Ale", hint: "Carbonated soft drink flavored with ginger.", category: "Beverage" },
  { word: "Chai Latte", hint: "Spiced tea concentrate mixed with steamed milk.", category: "Beverage" },
  { word: "Mint Julep", hint: "Cocktail consisting of bourbon, fresh mint, ice, and sugar.", category: "Beverage" },
  { word: "Lemon Iced Tea", hint: "Chilled tea with lemon flavor served over ice.", category: "Beverage" },
  { word: "Sparkling Water", hint: "Carbonated water with added bubbles for effervescence.", category: "Beverage" },
  { word: "Arnold Palmer", hint: "Beverage made with a mixture of iced tea and lemonade.", category: "Beverage" },
  { word: "Red Wine", hint: "Wine made from dark-colored grape varieties.", category: "Beverage" },
  { word: "Champagne", hint: "Sparkling wine produced from grapes grown in the Champagne region of France.", category: "Beverage" },
  { word: "Tomato Juice", hint: "Juice made from pressed tomatoes.", category: "Beverage" },
  { word: "Cranberry Juice", hint: "Juice made from cranberries.", category: "Beverage" },
  { word: "Peppermint Tea", hint: "Herbal tea made from peppermint leaves.", category: "Beverage" },
  { word: "Cola", hint: "Carbonated soft drink flavored with vanilla, cinnamon, and citrus oils.", category: "Beverage" },
  { word: "Horchata", hint: "Sweetened rice milk beverage flavored with cinnamon.", category: "Beverage" },
  { word: "Iced Matcha Latte", hint: "Cold beverage made with matcha powder, milk, and ice.", category: "Beverage" },
  { word: "Peach Iced Tea", hint: "Chilled tea with peach flavor served over ice.", category: "Beverage" },
  { word: "Irish Coffee", hint: "Hot coffee with Irish whiskey and topped with cream.", category: "Beverage" },
  { word: "Frappe", hint: "Iced beverage made with coffee, milk, and ice.", category: "Beverage" },
  { word: "Seltzer", hint: "Carbonated water with no added flavors.", category: "Beverage" },
  { word: "Mai Tai", hint: "Tropical cocktail made with rum, lime juice, and orgeat syrup.", category: "Beverage" },
  { word: "Chamomile Tea", hint: "Herbal tea made from dried chamomile flowers.", category: "Beverage" },
  { word: "Matcha Latte", hint: "Beverage made with finely ground green tea leaves and milk.", category: "Beverage" },
  { word: "Moscato", hint: "Sweet wine made from Muscat grapes.", category: "Beverage" },
  { word: "Gin and Tonic", hint: "Cocktail made with gin and tonic water, garnished with a slice of lime.", category: "Beverage" },
  { word: "Elephant", hint: "Large mammal with tusks and a long trunk.", category: "Animals" },
  { word: "Lion", hint: "Large carnivorous feline known for its mane.", category: "Animals" },
  { word: "Giraffe", hint: "Tall, long-necked herbivorous mammal with spotted coat.", category: "Animals" },
  { word: "Kangaroo", hint: "Marsupial known for hopping on its hind legs.", category: "Animals" },
  { word: "Penguin", hint: "Flightless bird with a black and white coloration.", category: "Animals" },
  { word: "Dolphin", hint: "Intelligent marine mammal with a playful nature.", category: "Animals" },
  { word: "Tiger", hint: "Striped big cat known for its strength and agility.", category: "Animals" },
  { word: "Koala", hint: "Cuddly, tree-dwelling marsupial from Australia.", category: "Animals" },
  { word: "Gorilla", hint: "Large and powerful ape, closely related to humans.", category: "Animals" },
  { word: "Zebra", hint: "Black and white striped herbivorous mammal.", category: "Animals" },
  { word: "Panda", hint: "Bear native to China with distinctive black and white fur.", category: "Animals" },
  { word: "Horse", hint: "Domesticated hoofed mammal often used for riding.", category: "Animals" },
  { word: "Cheetah", hint: "Fastest land animal with distinctive black tear stripes.", category: "Animals" },
  { word: "Crocodile", hint: "Large aquatic reptile with a long snout and sharp teeth.", category: "Animals" },
  { word: "Penguin", hint: "Flightless bird with a black and white coloration.", category: "Animals" },
  { word: "Kangaroo", hint: "Marsupial known for hopping on its hind legs.", category: "Animals" },
  { word: "Ostrich", hint: "Flightless bird with long legs and a large body.", category: "Animals" },
  { word: "Giraffe", hint: "Tall, long-necked herbivorous mammal with spotted coat.", category: "Animals" },
  { word: "Llama", hint: "South American domesticated camelid with a long neck.", category: "Animals" },
  { word: "Jaguar", hint: "Large spotted big cat native to the Americas.", category: "Animals" },
  { word: "Cheetah", hint: "Fastest land animal with distinctive black tear stripes.", category: "Animals" },
  { word: "Koala", hint: "Cuddly, tree-dwelling marsupial from Australia.", category: "Animals" },
  { word: "Kangaroo", hint: "Marsupial known for hopping on its hind legs.", category: "Animals" },
  { word: "Squirrel", hint: "Small rodent with a bushy tail and sharp claws.", category: "Animals" },
  { word: "Elephant", hint: "Large mammal with tusks and a long trunk.", category: "Animals" },
  { word: "Giraffe", hint: "Tall, long-necked herbivorous mammal with spotted coat.", category: "Animals" },
  { word: "Zebra", hint: "Black and white striped herbivorous mammal.", category: "Animals" },
  { word: "Kangaroo", hint: "Marsupial known for hopping on its hind legs.", category: "Animals" },
  { word: "Panda", hint: "Bear native to China with distinctive black and white fur.", category: "Animals" },
  { word: "Lion", hint: "Large carnivorous feline known for its mane.", category: "Animals" },
  { word: "Tiger", hint: "Striped big cat known for its strength and agility.", category: "Animals" },
  { word: "Gorilla", hint: "Large and powerful ape, closely related to humans.", category: "Animals" },
  { word: "Penguin", hint: "Flightless bird with a black and white coloration.", category: "Animals" },
  { word: "Dolphin", hint: "Intelligent marine mammal with a playful nature.", category: "Animals" },
  { word: "Horse", hint: "Domesticated hoofed mammal often used for riding.", category: "Animals" },
  { word: "Koala", hint: "Cuddly, tree-dwelling marsupial from Australia.", category: "Animals" },
  { word: "Cheetah", hint: "Fastest land animal with distinctive black tear stripes.", category: "Animals" },
  { word: "Crocodile", hint: "Large aquatic reptile with a long snout and sharp teeth.", category: "Animals" },
  { word: "Penguin", hint: "Flightless bird with a black and white coloration.", category: "Animals" },
  { word: "Kangaroo", hint: "Marsupial known for hopping on its hind legs.", category: "Animals" },
  { word: "Ostrich", hint: "Flightless bird with long legs and a large body.", category: "Animals" },
  { word: "Giraffe", hint: "Tall, long-necked herbivorous mammal with spotted coat.", category: "Animals" },
  { word: "Llama", hint: "South American domesticated camelid with a long neck.", category: "Animals" },
  { word: "Jaguar", hint: "Large spotted big cat native to the Americas.", category: "Animals" },
  { word: "Cheetah", hint: "Fastest land animal with distinctive black tear stripes.", category: "Animals" },
  { word: "Koala", hint: "Cuddly, tree-dwelling marsupial from Australia.", category: "Animals" },
  { word: "Kangaroo", hint: "Marsupial known for hopping on its hind legs.", category: "Animals" },
  { word: "Squirrel", hint: "Small rodent with a bushy tail and sharp claws.", category: "Animals" },
  { word: "Elephant", hint: "Large mammal with tusks and a long trunk.", category: "Animals" },
  { word: "Giraffe", hint: "Tall, long-necked herbivorous mammal with spotted coat.", category: "Animals" },
  { word: "Zebra", hint: "Black and white striped herbivorous mammal.", category: "Animals" },
  { word: "Kangaroo", hint: "Marsupial known for hopping on its hind legs.", category: "Animals" },
  { word: "Panda", hint: "Bear native to China with distinctive black and white fur.", category: "Animals" },
];



  