// 0648-replace-words

class TrieNode {
  kids: Record<string, TrieNode> = {};
  isEndOfWord: boolean = false;
  add(word: string) {
    let node: TrieNode = this;  
    for(const c of word) {
      node.kids[c] ??= new TrieNode();
      node = node.kids[c];
    }
    node.isEndOfWord = true;
  }
  getPrefix(word: string): string {
    let node: TrieNode = this;
    let res = '';
    for(const c of word) {
      node = node.kids[c] ?? null;
      if(node == null) {
        break;
      }
      res += c;
      if(node.isEndOfWord) {
        return res;
      }
    }
    return word;
  }
}

function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new TrieNode();
  for (const word of dictionary) {
    trie.add(word);
  }

  return sentence.split(' ').map(word => trie.getPrefix(word)).join(' ');
};
