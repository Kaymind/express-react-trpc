import * as trpc from '@trpc/server'
import { messageRouter } from './messageRouter'

export const appRouter = trpc.router().merge('messages.', messageRouter)

