export interface IPlaylist {
  id: string
  title: string
  userId: string
  description: string
  musicIds: string[]
}

export interface ITodayPlaylistBundle {
  id: string
  playlistBundleId: string[]
}

export interface IPlaylistBundle {
  id: string
  title: string
  playlistIds: string[]
}
