import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import {ListGroup,ListGroupItem} from 'reactstrap'

export default function Repos({repo_url}) {
    const [repos,setRepos] = useState([])
    console.log(repo_url)
    const fetchRepos = async () => {
        const {data} = await Axios.get(repo_url)
        setRepos(data)
    }

    useEffect( () => {
        fetchRepos()
    },[repo_url])

  return (
    <ListGroup>
        {
            repos.map(repo=>(
                <ListGroupItem key={repo.id}>
                    <div className='text-primary'>{repo.name}</div>
                    <div className='text-secondary'>{repo.language}</div>
                    <div className='text-info'>{repo.description}</div>
                </ListGroupItem>
            ))
        }
    </ListGroup>
  )
}
