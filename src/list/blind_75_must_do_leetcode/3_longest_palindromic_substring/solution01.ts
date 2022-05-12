/*
제출환경에서 'JavaScript heap out of memory'..
다시 구성할것
Input:
"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
<--- Last few GCs --->
[32:0x4c74180]     6005 ms: Scavenge 134.2 (139.1) -> 132.2 (139.1) MB, 0.5 / 0.0 ms  (average mu = 0.699, current mu = 0.776) allocation failure
[32:0x4c74180]     6012 ms: Scavenge 134.3 (139.1) -> 132.3 (139.1) MB, 0.3 / 0.0 ms  (average mu = 0.699, current mu = 0.776) allocation failure
[32:0x4c74180]     6174 ms: Mark-sweep 133.6 (139.1) -> 132.4 (139.1) MB, 157.9 / 0.0 ms  (average mu = 0.514, current mu = 0.113) allocation failure GC in old space requested
<--- JS stacktrace --->
FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
 1: 0xb00e10 node::Abort() [nodejs run]
 2: 0xa1823b node::FatalError(char const*, char const*) [nodejs run]
 3: 0xcee09e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [nodejs run]
 4: 0xcee417 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [nodejs run]
 5: 0xea65d5  [nodejs run]
 6: 0xed4d98 v8::internal::EvacuateNewSpaceVisitor::Visit(v8::internal::HeapObject, int) [nodejs run]
 7: 0xef459e v8::internal::FullEvacuator::RawEvacuatePage(v8::internal::MemoryChunk*, long*) [nodejs run]
 8: 0xece9ff v8::internal::Evacuator::EvacuatePage(v8::internal::MemoryChunk*) [nodejs run]
 9: 0xeced1b v8::internal::PageEvacuationJob::Run(v8::JobDelegate*) [nodejs run]
10: 0x18db9e4 v8::platform::DefaultJobWorker::Run() [nodejs run]
11: 0xb6d535  [nodejs run]
12: 0x7fdec5bab609  [/lib/x86_64-linux-gnu/libpthread.so.0]
13: 0x7fdec5ad2103 clone [/lib/x86_64-linux-gnu/libc.so.6]
 */
function solution(s: string): string {
  const strLength = s.length;
  if (strLength === 1) {
    return s;
  }
  const strMap: { [key: string]: boolean } = {};
  let temp = [];
  for (let i = 0; i < strLength - 1; i += 1) {
    temp = [];
    temp.push(s[i]);
    for (let j = i + 1; j < strLength; j += 1) {
      temp.push(s[j]);
      const word = temp.join("");
      if (!strMap.hasOwnProperty(word)) {
        strMap[word as string] = isPalindrome(word);
      }
    }
  }
  const [result] = Object.keys(strMap).filter((keyName) => {
    return strMap[keyName];
  }).sort((a, b) => b.length - a.length);
  if (!result) {
    return s[0];
  }
  return result;
}

function isPalindrome(str: string) {
  const strLength = str.length;
  const strSplit = str.split("");
  const middle = Math.ceil(strLength / 2);
  let i = 0;
  while (i < middle) {
    const current = strSplit[i];
    if (current !== strSplit.pop()) {
      return false;
    }
    i += 1;
  }
  return true;
}

export default solution;