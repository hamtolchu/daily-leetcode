function solution(str: string): string {
  const s = str.split('');
  if(s === null || s.length < 1) return ""
  let start = 0, end = 0
  for(let i = 0; i < s.length; i++){
    let len1 = expandAroundCenter(s, i, i)
    let len2 = expandAroundCenter(s, i, i + 1)
    let len = Math.max(len1, len2)
    if(len > (end - start)){
      start = i - (len - 2) / 2
      end = i + len / 2
    }
  }
  return s.splice(start, (end + 1 - start)).join('')
}

const expandAroundCenter = (s: string[], l: number, r: number) => {
  while(l >= 0 && r < s.length && s[l] === s[r]){
    l--
    r++
  }
  return r - l - 1
}

export default solution;