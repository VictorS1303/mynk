import type { HeadingSize, HeadingTag } from "@/lib/utils/types/headings"

export interface HeadingProps 
{
    as?: HeadingTag,
    size?: HeadingSize,
    class?: string,
    id?: string,
}
