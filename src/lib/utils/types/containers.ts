import type { UsersOverviewButton, UserPacksOverviewButton } from "./buttons"
import type { Games } from '@/lib/utils/types/games'
import type { Levels } from '@/lib/utils/types/levels'

type BaseContainerProps =
{
    class?: string,
    id?: string,
}

export type UserOverviewContainerProps = BaseContainerProps &
{
  usersOverviewButtons: UsersOverviewButton[]
}

export type UserPacksOverviewContainerProps = BaseContainerProps &
{
  username: string
  games: Games[]
}

export type PackLevelsContainerProps = BaseContainerProps &
{
  username: string
  game: Games
  levels: Levels[]
}