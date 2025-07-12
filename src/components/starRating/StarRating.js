export default function StarRating(props) {
  const { maxNoOfStarts, starsFilled, onClick, onMouseEnter, onMouseLeave } =
    props;

  const starsArray = [];
  let currentStarsFilled = starsFilled;

  for (let i = 0; i < maxNoOfStarts; i++) {
    currentStarsFilled--;
    starsArray.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={
          currentStarsFilled >= 0 ? "star-icon star-icon-filled" : "star-icon"
        }
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        onClick={() => onClick(i)}
        onMouseEnter={() => onMouseEnter(i)}
        onMouseLeave={onMouseLeave}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    );
  }

  return <div>{starsArray.map((item) => item)}</div>;
}
