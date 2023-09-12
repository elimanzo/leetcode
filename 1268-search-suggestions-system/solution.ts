// https://leetcode.com/problems/search-suggestions-system/description/
// 1268-search-suggestions-system

class TrieNode {
  children: Record<string, TrieNode> = {};
  words: string[] = [];

  add(s:string) {
    this.addImpl(s, 0, s);
  }

  private addImpl(s: string, index: number, word: string) {
    if(this.words.length < 3) {
      this.words.push(word);
    }
  
    if(index === s.length) {
      return;
    }

    this.children[s[index]] ??= new TrieNode();
    return this.children[s[index]].addImpl(s, index + 1, word);
  }

  getSuggestions(s: string, index: number = 0): string[] {
    if(index === s.length) {
      return this.words;
    }
    return this.children[s[index]]?.getSuggestions(s, index + 1);
  }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort();
  const trie = new TrieNode();
  for(const product of products) {
    trie.add(product);
  }
  const res: string[][] = [];
  let accumulatedWord = '';
  for(const c of searchWord) {
    accumulatedWord += c
    res.push(trie.getSuggestions(accumulatedWord) ?? []);
  }

  return res;
};
