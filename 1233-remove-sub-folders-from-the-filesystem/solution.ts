// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description/
// 1233-remove-sub-folders-from-the-filesystem

class TrieNode {
  children: Record<string, TrieNode> = {}
  isEndOfWord: boolean = false;
  add(s: string) {
    let node: TrieNode = this;
    const folders: string[] = s.split('/').slice(1);
    for (const folder of folders) {
      let nextNode = node.children[folder] ??= new TrieNode();
      if(nextNode.isEndOfWord) {
        return;
      }
      node = nextNode;
    }
    node.isEndOfWord = true;
  }

  getSubfolders(s: string): string | null {
    let node: TrieNode = this;
    const folders: string[] = s.split('/').slice(1);
    let currentDirectory = '';
    for (const folder of folders) {
      let nextNode = node.children[folder];
      if(nextNode == null) {
        break;
      }
      currentDirectory += '/' + folder;
      if(nextNode.isEndOfWord) {
        return currentDirectory;
      }
      
      node = nextNode;
    }
    return null;
  }
}

function removeSubfolders(folder: string[]): string[] {
  const trie = new TrieNode();
  for(const s of folder) {
    trie.add(s);
  }
  const res: string[] = [];
  for(const s of folder) {
    const ans = trie.getSubfolders(s)
    if(!res.includes(ans)) {
      res.push(ans);
    }
  }
  return res;
};
