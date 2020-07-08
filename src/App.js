import React, { useEffect, useRef } from "react";
import "./styles.css";
import videojs from "video.js";
import vjsqs from "@silvermine/videojs-quality-selector";
import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";

export default function App() {
  const playerRef = useRef();
  const videoJsOptions = {
    // autoplay: false,
    // playbackRates: [0.5, 1, 1.25, 1.5, 2],
    // width: 720,
    // height: 300,
    controls: true,
    // fill: true,
    controlBar: {
      children: [
        "playToggle",
        "progressControl",
        "volumePanel",
        "qualitySelector",
        "fullscreenToggle"
      ]
    },
    sources: [
      {
        src:
          "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
        type: "application/x-mpegURL",
        label: "HDd",
        res: 720
      },
      {
        src: "https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",
        type: "application/x-mpegURL",
        label: "HD2",
        res: 720
      }
    ]
  };
  useEffect(() => {
    vjsqs(videojs);
    const player = videojs(playerRef.current, videoJsOptions, () => {
      console.log(player);
      player.on("ended", function() {
        alert("ended");
      });
      // player.controlBar.addChild("QualitySelector");
    });
    return () => {
      player.dispose();
    };
  }, []);
  return (
    <>
      <div data-vjs-player>
        <video
          ref={playerRef}
          className="video-js vjs-4-3 vjs-big-play-centered"
        />
      </div>
    </>
  );
}
