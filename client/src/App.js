import React, { useEffect, useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat, Channel} from 'stream-chat-react'
import '@stream-io/stream-chat-css/dist/css/index.css'
import Auth from './components/Auth'
import MessagingContainer from './components/MessagingContainer'
import Video from './components/Video'
import {useCookies} from 'react-cookie'
import {customStyles} from './styles/cutomStyles'

const client = StreamChat.getInstance('jzwcy2xnrazh')

const App = () => {
  useEffect(() => {
    document.title = "Twicth Chat App"
 }, []);

  const [cookies, setCookie, removeCookie] = useCookies(['user'])  
  const [channel, setChannel] = useState(null)
  const [users, setUsers] = useState(null)


  const authToken = cookies.AuthToken

  useEffect( async () => {
    if (authToken) {
        const {users} = await client.queryUsers({ role: 'user'})
        setUsers(users)
    }
  }, [])

  const setupClient = async () => {
    try {
      await client.connectUser(
        {
          id: cookies.UserId,
          name: cookies.Name,
          hashedPassword: cookies.HashedPassword
        },
        authToken
      )

      const channel = await client.channel('gaming', 'gaming-demo', {
        name: "Gaming Channel"
      })

      setChannel(channel)

    } catch (err) {
      console.log(err)
    }
  }

  if(authToken) setupClient()


  return (
    <>
      {!authToken && <Auth /> }
      {authToken && 
        <Chat client={client} customStyles={customStyles}>
          <Channel channel={channel}>
            <Video />
            <MessagingContainer users = {users}/>
          </Channel>
        </Chat>
      } 
    </>
  )
}

export default App