import React from "react";

export const Messages = () => {
    const messages: Message[] = [
    {
        from: 'Wolverine',
        content: 'Hey Mags, heard you tried to bend a spoon with your mind again. You need a hand with that?',
        date: '2023-09-20 10:15 AM'
    },
    {
        from: 'Magneto',
        content: 'Very funny, Logan. At least I don\'t need metal claws to pick my teeth.',
        date: '2023-09-20 10:17 AM'
    },
    {
        from: 'Wolverine',
        content: 'Touché, old man. But I bet you still can\'t beat me at a game of chess.',
        date: '2023-09-20 10:20 AM'
    },
    {
        from: 'Magneto',
        content: 'Chess? How pedestrian. I prefer a game of "Move All the Metal Objects Away From Wolverine."',
        date: '2023-09-20 10:22 AM'
    },
    {
        from: 'Wolverine',
        content: 'Haha, nice try, metalhead. But I\'ve got my adamantium skeleton to keep me company.',
        date: '2023-09-20 10:25 AM'
    },
    {
        from: 'Magneto',
        content: 'True, but it doesn\'t help you with fashion choices. Those sideburns, really, Logan?',
        date: '2023-09-20 10:27 AM'
    },
    {
        from: 'Wolverine',
        content: 'What can I say? They help me channel my inner bad boy.',
        date: '2023-09-20 10:30 AM'
    },
    {
        from: 'Magneto',
        content: 'Speaking of bad boys, have you seen what Deadpool\'s up to lately?',
        date: '2023-09-20 10:32 AM'
    },
    {
        from: 'Wolverine',
        content: 'Oh, don\'t get me started on that guy. He makes me look like a choirboy.',
        date: '2023-09-20 10:35 AM'
    },
    {
        from: 'Magneto',
        content: 'Agreed, Logan. Let\'s team up and take him down. It\'s the only way to save our reputation.',
        date: '2023-09-20 10:37 AM'
    }
  ];
  return (
    <>
      <table>
        {messages.map((messages: Message) => 
          <React.Fragment key={messages.date}>
            <tr>{messages.from}</tr> 
            <tr>{messages.content}</tr> 
            <tr>{messages.date}</tr>
          </React.Fragment>)}
      </table>
    </>
  )
  interface Message{
    from: string,
    content: string,
    date: string
  }
}