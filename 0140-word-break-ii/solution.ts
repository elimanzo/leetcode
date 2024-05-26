class TrieNode {
  kids: Record<string, TrieNode> = {};
  isWord: boolean = false;

  add(word: string) {
    let trie: TrieNode = this;
    for (let c of word) {
      trie = (trie.kids[c] ??= new TrieNode());
    }
    trie.isWord = true;
  }
}

function wordBreak(s: string, wordDict: string[]): string[] {
  const root = new TrieNode();
  for (const word of wordDict) {
    root.add(word);
  }
  const res = [];
  const stack = [0];
  const traverse = (i: number, trie: TrieNode): void => {
    if (i === s.length) {
      if (stack.at(-1) === 0) {
        const pieces = [];
        let cursor = 0;
        for (const len of stack) {
          if (len === 0) {
            continue;
          }
          const end = cursor + len;
          pieces.push(s.slice(cursor, end));
          cursor = end;
        }
        res.push(pieces.join(' '));
      }
      return;
    }

    const kid = trie.kids[s[i]];
    if (kid == null) {
      return;
    }

    stack[stack.length - 1]++;
    traverse(i + 1, kid);

    if (kid.isWord) {
      stack.push(0);
      traverse(i + 1, root);
      stack.pop();
    }
    stack[stack.length - 1]--;
  }
  traverse(0, root);
  return res;
};
