export interface EmojiItem {
  id: number;
  emoji: string;
  searchTerms: string[];
}

export const emojiList: EmojiItem[] = [
  { id: 1, emoji: "👻", searchTerms: ["ghost", "spooky", "halloween"] },
  { id: 2, emoji: "🚀", searchTerms: ["rocket", "space", "launch"] },
  { id: 3, emoji: "🌈", searchTerms: ["rainbow", "colors", "pride"] },
  { id: 4, emoji: "🍕", searchTerms: ["pizza", "food", "slice"] },
  { id: 5, emoji: "🕷️", searchTerms: ["spider", "insect", "web"] },
  { id: 6, emoji: "🐶", searchTerms: ["dog", "puppy", "pet"] },
  { id: 7, emoji: "🎉", searchTerms: ["party", "celebration", "confetti"] },
  { id: 8, emoji: "🌟", searchTerms: ["star", "shine", "bright"] },
  { id: 9, emoji: "🤖", searchTerms: ["robot", "ai", "technology"] },
  { id: 10, emoji: "🍦", searchTerms: ["ice cream", "dessert", "sweet"] },
  { id: 11, emoji: "🏀", searchTerms: ["basketball", "sport", "ball"] },
  { id: 12, emoji: "🚲", searchTerms: ["bicycle", "bike", "cycle"] },
  { id: 13, emoji: "🌍", searchTerms: ["earth", "globe", "world"] },
  { id: 14, emoji: "🎸", searchTerms: ["guitar", "music", "instrument"] },
  { id: 15, emoji: "🍩", searchTerms: ["donut", "dessert", "sweet"] },
  { id: 16, emoji: "🐱", searchTerms: ["cat", "kitten", "pet"] },
  { id: 17, emoji: "🌞", searchTerms: ["sun", "sunny", "bright"] },
  { id: 18, emoji: "🚁", searchTerms: ["helicopter", "aircraft", "fly"] },
  { id: 19, emoji: "🍔", searchTerms: ["hamburger", "burger", "food"] },
  { id: 20, emoji: "🐼", searchTerms: ["panda", "bear", "animal", "zoo"] },
  {
    id: 21,
    emoji: "🎮",
    searchTerms: ["game", "controller", "gaming", "videogame"],
  },
];
