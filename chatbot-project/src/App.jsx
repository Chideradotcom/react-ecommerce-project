import { useEffect, useState } from 'react'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  const [ chatMessages, setChatMessages ] = useState(JSON.parse(localStorage.getItem('messages')) || [])
  // const [ chatMessages, setChatMessages ] = React.useState([{
  //   id: 'id1',
  //   message: 'hello chatbot',
  //   sender: 'user'
  // }, {
  //   id: 'id2',
  //   message:'hello! how can i help you?',
  //   sender: 'robot'
  // },{
  //   id: 'id3',
  //   message: 'can you help me with todays date?',
  //   sender: 'user'
  // }, {
  //   id: 'id4',
  //   message: 'sure! today date is January 3rd',
  //   sender: 'robot'
  // }])
  // const [ chatMessages, setChatMessages ] = array
  // const chatMessages = array[0]
  // const setChatMessages = array[1]
  const time = dayjs().valueOf()  
  useEffect(()=>{
    Chatbot.addResponses({
      hello: 'Good day',
      goodbye: 'Goddbye',
      uniqueID : function(){
        return `Sure, here's a unique ID: ${crypto.randomUUID()}`
      }
    })
  },[])
  useEffect(()=>{
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])
  return (
    <div className='app-container'>
      {chatMessages.length===0 && 
        <p className="welcome-message"
          >Welcome to chatbot project. Type a message in the textbox below
          <br/>
          {dayjs(time).format('HH:mm')}
        </p>
      }
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
