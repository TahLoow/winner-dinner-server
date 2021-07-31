
export interface Recipe {
    name: string
    created_on: Date
    is_winner: boolean
    is_private: boolean
    description?: string
    link?: string
    instructions?: string[]
    servings?: number
    time_cook?: Date
    tags?: string[]
  }
  
  export interface AccountInfo {
    id: string
    created_on: Date
    is_private: boolean
    alias?: string
    profile_picture?: string
    bio?: string
    socials?: string[]
    birthday?: Date
    friends?: string[]
  }
  