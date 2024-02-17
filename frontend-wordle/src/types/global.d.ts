export interface rowData {
  used: boolean;
  guess: string;
  is_valid_word: boolean;
  score: integer[];
}

export interface wordleData {
  [key: number]: rowData;
  0: rowData;
  1: rowData;
  2: rowData;
  3: rowData;
  4: rowData;
  5: rowData;
}
