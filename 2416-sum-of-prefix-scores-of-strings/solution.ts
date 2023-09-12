// https://leetcode.com/problems/sum-of-prefix-scores-of-strings/description/
// 2416-sum-of-prefix-scores-of-strings

class TrieNode {
  children: Record<string, TrieNode> = {};
  counter: number = 0;
  add(s: string, i: number = 0) {
    this.counter++;
    if(i === s.length) {
      return;
    }
    this.children[s[i]] ??= new TrieNode();
    return this.children[s[i]].add(s, i + 1);
  }

  sumOfOurPrefix(s: string, i: number = 0, sum: number = 0): number {
    if(i === s.length) { 
      return sum;
    }
    const child = this.children[s[i]];
    return child == null ? 0 : child.sumOfOurPrefix(s, i + 1, sum + this.children[s[i]].counter);
  }
}

function sumPrefixScores(words: string[]): number[] {
  const trie = new TrieNode();
  for(const word of words) {
    trie.add(word);
  }
  const res = [];
  let counter = 0
  for(const word of words) {
    counter += trie.sumOfOurPrefix(word);
    res.push(counter);
    counter = 0;
  }

  return res;
};
