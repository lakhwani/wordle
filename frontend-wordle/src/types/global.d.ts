// global.d.ts
declare interface RowData {
  used: boolean;
  guess: string;
  is_valid_word: boolean;
  score: number[];
}

declare interface WordleData {
  [key: number]: RowData;
  0: RowData;
  1: RowData;
  2: RowData;
  3: RowData;
  4: RowData;
  5: RowData;
}
