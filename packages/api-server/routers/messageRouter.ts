import * as trpc from '@trpc/server'
import { z } from 'zod'

interface IChatMessage {
  user: string;
  message: string;
}

const messages: IChatMessage[] = [
  {user: 'user1', message: 'Hello'},
  {user: 'user2', message: 'Hi'}
]

export const messageRouter = trpc.router().query('getMessages', {
  input: z.number().default(10),
  resolve({ input }) {
    return messages.slice(-input)
  }
}).mutation('addMessage', {
  input: z.object({
    user: z.string(),
    message: z.string()
  }),
  resolve({ input }){
    messages.push(input)
    return input
  }
})