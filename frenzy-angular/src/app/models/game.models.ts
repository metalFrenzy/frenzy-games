export interface GameDto {
  id?: string;
  name: string;
  price: number;
  platform: string;
  coverImage: string;
  createdAt?: Date;
}

export interface CreateGameDto {
  name: string;
  price: number;
  platform: string;
  coverImage: string;
}

export interface UpdateGameDto {
  name?: string;
  price?: number;
  platform?: string;
  coverImage?: string;
}