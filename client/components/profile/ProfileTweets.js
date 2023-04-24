import { useEffect, useContext, useState } from 'react'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
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
    timestamp: '2022-06-01T12:00:00.000Z',
    },
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-05-01T12:00:00.000Z',
    },
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-04-01T12:00:00.000Z',
    },
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-05-01T12:00:00.000Z',
    },
    {
    displayName: 'PkAgrawal',
    userName: '0xnijn34nijn3nuu3nnv3o3n34nno4fonom4434fr4',
    avatar: 'https://avatars.githubusercontent.com/u/43396684?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-11-01T12:00:00.000Z',
    },

]
const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
        {tweets?.map((tweet,index) => (
            <Post
              key={index}
              displayName="Pk Agrawal"
              userName={`${tweet.userName.slice(0, 4)} ...${tweet.userName.slice(-4)}`}
              text={tweet.text}
              avatar={tweet.avatar}
              isProfileImageNft={tweet.isProfileImageNft}
              timestamp={tweet.timestamp}
            />
        ))}
    </div>
  )
}

export default ProfileTweets