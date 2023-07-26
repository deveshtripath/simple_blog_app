import React from 'react'
import { Link } from 'react-router-dom'
import {formatISO9075} from "date-fns";

const Post = ({_id,title,summary,cover,createdAt,author}) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={process.env.REACT_APP_BASE_URL+'/'+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2 style={{textTransform:"uppercase"}}>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary"><b>Short Intro :-</b> {summary}</p>
      </div>
    </div>
  )
}

export default Post