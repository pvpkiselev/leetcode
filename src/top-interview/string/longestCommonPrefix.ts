function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) {
    return '';
  }

  const sortedStrs = strs.sort();

  const firstStr = sortedStrs[0];
  const lastStr = sortedStrs[sortedStrs.length - 1];

  let commonPrefix = '';

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      commonPrefix += firstStr[i];
    } else {
      break;
    }
  }

  return commonPrefix;
}
