import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from '../routes/create-polls'
import { getPoll } from '../routes/get-polls'
import { voteOnPoll } from '../routes/vote-on-polls'
import { fastifyWebsocket } from '@fastify/websocket'
import { pollResults } from './ws/poll-results'


const app = fastify()

    app.register(cookie, {
        secret: "polls-app-nlw",
        hook: 'onRequest', 
    })


    app.register(fastifyWebsocket)
    app.register(createPoll)
    app.register(getPoll)
    app.register(voteOnPoll)
    app.register(pollResults)
app.listen({ port: 3333 }).then(()=> {
    console.log('http server running!')
})

