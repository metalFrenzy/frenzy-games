export interface GameDto {
  id?: string;
  name: string;
  price: number;
  platform: string;
  coverImage: string;
  createdAt?: Date;
  description: string;
}

export interface CreateGameDto {
  name: string;
  price: number;
  platform: string;
  coverImage: string;
  description: string;
}

export interface UpdateGameDto {
  name?: string;
  price?: number;
  platform?: string;
  coverImage?: string;
  description?: string;
}