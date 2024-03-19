import { useContext, useEffect, useState } from "react";
import { chatsData } from '../ChatData'
import { SelectedUserContext } from '../contexts/SelectedUserContext'

export default function useChatLoad() {
  const { user, setUser } = useContext(SelectedUserContext)
  const [chats, setChats] = useState([])

  useEffect(() => {
    const updatedChats = chatsData.filter(chatDatum => chatDatum.senderId === user.id || chatDatum.receiverId === user.id).sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
    setChats(updatedChats)
  }, [user])

  return chats
}