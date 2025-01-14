import { ReactComponent as StarFull } from '../../assets/img/star_full.svg'
import { ReactComponent as StarHalf } from '../../assets/img/star_half.svg'
import { ReactComponent as StarEmpty } from '../../assets/img/star_empty.svg'

import './styles.css';


// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({ fill }) {
  if (fill === 0) {
    return <StarEmpty />
  }
  else if (fill === 1) {
    return <StarFull />
  }
  else {
    return <StarHalf />
  }
}
// TODO add click functionality here?
function MovieStars({ score }) {
  const stars = score / 20;
  const fills = getFills(stars);
  return (
    <div className="dsmovie-stars-container">
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />

    </div>
  )
}

export default MovieStars;