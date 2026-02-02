import { useState} from 'react'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'
import './ChatInput.css'
import LoadingImage from '../assets/loading-spinner.gif'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  function onKeyDown(event){
    event.key ==='Enter' && sendMessage()
    event.key ==='Escape' && setInputText('')
  }

  function clearMessages() {
    setChatMessages([])
  }

  async function sendMessage() {
    if(isLoading || inputText===''){
      return
    }
    setIsLoading(true)
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]

    setChatMessages(newChatMessages)  
    
    setInputText('')

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingImage} alt="" className="loading-image"/>,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])  
    
    const response = await Chatbot.getResponseAsync(inputText)
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        time: dayjs().valueOf(),
        id: crypto.randomUUID()
      }
    ])  
    setIsLoading(false)
  }

  return (
    <div className='chat-input-container'>
      <input 
        placeholder='Send a Message to Chatbot' 
        size="30"
        onChange={saveInputText}
        onKeyDown={onKeyDown}
        value={inputText}
        className='chat-input'
      />
      <button 
        onClick={sendMessage}
        className='send-button'
      >Send</button>
      <button
        onClick={clearMessages}
        className='clear-button'
      >Clear</button>
    </div>
  )
}