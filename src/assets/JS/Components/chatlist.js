// 채팅 방 리스트 component

// import hoodie
import Hoodie from '../../../../.hoodie/client';

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
const data = [];
class Data {
  constructor(no, title, desc, createdAt) {
    this.no = no,
    this.title = title,
    this.desc = desc,
    this.createdAt = this.timeRender(createdAt)
  }
  timeRender(date) {
    let rendered_date = date;
    const store_date = date.split('T');
    console.log(store_date[1]);
    this.toLocalTime(date);
    return rendered_date;
  }
  // Hoodie server time is set to gmt 
  // need to convert to Seoul local time
  toLocalTime(date) {
    const store_date = date.split('T');
    let time = store_date[1].slice(0, 2);
    let restoftime = store_date[1].substring(2, store_date[1].length);
    time = +time;
  
    if (time > 15) { 
      time = time + 9 - 24;
    } else {
      time = time + 9;
    }
    time = time + restoftime;
    console.log('rendered', time);
  }
}

const list = Hoodie
  .store
  .withIdPrefix("room-")
  .findAll()
  .then(items => {
    let count = 1;
    for (let item of items) {
      data.push(new Data(count++, item.title, item.desc, item.hoodie.createdAt));
    }    
  });

console.log('data', data);

export default chatlist;