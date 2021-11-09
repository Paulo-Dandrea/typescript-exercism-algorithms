interface Dict  {
  [key: string] : string
}

const dict: Dict = {
black: '0',
brown: '1',
red: '2',
orange: '3',
yellow: '4',
green: '5',
blue: '6',
violet: '7',
grey: '8',
white: '9'
}

export function decodedValue(colors: string[]): number {
  return Number(dict[colors[0]] + dict[colors[1]])
}
