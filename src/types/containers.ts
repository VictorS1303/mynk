import type { UsersOverviewButton } from "./buttons"

type BaseContainerProps =
{
    class?: string,
    id?: string,
}

export type UserOverviewContainerProps = BaseContainerProps &
{
  usersOverviewButtons: UsersOverviewButton[]
}