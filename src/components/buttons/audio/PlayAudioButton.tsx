import { useEffect, useRef, useState } from "react";
import styles from "./PlayAudioButton.module.css";

export interface PlayAudioButtonProps {
  audioLinks: string[];
}

const PlayAudioButton: React.FC<PlayAudioButtonProps> = ({ audioLinks }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.code === "Space") {
        setIsPlaying((currentIsPlaying) => {
          return !currentIsPlaying;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current !== null) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current !== null) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <button
        className={styles.container}
        onKeyDown={(event) => {
          if (event.code === "space") {
            event.stopPropagation();
          }
        }}
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={75} height={75}>
          <g fill="#A445ED" fillRule="evenodd">
            <circle
              className={styles.fillCircle}
              cx={37.5}
              cy={37.5}
              r={37.5}
              opacity={0.25}
            />
            <path className={styles.fillPath} d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </button>

      <audio
        ref={audioRef}
        src={audioLinks[0]}
        onEnded={() => {
          setIsPlaying(false);
        }}
      />
    </>
  );
};

export default PlayAudioButton;
