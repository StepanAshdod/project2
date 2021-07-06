import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import Video from '../../../video/PromotionalVideo.mp4';

class VideoApp extends Component {
    player = {}
    state = {
        video: {
            src: {Video},
            poster: "Video"
        }
    }
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
    onVideoEnd(){
        console.log("Video ended");
    }
    render() {
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={Video}
                    poster={this.state.video.poster}
                    width="650"
                    height="350"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
            </div>
        );
    }
}
export default VideoApp;