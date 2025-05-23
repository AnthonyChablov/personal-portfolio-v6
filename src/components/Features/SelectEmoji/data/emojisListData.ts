export interface EmojiItem {
  id: number;
  emoji: string;
  searchTerms: string[];
}

export const emojiList: EmojiItem[] = [
  { id: 1, emoji: "🌲", searchTerms: ["tree", "evergreen", "green", "plant", "vegetation", 'wood'] },
  { id: 2, emoji: "⛰️", searchTerms: ["mountain", "peak", "landscape", "nature", "rocky", 'mt', 'high', 'hill', "rock", "stone", "boulder", "geology"] },
  { id: 3, emoji: "🌊", searchTerms: ["wave", "ocean", "sea", "water", "blue", 'waves'] },
  { id: 4, emoji: "🌻", searchTerms: ["sunflower", "flower", "yellow", "plant", "summer"] },
  { id: 5, emoji: "🍄", searchTerms: ["mushroom", "fungus", "forest", "earthy", "wild"] },
  { id: 6, emoji: "🦋", searchTerms: ["butterfly", "insect", "wings", "colorful", "garden"] },
  { id: 7, emoji: "☀️", searchTerms: ["sun", "sunny", "bright", "day", "warm"] },
  { id: 8, emoji: "🌙", searchTerms: ["moon", "night", "dark", "sky", "lunar"] },
  { id: 9, emoji: "🌱", searchTerms: ["seedling", "sprout", "growing", "plant", "new life"] },
  { id: 10, emoji: "🍓", searchTerms: ["strawberry", "fruit", "red", "berry", "sweet"] },
  { id: 11, emoji: "🏞️", searchTerms: ["national park", "landscape", "nature", "scenic", "outdoors"] },
  { id: 12, emoji: "🌷", searchTerms: ["tulip", "flower", "spring", "bloom", "petal"] },
  {
    id: 13,
    emoji: "🍂",
    searchTerms: ["leaf", "autumn", "fall", "brown", "nature", "foliage"],
  },
  { id: 14, emoji: "🌳", searchTerms: ["deciduous tree", "green", "plant", "nature", "leaves"] },
  { id: 15, emoji: "🍎", searchTerms: ["apple", "fruit", "red", "healthy", "orchard"] },
  { id: 16, emoji: "🐾", searchTerms: ["paw print", "animal", "track", "nature", "footprint"] },
  { id: 17, emoji: "⭐", searchTerms: ["star", "night sky", "twinkle", "celestial", "bright"] },
  { id: 18, emoji: "🌿", searchTerms: ["herb", "plant", "green", "natural", "leafy"] },
  { id: 19, emoji: "🍋", searchTerms: ["lemon", "fruit", "yellow", "citrus", "sour"] },
  { id: 20, emoji: "🌎", searchTerms: ["globe", "earth", "world", "planet", "nature"] },
  {
    id: 21,
    emoji: "🌾",
    searchTerms: ["wheat", "grain", "field", "harvest", "agriculture"],
  },
  { id: 23, emoji: "🌺", searchTerms: ["hibiscus", "flower", "tropical", "colorful", "bloom"] },
  { id: 25, emoji: "🌴", searchTerms: ["palm tree", "tropical", "beach", "vacation", "island"] },
  { id: 26, emoji: "🌹", searchTerms: ["rose", "flower", "red", "romantic", "petal"] },
  { id: 27, emoji: "🍀", searchTerms: ["four leaf clover", "lucky", "green", "nature", "shamrock"] },
  { id: 28, emoji: "🍁", searchTerms: ["maple leaf", "autumn", "fall", "red", "Canada"] },
  { id: 29, emoji: "🌼", searchTerms: ["daisy", "flower", "white", "yellow", "spring"] },
  {
    id: 30, 
    emoji: "🌵",
    searchTerms: ["cactus", "desert", "dry", "succulent", "green", "spiky", "arid"] 
  },
  { id: 31, emoji: "🌋", searchTerms: ["volcano", "lava", "eruption", "magma", "hot"] },
  { id: 33, emoji: "🏜️", searchTerms: ["desert", "sand", "arid", "dry", "dunes"] },
  { id: 35, emoji: "🐶", searchTerms: ["dog", "pet", "animal", "puppy", "canine"] },
  { id: 36, emoji: "🐱", searchTerms: ["cat", "pet", "animal", "kitten", "feline"] },
  { id: 37, emoji: "🐰", searchTerms: ["rabbit", "bunny", "animal", "cute", "hare"] },
  { id: 38, emoji: "🐻", searchTerms: ["bear", "animal", "forest", "wildlife", "grizzly"] },
  { id: 39, emoji: "🐼", searchTerms: ["panda", "animal", "bamboo", "cute", "endangered"] },
  { id: 40, emoji: "🦊", searchTerms: ["fox", "animal", "wild", "cunning", "red"] },
  { id: 41, emoji: "🦁", searchTerms: ["lion", "animal", "king", "safari", "mane"] },
  { id: 42, emoji: "🐯", searchTerms: ["tiger", "animal", "stripes", "wild", "powerful"] },
  { id: 43, emoji: "🐴", searchTerms: ["horse", "animal", "equine", "stable", "ride"] },
  { id: 44, emoji: "🦓", searchTerms: ["zebra", "animal", "stripes", "safari", "african"] },
  { id: 45, emoji: "🐘", searchTerms: ["elephant", "animal", "trunk", "large", "africa"] },
  { id: 46, emoji: "🦒", searchTerms: ["giraffe", "animal", "long neck", "spots", "tall"] },
  { id: 47, emoji: "🐒", searchTerms: ["monkey", "animal", "primate", "jungle", "playful"] },
  { id: 48, emoji: "🐦", searchTerms: ["bird", "animal", "fly", "wings", "feather"] },
  { id: 49, emoji: "🐧", searchTerms: ["penguin", "bird", "flightless", "arctic", "antarctic"] },
  { id: 50, emoji: "🐍", searchTerms: ["snake", "animal", "reptile", "slither", "venom"] },
  { id: 51, emoji: "🐢", searchTerms: ["turtle", "animal", "reptile", "shell", "slow"] },
  { id: 52, emoji: "🐠", searchTerms: ["fish", "animal", "water", "ocean", "swim"] },
  { id: 53, emoji: "🐡", searchTerms: ["blowfish", "fish", "inflate", "ocean", "spiky"] },
  { id: 54, emoji: "🐙", searchTerms: ["octopus", "animal", "ocean", "tentacles", "intelligent"] },
  { id: 55, emoji: "🦀", searchTerms: ["crab", "animal", "ocean", "shell", "sideways"] },
  { id: 56, emoji: "🦞", searchTerms: ["lobster", "animal", "ocean", "shellfish", "claws"] },
  { id: 57, emoji: "🐝", searchTerms: ["bee", "insect", "honey", "buzz", "pollinate"] },
  { id: 58, emoji: "🐜", searchTerms: ["ant", "insect", "small", "worker", "colony"] },
  { id: 59, emoji: "🐛", searchTerms: ["bug", "insect", "crawl", "garden", "small"] },
];