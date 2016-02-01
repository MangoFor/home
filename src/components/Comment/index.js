import React from 'react';
import CommentList from './CommentList';
import CommentItem from './CommentItem';

const Comment = React.createClass({
    render:function(){
        return(
            <div>
                <CommentInput />
                <ComentList />
            </div>
        )
    }
})

module.exports = Comment;
