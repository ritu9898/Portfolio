import './App.css';
import React from 'react';

const query = `
    {
      user(username: "rutikwankhade") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;


class Blog extends React.Component { 
  state = {
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    const ApiResponse = await response.json();
    this.setState({ posts: ApiResponse.data.user.publication.posts});

    console.log(ApiResponse.data.user.publication.posts); 
  };

  render () {
    return(
      <div>
        <div className="container blog" id="blog"> 
        {this.state.posts.map((post, index) => (
          <div className="row">
            <div className="col-md-12">
            <a key={index} href={`https://blog.rutikwankhade.dev/${post.slug}`} target="_blank"><h2 className="text-secondary">{post.title}</h2></a>      
              <a key={index} href={`https://blog.rutikwankhade.dev/${post.slug}`} target="_blank"><img src={post.coverImage} class="card-img-top side-images" alt="..." /></a>    
              <p>{post.brief}</p>
            </div>
            <hr />
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Blog;
