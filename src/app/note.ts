export interface Note {
  done: boolean;
  type: string;
  title: string;
  id: number;
  content: string;
  datecreated: string;
  color: string;
}

export interface List {
  type: string;
  title: string;
  id: number;
  content: Listitem[];
  datecreated: string;
  color: string;
}

export interface Listitem {
  content: string;
  done: boolean;
}