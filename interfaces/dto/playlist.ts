export interface ICreatePlaylist {
  title: string
  musicIds: string[]
}

export interface IUpdatePlaylist {
  title?: string
  description?: string
  musicIds?: string[]
}
