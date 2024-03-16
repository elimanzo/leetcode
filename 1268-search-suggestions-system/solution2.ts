// https://leetcode.com/problems/search-suggestions-system/
// 1268-search-suggestions-system

class TrieNode {
  kids: Record<string, TrieNode>;
  isEndOfWord: boolean;
  suggestions: string[];
  constructor() {
    this.isEndOfWord = false;
    this.kids = {};
    this.suggestions = [];
  }

  addRecursive(word: string, index: number = 0): void {
    this.suggestions.push(word);
    if(index === word.length) {
      this.isEndOfWord = true;
      return;
    }
    const c = word[index];
    this.kids[c] ??= new TrieNode();
    this.kids[c].addRecursive(word, index + 1);
  }

  // addIterative(word: string): void {
  //   let node: TrieNode = this;
  //   this.suggestions.push(word);
  //   for(const c of word) {
  //     node.kids[c] ??= new TrieNode();
  //     node = node.kids?.[c] ?? new TrieNode();
  //     node.suggestions.push(word);
  //   }
  //   node.isEndOfWord = true;
  // }

  getSuggestionsIterative(query: string): string[][] {
    const res: string[][] = [];
    let node: TrieNode = this;
    for(const c of query) {
      node = node?.kids[c] ?? null;
      res.push(node?.suggestions.sort().slice(0, 3) ?? []);
    }
    return res;
  }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
  const trie = new TrieNode();
  for(const product of products) {
    trie.addRecursive(product);
  }
  return trie.getSuggestionsIterative(searchWord);
};
