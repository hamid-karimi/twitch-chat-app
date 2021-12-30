import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <div className="video-container">
            <ReactPlayer
                url={"https://www.youtube.com/watch?v=ySDX02WD0og"}
                controls={false}
                playing={true}
                width={'100%'}
                height={'100%'}
            />
        </div>
    )
}

export default Video