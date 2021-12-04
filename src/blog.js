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
            contentMarkdown
          }
        }
      }
    }
  `;


class Blog extends React.Component { 
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.addMore = this.addMore.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  addMore(e) {
    console.log(e);
    let data = document.getElementById(e.slug);
    data.classList.remove('col-md-8');
    data.classList.add('col-md-12');
    data.innerHTML = e.contentMarkdown;

    let img = data.previousElementSibling;
    img.classList.remove('col-md-4');
    img.classList.add('col-md-12');
    img.innerHTML =  '<a key={index} href={`https:/ritukapadia.hashnode.dev/${e.slug}`} target="_blank"><img src='+e.coverImage+' class="blog-images" alt="..." /></a>'
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
  };

  render () {
    return(
      <div>
        <div className="container blog" id="blog"> 
        {this.state.posts.map((post, index) => (
          <div className="row">
            <div className="col-md-12">
              <a key={index} href={`https://ritukapadia.hashnode.dev/${post.slug}`} target="_blank">
                <h2 className="text-grey">{post.title}</h2>
              </a>      
              <div className="row">
                <div className="col-md-4" id="blog-img">
                  <a key={index} href={`https:/ritukapadia.hashnode.dev/${post.slug}`} target="_blank">
                    <img src={post.coverImage} class="blog-images" alt="..." />
                  </a>    
                </div>
                <div className="col-md-8" id={post.slug}>
                  <p>{post.brief}<span><a className="read-more" onClick={(e) => this.addMore(post)}>Read more...</a></span></p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Blog;
