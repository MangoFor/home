import React from 'react';
import CommentItem from './CommentItem';

const CommentList = React.createClass({
    render:function(){
        return(
            <div>
                <CommentInput />
                <ComentList />
            </div>
        )
    }
})

module.exports = CommentList;
