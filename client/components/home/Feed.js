import { BsStars } from 'react-icons/bs';
import TweetBox from './TweetBox'
import Post from '../Post';


const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const tweets = [
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-06-01T12:00:00.000Z',
    },
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-06-01T12:00:00.000Z',
    },
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-06-01T12:00:00.000Z',
    },
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-06-01T12:00:00.000Z',
    },
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-06-01T12:00:00.000Z',
    },

]

function Feed(){
    return(
        <div className={`${style.wrapper} no-scrollbar`}>
            <div className={style.header}>
                <div className={style.headerTitle}>
                    Home
                </div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet,index) =>(
                <Post
                  key={index}
                  displayName={tweet.displayName}
                  userName={tweet.userName}
                  avatar={tweet.avatar}
                  text={tweet.text}
                  isProfileImageNft={tweet.isProfileImageNft}
                  timestamp={tweet.timestamp}

                />
            ))

            }

        </div>
    )
}


export default Feed