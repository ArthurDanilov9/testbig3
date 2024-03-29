export interface IPlayer {
  id: number;
  name: string | null;
  number: number | null;
  position: string | null;
  team: number | null;
  birthday: any | null;
  height: number | null;
  weight: number | null;
  avatarUrl: string | null;
}

export interface IPlayers {
  name?: string;
  teamIds: number[];
  page?: number;
  pageSize?: number;
}
