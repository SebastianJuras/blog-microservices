const CommentList = ({ comments }) => {

    const renderedComments = comments.map(comment => {
        const statusMessages = {
            'approved': comment.content,
            'pending': 'This comment is awaiting moderation',
            'rejected': 'This comment has been rejected'
        };
        let content = statusMessages[comment.status]

        return <li key={comment.id}>{content}</li>;
    })

    return <ul>
        {renderedComments}
    </ul>
}

export default CommentList;