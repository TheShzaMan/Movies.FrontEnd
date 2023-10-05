const MovieInfo = ({ movieObj }) => {
	return (
		<div>
			<h4>{movieObj.title}</h4>
			<div className="flex-item">
				<div>
					<span>Running Time</span>
					<span>{movieObj.runningTime}</span>
				</div>
				<div>
					<span>Genre</span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
