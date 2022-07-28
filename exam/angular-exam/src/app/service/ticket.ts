import {Home} from "./home";

export interface Ticket {
  id: number;
  cost: number;
  start: string;
  end: string;
  dayStart: string;
  time: string;
  home: Home;
  quantity: number;
}
