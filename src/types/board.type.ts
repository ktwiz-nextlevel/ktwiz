export interface PostEntity {
  id: number
  user_id: string
  title: string
  content: string
  created_at: Date
  updated_at?: Date
  view_count: number
  author: string
}

export interface CommentEntity {
  id: number
  post_id: number
  user_id: string
  content: string
  created_at: Date
  author: string
}

export interface ImageEntity {
  id: number
  post_id: number
  image_url: string
}

export interface PostListItem {
  id: number
  userId: string
  title: string
  createdAt: string
  viewCount: number
  author: string
}

export interface PostDetail {
  id: number
  userId: string
  title: string
  content: string
  createdAt: string
  updatedAt?: string
  viewCount: number
  author: string
  images: string[]
  comments: CommentListItem[]
}

export interface CommentListItem {
  id: number
  postId: number
  userId: string
  content: string
  createdAt: string
  author: string
}

export interface ProfileEntity {
  id: string
  nickname: string
  avatar_url: string
}

export interface ProfileDetail {
  id: string
  nickname: string
  email?: string
  avatarUrl?: string
}
