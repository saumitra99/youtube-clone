import React from 'react'
import VideoCard from './VideoCard/VideoCard'
import "./RecommendedVideos.css"
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended Videos</h2>
            <div className="recommendedVideos__video">
                <VideoCard
                    title="Saumitra's CV"
                    views="5.9B Views"
                    timestamp="1 day ago"
                    channelImage="https://media-exp1.licdn.com/dms/image/C5103AQE_vYQTl3KRfg/profile-displayphoto-shrink_800_800/0/1566573054260?e=1633564800&v=beta&t=yEVGQGqo70Kd8faNfeGzt3xBBXjCgi8WdblEXQkMPwY"
                    channel="100friends"
                    image="https://static.skillshare.com/uploads/video/thumbnails/60a6c51b890c05477664611ba4818e7f/original"
                />
                <VideoCard
                    title="Learn to make thumbnails"
                    views="2.2M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="makeit"
                    image="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg"
                />
                <VideoCard
                    title="Gaming thumbnail"
                    views="1M Views"
                    timestamp="1 week ago"
                    channelImage=""
                    channel="pro games"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsT0DNOtBcRwlpF45_maV76kieZOq-AY1Fg&usqp=CAU"
                />
                <VideoCard
                    title="Minecraft gameplay"
                    views="907k Views"
                    timestamp="1 day ago"
                    channelImage=""
                    channel="Minecraft play"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TpnAhREShIRUhTIbqOh0YvDwG4z6Ym-XbA&usqp=CAU"
                />
                <VideoCard
                    title="Tech Talk"
                    views="2.2M Views"
                    timestamp="3 years ago"
                    channelImage=""
                    channel="Podcast"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bdqIqgO_CiLJJW-L5ZdjA48Jj2NiAK-hGQ&usqp=CAU"
                />
                <VideoCard
                    title="Apex Legends"
                    views="29M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="name1"
                    image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5a2fc776739865.5c732181de3fc.jpg"
                />
                <VideoCard
                    title="Learn to make thumbnails"
                    views="2.2M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="name1"
                    image="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg"
                />
                <VideoCard
                    title="Learn to make thumbnails"
                    views="2.2M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="name1"
                    image="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg"
                />
                <VideoCard
                    title="Learn to make thumbnails"
                    views="2.2M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="name1"
                    image="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg"
                />

            </div>
        </div>
    )
}

export default RecommendedVideos
