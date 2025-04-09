const users = require('./users');
const posts =require('../Post/posts');
const comments =require('../Comment/comments');

function getUserSummary(user_id)
{
    const user=users.find(u=> u.id===user_id);
    if(!user)
    {return null;

    }

    const PostCount=posts.filter(p=>p.authorId===user_id).length;
    const CommentCount=comments.filter(c=>c.userId===user_id).length;

    return {
        id: user.id, 
        userName: user.username,
        eMail:user.email,
        fullName:user.fullName,
        Number_of_post:PostCount,
        Number_of_comments:CommentCount
    };

    
}
module.exports={getUserSummary};