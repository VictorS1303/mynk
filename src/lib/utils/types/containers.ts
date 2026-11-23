import type { UsersOverviewButton, UserPacksOverviewButton } from "./buttons"
import type { Games } from '@/lib/utils/types/games'

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