import './App.css';
import React from 'react';

const query = `
    {
      user(username: "ritu792") {
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

    // console.log(ApiResponse.data.user.publication.posts[0].brief); 
  };

  render () {
    return(
      <div>
        <div className="container blog" id="blog"> 
        {this.state.posts.map((post, index) => (
          <div className="row">
            <div className="col-md-12">
              <a key={index} href={`https://ritukapadia.hashnode.dev/${post.slug}`} target="_blank">
                <h2 className="text-secondary">{post.title}</h2>
              </a>      
              <div className="row">
                <div className="col-md-4">
                  <a key={index} href={`https:/ritukapadia.hashnode.dev/${post.slug}`} target="_blank">
                    <img src={post.coverImage} class="card-img-top blog-images" alt="..." />
                  </a>    
                </div>
                <div className="col-md-8">
                  <p>{post.brief}</p>
                </div>
              </div>
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
