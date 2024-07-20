module.exports = {
  encode: (str) => {
    const substitution = {
      'a': 'm', 'b': 'n', 'c': 'o', 'd': 'p', 'e': 'q', 'f': 'r', 'g': 's', 'h': 't',
      'i': 'u', 'j': 'v', 'k': 'w', 'l': 'x', 'm': 'y', 'n': 'z', 'o': 'a', 'p': 'b',
      'q': 'c', 'r': 'd', 's': 'e', 't': 'f', 'u': 'g', 'v': 'h', 'w': 'i', 'x': 'j',
      'y': 'k', 'z': 'l', 'A': 'M', 'B': 'N', 'C': 'O', 'D': 'P', 'E': 'Q', 'F': 'R',
      'G': 'S', 'H': 'T', 'I': 'U', 'J': 'V', 'K': 'W', 'L': 'X', 'M': 'Y', 'N': 'Z',
      'O': 'A', 'P': 'B', 'Q': 'C', 'R': 'D', 'S': 'E', 'T': 'F', 'U': 'G', 'V': 'H',
      'W': 'I', 'X': 'J', 'Y': 'K', 'Z': 'L'
    };
    return str.split('').map(char => substitution[char] || char).join('');
  },
  decode: (str) => {
    const substitution = {
      'm': 'a', 'n': 'b', 'o': 'c', 'p': 'd', 'q': 'e', 'r': 'f', 's': 'g', 't': 'h',
      'u': 'i', 'v': 'j', 'w': 'k', 'x': 'l', 'y': 'm', 'z': 'n', 'a': 'o', 'b': 'p',
      'c': 'q', 'd': 'r', 'e': 's', 'f': 't', 'g': 'u', 'h': 'v', 'i': 'w', 'j': 'x',
      'k': 'y', 'l': 'z', 'M': 'A', 'N': 'B', 'O': 'C', 'P': 'D', 'Q': 'E', 'R': 'F',
      'S': 'G', 'T': 'H', 'U': 'I', 'V': 'J', 'W': 'K', 'X': 'L', 'Y': 'M', 'Z': 'N',
      'A': 'O', 'B': 'P', 'C': 'Q', 'D': 'R', 'E': 'S', 'F': 'T', 'G': 'U', 'H': 'V',
      'I': 'W', 'J': 'X', 'K': 'Y', 'L': 'Z'
    };
    return str.split('').map(char => substitution[char] || char).join('');
  }
}
