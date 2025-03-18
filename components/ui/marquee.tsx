export default function Marquee({
  items,
  speed = 10, // Default speed
  pauseOnHover = false, // Default behavior
}: {
  items: string[];
  speed?: number; // Speed in seconds
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={`relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-bw text-text font-base ${
        pauseOnHover ? 'group' : ''
      }`}
    >
      <div
        className={`animate-marquee whitespace-nowrap py-12`}
        style={{
          animationDuration: `${speed}s`, // Set animation speed
          animationPlayState: pauseOnHover ? 'running' : undefined,
        }}
      >
        {items.map((item) => (
          <span key={item} className="mx-4 text-4xl">
            {item}
          </span>
        ))}
      </div>

      <div
        className={`absolute top-0 animate-marquee2 whitespace-nowrap py-12`}
        style={{
          animationDuration: `${speed}s`, // Set animation speed
          animationPlayState: pauseOnHover ? 'running' : undefined,
        }}
      >
        {items.map((item) => (
          <span key={item} className="mx-4 text-4xl">
            {item}
          </span>
        ))}
      </div>

      {/* Add hover behavior */}
      {pauseOnHover && (
        <style>
          {`
            .group:hover .animate-marquee,
            .group:hover .animate-marquee2 {
              animation-play-state: paused;
            }
          `}
        </style>
      )}
    </div>
  );
}