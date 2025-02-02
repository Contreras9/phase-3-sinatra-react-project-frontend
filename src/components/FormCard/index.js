import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';



function FormCard({ movieId }) {
  const navigate = useNavigate();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`localhost:3000/movies/${movieId}`)
      .then(response => {
        setMovie(response.data);
      });
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = (event.target).email.value;
    const score = (event.target).score.value;
    //console.log(email, score);

    const config = {
      baseURL: "localhost",
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score
      }
    }

    axios(config).then(response => {
      console.log(response.data);
      navigate("/");
    });
  }

  return (
    <div className="dsmovie-form-container">
      <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Username or email:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Rating:</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">Submit</button>
          </div>
        </form >
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancel</button>
        </Link>
      </div >
    </div >
  )
}

export default FormCard;