import React from 'react'
import {Card,CardBody} from "reactstrap"

export default function UserCard({user}) {



  return (
    
    <Card className='text-center mt-1 mb-5' style={{height:'10em'}}>
          <img src={user.avatar_url} className="img-thumbnail"/>
        <CardBody>
            <div className = "text-primary">{user.name}</div>
            <div className = "text-primary">{user.location}</div>
            <div className = "text-primary">{user.bio}</div>
            <div className = "text-primary">Available for Hire{user.hireable ? 'YES':'NO'}</div>
            <div className = "text-primary">Followers{user.followers}</div>
            <div className = "text-primary">Blog :- {user.blog}</div>
        </CardBody>
    </Card>
  )
}
