import { IPlaylist, ITodayPlaylistBundle } from './helper'

export interface IUser {
  id: string
  name: string
  birthDate: string
  gender: '남' | '여'
  profileUrl?: string
}

export interface IBundlesOfPlaylist {
  bundle: IPlaylist[]
}

export interface ITodayPlaylistBundles {
  bundles: ITodayPlaylistBundle[]
}

export interface IMusic {
  id: string
  albumId: string
  title: string
  lyrics: string
  audioUrl: string
  shortsUrl?: string
  playerBackgroundColor: string
  lyricsBackgroundColor: string
  primaryGenreId: string
  secondaryGenreId: string
}
