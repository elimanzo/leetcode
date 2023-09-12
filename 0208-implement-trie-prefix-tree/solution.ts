// https://leetcode.com/problems/implement-trie-prefix-tree/description/
// 0208-implement-trie-prefix-tree

class Trie {
    children: Record<string, Trie>;
    isEndOfWord: boolean;
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }

    insert(word: string, index: number = 0): void {
      if(index === word.length) {
        this.isEndOfWord = true;
        return;
      }
      this.children[word[index]] ??= new Trie();
      return this.children[word[index]].insert(word, index + 1);
    }

    search(word: string, index: number = 0): boolean {
      if(this.isEndOfWord && index === word.length) {
        return this.isEndOfWord;
      }

      if(index === word.length) {
        return false;
      }
      
      const child = this.children[word[index]];
      return child == null ? false : child.search(word, index + 1);
    }

    startsWith(prefix: string, index: number = 0): boolean {
      if(index === prefix.length) {
        return true;
      }
      const child = this.children[prefix[index]];
      return child == null ? false : child.startsWith(prefix, index + 1);
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
