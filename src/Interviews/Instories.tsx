// Реализовать trim клипов

import "./styles.css";

const tracks = [
  {
    id: "track-1",
    clips: [
      { id: "clip-1", start: 100, duration: 200 },
      { id: "clip-2", start: 350, duration: 150 },
    ],
  },
  {
    id: "track-2",
    clips: [{ id: "clip-3", start: 50, duration: 120 }],
  },
];

const TIMELINE = 1000;

export default function App() {
    const [clip, setClip] = useState({ id: "clip-1", start: 100, duration: 200 })
    
    
    
  return (
    <div className="timeline">
      {tracks.map((track) => (
        <div key={track.id} className="track">
          {track.clips.map((clip) => (
            <div
              key={clip.id}
              className="clip"
              style={{
                left: `${clip.start}px`,
                width: `${clip.duration}px`,
              }}
            >
                <div></div>
                    {clip.id}
                <div></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
