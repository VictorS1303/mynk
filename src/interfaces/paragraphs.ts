import type { ParagraphSizes } from '@/lib/utils/types/paragraphs'

export interface ParagraphProps 
{
    size?: ParagraphSizes,
    class?: string,
    id?: string,
}

export interface ParagraphVariants
{
    variant?: 'body' | 'lead' | 'small' | 'muted',  
}