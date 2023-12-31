// https://leetcode.com/problems/subdomain-visit-count/
// 0811-subdomain-visit-count

function subdomainVisits(cpdomains: string[]): string[] {
  const freqDomain = {};
  for(const s of cpdomains) {
    const [count, domain] = s.split(' ');
    const splitedDomain = domain.split('.');
    for(let i = 0; i < splitedDomain.length; i++) {
      const d = splitedDomain.slice(i).join('.');
      freqDomain[d] = (freqDomain[d] ?? 0) + Number(count);
    }
  }
  const res = [];
  for(const key of Object.keys(freqDomain)) {
    res.push(`${freqDomain[key]} ${key}`);
  }
  return res;
};
