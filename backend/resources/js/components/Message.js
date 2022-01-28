import MessageItem from "./MessageItem";


function Message({messages}) {


    const renderedMessages =  messages.map((message) => {
        return <MessageItem  message={message} />
       
    });


    return (
     
        <div>{renderedMessages}</div>

            
    );
}

export default Message;