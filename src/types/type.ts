// src/types/types.ts

export interface User {
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
  }
  
  export interface RandomUserResponse {
    results: User[];
  }
  