// 채팅 방 리스트 component

const chatlist = () => `
  <main class="roomlist"> 
    <ul class="roomlist-wrapper">
      <li class="roomlist-list">
        <a class="selectarea">
          <h2 class="roomlist-title">Title</h2>
          <div class="info">
            <div class="info-details">
              <p class="info-username">Username</p>
              <small class="info-posttime">
                <time datetime="2018-07-04T00:00:00Z">5secs
                  <span class="a11y-hidden">posted 5 seconds ago</span>
                </time>
              </small>
            </div>
            <div class="info-members">
              <strong class="members__is-active">3
                <span class="a11y-hidden">active</span>
              </strong>120
              <span class="a11y-hidden">members</span>
            </div>
          </div>
          <p class="info-desc">
            This is a brief description of a chat room
            blablablablablablablablablablablablablablablablablabla
          </p>
        </a>
      </li>
    </ul> 
  </main>
`

export default chatlist;