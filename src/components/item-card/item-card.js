//import styles
import './item-card.css'

const Item = ({ data }) => {

  const handleClickImg = (link) => {
    window.open(link, '_blank')
  }

  const handleClickUser = (link) => {
    window.open(link, '_blank')
  }

  const handleErrorCoverImg = (e) => {
    e.target.src = './img/placeholder-image.png'
  }

  const handleErrorUserImg = (e) => {
    e.target.src = './img/placeholder-avatar.png'
  }


  return (
    <div className='container'>
      {data.map((treffer) => {
        return (
          <div className='item' key={treffer.id}>

            <img
              src={treffer.webformatURL}
              alt="preview"
              onClick={() => handleClickImg(treffer.pageURL)}
              onError={handleErrorCoverImg}
              className='img-preview'
            />

            <div className='table-wrapper'>
            <div className='row'>
                <span className='title'>Views </span>
                <span className='value'>{treffer.views}</span>
              </div>
              <div className='row'>
                <span className='title'>Likes </span>
                <span className='value'>{treffer.likes}</span>
              </div>
              <div className='row'>
                <span className='title'>Comments </span>
                <span className='value'>{treffer.comments}</span>
              </div>
              <div className='row'>
                <span className='title'>Downloads </span>
                <span className='value'>{treffer.downloads}</span>
              </div>
            </div>

            <div className='user'>
              <div className='user-img-container'>
                <img
                  className='user-img'
                  alt='userphoto'
                  src={treffer.userImageURL}
                  onClick={() => handleClickUser(`https://pixabay.com/users/${treffer.user}-${treffer.user_id}`)}
                  onError={handleErrorUserImg}
                />
              </div>
              <div className='user-name'>
                Uploaded by <button 
                              className='user-link'
                              onClick={() => handleClickUser(`https://pixabay.com/users/${treffer.user}-${treffer.user_id}`)} >{treffer.user}
                            </button>
              </div>
            </div>

            <div className='tags'>
              <h3>Tags</h3>
              {treffer.tags.split(',')
                .map(tag => (
                  <span 
                    className='tag'>{tag.trim()}
                  </span>
                ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Item;